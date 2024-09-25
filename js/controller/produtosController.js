const ProdutosController = ((model, view, carrinhoController) => {
    const init = () => {
        model.carregarProdutos().then(() => {
            const produtos = model.getProdutos();
            view.renderizarProdutos(produtos, carrinhoController.adicionarAoCarrinho);
            configurarBusca();
        });
    };

    const configurarBusca = () => {
        const botaoBuscar = document.getElementById('botao-buscar');
        botaoBuscar.addEventListener('click', () => {
            const nome = document.getElementById('busca-nome').value.trim();
            const precoMin = parseFloat(document.getElementById('busca-preco-min').value);
            const precoMax = parseFloat(document.getElementById('busca-preco-max').value);

            const criterios = {};

            if (nome !== '') {
                criterios.nome = nome;
            }

            if (!isNaN(precoMin)) {
                criterios.precoMin = precoMin;
            }

            if (!isNaN(precoMax)) {
                criterios.precoMax = precoMax;
            }

            const resultados = model.buscarProdutos(criterios);
            view.renderizarProdutos(resultados, carrinhoController.adicionarAoCarrinho);
        });
    };

    return {
        init
    };
})(ProdutosModel, ProdutosView, CarrinhoController);
     