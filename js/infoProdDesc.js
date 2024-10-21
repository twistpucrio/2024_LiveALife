//infoProdDesc

// Recuperar o produto selecionado do localStorage
const produtoSelecionado = JSON.parse(localStorage.getItem('produtoSelecionado'));


if (produtoSelecionado) {
    // Atualizar a página com as informações do produto
    document.getElementById('MainImg').src = produtoSelecionado.imagem;
    document.querySelector('.single-pro-details h4').textContent = produtoSelecionado.nome;
    document.querySelector('.single-pro-details h2').textContent = `R$ ${produtoSelecionado.preco}`;
    document.querySelector('.single-pro-details span').textContent = produtoSelecionado.descricao;
    document.querySelector('.single-pro-details h6').textContent = produtoSelecionado.categorias;
} else {
    console.error('Nenhum produto foi encontrado no localStorage.');
}

// Adicionar ao carrinho com a quantidade selecionada
document.getElementById('adicionarCarrinho').addEventListener('click', () => {
    if (produtoSelecionado) {
        // Captura a quantidade selecionada pelo usuário
        const quantidade = parseInt(document.querySelector('.single-pro-details input[type="number"]').value);
        
        // Passa a quantidade ao modelo ao adicionar o item ao carrinho
        CarrinhoModel.adicionarItem(produtoSelecionado, quantidade);
    }
});

document.getElementById('adicionarFavorito').addEventListener('click', () => {
    if (produtoSelecionado) { // Alterado para usar produtoSelecionado
        FavoritoModel.adicionarItem(produtoSelecionado);
    }
});

// Função para voltar à página anterior
function voltarPagina() {
    window.history.back();
}