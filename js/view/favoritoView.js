// js/view/carrinhoView.js

const FavoritoView = (() => {
    const renderizarFavorito = (favorito) => {
        const container = document.getElementById('favorito-container');
        container.innerHTML = '';

        if (favorito.length === 0) {
            container.innerHTML = '<p>Seu favorito está vazio.</p>';
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
                ${favorito.map(item => `
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

        const total = favorito.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
        const totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<h3>Total: R$ ${total.toFixed(2)}</h3>`;
        container.appendChild(totalDiv);

        const limparButton = document.createElement('button');
        limparButton.textContent = 'Limpar Favorito';
        limparButton.id = 'limpar-favorito';
        container.appendChild(limparButton);
    };

    return {
        renderizarFavorito
    };
})();