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
controller.setLevel("pySkill", 40);
controller.setLevel("sqlSkill", 75);
controller.setLevel("pbiSkill", 35);
controller.setLevel("englishSkill", 60);


// Funcionalidade dos botões da lateral
const dots = document.querySelectorAll('.dot-nav a');
const sections = document.querySelectorAll('section');

// Atualiza dot ativo ao rolar

// Adiciona um "ouvinte" (listener) para o evento de rolagem da janela
// Ou seja, toda vez que o usuário rolar a página, essa função será executada.
window.addEventListener('scroll', () => {
    
    // Variável para armazenar o id da seção atual visível na tela
    let current = '';
    
    // Percorre todas as seções da página
    sections.forEach(section => {
        // Pega a distância (em pixels) entre o topo da seção e o topo da página
        const sectionTop = section.offsetTop;
        
        // Verifica se a rolagem atual (pageYOffset) é maior que o topo da seção
        // menos metade da altura da janela.
        // Isso significa que a seção entrou aproximadamente no meio da tela.
        if (pageYOffset >= sectionTop - window.innerHeight / 2) {
            // Atualiza a variável 'current' com o id da seção atual
            current = section.getAttribute('id');
        }
    });

    // Percorre todos os "pontos" (dots) do menu de navegação lateral ou superior
    dots.forEach(dot => {
        // Remove a classe 'active' de todos os dots
        dot.classList.remove('active');
        
        // Se o href do dot corresponde à seção atual (por exemplo, "#sobre"),
        // adiciona a classe 'active' para destacar esse dot.
        if (dot.getAttribute('href') === `#${current}`) {
            dot.classList.add('active');
        }
    });
});


// Seleciona todos os elementos com a classe .animar
const elementos = document.querySelectorAll('.animar');

// Cria um novo observador (IntersectionObserver)
// Ele vai "observar" quando os elementos entram ou saem da área visível da janela (viewport)
const observer = new IntersectionObserver((entradas) => {
  
  // 'entradas' é um array de objetos, cada um representando um elemento observado
  entradas.forEach((entrada) => {
    
    // Verifica se o elemento está visível (intersectando com a viewport)
    if (entrada.isIntersecting) {
      // Adiciona a classe 'ativo' — normalmente usada para iniciar uma animação CSS
      entrada.target.classList.add('ativo');
    } else {
      // Remove a classe 'ativo' quando o elemento sai da área visível
      // (isso é opcional — se quiser que a animação aconteça só uma vez, pode remover essa linha)
      entrada.target.classList.remove('ativo');
    }
  });
  
}, {
  // Opções do observador:
  // threshold: define quanto do elemento precisa estar visível para considerar "intersectando"
  threshold: 0.2 // aqui: 20% visível já ativa
});

// Faz o observador observar cada elemento selecionado
elementos.forEach(el => observer.observe(el));

