import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0
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
        }
    },
    mutations: {
        increment: state => {
            state.counter++
        },
        decrement: state => {
            state.counter--
        }
    }
})