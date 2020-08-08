import axios from 'axios';
import {Loading,Message} from 'element-ui';
let loading;
function startLoading(){
    // options is the configuration of Loading
    loading = Loading.service({
        lock:true,
        text:'Loading ...',
        background:'rgba(0,0,0,0.7)'
    })
}

function endLoading(){
    loading.close();
}

// request dennies
axios.interceptors.request.use(config =>{
    startLoading();
    return config;
},err =>{
    return Promise.reject(err);
})

// response dennies
axios.interceptors.response.use(config => {
    endLoading();
    return config;
}, err => {
    endLoading();
    Message.error(err.response.data)
    return Promise.reject(err);
})


export default axios;