// js/view/produtosView.js




const ProdutosView = (() => {
    const renderizarProdutos = (produtos, adicionarAoCarrinhoCallback,adicionarAoFavoritoCallback) => {
        const container = document.querySelectorAll('.pro-container');
       
        // Verifica se há elementos encontrados
        if (container.length > 0) {
            // Itera sobre todos os elementos e atualiza o conteúdo
            container.forEach( (container) => {
                produtos.forEach(produto => {
                    const produtoDiv = document.createElement('div');
                    produtoDiv.classList.add('pro');
                   
                   
                    produtoDiv.innerHTML = `
                        <div id="produtoExibido-${produto.id}" tabindex="0" aria-labelledby="nome-${produto.id} preco-${produto.id} descricao-${produto.id}">
                            <img class="img_pro" src="${produto.imagem}" alt="${produto.alt}">
                            <div class="des">
                                <span id="categorias-${produto.id}">${produto.categorias}</span>
                                <h5 id="nome-${produto.id}">${produto.nome}</h5>
                                <div>
                                    <p>aqui vai entrar a avaliação</p>
                                </div>
                                <h4 id="preco-${produto.id}">R$ ${produto.preco}</h4>
                            </div>
                           
                            <button data-id="${produto.id}" class="adicionar-carrinho-button"><img src="img/icones/sacola_compra.png" alt=""></button>
                            <button data-id="${produto.id}" class="adicionar-favorito-button"><img src="img/icones/favorito.svg" alt=""></button>
                        </div>
                    `;
       
       
                    // Selecionar a imagem com a classe "img_pro"
                    const imagemProduto = produtoDiv.querySelector('.img_pro');
       
       
                   
       
                    imagemProduto.addEventListener('click', () => {
                       
                        // Adicionar evento de clique apenas na imagem para redirecionar à página de detalhes
                   
                        if (produto.id && produto.nome && produto.preco && produto.imagem && produto.descricao) {
                            // Salva as informações do produto no localStorage
                            const produtoInfo = {
                                id: produto.id,
                                nome: produto.nome,
                                preco: produto.preco,
                                imagem: produto.imagem,
                                alt: produto.alt,
                                descricao: produto.descricao // Certifique-se que a descrição está presente
                            };
       
                             // Armazenar no localStorage como uma string JSON
                            localStorage.setItem('produtoSelecionado', JSON.stringify(produtoInfo));
                           
                        }
                        window.location.href = 'desc_prod.html';        
                       
                    });
       
                    // produtoDiv.innerHTML = `
                    // <div id="produtoExibido-${produto.id}" tabindex="0" aria-labelledby="nome-${produto.id} preco-${produto.id} descricao-${produto.id}">
                    //     <h3 id="nome-${produto.id}">${produto.nome}</h3>
                    //     <img tabindex="0" src="${produto.imagem}" alt="${produto.alt}" width="100" height="100">
                    //     <p id="preco-${produto.id}">Preço: R$ ${produto.preco}</p>
                    //     <p id="descricao-${produto.id}">${produto.descricao}</p>
                    //     <button aria-label="Clique aqui para adicionar ao carrinho" data-id="${produto.id}" class="adicionar-carrinho-button">
                    //     Adicionar ao Carrinho
                    //     </button>
                    //     <button aria-label="Clique aqui para adicionar ao favorito" data-id="${produto.id}" class="adicionar-favorito-button">
                    //         Adicionar ao Favorito
                    //     </button>
                    // </div>
                    //`;
       
       
                    container.appendChild(produtoDiv);
       
       
                    // Adicionar eventos de clique para os botões de cada produto
                    const botaoCarrinho = produtoDiv.querySelector('.adicionar-carrinho-button');
                    const botaoFavorito = produtoDiv.querySelector('.adicionar-favorito-button');
       
       
                    botaoCarrinho.addEventListener('click', () => {
                        adicionarAoCarrinhoCallback(produto);
                    });
       
       
                    botaoFavorito.addEventListener('click', () => {
                        adicionarAoFavoritoCallback(produto);
                    });
       
       
                // // Adiciona os eventos dos botões
                // container.addEventListener('click', (event) => {
                //     if (event.target.classList.contains('adicionar-carrinho-button')) {
                //         const produtoId = parseInt(event.target.getAttribute('data-id'));
                //         const produto = produtos.find(p => p.id === produtoId);
                //         if (produto) {
                //             adicionarAoCarrinhoCallback(produto);
                //         }
                //     }
                //     if (event.target.classList.contains('adicionar-favorito-button')) {
                //         const produtoId = parseInt(event.target.getAttribute('data-id'));
                //         const produto = produtos.find(p => p.id === produtoId);
                //         if (produto) {
                //             adicionarAoFavoritoCallback(produto);
                //         }
                //     }
                });
            })
           
        }
       




       
    };




    return {
        renderizarProdutos
    };
})();







