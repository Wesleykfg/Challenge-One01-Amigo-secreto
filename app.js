//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Criando Variaveis
var listaDeNomesSorteados = []; //também poderia ser let listaDeNomesSorteados = [];
var quantidadeDeNomes = 0;

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
        quantidadeDeNomes = listaDeNomesSorteados.length;
        console.log(quantidadeDeNomes);
        listaAmigos();
    }
    limparCampo();
}

listaHTML();

// Função para Limpar o campo de imput
function limparCampo() {
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
}

// Função de adcionar os valors do array na lista do html e mostrar na pagina
function listaAmigos() {
    var lista = document.querySelector('ul');
    lista.innerHTML = "";
    for (var i = 0; i < listaDeNomesSorteados.length; i++) {
        var itemHTML = document.createElement('li');
        itemHTML.appendChild(document.createTextNode(listaDeNomesSorteados[i]));
        lista.appendChild(itemHTML);
    }
}

// Função gerar nome aleatorio
