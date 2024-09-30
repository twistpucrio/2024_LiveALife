// js/view/produtosView.js

const ProdutosView = (() => {
    const renderizarProdutos = (produtos, adicionarAoCarrinhoCallback) => {
        const container = document.getElementById('produtos-container');
        container.innerHTML = '';

        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');

            produtoDiv.innerHTML = `
                <div id="produtoExibido"  aria-labelledby="nome preco descricao">
                    <h3 id="nome">${produto.nome}</h3>
                    <img src=${produto.imagem} alt=${produto.alt} width="10%" height="10%">
                    <p id="preco">Preço: R$ ${produto.preco}</p>
                    <p id="descricao">${produto.descricao}</p>
                    <button aria-label="Clique aqui para adicionar ao carrinho" data-id="${produto.id}" class="adicionar-carrinho-button">Adicionar ao Carrinho</button>
                </div>
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
