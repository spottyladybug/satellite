import Repository from 'src/api/repository';

export default {
    index(resource) {
        return Repository.get(`${resource}`);
    },

    create(resource) {
        return Repository.get(`${resource}/create`);
    },

    store(resource, data) {
        return Repository.post(`${resource}/create`, data);
    },

    show(resource, id) {
        return Repository.get(`${resource}/${id}`);
    },

    edit(resource, id) {
        return Repository.get(`${resource}/${id}/edit`);
    },

    update(resource, id) {
        return Repository.put(`${resource}/${id}`); // TODO: or patch?
    },

    destroy(resource, id) {
        return Repository.delete(`${resource}/${id}`);
    },
};
