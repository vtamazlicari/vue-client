import API from '../../services/api-service'

const USERS_API = 'users'

export default {
    namespaced: true,

    state: {
        users: null,
    },

    actions: {
        setUsers ({ commit }) {
            API.getAll(USERS_API)
                .then(response => {
                    commit('SET_USERS', response.data.responsData);
                });
        },

        clearUser ({ commit }) {
            commit('CLEAR_USER')
        },
    },

    getters: {
        users: state => state.users
    },

    mutations: {
        SET_USERS (state, users) {
            state.users = users
        },

        CLEAR_USER (state, id) {
            state.users = state.users.filter(item => item.id === id);
        },
    }
}
