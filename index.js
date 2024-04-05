const botoes = document.querySelectorAll(".btn");
const textos = document.querySelectorAll(".conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("active");
        }

        botoes[i].classList.add("active");
    }
}