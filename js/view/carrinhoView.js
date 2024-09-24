// js/view/carrinhoView.js

const CarrinhoView = (() => {
    const renderizarCarrinho = (carrinho) => {
        const container = document.getElementById('carrinho-container');
        container.innerHTML = '';

        if (carrinho.length === 0) {
            container.innerHTML = '<p>Seu carrinho está vazio.</p>';
            return;
        }

        const tabela = document.createElement('table');
        tabela.innerHTML = `
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                ${carrinho.map(item => `
                    <tr>
                        <td>${item.nome}</td>
                        <td>R$ ${item.preco}</td>
                        <td>
                            <input type="number" min="1" value="${item.quantidade}" data-id="${item.id}" class="quantidade-input">
                        </td>
                        <td>R$ ${(item.preco * item.quantidade).toFixed(2)}</td>
                        <td>
                            <button data-id="${item.id}" class="remover-button">Remover</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        `;
        container.appendChild(tabela);

        const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
        const totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<h3>Total: R$ ${total.toFixed(2)}</h3>`;
        container.appendChild(totalDiv);

        const limparButton = document.createElement('button');
        limparButton.textContent = 'Limpar Carrinho';
        limparButton.id = 'limpar-carrinho';
        container.appendChild(limparButton);
    };

    return {
        renderizarCarrinho
    };
})();
