<template>
	<div class="background" @click="exitModal">
		<div class="body" @click.prevent.stop="">
			<div class="champ">
				<label for="name">Name</label>
				<input type="text" name="name" id="name">
			</div>
			<div class="champ">
				<label for="prix">Prix</label>
				<input type="text" name="prix" id="prix">
			</div>
			<div class="buttons">
				<button @click.prevent.stop="">Valider</button>
				<button @click="exitModal">Annuler</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
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
	position: absolute;
	background-color: #0005;
	z-index: 5;
}
.body{
	margin: auto;
	margin-top: 100px;
	background-color: white;
	border-radius: 10px;
	width: 300px;
	padding: 10px;
}
.champ{
	margin-bottom: 5px;
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