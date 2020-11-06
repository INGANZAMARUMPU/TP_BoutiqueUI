<template>
	<div class="background" @click="exitModal">
		<div class="body" @click.prevent.stop="">
			<div class="champ">
				<label for="name">Name</label>
				<input type="text" disabled="true" id="name"
					v-model="item.product">
			</div>
			<div class="champ">
				<label for="qtt">Quantité</label>
				<input type="number" name="qtt" id="qtt"
					v-model="qtt">
			</div>
			<div class="champ" v-if="is_achat">
				<label for="prix_achat">Prix d'achat</label>
				<input type="text" disabled="true" id="prix_achat"
					v-model="item.prix_achat">
			</div>
			<div class="champ" v-else>
				<label for="prix_vente">Prix de vente</label>
				<input type="text" disabled="true" id="prix_vente"
					v-model="item.prix_vente">
			</div>
			<div class="buttons">
				<button @click.prevent.stop="">Valider</button>
				<button @click="exitModal">Annuler</button>
			</div>
		</div>
	</div>
</template>
<script>
var d = new Date();
export default {
	props:{
		item:{
			type:Object,
			default:{
		        "id": 0,
		        "prix_achat": 0,
		        "prix_vente": 0,
		        "product": '',
		        "product_id": 0,
		        'qtt':'0',
		        'unite':'',
		    }
		},
		is_achat:{
			type: Boolean,
			default : false
		}
	},
	data(){
		return{
			qtt:0
		}
	},
	methods:{
		exitModal(){
			this.$emit('done', {})
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