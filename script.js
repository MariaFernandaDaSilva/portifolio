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


// Funcionalidades das porcentagens das habilidades
class SkillLevelController {
    constructor(selector) {
        // Seleciona todos os blocos de skill
        this.skills = document.querySelectorAll(selector);
    }

    setLevel(skillId, percentage) {
        const skill = document.getElementById(skillId);
        if (!skill) return console.warn(`Skill "${skillId}" não encontrada.`);

        const fill = skill.querySelector(".levelFilling");
        const levelText = skill.querySelector("p span.bold").parentElement;

        if (!fill) return console.warn(`.levelFilling não encontrada dentro de "${skillId}".`);
        if (!levelText) return console.warn(`Texto de nível não encontrado dentro de "${skillId}".`);

        // Atualiza a largura da barra
        fill.style.width = percentage + "%";

        // Atualiza o texto do nível
        let nivel;
        if (percentage <= 40) {
            nivel = "Básico";
        } else if (percentage <= 75) {
            nivel = "Intermediário";
        } else {
            nivel = "Avançado";
        }

        levelText.innerHTML = `<span class="bold">Nível: </span>${nivel}`;
    }
}

const controller = new SkillLevelController(".skill");

controller.setLevel("htmlSkill", 80);
controller.setLevel("cssSkill", 80);
controller.setLevel("jsSkill", 45);
controller.setLevel("nodeSkill", 30);
controller.setLevel("reactSkill", 30);
controller.setLevel("pySkill", 40);
controller.setLevel("javaSkill", 25);
controller.setLevel("sqlSkill", 75);
controller.setLevel("excelSkill", 35);
controller.setLevel("wordSkill", 75);
controller.setLevel("pbiSkill", 35);
controller.setLevel("englishSkill", 60);


// Funcionalidade dos botões da lateral
const dots = document.querySelectorAll('.dot-nav a');
const sections = document.querySelectorAll('section');

// Atualiza dot ativo ao rolar
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - window.innerHeight / 2) {
            current = section.getAttribute('id');
        }
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('href') === `#${current}`) {
            dot.classList.add('active');
        }
    });
});