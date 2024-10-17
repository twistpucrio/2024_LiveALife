

var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementsByClassName("close")


if (bar){
    bar.addEventListener("click", () => {
        nav.classList.add('active');
    })
}


if (close){
    close.addEventListener("click", () => {
        nav.classList.remove('active');
    })
}




// smallImg[0].onclick = function(){
//     MainImg.src = smallImg[0].src;
// }


// smallImg[1].onclick = function(){
//     MainImg.src = smallImg[1].src;
// }


// smallImg[2].onclick = function(){
//     MainImg.src = smallImg[2].src;
// }


// smallImg[3].onclick = function(){
//     MainImg.src = smallImg[3].src;
// }




/* pou-up */
// Lógica para mostrar o carrinho ao clicar no ícone
document.getElementById('botao-carrinho').addEventListener('click', (event) => {
    event.preventDefault();  // Previne o redirecionamento
    const carrinhoContainer = document.getElementById('carrinho-container');
    carrinhoContainer.style.display = carrinhoContainer.style.display === 'none' ? 'block' : 'none';
});




// // Inicializando o controlador do carrinho ao carregar a página
// CarrinhoController.init();




// Recuperar o produto selecionado do localStorage
const produtoSelecionado = JSON.parse(localStorage.getItem('produtoSelecionado'));


if (produtoSelecionado) {
    // Atualizar a página com as informações do produto
    document.getElementById('MainImg').src = produtoSelecionado.imagem;
    document.querySelector('.single-pro-details h4').textContent = produtoSelecionado.nome;
    document.querySelector('.single-pro-details h2').textContent = `R$ ${produtoSelecionado.preco}`;
    document.querySelector('.single-pro-details span').textContent = produtoSelecionado.descricao;
} else {
    console.error('Nenhum produto foi encontrado no localStorage.');
}


/* Nav - responsividade */





