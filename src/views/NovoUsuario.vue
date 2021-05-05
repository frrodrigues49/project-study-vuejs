<template>
  <div class="container">
    <h1>Novo usuário</h1>
    <form @submit.prevent="enviarFormulario">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" v-model="usuario.nome">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="usuario.email">
      </div>
      <div class="form-group">
        <label for="nome">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha">
      </div>
      <button class="btn btn-primary" type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        usuario: {
          nome: '',
          email: '',
          senha: '',
        }
      }
    },
    methods: {
      async enviarFormulario () {
        try {
          const response = await this.$api.post('auth/register', this.usuario);
          console.log("enviarFormulario -> response", response)
          this.$router.push({ name: 'login' })
        } catch (error) {
          console.log("enviarFormulario -> error", error)          
        }
        
      }
    }
  }
</script>