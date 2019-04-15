import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: { name: 'login' }
        },
        {
            path: '/login',
            name: 'login',
            component (resolve) {
                require(['@/views/Login'], resolve)
            }
        },
        {
            path: '/registration',
            name: 'registration',
            component (resolve) {
                require(['@/views/Registration'], resolve)
            }
        },
        {
            path: '/users',
            name: 'users',
            component (resolve) {
                require(['@/views/UserList'], resolve)
            }
        },
        {
            path: '*',
            redirect: { name: 'login' }
        }
    ]
});

router.beforeEach((to, from, next) => {
    store.dispatch('auth/fetchAccessToken');
    if (to.fullPath === '/users') {
        if (!store.getters['auth/getToken']) {
            next('/login');
        }
    }
    if (to.fullPath === '/login' || to.fullPath === '/registration') {
        if (store.getters['auth/getToken'] !== null) {
            next('/users');
        }
    }
    next();
});

export default router

