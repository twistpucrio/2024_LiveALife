const ProdutosController = ((model, view, carrinhoController) => {
    const init = () => {
        const produtos = model.getProdutos();
        view.renderizarProdutos(produtos, carrinhoController.adicionarAoCarrinho);
        configurarBusca();
        configurarValidacaoPreco();
    };

    const configurarBusca = () => {
        const botaoBuscar = document.getElementById('botao-buscar');
        botaoBuscar.addEventListener('click', () => {
            const nome = document.getElementById('busca-nome').value.trim();
            let precoMin = document.getElementById('busca-preco-min').value;
            let precoMax = document.getElementById('busca-preco-max').value;

            precoMin = parseFloat(precoMin);
            precoMax = parseFloat(precoMax);

            // Verificação se precoMin é maior que precoMax
            if (precoMin > precoMax) {
                alert('O preço mínimo não pode ser maior que o preço máximo.');
                document.getElementById('busca-preco-min').value = ''; // Limpa o campo
                document.getElementById('busca-preco-max').value = ''; // Limpa o campo
                return; // Sai da função para evitar busca
            }

            if ((precoMin < 0) && (precoMax<0)) {
                alert('Valor inváido! Os preços não podem ser negativos!');
                document.getElementById('busca-preco-min').value = ''; // Limpa o campo
                document.getElementById('busca-preco-max').value = ''; // Limpa o campo
                return; // Sai da função para evitar busca
            }

            if ((precoMin < 0)) {
                alert('Valor inváido! Os preços não podem ser negativos!');
                document.getElementById('busca-preco-min').value = ''; // Limpa o campo
                return; // Sai da função para evitar busca
            }

            if ((precoMax < 0)) {
                alert('Valor inváido! Os preços não podem ser negativos!');
                document.getElementById('busca-preco-max').value = ''; // Limpa o campo
                return; // Sai da função para evitar busca
            }

            const criterios = {};

            if (nome !== '') {
                criterios.nome = nome;
            }

            if (!isNaN(precoMin)) {
                criterios.precoMin = precoMin;
            }

            if (!isNaN(precoMax) && precoMax !== Infinity) {
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
