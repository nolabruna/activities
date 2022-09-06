const elementoValorConvertido = document.getElementById("valorConvertido");
const valorElemento = document.getElementById("valor");

function converter(cambio, nomeDaMoeda, casasDecimais) {
  const valor = valorElemento.value;
  const valorEmDolar = parseFloat(valor);

  const valorEmOutraMoeda = valorEmDolar * cambio;
  elementoValorConvertido.innerHTML =
    "O resultado em " +
    nomeDaMoeda +
    " é " +
    valorEmOutraMoeda.toFixed(casasDecimais);
}
