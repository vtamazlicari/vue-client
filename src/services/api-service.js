import Axios from 'axios';

export default {
    getAll(resource) {
        return Axios.get(resource);
    },

    get(resource, id) {
        return Axios.get(`${resource}/${id}`);
    },

    create(resource, data) {
        return Axios.post(resource, data);
    },

    update(resource, id, data) {
        return Axios.put(`${resource}/${id}`, data);
    },

    delete(resource, id) {
        return Axios.delete(`${resource}/${id}`);
    }
};
