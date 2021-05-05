import Vuex from "vuex";
import Vue from "vue";
import api from "@/services/api";

Vue.use(Vuex);

const estado = {
  token: null,
  usuario: {}
};
const mutations = {
  DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
    (state.usuario = usuario), (state.token = token);
  },
  DESLOGAR_USUARIO(state) {
    state.token = null;
    state.usuario = {};
  }
};
const actions = {
  efetuarLogin({ commit }, usuario) {
    return new Promise((resolve, reject) => {
      api
        .post("auth/login", usuario)
        .then(response => {
          const { access_token, user } = response.data;
          commit("DEFINIR_USUARIO_LOGADO", {
            token: access_token,
            usuario: user
          });
          resolve(response.data);
        })
        .catch(err => {
          console.log("efetuarLogin -> err", err);
          reject(err);
        });
    });
  }
};

export default new Vuex.Store({
  state: estado,
  mutations,
  actions
});
