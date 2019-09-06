import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        // doublecounter could be the name for the getter and doubleCounter is actually a funcion
        // where we do get the state as an argument
        // this is passed automatically by vuex when this func is executed which is also done by vuex
        doubleCounter: state => {
            return state.counter * 2
        // with this getter in place we need to acces the getter in our components
        },
        stringCounter: state => {
            return state.counter + ' Clicks '
        },
        value: state => {
            return state.value
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload
        },
        decrement: (state, payload) => {
            state.counter -= payload
        },
        updateValue: (state, payload) => {
            state.value = payload
        }
    },
    actions: {
        //increment: context => {
        //    context.commit('increment')
        //} destructuring above
        // we can pass an argument to the increment here as well
        // payload (random name)
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
        updateValue: ({commit}, payload) => {
            commit('updateValue', payload)
        }
    }
})