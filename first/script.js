function calcular() {
  const notas = document.getElementsByClassName("notas");

  const nota1 = Number(notas[0].value);
  const nota2 = Number(notas[1].value);
  const nota3 = Number(notas[2].value);
  const nota4 = Number(notas[3].value);

  const media = (nota1 + nota2 + nota3 + nota4) / 4;
  document.getElementById("resultado").innerHTML =
    media < 6
      ? `Sua média foi ${media}, você reprovou!`
      : `Sua média foi ${media}, você aprovou!`;
}
