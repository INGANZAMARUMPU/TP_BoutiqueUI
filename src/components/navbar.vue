<template>
	<div class="nav">
		<div class="menu-items">
			<div class="menu">
				<router-link to="/product">PRODUIT</router-link>
			</div>
			<div class="menu">
				<router-link to="/vente">VENTE</router-link>
			</div>
			<div class="menu">
				<router-link to="/achat">ACHAT</router-link>
			</div>
		</div>
	</div>	
</template>
<script>
	
</script>
<style scoped>
	.nav{
		height: 50px;
		width: 100%;
		background: cadetblue;
		display: inline-block;
	}
	.menu{
		font-weight: bold;
		padding: 15px 10px;
		height: 50px;
		float: right;
	}
	.menu a{
		top: 30%;
		color: white;
		text-decoration: none;
	}
	.menu:hover{
		background: #fff2;
	}
</style>