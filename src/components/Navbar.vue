<template lang="">
  <nav class="navbar navbar-expand-lg navbar-light sticky-top protest-revolution-regular">
    <div class="container px-4">
      <a class="navbar-brand fw-bold text-light" href="#"><img src="../assets/img/logo-footer.png" alt="logo de suricata" />SURICATA</a>
      <button class="navbar-toggler navbar-dark border-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item active">

            <!-- Integrando router-link reemplazando los <a></a> y los href por to= -->
            <!-- En la etiqueta "to" agregamos los path -->

            <router-link class="nav-link text-light fw-bold" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light fw-bold" to="/productos">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-light fw-bold" to="/contacto">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  props: {},
};
</script>
<style scoped lang="scss">
</style>