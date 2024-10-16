const ShopController = ((model, view) => {
    const init = () => {
        model.carregarProdutos().then(() => {
            // Obter produtos apenas da categoria "aventura"
            const produtosAventura = model.getProdutosPorCategoriaEspecifica('aventura');
            // Renderizar apenas a categoria "aventura"
            view.renderizarProdutos(produtosAventura, 'Aventura');
        });
    };

    return {
        init
    };
})(ShopModel, ShopView);