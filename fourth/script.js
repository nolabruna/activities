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

function adicionarElemento(linkSite, linkImagem) {
  let listaElemento = document.getElementById("listaFilmes");
  listaElemento.innerHTML +=
    "<a href=" + linkSite + "><img src=" + linkImagem + "></a>";
}

for (let i = 0; i < listaFilmes.length; i++) {
  adicionarElemento(listaLinks[i], listaFilmes[i]);
}

function adicionar() {
  const imagem = document.getElementById("urlImagem").value;
  const site = document.getElementById("urlSite").value;
  //guardar os filmes
  if (!listaFilmes.includes(imagem)) {
    adicionarElemento(site, imagem);
    listaFilmes.push(imagem);
    listaLinks.push(site);
  }
}
