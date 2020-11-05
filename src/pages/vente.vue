<template>
  <div>
  	<Total :total="total"/>
  </div>
</template>

<script>
import Total from "../components/total"
export default {
	components:{Total,},
	data(){
		return{
			total : this.$store.state.total_vente,
		}
	}
};
</script>

<style scoped>

</style>
