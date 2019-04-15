import authAPI from '../../services/auth-service'
import { LOCAL_STORAGE_ACCESS_TOKEN_KEY } from '../../constants/constants'

const AUTH_LOGIN = 'AUTH_LOGIN'
const AUTH_LOGOUT = 'AUTH_LOGOUT'
const AUTH_ERROR = 'AUTH_LOGIN_ERROR'
const LOGIN_URL = '/login';
const REGISTER_URL = '/register';

export default {
    namespaced: true,
    state: {
        userLoggedIn: false,
        accessToken: null,
        error: null,
    },

    actions: {
        async loginUser ({ commit, dispatch }, data) {
            try {
                const response = await authAPI.login(LOGIN_URL, data)
                dispatch('setAuthData', response.data.token)
            } catch (error) {
                commit(AUTH_ERROR, error)
                throw new Error(error)
            }
        },

        logoutUser ({ commit }) {
            localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY)
            commit(AUTH_LOGOUT)
        },

        async registerUser ({ commit, dispatch }, data) {
            try {
                const response = await authAPI.login(REGISTER_URL, data.data)
                dispatch('setAuthData', response.data.token)
            } catch (error) {
                commit(AUTH_ERROR, error)
                throw new Error(error)
            }
        },

        setAuthData ({ commit }, payload) {
            let accessToken = payload

            if (accessToken) {
                localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN_KEY, accessToken)
            }

            commit(AUTH_LOGIN, { accessToken })
        },
        fetchAccessToken({ commit }) {
            const token = localStorage.getItem('accessToken')
            commit('updateAccessToken', token);
        },
    },
    getters: {
        userIsAuthenticated: state => state.accessToken !== null,
        getToken: state => state.accessToken
    },
    mutations: {
        updateAccessToken: (state, accessToken) => {
            state.accessToken = accessToken? accessToken : null;
        },
        [AUTH_LOGIN] (state, { accessToken }) {
            state.accessToken = accessToken
            state.userLoggedIn = true
        },

        [AUTH_LOGOUT] (state) {
            state.accessToken = null
            state.userLoggedIn = false
        },
        [AUTH_ERROR] (state, msg) {
            state.error = msg;
        }
     }
}
