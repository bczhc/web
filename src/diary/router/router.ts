import {createRouter, createWebHashHistory} from "vue-router";
import Signin from '../Signin.vue'
import Signup from '../Signup.vue'

let routes = [
    {path: '/', component: Signin},
    {path: '/signup', component: Signup},
];

export let router = createRouter({
    history: createWebHashHistory(),
    routes,
});
