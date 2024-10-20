const ShopController = ((model, view) => {
    const init = () => {
        model.carregarProdutos().then(() => {
            const produtosPorCategoria = model.getProdutosPorCategoria();
            
            // Renderizar produtos por categoria
            view.renderizarPorCategoria(produtosPorCategoria, adicionarAoCarrinho, adicionarAoFavorito);

            // Filtro de categoria
            const categoriaSelect = document.getElementById('categoriaSelect');
            if (categoriaSelect) {
                categoriaSelect.addEventListener('change', (event) => {
                    const categoriaSelecionada = event.target.value;
                    filtrarPorCategoria(categoriaSelecionada, produtosPorCategoria);
                });
            }

            // Filtro de avaliação (diretamente definido como 5.0)
            const produtosFiltradosPorAvaliacao = filtrarProdutos(model.getTodosProdutos(), null, 5.0);
            const produtosAgrupadosPorAvaliacao = agruparProdutosPorCategoria(produtosFiltradosPorAvaliacao);
            
            view.renderizarPorAvaliacao(produtosAgrupadosPorAvaliacao, adicionarAoCarrinho, adicionarAoFavorito);
        });
    };

    // Função para adicionar produto ao carrinho
    const adicionarAoCarrinho = (produto) => {
        CarrinhoModel.adicionarItem(produto);
    };

    // Função para adicionar produto aos favoritos
    const adicionarAoFavorito = (produto) => {
        FavoritoModel.adicionarItem(produto);
    };

    // Função para filtrar produtos por categoria
    const filtrarPorCategoria = (categoria, produtosPorCategoria) => {
        if (categoria === 'todos') {
            view.renderizarPorCategoria(produtosPorCategoria, adicionarAoCarrinho, adicionarAoFavorito);
        } else {
            const produtosFiltrados = {};
            if (produtosPorCategoria[categoria]) {
                produtosFiltrados[categoria] = produtosPorCategoria[categoria];
            }
            view.renderizarPorCategoria(produtosFiltrados, adicionarAoCarrinho, adicionarAoFavorito);
        }
    };

    // Função de filtro por avaliação e/ou categoria
    const filtrarProdutos = (produtos, categoriaFiltro, avaliacaoFiltro) => {
        return produtos.filter(produto => {
            const categoriaMatch = categoriaFiltro ? produto.categorias.includes(categoriaFiltro) : true;
            const avaliacaoMatch = produto.avaliacao === avaliacaoFiltro;
            return categoriaMatch && avaliacaoMatch;
        });
    };

    // Função para agrupar produtos filtrados por categoria
    const agruparProdutosPorCategoria = (produtos) => {
        const produtosAgrupados = {};
        produtos.forEach(produto => {
            produto.categorias.forEach(categoria => {
                if (!produtosAgrupados[categoria]) {
                    produtosAgrupados[categoria] = [];
                }
                produtosAgrupados[categoria].push(produto);
            });
        });
        return produtosAgrupados;
    };

    return {
        init
    };
})(ShopModel, ShopView);
