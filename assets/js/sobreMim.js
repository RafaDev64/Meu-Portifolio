// Função para abrir/fechar o menu hambúrguer
function toggleMenu() {
    const navMenu = document.getElementById('topMenu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}