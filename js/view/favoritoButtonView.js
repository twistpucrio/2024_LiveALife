const FavoritoButtonView = (() => {
    const renderizarBotaoFavorito = (numeroDeItens) => {
        const botaoFavorito = document.getElementById('botao-favorito');

        if (botaoFavorito) {
            botaoFavorito.innerHTML = `
                <button id="ver-favorito">
                    Favorito (${numeroDeItens})
                </button>
            `;
        }
    };

    return {
        renderizarBotaoFavorito,
    };
})();