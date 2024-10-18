const ShopController = ((model, view) => {
    const init = () => {
        model.carregarProdutos().then(() => {
            const produtosPorCategoria = model.getProdutosPorCategoria();
            view.renderizarCategorias(produtosPorCategoria, adicionarAoCarrinho, adicionarAoFavorito);

            // Configurar o filtro de categorias
            const categoriaSelect = document.getElementById('categoriaSelect');
            categoriaSelect.addEventListener('change', (event) => {
                const categoriaSelecionada = event.target.value;
                filtrarPorCategoria(categoriaSelecionada, produtosPorCategoria);
            });
        });
    };

    const adicionarAoCarrinho = (produto) => {
        CarrinhoModel.adicionarItem(produto);     
    };

    const adicionarAoFavorito = (produto) => {
        FavoritoModel.adicionarItem(produto);     
    };

    const filtrarPorCategoria = (categoria, produtosPorCategoria) => {
        if (categoria === 'todos') {
            view.renderizarCategorias(produtosPorCategoria, adicionarAoCarrinho, adicionarAoFavorito);
        } else {
            const produtosFiltrados = {};
            if (produtosPorCategoria[categoria]) {
                produtosFiltrados[categoria] = produtosPorCategoria[categoria];
            }
            view.renderizarCategorias(produtosFiltrados, adicionarAoCarrinho, adicionarAoFavorito);
        }
    };

    return {
        init
    };
})(ShopModel, ShopView, CarrinhoModel);
