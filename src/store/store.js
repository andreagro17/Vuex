import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter.js'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        // counter: 0, --> moved to coutner.js
        value: 0
    },
    getters,
    mutations,
    actions,
    // need to add modules to set counter.js in here.
    modules: {
        counter
    }
})