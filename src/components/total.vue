<template>
	<div class="labels">
		<span>Total:</span>
		<span>{{ total }} FBu</span>
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
	.labels{
		font-weight: bold;
		padding: 15px 10px;
		height: 40px;
		float: right;
	}
</style>