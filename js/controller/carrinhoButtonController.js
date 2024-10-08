// js/controller/carrinhoButtonController.js

const CarrinhoButtonController = ((model, view) => {
    const init = () => {
        atualizarView();

        // Adicionar evento de clique para ir à página do carrinho
        document.addEventListener('click', (event) => {
            if (event.target && event.target.id === 'ver-carrinho') {
                window.location.href = 'carrinho.html';
            }
        });

        // Escutar mudanças no carrinho para atualizar o número de itens
        document.addEventListener('carrinhoAtualizado', atualizarView);
    };

    const atualizarView = () => {
        const totalItens = model.getTotalItens();
        view.renderizarBotaoCarrinho(totalItens);
    };

    return {
        init,
    };
})(CarrinhoModel, CarrinhoButtonView);