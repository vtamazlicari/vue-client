import API from './api-service'

export default {
    login(resource, data) {
        return API.create(resource, data);
    }
};
