<template>
  <div id="app">
  	<NavBar/>
  	<router-view/>
  </div>
</template>

<script>
import NavBar from "./components/navbar";
import axios from "axios";

export default {
	components:{
		NavBar,
		// "login-page": Login
	},
	mounted(){
		axios
			.get('http://127.0.0.1:8000/product/', {})
			.then((response) => {
				this.$store.state.products = response.data;
			}).catch((error) => {
				console.error(error);
			});
	}
};
</script>

<style src="./css/styles.css">

</style>
