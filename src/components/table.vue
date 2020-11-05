<template>
	<div class="table">
		<table>
			<tr>
				<th>Produit</th>
				<th>Quantite</th>
				<th>Date</th>
				<th>Actions</th>
			</tr>
			<tr v-for="item in items">
				<td>{{ item.product }}</td>
				<td>{{ item.qtt }}</td>
				<td>{{ item.date }}</td>
				<td>
					<button>modifier</button>
					<button>supprimer</button>
				</td>
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
}
th{
	color: white;
	background: cadetblue;
}
</style>