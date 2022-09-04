import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// 是否启用mock
let isMock = true



createApp(App).use(router).mount('#app')
