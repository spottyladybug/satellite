import Vue from 'vue'
import Router from 'vue-router'
import store from 'src/store'
import Login from 'src/components/Login';
import Home from 'src/components/Home';

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
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: ifNotAuthenticated,
        },
        // {
        //     path: '/register',
        //     name: 'register',
        //     component: Register,
        //     beforeEnter: ifNotAuthenticated,
        // },
    ],
})
