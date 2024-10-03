const ShopModel = (() => {
    let produtos = [];

    const carregarProdutos = () => {
        return fetch('produtos.json')
            .then(response => response.json())
            .then(data => {
                produtos = data;
                return produtos;
            })
            .catch(error => {
                console.error("Erro ao carregar produtos:", error);
            });
    };

    const getProdutosPorCategoria = () => {
        const categorias = {};
        produtos.forEach(produto => {
            produto.categorias.forEach(categoria => {
                if (!categorias[categoria]) {
                    categorias[categoria] = [];
                }
                categorias[categoria].push(produto);
            });
        });
        return categorias;
    };

    return {
        carregarProdutos,
        getProdutosPorCategoria
    };
})();
