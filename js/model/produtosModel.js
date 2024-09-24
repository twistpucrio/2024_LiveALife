// js/model/produtosModel.js

const ProdutosModel = (() => {
    let produtos = [
        { id: 1, nome: 'Produto A', preco: 100 },
        { id: 2, nome: 'Produto B', preco: 150 },
        { id: 3, nome: 'Produto C', preco: 200 },
        // ... outros produtos
    ];

    const getProdutos = () => {
        return produtos;
    };

    const adicionarProduto = (produto) => {
        produtos.push(produto);
    };

    /**
     * Função de busca de produtos.
     * @param {Object} criterios - Objeto contendo os critérios de busca.
     * @param {string} [criterios.nome] - Nome ou parte do nome do produto.
     * @param {number} [criterios.precoMin] - Preço mínimo do produto.
     * @param {number} [criterios.precoMax] - Preço máximo do produto.
     * @returns {Array} - Lista de produtos que correspondem aos critérios.
     */
    const buscarProdutos = (criterios) => {
        return produtos.filter(produto => {
            let corresponde = true;

            if (criterios.nome) {
                const nomeBusca = criterios.nome.toLowerCase();
                const nomeProduto = produto.nome.toLowerCase();
                corresponde = corresponde && nomeProduto.includes(nomeBusca);
            }

            if (criterios.precoMin !== undefined) {
                corresponde = corresponde && produto.preco >= criterios.precoMin;
            }

            if (criterios.precoMax !== undefined) {
                corresponde = corresponde && produto.preco <= criterios.precoMax;
            }

            return corresponde;
        });
    };

    return {
        getProdutos,
        adicionarProduto,
        buscarProdutos
    };
})();
