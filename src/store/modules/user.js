import API from '../../services/api-service'

const REGISTER_API = 'registration'

export default {
    namespaced: true,

    state: {
        currentUser: null,
    },

    actions: {
        setUser ({ commit }, payload) {
            commit('SET_USER', payload);
        },

        createUser (data) {
            return API.create(REGISTER_API, data)
        },

        clearCurrentUser ({ commit }) {
            commit('CLEAR_CURRENT_USER')
        },

    },

    getters: {
        currentUser: state => state.currentUser
    },

    mutations: {
        SET_USER (state, user) {
            state.currentUser = user
        },

        CLEAR_CURRENT_USER (state) {
            state.currentUser = null
        },
    }
}
