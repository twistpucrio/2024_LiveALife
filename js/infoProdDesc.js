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

document.getElementById('adicionarCarrinho').addEventListener('click', () => {
    if (produtoSelecionado) { // Alterado para usar produtoSelecionado
        CarrinhoModel.adicionarItem(produtoSelecionado);
    }
});

document.getElementById('adicionarFavorito').addEventListener('click', () => {
    if (produtoSelecionado) { // Alterado para usar produtoSelecionado
        FavoritoModel.adicionarItem(produtoSelecionado);
    }
});