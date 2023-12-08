function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
  
    let mensagem = "";
   
    // Para calcular a média
    let media = (nota1 + nota2 + nota3 + nota4) /4;
    
    // 1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :("
    if (media == 0){
        mensagem = "Infelizmente você zerou a prova :(.";
    }

    else if (media >=0.1 && media <= 3) {
        mensagem = "Caramba, deu ruim, você obteve a média abaixo do esperado! Estude mais e tente novamente!";
    }

    else if (media >=3.1 && media <= 5.9){
        mensagem = "Você está evoluindo! Falta pouco para a média.";
    }
    
    else if (media >= 6 && media <= 7) {
        mensagem = "Você está na média.";
    }

    else if (media >= 7.1 && media <= 9.9) {
        mensagem = "Notão, parabéns!";
    }

    else if (media >= 10) {
        mensagem = "Hoje é seu aniversário ? Por que você ta de parabéns!";
    }

    document.getElementById("situacaoAluno").innerHTML = "A sua média é: " + media + "<br>" + mensagem;
}