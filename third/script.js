let numeroSecreto; // quando carrega a página declara o numeroSecreto, a função chutar, a função mudarNumero e executa a função mudarNumero, que vai alterar o numero Secreto
// a função chutar() só vai ser executada com a utilização do botão
//atribuição, um igual só =
// == faz uma comparação
// === faz comparação e considera o tipo de operador (string, number etc)
// linha fora da função é executada antes da função, computador sorteia o número primeiro e deixa ele guardado
// depois a função é executada, e chutamos várias vezes até acertar
let tentativas = 3;
const elementoResultado = document.getElementById("resultado");
let pontos = 0;
const elementoPontos = document.getElementById("pontos");

function chutar() {
  if (tentativas > 0) {
    const chute = parseInt(document.getElementById("valor").value);
    console.log(chute);
    if (chute === numeroSecreto) {
      elementoResultado.innerHTML = "Você acertou! Novo número gerado!";
      mudarNumero(false);
      pontos++;
      elementoPontos.innerHTML = "Pontuação: " + pontos;
    } else if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10!";
    } else {
      tentativas = tentativas - 1;
      elementoResultado.innerHTML =
        tentativas === 0
          ? "Você errou 3 vezes. O número secreto é o " + numeroSecreto
          : "Que pena, você errou! Agora você tem " +
            tentativas +
            " tentativas. O número digitado é" +
            (numeroSecreto > chute ? " menor" : " maior") +
            " que o número secreto.";
    }
  }
}

function mudarNumero(mostrarMensagem) {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
  if (mostrarMensagem) {
    elementoResultado.innerHTML =
      "Novo número secreto gerado, você tem 3 tentativas novamente!";
  }
}

mudarNumero(false);

//desafios: colocar número de tentativas, na terceira tentativa você imprime o valor com a resposta certa
// errou, o número secreto é maior ou menor do que o que você colocou
