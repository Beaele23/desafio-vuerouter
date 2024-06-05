<template lang="">
  <!-- cartas -->

        <div class="card h-100 text-principal">
          <img :src="plato.imagen" class="card-img-top" alt="colaciones" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{ plato.nombre}}</h5>
            <p class="card-text">
              {{plato.descripcion}}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{plato.precio}}</li>
            <li class="list-group-item">{{plato.cantidad}}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link text-principal">Ver más</a>
            <a href="#" class="card-link text-principal">Comprar</a>
          </div>
        </div>
  
</template>
<script>
export default {
  name: "Card",
  props:{
    plato: Object,
  }
}
</script>
<style scoped>
  
</style>