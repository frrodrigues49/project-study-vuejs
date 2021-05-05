<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente v-for="gerente in gerentes" :key="gerente.numero" :gerente="gerente" />
    </div>
  </div>
</template>

<script>
import Gerente from '@/components/Gerente.vue'

export default {
  components: {
    Gerente
  },
  data() {
    return {
      gerentes: []
    }
  },
  async mounted () {    
    try {
      const response = await this.$api.get('gerentes');
      this.gerentes = response.data
      
    } catch (error) {
    console.log("mounted -> error", error)
      
    }
  }
}
</script>

<style>

</style>