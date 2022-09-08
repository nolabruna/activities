let listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];
// para chamar o primeiro elemento, colocar o índice 0

//let filme1 = "Yesterday";
//let filme2 = "A chegada";
//let filme3 = "Escola de Rock";

listaFilmes.push("Harry Potter 2"); //serve para adicionar elementos novos na lista

//experimente o h1, strong (COLOQUEI O p como se estivisse no HTML)
// listas também chamadas de arrays, vetores. Facilitam para não ter que criar várias variáveis

//document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2] + "</p>");
// document.write("<p>" + listaFilmes[3] + "</p>");

// declaração; condição; modificador/expressão final
for (let indice = 0; indice < listaFilmes.length; indice++) {
  document.write("<p>" + listaFilmes[indice] + "</p>");
}
//agora que coloquei listaFilmes.length quanto mais elementos colocar na minha lista, mais aparecerão na tela!
