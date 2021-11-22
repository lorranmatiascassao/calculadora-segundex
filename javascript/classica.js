const display = document.getElementById("display");
var numeroNovo = true;
var operador;
var numeroAnterior;

function inserirNumero(numero) {
    atualizarDisplay(numero);
}

function atualizarDisplay(numero){
    if(numeroNovo == true){
        display.value = numero;
        numeroNovo = false;
    }else {
        display.value += numero;
    }
}

function backspace(){
    display.value = display.value.slice(0, -1);
}


function selecionarOperacao(operacaoSelecionada) {
    if(!numeroNovo){
        calcular();
        numeroNovo = true;
        operador = operacaoSelecionada;
        numeroAnterior = Number(display.value);
    }   
}

function operacaoPendente() {
    return operador !== undefined;
}

function calcular() {
    if(operacaoPendente()){
        var numeroAtual = Number(display.value);
        numeroNovo = true;
        if(operador == "+"){
            atualizarDisplay(numeroAnterior + numeroAtual);
        }else if(operador == "-"){
            atualizarDisplay(numeroAnterior - numeroAtual);
        }else if(operador == "*"){
            atualizarDisplay(numeroAnterior * numeroAtual);
        }else if(operador == "/"){
            atualizarDisplay(numeroAnterior / numeroAtual);
        }
    }
}

function chamarIgual() {
    calcular();
    operador = undefined;
}

function limpar() {
    display.value = "0";
    numeroNovo = true;
    numeroAnterior = undefined;
    operador = undefined;
}

function inserirDecimal() {
    if(display.value.indexOf(",") == -1){
        
    }
}