<template>
  <div>
  	<Total :total="total"/>
  	<Table :items="achats"/>
  </div>
</template>

<script>
import Total from "../components/total"
import Table from "../components/table"
export default {
	components:{Total, Table},
	components:{Total, Table},
	data(){
		return{
			total : this.$store.state.total_achat,
			achats : this.$store.state.achats,
		}
	}
};
</script>

<style scoped>

</style>
