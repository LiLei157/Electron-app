import axios from 'axios'
import qs from 'qs'

const request = {
    getRequest:(url,params=null)=>{
        return axios({
            url:url,
            method:'get',
            params:qs.stringify(params)
        })
    }    
}

export default request