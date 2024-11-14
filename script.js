//EXEMPLO: 
function gerarTabuadaPar() {
    // Pega o valor do input
    const numero = parseInt(document.getElementById("inputNumero").value);

    // Seleciona o parágrafo onde o resultado será exibido
    const resultadoElemento = document.getElementById("resultadoTabuada");

    // Verifica se o número é válido
    if (isNaN(numero)) {
        resultadoElemento.innerText = "Por favor, insira um número válido.";
        return;
    }

    // Gera a tabuada apenas para os multiplicadores pares
    let tabuada = `Tabuada do ${numero} (somente multiplicadores pares):\n`;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) { // Apenas números pares
            tabuada += `${numero} x ${i} = ${numero * i}\n`;
        }
    }

    // Exibe o resultado no parágrafo
    resultadoElemento.innerText = tabuada;
}

// Esse evento é acionado quando o documento HTML foi completamente carregado e analisado, ou seja, o DOM (Document Object Model) está pronto para ser manipulado.
// A função passada como argumento será executada assim que o evento DOMContentLoaded for disparado. Isso é útil para garantir que o código seja executado apenas depois que os elementos da página estejam disponíveis.
document.addEventListener("DOMContentLoaded", () => {
    const botaoTabuada = document.getElementById("btnTabuada");
    botaoTabuada.addEventListener("mouseover", gerarTabuadaPar);
});




// função utilitaria
function bloquearCopia() {
    // Bloqueia o clique direito
    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        alert("Cópia desabilitada no site.");
    });

    // Bloqueia a seleção de texto
    document.addEventListener("selectstart", (e) => {
        e.preventDefault();
        alert("Seleção de texto desabilitada.");
    });

    // Bloqueia atalhos de teclado (Ctrl+C, Ctrl+X, Ctrl+U)
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && (e.key === "c" || e.key === "x" || e.key === "u")) {
            e.preventDefault();
            alert("Este atalho está desabilitado no site.");
        }
    });
}

function verificarParImpar() {

    const numero = parseInt(document.getElementById("numParImpar").value);

    const resultadoParImpar = document.getElementById("resultadoParImpar");
    let resto = numero % 2;

    if (resto == 0) {
        resultadoParImpar.innerHTML = "O número é par!"
    }
    else {
        resultadoParImpar.innerHTML = "O número é ímpar!"
    }
}

function calcularMedia() {

    const nota1 = parseFloat(document.getElementById("nota1").value);

    const nota2 = parseFloat(document.getElementById("nota2").value);

    const nota3 = parseFloat(document.getElementById("nota3").value);

    const resultadoMedia = document.getElementById("resultadoMedia");

    let media = (nota1 + nota2 + nota3) / 3;

    resultadoMedia.innerHTML = `a media das notas é: ${media.toFixed(2)}   `;



    if (media >= 7) {
        resultadoMedia = "aprovado"
    }
    else {
        resultadoMedia = "reprovado"
    }
}


function somarPares() {
    const numero = parseInt(document.getElementById("numSomaPares").value);
    let soma = 0;

    if (numero > 0) {
        for (let i = 2; i <= numero; i += 2) {
            soma += i;
        }
        document.getElementById("resultadoSomaPares").innerText = ` a soma dos números pares até ${numero} é:${soma}`;
    } else {
        document.getElementById("resultadoSomaPares").innerText = "por favor digite um número inteiro positivo";
    }

}

function validarLogin() {
    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

    if (usuario === "admin" && senha === "1234") {

        document.getElementByI("resultadoLogin").innerText = "acesso permitido"
    } else {
        document.getElementById("resultadoLogin").innerText = "acesso negado, usuario ou senha incorretos."
    }

}
