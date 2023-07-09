/*
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande 
*/

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

       removerSelecaoDoPersonagem();

       personagem.classList.add('selecionado');

       alterarImagemPersonagemSelecionado(personagem);

       alterarNomePersonagem(personagem);

       alterarDescricaoPersonagem(personagem);

    })
})

function alterarDescricaoPersonagem(personagem) {
    const descicaoPesonagem = document.getElementById('descricao-personagem');
    descicaoPesonagem.innerText = personagem.getAttribute('data-descripition');
}

function alterarNomePersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/assets/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personegemSelecionado = document.querySelector('.selecionado');
    personegemSelecionado.classList.remove('selecionado');
}
