// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    if (page === 'produtos.html' || page === '') {
        ProdutosController.init();
    }

    if (page === 'shop.html' || page === '') {
        ShopController.init();
    }

    if (page === 'carrinho.html') {
        CarrinhoController.init();
    }

    if (page === 'favorito.html') {
        FavoritoController.init();
    }

    CarrinhoButtonController.init();
    FavoritoButtonController.init();
});