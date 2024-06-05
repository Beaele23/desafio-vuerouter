import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
const app = createApp(App)

// Objeto
const datos = {
    nombre: 'Comidas buenas',
    mail: 'comidas@mail.com',
    telefono:  '1234567890'
}
app.config.globalProperties.datosContacto = datos
app.use(router).mount('#app')
