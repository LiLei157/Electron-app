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
        },
        {
            path:'/search',
            component:()=> import('../views/Search/VideoSearch')
        }
    ]
})

export default routes