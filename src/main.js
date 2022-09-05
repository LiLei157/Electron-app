import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import request from './axios/index'
// 是否启用mock
let isMock = true
if(isMock){
    require('./mock/index')
}
let app = createApp(App)
app.config.globalProperties.$axios = request
console.log('app.config.globalProperties.$axios: ',request)
app.use(router).mount('#app')
