function alterarTexto(){
    document.querySelector('#alterar').innerHTML = "Conteúdo";
}


document.querySelector("#btn1").onclick = function() {
    let x = document.querySelector("#cor");
    x.style.fontSize = "25px";
    x.style.color = "red";

}
function tocarAudio() {
    const audio = new Audio('erro.mp3');
    audio.play();
}
function alterarImagem() {
    const imagem = document.getElementById('gato');
    imagem.src = 'cat.png';
}
document.getElementById("btn1").onclick = function(){
    document.querySelectorAll(".button").forEach((item)=>{
        item.classList.toggle("cor");
    })
}
