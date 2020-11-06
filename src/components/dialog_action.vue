<template>
	<div class="background" @click="exitModal">
		<div class="body" @click.prevent.stop="">
			<div class="champ">
				<label for="name">Name</label>
				<input type="text" disabled="true" id="name"
					v-model="mvmnt.name">
			</div>
			<div class="champ">
				<label for="qtt">Quantité</label>
				<input type="number" name="qtt" id="qtt"
					v-model="mvmnt.qtt">
			</div>
			<div class="champ">
				<label for="prix_vente">Prix de vente</label>
				<input type="text" disabled="true" id="prix_vente"
					v-model="mvmnt.prix">
			</div>
			<div class="champ">
				<label for="date">Date</label>
				<input type="text" disabled="true" id="date"
					v-model="mvmnt.date">
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
		mvmnt:{
			type: Object,
			default(){
				return {
			        "id": 0,
			        "product": "",
			        "product_id": 0,
			        "prix": 0,
			        "qtt": 0,
			        "date": `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
			    }
		    }
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