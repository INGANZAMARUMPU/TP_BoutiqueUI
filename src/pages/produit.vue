<template>
  <div class="listview">
  	<AddItem/>
  	<Item :item="{'title':'Ibiharage Bitoto', 'qtt':'20kg'}"/>
  	<Item :item="{'title':'Amata', 'qtt':'30 litres'}"/>
  </div>
</template>

<script>
import AddItem from "../components/add_item"
import Item from "../components/item"
export default {
	components:{AddItem, Item},
};
</script>

<style scoped>
.listview{
	display: flex;
	align-items: center;
}
</style>
