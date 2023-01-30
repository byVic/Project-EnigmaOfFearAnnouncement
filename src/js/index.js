const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;
const linkDaSteam = "https://store.steampowered.com/app/1507580/Enigma_do_Medo/";
const botaoSteam = document.querySelector(".botao-steam");
const sobrenos = document.querySelector(".sobrenos");
const linkDoSobrenos = "https://www.catarse.me/ordem";
const saibamais = document.querySelector(".saibamais");
const linkDoSaibamais = "https://ordemparanormal.fandom.com/wiki/Ordem_Paranormal:_Enigma_do_Medo"
const logo = document.querySelector(".logo");
const linkDoMedo = "https://ordemparanormal.fandom.com/wiki/Culto_do_Medo"

function openInNewTab(linkDoMedo){
    const janelamedo = window.open(linkDoMedo, "_blank")
    janelamedo.focus()
}

function openInNewTab(linkDoSaibamais){
    const janelawiki = window.open(linkDoSaibamais, "_blank")
    janela.focus()
}


function openInNewTab(linkDoSobrenos){
    const janelacatarse = window.open(linkDoSobrenos, "_blank")
    janelacatarse.focus()
}

function openInNewTab(linkDaSteam){
    const janela = window.open(linkDaSteam, "_blank")
    janela.focus()
}

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", "")
})

botaoSteam.addEventListener("click", () => {
    openInNewTab(linkDaSteam)
})

sobrenos.addEventListener("click", () => {
    openInNewTab(linkDoSobrenos)
})

saibamais.addEventListener("click", () => {
    openInNewTab(linkDoSaibamais)
})

logo.addEventListener("click", () => {
    openInNewTab(linkDoMedo)
})







