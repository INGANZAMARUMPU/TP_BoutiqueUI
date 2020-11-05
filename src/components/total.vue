<template>
	<div class="top">
		<div class="labels">
			<span>Total:</span>
			<span>{{ total }} FBu</span>
		</div>
	</div>
</template>
<script>
export default{
	props:{
		total:{
			type:Number,
			default:0
		}
	}
};
</script>
<style scoped>
.top{
	width: 100%;
	position: relative;
}
.labels{
	font-weight: bold;
	padding: 15px 10px;
	height: 40px;
	margin-left: auto;
	text-align: right;
	padding-right: 10%;
}
</style>