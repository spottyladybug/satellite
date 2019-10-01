import Vue from 'vue'
import Vuex from 'vuex'
import user from 'src/store/modules/user'
import auth from 'src/store/modules/auth'
import theme from 'src/store/modules/theme'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        user,
        auth,
        theme,
    },
    strict: debug,
})
