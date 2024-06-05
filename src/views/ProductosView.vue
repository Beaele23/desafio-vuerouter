<template>
    <div class="productos container protest-revolution-regular my-5 text-principal">
        <header>
            <h1 class="text-center  protest-revolution-regular my-5">Nuestros Productos</h1>
        </header>
        <main>
            <div class="row g-4">
                <div class="col-12 col-md-6 col-lg-3" v-for="(plato, index) in platos" :key="index">
                <Card :plato="plato"/>
            </div>
            </div>
            
            <div class="text-center py-5">
                <router-link class=" btn" to="/">Regresar al inicio</router-link>
            </div>
        </main>
    </div>
</template>
<script>
import Card from '@/components/Card.vue';
export default {
    name: "ProductosView",
    props: ["platos"],
    components: {
        Card,
    },
    created() {
        this.platos
    }
}
</script>
<style scoped>
.btn {
    background-color: #B7B597;
    color: white;
}

.contacto {
  min-height: 100vh;
}
</style>