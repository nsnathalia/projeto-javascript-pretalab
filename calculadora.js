// SOMA
function somar(){
    const numero1 = parseFloat(document.getElementById("numero1Soma").value);
    const numero2 = parseFloat(document.getElementById("numero2Soma").value);

    const resultadoTotalSoma = (numero1+numero2);

    document.getElementById("resultadoSoma").innerHTML = resultadoTotalSoma;
}

function subtrair() {
    const numero1 = parseFloat(document.getElementById("numero1Sub").value);
    const numero2 = parseFloat(document.getElementById("numero2Sub").value);

        const resultadoTotalSubtracao = (numero1-numero2);
        document.getElementById("resultadoSub").innerHTML = resultadoTotalSubtracao;

}

function multiplicar() {
    const numero1 = parseFloat(document.getElementById("numero1Mult").value);
    const numero2 = parseFloat(document.getElementById("numero2Mult").value);

    const resultadoTotalMultiplicacao = (numero1*numero2);
    document.getElementById("resultadoMult").innerHTML = resultadoTotalMultiplicacao; 
}

function dividir() {
    const numero1 = parseFloat(document.getElementById("numero1Div").value);
    const numero2 = parseFloat(document.getElementById("numero2Div").value);

    const resultadoTotalDivisao = (numero1/numero2);
    document.getElementById("resultadoDiv").innerHTML = resultadoTotalDivisao;

}

