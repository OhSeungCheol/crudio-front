import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

import counterStore from './modules/counterStore';
import sessionStore from './modules/sessionStore';

export default new Vuex.Store({
	modules: {
		counterStore,
		sessionStore
	},
	plugins: [createPersistedState({
        paths: ["sessionStore"]
    })]
});