// Este arquivo é responsável pelo dinamismo da página

// Funcionalidade do botão de menu Hamburguer
const menuBtn = document.querySelector("#hamburgerMenuButton");
const mobileMenu = document.querySelector(".hideMenu");

const menuLinks = mobileMenu.querySelectorAll("a");

menuBtn.addEventListener("click", () => {
    // Alterna o estado do menu
    mobileMenu.classList.toggle("ativo");

    // Se o menu ficou ativo, trava o scroll
    if (mobileMenu.classList.contains("ativo")) {
        document.body.classList.add("no-scroll");
    } else {
        document.body.classList.remove("no-scroll");
    }
})

// Fecha o menu ao clicar em qualquer link
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("ativo");
        document.body.classList.remove("no-scroll");
    });
});