const ShopController = ((model, view) => {
    const init = () => {
        model.carregarProdutos().then(() => {
            const produtosPorCategoria = model.getProdutosPorCategoria();
            view.renderizarCategorias(produtosPorCategoria,adicionarAoCarrinho);

        });
    };

    const adicionarAoCarrinho = (produto) => {
        CarrinhoModel.adicionarItem(produto);     
    };

    return {
        init
    };
})(ShopModel, ShopView, CarrinhoModel);