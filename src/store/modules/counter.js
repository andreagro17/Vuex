import * as types from '../types.js'

const state = {
    counter: 0
}

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return state.counter * 2
    // with this getter in place we need to acces the getter in our components
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' Clicks '
    }
}

const mutations = {
    [types.MUTATE_INCREMENT_COUNTER]: (state, payload) => {
        state.counter += payload
    },
    [types.MUTATE_DECREMENT_COUNTER]: (state, payload) => {
        state.counter -= payload
    }
}

const actions = {
    [types.COUNTER_INCREMENT]: ({ commit }, payload) => {
        commit(types.MUTATE_INCREMENT_COUNTER, payload)
    },
    [types.COUNTER_DECREMENT]: ({ commit }, payload) => {
        commit(types.MUTATE_DECREMENT_COUNTER, payload)
    },
    [types.COUNTER_INCREMENT_ASYNC]: ({commit}, payload) => {
        setTimeout(() => {
            commit(types.MUTATE_INCREMENT_COUNTER, payload.by)
        }, payload.duration)
    },
    [types.COUNTER_DECREMENT_ASYNC]: ({commit}, payload) => {
        setTimeout(() => {
            commit(types.MUTATE_DECREMENT_COUNTER, payload.by)
        }, payload.duration)
    },
}
// to export all the constant we have already created
export default {
    state: state,
    mutations,
    actions,
    getters
}