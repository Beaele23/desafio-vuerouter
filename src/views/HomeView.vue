<template>

  <div class="home">
    <h1 class="text-center protest-revolution-regular my-5"> Vista Principal</h1>
   
  
</div>
</template>

<script>
// @ is an alias to /src

import Card from "@/components/Card.vue";
export default {
  data() {
    return {
      dstosGlobales: this.datosContacto,
    };
  },
  components: {},
  created() {
    console.log(this.datosGlobales);
  },
  name: "HomeView",
  components: {},
};
</script>
<style scoped>
.home {
  min-height: 100vh;
 
}
</style>