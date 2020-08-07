import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';


export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "/index",
        },
        {
            path: "/index",
            name: "index",
            component:Index
        },
    ],
});