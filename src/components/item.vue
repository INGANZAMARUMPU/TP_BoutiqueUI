<template>
	<div class="item">
		<div class="h2">
			<span class="title">{{item.title}}</span>
		</div>
		<div class="qtt">{{item.qtt}}</div>
		<div>
			<hr>
			<div class="button">Modifier</div>
			<hr class="separateur">
			<div class="button">Acheter</div>
			<hr class="separateur">
			<div class="button">Vendre</div>
		</div>
	</div>	
</template>
<script>
export default{
	props:{
		item:{
			type:Object,
			required:true
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