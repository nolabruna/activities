let listaFilmes = [
  "https://br.web.img2.acsta.net/medias/nmedia/18/92/34/89/20194741.jpg",
  "https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_SPIDER%20NO%20WAY%20HOME.JPG",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/Avengers_Infinity_War.jpg/250px-Avengers_Infinity_War.jpg",
];

let listaLinks = [
  "https://pt.wikipedia.org/wiki/O_Senhor_dos_An%C3%A9is:_As_Duas_Torres",
  "https://www.adorocinema.com/filmes/filme-256880/",
  "https://pt.wikipedia.org/wiki/Avengers:_Infinity_War",
];
//copiar o endereço das imagens do google

for (let i = 0; i < listaFilmes.length; i++) {
  document.write(
    "<a href=" + listaLinks[i] + "><img src=" + listaFilmes[i] + "></a>"
  );
}

function adicionar() {
  const urlImagem = document.getElementById("urlImagem").value;
  const urlSite = document.getElementById("urlSite").value;
  document.body.innerHTML +=
    "<a href=" + urlSite + "><img src=" + urlImagem + "></a>";
}
