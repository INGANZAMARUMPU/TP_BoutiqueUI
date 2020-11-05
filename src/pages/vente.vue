<template>
  <div>
  	<Total :total="total"/>
  	<Table :items="ventes"/>
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
			total : this.$store.state.total_vente,
			ventes : this.$store.state.ventes,
		}
	}
};
</script>

<style scoped>

</style>
