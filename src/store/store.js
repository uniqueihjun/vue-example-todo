import Vue from 'vue'
import Vuex from 'vuex'

import todoApp from './modules/todoApp'

Vue.use(Vuex);

export const store = new Vuex.Store({
/* eslint-disable no-console */
    modules : {
        todoApp : todoApp
    }
});