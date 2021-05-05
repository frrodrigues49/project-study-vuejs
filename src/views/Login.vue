<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="efetuarLogin">     
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="usuario.email">
      </div>
      <div class="form-group">
        <label for="nome">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha">
      </div>
      <p class="alert alert-danger" v-if="mensagemErro">{{ mensagemErro }}</p>
      <button class="btn btn-primary brn-block" type="submit">Salvar</button>
      <router-link to="{ name: 'novo.usuario' }">
        Não possui um cadastro, cadastre-se aqui!
      </router-link>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        usuario: {         
          email: 'email@teste.com',
          senha: '123456',
        },
        mensagemErro: ''
      }
    },
    methods: {
      async efetuarLogin () {

        this.$store.dispatch('efetuarLogin', this.usuario)
        .then(() => {
          this.$router.push({ name: 'gerentes' })
          this.mensagemErro = ''
        })
        .catch(err => {
          if (err.request.status === 401){
            this.mensagemErro = "Login ou senha invalido"
          }
        })
        // try {
        //   const response = await this.$api.post('auth/login', this.usuario);          
        //   const { access_token, user } = response.data;
        //   // localStorage.setItem('token', access_token )
        //   // this.$store.state.token = access_token;
        //   // this.$store.state.usuario = user;
        //   this.$store.commit('DEFINIR_USUARIO_LOGADO', {
        //     token: access_token,
        //     usuario: user
        //   })
        //   this.$router.push({ name: 'gerentes' })

        // } catch (error) {
        //   console.log("efetuarLogin -> error", error)         
        // }
        
      }
    }
  }
</script>