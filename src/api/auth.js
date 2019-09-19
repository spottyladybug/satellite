import Repository from './repository';

export default {
    user() {
        return Repository.get('/api/user');
    },

    login(data) {
        return Repository.post('/login', data);
    },

    logout() {
        return Repository.post('/logout');
    },

    register() {
        return Repository.post('/register');
    },
};
