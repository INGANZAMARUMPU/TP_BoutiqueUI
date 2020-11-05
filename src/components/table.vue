<template>
	<div class="table">
		<table>
			<tr>
				<th>Produit</th>
				<th>Quantite</th>
				<th>Date</th>
				<th>Actions</th>
			</tr>
		</table>
	</div>
</template>
<script>
export default{
	props:{
		items:{
			type:Array,
			default:0
		}
	}
};
</script>
<style scoped>
.table{
	width: 80%;
	margin: auto;
}
table{
	width: 100%;
	background: cadetblue;
	color: white;
}
th{
	width: 25%;
}
</style>