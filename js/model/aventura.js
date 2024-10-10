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

    const getProdutosPorCategoriaEspecifica = (categoriaEspecifica) => {
        return produtos.filter(produto => 
            produto.categorias.includes(categoriaEspecifica)
        );
    };

    return {
        carregarProdutos,
        getProdutosPorCategoriaEspecifica
    };
})();