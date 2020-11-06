<template>
  <div class="listview">
  	<AddItem/>
  	<Item  v-for="item in items":item="item"/>
  </div>
</template>

<script>
import AddItem from "../components/add_item"
import Item from "../components/item"
export default {
	components:{AddItem, Item},
	data(){
		return {
			items : this.$store.state.products
		}
	}
};
</script>

<style scoped>
.listview{
	display: flex;
	align-items: center;
}
</style>
