let numerosSorteados = [];
let numeroElementosMax = 5; 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag)
        campo.innerHTML = texto;
        responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function mensagemInicial(){
    exibirTexto('h1', 'Jogo do numero secreto');
    exibirTexto('p', `Escolha um número de 1 a ${numeroElementosMax}`);
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';

    if (chute == numeroSecreto){
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p',`Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('novoJogo').setAttribute('disabled', true);
    } else {
        chute > numeroSecreto ? exibirTexto('p', 'Errou, digite um numero menor') : exibirTexto('p', 'Errou, digite um numero maior');
        tentativas++;
        limparCampo();
    }
}         

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random()*numeroElementosMax +1);
    let quantidadeElementos = numerosSorteados.length;
    if (quantidadeElementos == numeroElementosMax){
        numerosSorteados = [];
    }
        
    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reinciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('novoJogo').removeAttribute('disabled');
}

