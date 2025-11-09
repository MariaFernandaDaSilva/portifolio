// Este arquivo é responsável pelo dinamismo da página

// Funcionalidade do botão de menu Hamburguer
const menuBtn = document.querySelector("#hamburgerMenuButton");
const mobileMenu = document.querySelector(".hideMenu");

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