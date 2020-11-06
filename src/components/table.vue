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
					<button @click="dialog_mode=true">modifier</button>
					<button>supprimer</button>
				</td>
			</tr>
		</table>
		<DialogAction v-if="dialog_mode" @done="dialog_mode=false"/>
	</div>
</template>
<script>
import DialogAction from "./dialog_action"
export default{	
	components:{
		DialogAction	
	},
	data(){
		return {
			dialog_mode:false,
		}
	},
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