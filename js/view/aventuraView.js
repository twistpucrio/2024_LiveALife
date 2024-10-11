const ShopView = (() => {
    const renderizarProdutos = (produtos, categoria) => {
        const container = document.getElementById('produtos-container');
        container.innerHTML = '';  // Limpa o container

        const categoriaDiv = document.createElement('div');
        categoriaDiv.classList.add('categoria');
        categoriaDiv.innerHTML = `<h1>${categoria}</h1>`;

        // Cria o carrossel
        const carrosselDiv = document.createElement('div');
        carrosselDiv.classList.add('carrossel-container');

        // Adiciona os produtos ao carrossel
        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.innerHTML = `
                <div id="produtoExibido-${produto.id}" tabindex="0" aria-labelledby="nome-${produto.id} preco-${produto.id} descricao-${produto.id}">
                    <h3 id="nome-${produto.id}">${produto.nome}</h3>
                    <img tabindex="0" src="${produto.imagem}" alt="${produto.alt}" width="100" height="100">
                    <p id="preco-${produto.id}">Preço: R$ ${produto.preco}</p>
                    <p id="descricao-${produto.id}">${produto.descricao}</p>
                </div>
            `;
            carrosselDiv.appendChild(produtoDiv); // adiciona o item ao carrossel
        });

        // Adiciona setas de navegação
        const prevButton = document.createElement('button');
        prevButton.classList.add('prev-button');
        prevButton.textContent = '←';
        const nextButton = document.createElement('button');
        nextButton.classList.add('next-button');
        nextButton.textContent = '→';

        categoriaDiv.appendChild(carrosselDiv);
        categoriaDiv.appendChild(prevButton);
        categoriaDiv.appendChild(nextButton);
        container.appendChild(categoriaDiv);

        // Lógica para navegação lateral (carrossel)
        prevButton.addEventListener('click', () => {
            carrosselDiv.scrollLeft -= 200;
        });
        nextButton.addEventListener('click', () => {
            carrosselDiv.scrollLeft += 200;
        });
    };

    return {
        renderizarProdutos
    };
})();