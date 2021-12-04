import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Material from 'vue3-material';

import ConfigPlugin from '@/plugins/config'
import base from '@/config/config.json'
import dev from '@/config/config.dev.json'
import prod from '@/config/config.prod.json'

const app = createApp(App)

app.use(ConfigPlugin , {base, dev, prod})
   .use(Vue3Material)
   .use(store)
   .use(router)
app.mount('#app')
