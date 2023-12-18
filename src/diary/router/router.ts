import {createRouter, createWebHashHistory} from "vue-router";
import Signin from '../Signin.vue'
import Signup from '../Signup.vue'
import Main from '../Main.vue';
import Home from "../Home.vue";

let routes = [
    {path: '/', component: Main},
    {path: '/signin', component: Signin},
    {path: '/signup', component: Signup},
    {path: '/home', component: Home}
];

export let router = createRouter({
    history: createWebHashHistory(),
    routes,
});
