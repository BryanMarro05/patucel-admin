import { createApp } from 'vue'
import App from './App.vue'
import VueApexCharts from 'vue3-apexcharts'
import router from './router'
import { createPinia } from 'pinia'
import './assets/styles/main.css'
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.component('apexchart', VueApexCharts)
app.use(router)
app.use(pinia)
app.component('Toaster', Toaster)

app.mount('#app')