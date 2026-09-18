import '@/assets/css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ui from '@nuxt/ui/vue-plugin'
import { useColorMode } from '@vueuse/core'

import App from './App.vue'
import router from './router'
const pinia = createPinia()

useColorMode().value = 'light'

const app = createApp(App).use(pinia).use(router).use(ui).mount('#app')
