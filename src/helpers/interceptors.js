import axios from 'axios';
import Vue from 'vue'

import store from '../store/store'

const showMessage = (text) => {
    Vue.toasted.global.error(text)
}

export default {
    response: () => {
        axios.interceptors.response.use(function(response) {
            return response;
        }, function(err) {
            if (err.response) {
                showMessage(`Error response with status code ${err.response.status}: ${err.response.data}`)
            }
            return Promise.reject(err);
        });
    },

    request: () => {
        axios.interceptors.request.use(function (config) {
            const token = store.getters['auth/getToken'];
            if (token) {
                config.headers.Authorization = token;
            }
            return config;
        }, function (err) {
            return Promise.reject(err);
        });
    }
}
