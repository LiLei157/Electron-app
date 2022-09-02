import {createRouter,createWebHashHistory} from 'vue-router'
import LeaderPage from '../views/LeaderPage'

const routes = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:LeaderPage
        },
        {
            path:'/index',
            component:()=> import('../views/Index/Index')
        }
    ]
})

export default routes