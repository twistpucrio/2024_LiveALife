// js/view/carrinhoButtonView.js

const CarrinhoButtonView = (() => {
    const renderizarBotaoCarrinho = (numeroDeItens) => {
        const botaoCarrinho = document.getElementById('botao-carrinho');

        if (botaoCarrinho) {
            botaoCarrinho.innerHTML = `
                <button id="ver-carrinho">
                    Carrinho (${numeroDeItens})
                </button>
            `;
        }
    };

    return {
        renderizarBotaoCarrinho,
    };
})();