<template>
	<div class="item">
		<div class="h2">
			<span class="title">{{item.product.name}}</span>
		</div>
		<div class="qtt">{{item.product.qtt}} {{item.product.unite}}</div>
		<div>
			<hr>
			<div class="button" @click="edit_product=true">Modifier</div>
			<DialogProduct v-if="edit_product" @done="edit_product=false" :item="item"/>
			<hr class="separateur">
			<div class="button" @click="perform_achat=true">Acheter</div>
			<DialogAction v-if="perform_achat" @done="perform_achat=false" :is_achat="true" :item="item"/>
			<hr class="separateur">
			<div class="button" @click="perform_vente=true">Vendre</div>
			<DialogAction v-if="perform_vente" @done="perform_vente=false" :item="item"/>
		</div>
	</div>	
</template>
<script>
import DialogProduct from './dialog_product';
import DialogAction from './dialog_action';
export default{
	props:{
		item:{
			type:Object,
			required:true
		}
	},
	components:{
		DialogProduct, DialogAction
	},
	data(){
		return {
			edit_product:false,
			perform_achat:false,
			perform_vente:false
		}
	}
};	
</script>
<style scoped>
.item{
	position: relative;
	background: cadetblue;
	border-radius: 5px;
	width: 120px;
	margin: 5px;
	overflow: hidden;
}
*{
	color: white;
	text-align: center
}
.button{
	width: 100%;
	padding: 2px;
}
.button:hover{
	background: #588;
}
.h2{
	height: 50px;
	font-size: 1.3em;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
}
.qtt{
	font-size: .8em;
	font-weight: bold;
	color:#933;
}
</style>