import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Login from './components/Login';

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
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter: ifNotAuthenticated,
        },
    ],
})
