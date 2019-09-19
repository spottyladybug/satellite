import { THEME } from '../actions/theme'

const state = { theme: 'dark' };

const getters = {
    getTheme: state => state.theme
};

const mutations = {
    [THEME]: (state, name) => {
        state.theme = name
    },
};

export default {
    state,
    getters,
    mutations,
}
