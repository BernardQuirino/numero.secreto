let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou');
        let palavraTentativa = tentativas > 1 ? 'tentaivas' : 'tentativa';
        let mensagemTentativas = ('p', `Voce descobriu o numero secreto em ${tentativas} ${palavraTentativa}`);
    exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'o numero é menor que o chute');
    } else {
        exibirTextoNaTela('p', 'o numero é maior que o chute');
    }
    tentativas++;
    limparCampo();
   }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *  numeroLimite + 1);
    let quantidadedeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadedeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio;
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
}

