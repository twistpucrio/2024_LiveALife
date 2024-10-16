const FavoritoButtonView = (() => {
    const renderizarBotaoFavorito = () => {
        const botaoFavorito = document.getElementById('botao-favorito');

        if (botaoFavorito) {
            botaoFavorito.innerHTML = `
                <button id="ver-favorito">
                    Favoritos
                </button>
            `;
        }
    };

    return {
        renderizarBotaoFavorito,
    };
})();