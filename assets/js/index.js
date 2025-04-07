// Função para abrir/fechar o menu hambúrguer
function toggleMenu() {
    const navMenu = document.getElementById('topMenu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Efeito de digitação
const textLines = [
    "Sou Desenvolvedor Junior, apaixonado por tecnologia e os bastidores da programação.",
    "Logo abaixo, você encontrará uma seleção dos meus melhores trabalhos e projetos que refletem minha experiência e habilidades."
];

const typingEffect = document.getElementById('typingEffect');
let lineIndex = 0;
let charIndex = 0;

function typeLine() {
    if (lineIndex < textLines.length) {
        if (charIndex < textLines[lineIndex].length) {
            typingEffect.textContent += textLines[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, 30);
        } else {
            typingEffect.textContent += '\n';
            lineIndex++;
            charIndex = 0;
            setTimeout(typeLine, 500);
        }
    }
}

typeLine();

// Botão de projetos
document.getElementById("botaoProjetos").onclick = function() {
    window.location.href = "projetos.html";
};