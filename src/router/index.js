import {createRouter,createWebHashHistory} from 'vue-router'
import LeaderPage from '../views/LeaderPage'

const routes = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            // redirect:'/',
            component:LeaderPage
        },
        // {
        //     path:''
        // }
    ]
})

export default routes