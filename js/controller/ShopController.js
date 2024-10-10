const ShopController = ((model, view) => {
    const init = () => {
        model.carregarProdutos().then(() => {
            const produtosPorCategoria = model.getProdutosPorCategoria();
            view.renderizarCategorias(produtosPorCategoria,adicionarAoCarrinho, adicionarAoFavorito);

        });
    };

    const adicionarAoCarrinho = (produto) => {
        CarrinhoModel.adicionarItem(produto);     
    };
    const adicionarAoFavorito = (produto) => {
        FavoritoModel.adicionarItem(produto);     
    };

    return {
        init
    };
})(ShopModel, ShopView, CarrinhoModel);