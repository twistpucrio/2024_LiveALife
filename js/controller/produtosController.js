const ProdutosController = ((model, view, carrinhoController, favoritoController) => {
    const init = () => {
        model.carregarProdutos().then(() => {
            const produtos = model.getProdutos();
            view.renderizarProdutos(produtos, adicionarAoCarrinho, adicionarAoFavorito);
            configurarBusca();
        });
    };

    const adicionarAoCarrinho = (produto) => {
        CarrinhoModel.adicionarItem(produto);        
    };

    const adicionarAoFavorito = (produto) => {
        FavoritoModel.adicionarItem(produto);        
    };

    const configurarBusca = () => {
        const botaoBuscar = document.getElementById('botao-buscar');

        if (!botaoBuscar) {
            console.error('Botão de busca não encontrado!'); // Mensagem de erro se não existir
            return;
        }
       
        botaoBuscar.addEventListener('click', () => {
            const criterios = coletarCriterios();
            const resultados = model.buscarProdutos(criterios);
            view.renderizarProdutos(resultados, adicionarAoCarrinho, adicionarAoFavorito);
        });
    };

    const coletarCriterios = () => {
        const nome = document.getElementById('busca-nome').value.trim();
        let precoMin = parseFloat(document.getElementById('busca-preco-min').value);
        let precoMax = parseFloat(document.getElementById('busca-preco-max').value);
        const classInd = document.getElementById('classInd').value;
        const categoriaSelecionada = document.getElementById('categoriaSelect').value;

        const criterios = {};
        
        if (nome) criterios.nome = nome;
        if (categoriaSelecionada && categoriaSelecionada !== 'todos') criterios.categoria = categoriaSelecionada;
        if (!isNaN(precoMin)) criterios.precoMin = precoMin;
        if (!isNaN(precoMax)) criterios.precoMax = precoMax;
        if (classInd) criterios.classInd = classInd;

        return criterios;
    };

    return {
        init
    };
})(ProdutosModel, ProdutosView, CarrinhoModel, FavoritoModel);
