<template>
	<div class="background" @click="exitModal">
		<div class="body" @click.prevent.stop="">
			<div class="champ">
				<label for="name">Name</label>
				<input type="text" name="name" id="name"
					v-model="item.name">
			</div>
			<div class="champ">
				<label for="prix_achat">Prix d'achat</label>
				<input type="number" name="prix_achat" id="prix_achat"
					v-model="item.prix.prix_achat">
			</div>
			<div class="champ">
				<label for="prix_vente">Prix de vente</label>
				<input type="number" name="prix_vente" id="prix_vente"
					v-model="item.prix.prix_vente">
			</div>
			<div class="champ">
				<label for="qtt">Quantité</label>
				<input type="number" name="qtt" id="qtt"
					v-model="item.qtt">
			</div>
			<div class="champ">
				<label for="unit">Unité de mesure</label>
				<input type="text" name="unite" id="unite"
					v-model="item.unite">
			</div>
			<div class="buttons">
				<button @click.prevent.stop="save(item)">Valider</button>
				<button @click="exitModal">Annuler</button>
			</div>
		</div>
	</div>
</template>
<script>
import axios from "axios";
export default {
	props:{
		item:{
			type:Object,
			default(){
				return {
					"id": 0,
					"prix": {
					    "prix_achat": 0,
					    "prix_vente": 0,
					    "product": 1
					},
					"name": "",
					"qtt": 0,
					"unite": ""
			    }
		    }
		}
	},
	methods:{
		exitModal(){
			this.$emit('done', {})
		},
		save(item){
			var prix = JSON.parse(JSON.stringify(item.prix));
			var product = JSON.parse(JSON.stringify(item));
			delete(product.prix);
			axios
				.post('http://127.0.0.1:8000/product/', product)
				.then((response) => {
				    item = response.data;
				    prix.product = item.id;
					axios
						.post('http://127.0.0.1:8000/prix/', prix)
						.then((response) => {
						    item.prix = response.data;
						    this.$store.state.products.unshift(item);
						}).catch((error) => {
							console.error(error);
					});
				}).catch((error) => {
					console.error(error);
			});

		}
	}
};
</script>
<style scoped>
.background{
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: #0005;
	z-index: 5;
}
.body{
	position: absolute;
	background-color: white;
	border-radius: 10px;
	width: 300px;
	padding: 10px;
	display: inline-block;
	left: 50%;
	top: 100px;
	transform: translateX(-50%);
}
.champ{
	margin-bottom: 5px;
	color: black;
	text-align: left;
}
.buttons{
	display: flex;
    flex-direction: row-reverse;
}
input{
	width: 100%;
	height: 30px;
}
button{
	padding: 2px 10px;
	margin: 0 3px;
}
</style>