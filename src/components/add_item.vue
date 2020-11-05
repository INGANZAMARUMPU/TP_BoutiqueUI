<template>
	<div class="item" @click="dialog_mode=true">
		<h1>+</h1>
		<DialogProduct v-if="dialog_mode" @done="dialog_mode=false"/>
	</div>	
</template>
<script>
import DialogProduct from "./dialog_product"
export default{	
	components:{
		DialogProduct	
	},
	data(){
		return {
			dialog_mode:false,
		}
	}
};
</script>
<style scoped>
.item{
	position: relative;
	background: cadetblue;
	border-radius: 5px;
	width: 100px;
	height: 100px;
	margin: 5px
}
h1{
	position: relative;
	top: 50%;
	left: 50%;
	margin: auto;
	font-size: 60px;
	transform: translate(-20px, -50%);
	color: white;
}
.item:hover{
	background: #588;
}
</style>