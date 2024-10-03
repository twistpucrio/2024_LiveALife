const ShopController = ((model, view) => {
    const init = () => {
        model.carregarProdutos().then(() => {
            const produtosPorCategoria = model.getProdutosPorCategoria();
            view.renderizarCategorias(produtosPorCategoria);
        });
    };

    return {
        init
    };
})(ShopModel, ShopView);



