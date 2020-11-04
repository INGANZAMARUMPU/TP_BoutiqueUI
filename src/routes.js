import Produit from './pages/produit.vue';
import Vente from './pages/vente.vue';
import Achat from './pages/achat.vue';

export const routes = [
    { path: '/', component: Produit },
    { path: '/product', component: Produit },
    { path: '/vente', component: Vente },
    { path: '/achat', component: Achat },
];