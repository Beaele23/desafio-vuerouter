import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () => import("../views/ContactoView.vue"),
  },

  {
    path: "/productos",
    name: "productos",
    component: () => import("../views/ProductosView.vue"),

    props: (route) => {
      return {
        platos: [
          {
            nombre: "Bebidas",
            precio: 15.99,
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            cantidad: 10,
            imagen: require("../assets/img/bebidas.jpg"),
          },
          {
            nombre: "Colaciones",
            precio: 15.99,
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            cantidad: 10,
            imagen: require("../assets/img/colaciones.jpg"),
          },
          {
            nombre: 'Desayunos',
            precio: 12.99,
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            cantidad: 20,
            imagen: require("../assets/img/desayunos.jpg"),
          },
          {
            nombre: 'Dulces',
            precio: 8.99,
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            cantidad: 15,
            imagen: require("../assets/img/dulces.jpg"),
          },
          {
            nombre: 'empanadas',
            precio: 10.99,
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            cantidad: 25,
            imagen: require("../assets/img/empanadas.jpg"),
          },
          {
            nombre: 'Verduras',
            precio: 18.99,
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            cantidad: 12,
            imagen: require("../assets/img/verduras.jpg"),
          },
          
        ],
      };
    },
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/404View.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
