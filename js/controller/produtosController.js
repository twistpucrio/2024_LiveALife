
const ProdutosController = ((model, view, carrinhoController) => {

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
        alert("Adicionado com sucesso!");

        FavoritoModel.adicionarItem(produto);        
    };

//     const configurarBusca = () => {
//     const botaoBuscar = document.getElementById('botao-buscar');
//     botaoBuscar.addEventListener('click', () => {
//         const nome = document.getElementById('busca-nome').value.trim();
//         let precoMin = parseFloat(document.getElementById('busca-preco-min').value);
//         let precoMax = parseFloat(document.getElementById('busca-preco-max').value);
//         let classInd = document.getElementById('classInd').value;

//         // Verificação se precoMin é maior que precoMax
//         if (precoMin > precoMax) {
//             alert('O preço mínimo não pode ser maior que o preço máximo.');
//             return;
//         }

//         // Verificação de preços negativos
//         if (precoMin < 0 || precoMax < 0) {
//             alert('Os preços não podem ser negativos.');
//             return;
//         }

//         // Coleta das categorias selecionadas
//         const categoriasSelecionadas = [];
//         document.querySelectorAll('.busca-categoria:checked').forEach(checkbox => {
//             categoriasSelecionadas.push(checkbox.value);
//         });

//         // Criando objeto de critérios
//         const criterios = {};

//         if (nome !== '') {
//             criterios.nome = nome;
//         }

//         if (categoriasSelecionadas.length > 0) {
//             criterios.categorias = categoriasSelecionadas;
//         }

//         if (classInd !== '') {
//             criterios.classInd = classInd;
//         }

//         if (!isNaN(precoMin)) {
//             criterios.precoMin = precoMin;
//         }

//         if (!isNaN(precoMax)) {
//             criterios.precoMax = precoMax;
//         }

//         // Busca os produtos com os critérios
//         const resultados = model.buscarProdutos(criterios);
//         view.renderizarProdutos(resultados, carrinhoController.adicionarAoCarrinho, FavoritoController.adicionarAoFavorito);
//     });
// };

const configurarBusca = () => {
    const botaoBuscar = document.getElementById('botao-buscar');
    botaoBuscar.addEventListener('click', () => {
        const nome = document.getElementById('busca-nome').value.trim();
        let precoMin = parseFloat(document.getElementById('busca-preco-min').value);
        let precoMax = parseFloat(document.getElementById('busca-preco-max').value);
        let classInd = document.getElementById('classInd').value;

        // Verificação se precoMin é maior que precoMax
        if (precoMin > precoMax) {
            alert('O preço mínimo não pode ser maior que o preço máximo.');
            return;
        }

        // Verificação de preços negativos
        if (precoMin < 0 || precoMax < 0) {
            alert('Os preços não podem ser negativos.');
            return;
        }

        // Coleta das categorias selecionadas
        const categoriasSelecionadas = [];
        document.querySelectorAll('.busca-categoria:checked').forEach(checkbox => {
            categoriasSelecionadas.push(checkbox.value);
        });

        // Criando objeto de critérios
        const criterios = {};

        if (nome !== '') {
            criterios.nome = nome;
        }

        if (categoriasSelecionadas.length > 0) {
            criterios.categorias = categoriasSelecionadas;
        }

        if (classInd !== '') {
            criterios.classInd = classInd;
        }

        if (!isNaN(precoMin)) {
            criterios.precoMin = precoMin;
        }

        if (!isNaN(precoMax)) {
            criterios.precoMax = precoMax;
        }

        // Busca os produtos com os critérios
        const resultados = model.buscarProdutos(criterios);
        view.renderizarProdutos(resultados, carrinhoController.adicionarAoCarrinho, FavoritoController.adicionarAoFavorito);
    });
};



    return {
        init
    };
})(ProdutosModel, ProdutosView, CarrinhoModel);
     