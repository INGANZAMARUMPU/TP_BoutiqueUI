import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		logged_in: false,
		achats: [
		    {
		        "id": 2,
		        "product": "Ibiharage",
		        "product_id": 1,
		        "prix": 1500,
		        "qtt": 10,
		        "date": "2020-11-04"
		    },
		    {
		        "id": 3,
		        "product": "Ibiharage",
		        "product_id": 1,
		        "prix": 1500,
		        "qtt": 10,
		        "date": "2020-11-04"
		    }
		],
		ventes: [
		    {
		        "id": 1,
		        "product": "Ibiharage",
		        "product_id": 1,
		        "prix": 1800,
		        "qtt": 5,
		        "date": "2020-11-04"
		    }
		],
		total_achat : 0,
		total_vente : 0
	},
	mutations: {},
	actions: {},
	// getters:{
 //        loggedIn(state){
 //            return state.logged_in;
 //        }
 //    }
})