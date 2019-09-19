import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from '../actions/user'
import auth from '../../api/auth'
import Vue from 'vue'
import { AUTH_LOGOUT } from '../actions/auth'

const state = {
    status: '',
    name: 'Anna'
};

const getters = {
  getName: state => state.name,
  isProfileLoaded: state => !!state.name,
};

const actions = {
  [USER_REQUEST]: ({commit, dispatch}) => {
    commit(USER_REQUEST);
    auth.user().then(resp => {
        commit(USER_SUCCESS, resp)
      }).catch(response => {
        commit(USER_ERROR);
        // if resp is unauthorized, logout, to
        dispatch(AUTH_LOGOUT)
      })
  },
};

const mutations = {
  [USER_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [USER_SUCCESS]: (state, resp) => {
    state.status = 'success';
    Vue.set(state, 'name', resp)
  },
  [USER_ERROR]: (state) => {
    state.status = 'error'
  },
  [AUTH_LOGOUT]: (state) => {
    state.name = undefined
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}
