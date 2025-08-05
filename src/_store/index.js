import Vue from 'vue';
import Vuex from 'vuex';
import {state} from './state';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';
import plugins from './plugins';

Vue.use(Vuex);

// Enable strict mode in development to catch state mutations outside of mutation handlers
const strict = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  strict,
  state,
  getters,
  actions,
  mutations,
  plugins,
  
  // Future modules can be added here for better organization
  modules: {
    // Example: 
    // map: mapModule,
    // filters: filtersModule,
    // projects: projectsModule
  }
});

// Hot module replacement for development
if (module.hot) {
  // Accept updates to mutations and modules
  module.hot.accept(['./mutations', './actions', './getters'], () => {
    // Require the updated modules
    const newMutations = require('./mutations').default;
    const newActions = require('./actions').default;
    const newGetters = require('./getters').default;
    
    // Hot update the store
    store.hotUpdate({
      mutations: newMutations,
      actions: newActions,
      getters: newGetters
    });
  });
}

export default store;
