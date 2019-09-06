const state = {
    counter: 0
}

const getters = {
    doubleCounter: state => {
        return state.counter * 2
    // with this getter in place we need to acces the getter in our components
    },
    stringCounter: state => {
        return state.counter + ' Clicks '
    }
}

const mutations = {
    increment: (state, payload) => {
        state.counter += payload
    },
    decrement: (state, payload) => {
        state.counter -= payload
    }
}

const actions = {
    increment: ({ commit }, payload) => {
        commit('increment', payload)
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload)
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
        commit('increment', payload.by)
        },payload.duration)
    },
    asyncDecrement: ({ commit }, payload) => {
        setTimeout(() => {
        commit('decrement', payload.by)
        },payload.duration)
    },
}
// to export all the constant we have already created
export default {
    state: state,
    mutations,
    actions,
    getters
}