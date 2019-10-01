import { THEME, DARK } from 'src/store/actions/theme'

const state = { theme: DARK };

const getters = {
    isDarkTheme: state => state.theme,
    getTheme: state => state.theme ? 'dark' : 'light',
};

const mutations = {
    [THEME]: (state, checked) => {
        state.theme = checked
    },
};

export default {
    state,
    getters,
    mutations,
}
