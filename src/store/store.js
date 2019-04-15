import Vuex from 'vuex';
import Vue from 'vue';

import auth from './modules/auth'
import user from './modules/user'
import users from './modules/usersList'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        auth,
        user,
        users,
    },
})
