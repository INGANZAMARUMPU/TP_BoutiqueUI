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
					<button @click="edit(item)">modifier</button>
					<button>supprimer</button>
				</td>
			</tr>
		</table>
		<DialogEditAction v-if="dialog_mode" :is_achat="is_achat" :mvmnt="mvmnt" @done="dialog_mode=false"/>
	</div>
</template>
<script>
import DialogEditAction from "./dialog_action_edit"
export default{	
	components:{
		DialogEditAction	
	},
	data(){
		return {
			dialog_mode:false,
			mvmnt : null
		}
	},
	props:{
		items:{
			type:Array,
			default:[]
		},
		is_achat:{
			type: Boolean,
			default : false
		}
	},
	methods:{
		edit(mvmnt){
			this.mvmnt=mvmnt;
			this.dialog_mode=true;
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