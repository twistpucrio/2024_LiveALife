// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    if (page === 'produtos.html' || page === '') {
        ProdutosController.init();
    }

    if (page === 'carrinho.html') {
        CarrinhoController.init();
    }

    if (page === 'aventura.html'){
        Aventura.init();
    }

    CarrinhoButtonController.init();
});