const ProdutosModel = (() => {
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

    const buscarProdutos = (criterios) => {
        return produtos.filter(produto => {
            const matchesNome = criterios.nome ? produto.nome.toLowerCase().includes(criterios.nome.toLowerCase()) : true;
            const matchesCategoria = criterios.categoria ? produto.categorias.includes(criterios.categoria) : true;
            const matchesPrecoMin = !isNaN(criterios.precoMin) ? produto.preco >= criterios.precoMin : true;
            const matchesPrecoMax = !isNaN(criterios.precoMax) ? produto.preco <= criterios.precoMax : true;
            const matchesClassInd = criterios.classInd ? produto.classInd === criterios.classInd : true;

            return matchesNome && matchesCategoria && matchesPrecoMin && matchesPrecoMax && matchesClassInd;
        });
    };

    const getProdutos = () => {
        return produtos;
    };

    return {
        carregarProdutos,
        buscarProdutos,
        getProdutos
    };
})();
