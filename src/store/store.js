import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import * as getters from './getters'
import * as mutations from './mutations'

const storage = {
    fetch() {
        var arr = [];

        if (localStorage.length > 0) {
            for (let index = 0; index < localStorage.length; index++) {
                if (localStorage.key(index) !== 'loglevel:webpack-dev-server') {
                    //this.todoItems.push(localStorage.key(index));

                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(index))));
                }
            }
        }

        return arr;
    }
};

export const store = new Vuex.Store({
/* eslint-disable no-console */
    state : {
        headerText : 'Todo it!',
        todoItems : storage.fetch()
    },
    getters : getters,
    mutations : mutations
});