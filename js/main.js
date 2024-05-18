const abrir = document.getElementById("abrirModal");
const fechar = document.getElementById("fecharModal");
const fundo = document.getElementById("fundoModal");
const conteudo = document.getElementById("conteudoModal");
const modal = document.getElementById("modal");
let estadoDoModal = false;

function abrirEFechar() {
  if (estadoDoModal) {

    conteudo.classList.remove("open");
    conteudo.classList.add("close");
    setTimeout(() => {
      modal.classList.add("clicado");
      estadoDoModal = false;
    }, 500)


  } else {
    modal.classList.remove("clicado");
    conteudo.classList.remove("close");
    conteudo.classList.add("open");
    estadoDoModal = true;
  }
}

abrir.addEventListener("click", (e) => {
  e.preventDefault();
  abrirEFechar()
});

fechar.addEventListener("click", (e) => {
  e.preventDefault();
  abrirEFechar()
});

fundo.addEventListener("click", () => abrirEFechar());

console.log("Olá Amiguinho!");