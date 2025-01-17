//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Criando Variaveis
var listaDeNomesSorteados = []; //também poderia ser let listaDeNomesSorteados = [];

// Criando Funções
// Função de adcionar os amigos ao array listaDeNomesSorteados
function adicionarAmigo() {
    var nomeAmigo = document.querySelector('input').value;
    if(nomeAmigo == '') {
        alert("Por favor, insira um nome.");
        console.log(listaDeNomesSorteados);
    } else {
        listaDeNomesSorteados.push(nomeAmigo);
        alert("O nome: " + nomeAmigo + " foi adicionado.");
        console.log(listaDeNomesSorteados);
    }
    limparCampo();
}

// Função para Limpar o campo de imput
function limparCampo() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}