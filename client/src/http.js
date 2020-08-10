import router from './router';
import axios from 'axios';
import {Loading,Message} from 'element-ui';
let loading;

function startLoading(){
    // options is the configuration of Loading
    loading = Loading.service({
        lock:true,
        text:'Loading ...',
        background:'rgba(0,0,0,0.7)'
    });
}

function endLoading(){
    loading.close();
}
// use token for router defender
// request dennies
axios.interceptors.request.use(config =>{
    // load animate
    startLoading();
    if(localStorage.eleToken){
        // set header
        config.headers.Authorization = localStorage.eleToken;
    }
    return config;
},err =>{
    return Promise.reject(err);
});

// response dennies
axios.interceptors.response.use(response => {
    endLoading();
    return response;
}, err => {
    endLoading();
    Message.error(err.response.data);

    const {status} = err.response;
    if(status === 401){
        Message.error("Token is expired , please reloading");
        localStorage.removeItem('eleToken');
        router.push('/login')
    }
    return Promise.reject(err);
});


export default axios;