const ProdutosController = ((model, view, carrinhoController) => {

    const init = () => {
        model.carregarProdutos().then(() => {
            const produtos = model.getProdutos();
            view.renderizarProdutos(produtos, adicionarAoCarrinho);
            configurarBusca();
        });
    };

    const adicionarAoCarrinho = (produto) => {
        CarrinhoModel.adicionarItem(produto);        
    };

    const configurarBusca = () => {
        const botaoBuscar = document.getElementById('botao-buscar');
        botaoBuscar.addEventListener('click', () => {
            const nome = document.getElementById('busca-nome').value.trim();
            const categoria = document.getElementById('busca-categoria').value.trim();
            let precoMin = parseFloat(document.getElementById('busca-preco-min').value);
            let precoMax = parseFloat(document.getElementById('busca-preco-max').value);

            // Verificação se precoMin é maior que precoMax
            if (precoMin > precoMax) {
                alert('O preço mínimo não pode ser maior que o preço máximo.');
                document.getElementById('busca-preco-min').value = ''; // Limpa o campo
                document.getElementById('busca-preco-max').value = ''; // Limpa o campo
                return; // Sai da função para evitar busca
            }


            if (precoMin < 0 || precoMax< 0) {
                alert('Valor inválido! Os preços não podem ser negativos!');
                if (precoMin < 0) {
                    document.getElementById('busca-preco-min').value = ''; // Limpa o campo
                }
                if (precoMax < 0) {
                    document.getElementById('busca-preco-max').value = ''; // Limpa o campo
                }
                return; // Sai da função para evitar busca
            }

        
            const criterios = {};

            if (nome !== '') {
                criterios.nome = nome;
            }

            if (categoria !== '') {
                criterios.categoria = categoria;
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
})(ProdutosModel, ProdutosView, CarrinhoModel);
     