import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import Signin from '../Signin.vue'
import Signup from '../Signup.vue'
import Main from '../Main.vue';
import Home from "../Home.vue";
import Session from "../Session.vue";
import Profile from "../Profile.vue";

let routes: RouteRecordRaw[] = [
    {path: '/', component: Main},
    {path: '/signin', component: Signin},
    {path: '/signup', component: Signup},
    {path: '/home', component: Home},
    {path: '/session', component: Session},
    {path: '/profile', component: Profile},
];

export let router = createRouter({
    history: createWebHashHistory(),
    routes,
});
