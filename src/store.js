import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		logged_in: false,
		},
	mutations: {},
	actions: {},
	// getters:{
 //        loggedIn(state){
 //            return state.logged_in;
 //        }
 //    }
})