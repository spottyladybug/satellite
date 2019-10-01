import Vue from 'vue'
import Router from 'vue-router'
import store from 'src/store'
import Login from 'src/pages/Login';
import Home from 'src/pages/Home';
import Satellites from 'src/pages/Satellites';

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return
    }
    next('/')
};

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/satellites',
            name: 'satellites',
            component: Satellites,
        },
        {
            path: '/searchInfo',
            name: 'searchInfo',
            component: Home,
        },
        {
            path: '/calculator',
            name: 'calculator',
            component: Home,
        },
        {
            path: '/profile',
            name: 'profile',
            component: Home,
        },
        {
            path: '/settings',
            name: 'settings',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/register',
            name: 'register',
            component: Home,
            beforeEnter: ifNotAuthenticated,
        },
    ],
})
