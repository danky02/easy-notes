import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueFeather from 'vue-feather';

import '@/assets/css/tailwind.css'



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component(VueFeather.name, VueFeather);

app.mount('#app')
