<template>
	<div class="nav">
		<div class="menu-items">
			<router-link to="/product">
				<div class="menu">
					PRODUIT
				</div>
			</router-link>
			<router-link to="/vente">
				<div class="menu">
					VENTE
				</div>
			</router-link>
			<router-link to="/achat">
				<div class="menu">
					ACHAT
				</div>
			</router-link>
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
	a .menu{
		top: 30%;
		color: white;
		text-decoration: none;
	}
	.menu:hover{
		background: #fff2;
	}
</style>