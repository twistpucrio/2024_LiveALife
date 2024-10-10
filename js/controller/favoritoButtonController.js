const FavoritoButtonController = ((model, view) => {
    const init = () => {
        atualizarView();

        // Adicionar evento de clique para ir à página do carrinho
        document.addEventListener('click', (event) => {
           

            if (event.target && event.target.id === 'ver-favorito') {
                window.location.href = 'favorito.html';
            }

        });

        // Escutar mudanças no carrinho para atualizar o número de itens
        document.addEventListener('favoritoAtualizado', atualizarView);
    };

    const atualizarView = () => {
        const totalItens = model.getTotalItens();
        view.renderizarBotaoFavorito(totalItens);
    };

    return {
        init,
    };
})(FavoritoModel, FavoritoButtonView);