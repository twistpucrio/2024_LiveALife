// js/view/produtosView.js

const ProdutosView = (() => {
    const renderizarProdutos = (produtos, adicionarAoCarrinhoCallback) => {
        const container = document.getElementById('produtos-container');
        container.innerHTML = '';

        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');

            produtoDiv.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>Preço: R$ ${produto.preco}</p>
                <button data-id="${produto.id}" class="adicionar-carrinho-button">Adicionar ao Carrinho</button>
            `;

            container.appendChild(produtoDiv);
        });

        // Adiciona os eventos dos botões
        container.addEventListener('click', (event) => {
            if (event.target.classList.contains('adicionar-carrinho-button')) {
                const produtoId = parseInt(event.target.getAttribute('data-id'));
                const produto = produtos.find(p => p.id === produtoId);
                if (produto) {
                    adicionarAoCarrinhoCallback(produto);
                }
            }
        });
    };

    return {
        renderizarProdutos
    };
})();
