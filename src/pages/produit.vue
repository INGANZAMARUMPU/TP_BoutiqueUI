<template>
  <div class="listview">
  	<AddItem/>
  	<Item  v-for="item in items":item="item"/>
  </div>
</template>

<script>
import AddItem from "../components/add_item"
import Item from "../components/item"
var this_;
export default {
	components:{AddItem, Item},
	computed:{
		items() {
			return this.$store.state.products
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
