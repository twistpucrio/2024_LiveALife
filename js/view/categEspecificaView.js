const ShopView = (() => {
    const renderizarCategorias = (produtosPorCategoria, adicionarAoCarrinhoCallback,adicionarAoFavoritoCallback) => {
        const container = document.querySelectorAll('.prodEspecifico-container');
        console.log("paginaaa renderizaaa", container)
        container.innerHTML = '';  // Limpa o container


        // Para cada categoria
        Object.keys(produtosPorCategoria).forEach(categoria => {
            const categoriaDiv = document.createElement('div');
            categoriaDiv.classList.add('categoria');
            categoriaDiv.innerHTML = `<h1>${categoria}</h1>`;

            /* coloca os itens em carrossel */
            const carrosselDiv = document.createElement('div');
            carrosselDiv.classList.add('carrossel-container');

            const produtos = produtosPorCategoria[categoria];

            /* adiciona a 'descrição' do item na caixinha */
            produtos.forEach(produto => {
                const produtoDiv = document.createElement('div');
                produtoDiv.classList.add('produto');
                produtoDiv.innerHTML = `
                    <div id="produtoExibido-${produto.id}" tabindex="0" aria-labelledby="nome-${produto.id} preco-${produto.id} descricao-${produto.id}">
                        <h3 id="nome-${produto.id}">${produto.nome}</h3>
                        <img tabindex="0" src="${produto.imagem}" alt="${produto.alt}" width="100" height="100">
                        <p id="preco-${produto.id}">Preço: R$ ${produto.preco}</p>
                        <p id="descricao-${produto.id}">${produto.descricao}</p>
                        <button aria-label="Clique aqui para adicionar ao carrinho" data-id="${produto.id}" class="adicionar-carrinho-button">
                        Adicionar ao Carrinho
                        </button>
                        <button aria-label="Clique aqui para adicionar ao favorito" data-id="${produto.id}" class="adicionar-favorito-button">
                            Adicionar ao Favorito
                        </button>
                    </div>
                `;
                carrosselDiv.appendChild(produtoDiv); /* adiciona o item ao carrossel de sua categoria */
            });

            // Adicionar setas de navegação
            const prevButton = document.createElement('button');
            prevButton.classList.add('prev-button');
            prevButton.textContent = '←';
            const nextButton = document.createElement('button');
            nextButton.classList.add('next-button');
            nextButton.textContent = '→';

            // adiciona carrossel e botões de navegação
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
        });

        // Adicionar eventos de clique em todos os botões "Adicionar ao Carrinho"
        const botoesAdicionarCarrinho = document.querySelectorAll('.adicionar-carrinho-button');
        botoesAdicionarCarrinho.forEach(botao => {
            botao.addEventListener('click', (event) => {
                const produtoId = parseInt(event.target.getAttribute('data-id'));
                Object.keys(produtosPorCategoria).forEach(categoria => {
                    const produtoBusca = produtosPorCategoria[categoria].find(p => p.id === produtoId);
                    if (produtoBusca) {
                        adicionarAoCarrinhoCallback(produtoBusca);
                    }
                });
            });
        });

        const botoesAdicionarFavorito = document.querySelectorAll('.adicionar-favorito-button');
        botoesAdicionarFavorito.forEach(botao => {
            botao.addEventListener('click', (event) => {
                const produtoId = parseInt(event.target.getAttribute('data-id'));
                Object.keys(produtosPorCategoria).forEach(categoria => {
                    const produtoBusca = produtosPorCategoria[categoria].find(p => p.id === produtoId);
                    if (produtoBusca) {
                        adicionarAoFavoritoCallback(produtoBusca);
                    }
                });
            });
        });
    };

    return {
        renderizarCategorias
    };
})();
