const contentData = {
  scarpin: {
    sections: [
      {
        title: "Tipos de Salto",
        paragraphs: [
          "Salto Alto",
          "Salto Médio",
          "Salto Baixo",
          "Salto Agulha",
          "Salto Bloco",
        ],
      },
      {
        title: "Materiais",
        paragraphs: [
          "Couro Legítimo",
          "Camurça",
          "Verniz",
          "Cetim",
          "Pele de Cobra",
        ],
      },
      {
        title: "Cores e Estilos",
        paragraphs: ["Tons Neutros", "Cores Vibrantes", "Estampas"],
      },
      {
        title: "Ocasiões",
        paragraphs: [
          "Festas e Eventos",
          "Casamento",
          "Casual Chic",
          "Trabalho",
        ],
      },
      {
        title: "Coleções",
        paragraphs: [
          "Edições Limitadas",
          "Scarpins Clássicos",
          "Colaborações com Designers",
          "Lançamentos Recentes",
        ],
      },
    ],
  },
  sandal: {
    sections: [
      {
        title: "Tipos de Sandálias",
        paragraphs: [
          "Salto Alto",
          "Salto Baixo",
          "Rasteiras",
          "Plataforma",
          "Tiras",
        ],
      },
      {
        title: "Materiais",
        paragraphs: [
          "Couro Legítimo",
          "Camurça",
          "Tecido",
          "Verniz",
          "Materiais Sustentáveis",
        ],
      },
      {
        title: "Cores e Estilos",
        paragraphs: ["Tons Neutros", "Cores Vibrantes", "Estampas"],
      },
      {
        title: "Ocasiões",
        paragraphs: ["Casual", "Festa", "Praia", "Trabalho", "Eventos Formais"],
      },
      {
        title: "Coleções",
        paragraphs: [
          "Edições Limitadas",
          "Sandálias Clássicas",
          "Colaborações com Designers",
          "Lançamentos Recentes",
        ],
      },
    ],
  },
  boot: {
    sections: [
      {
        title: "Tipos de Botas",
        paragraphs: [
          "Cano Alto",
          "Cano Médio",
          "Cano Baixo",
          "Over-the-Knee",
          "Chelsea",
        ],
      },
      {
        title: "Materiais",
        paragraphs: [
          "Couro Legítimo",
          "Camurça",
          "Verniz",
          "Couro Texturizado",
        ],
      },
      {
        title: "Estilos de Salto",
        paragraphs: ["Salto Fino", "Salto Bloco", "Plataforma", "Flat"],
      },
      {
        title: "Cores e Estilos",
        paragraphs: ["Tons Clássicos", "Cores Vibrantes", "Estampas"],
      },
      {
        title: "Ocasiões",
        paragraphs: ["Casual", "Inverno/Outono", "Festas e Eventos"],
      },
    ],
  },
  mules: {
    sections: [
      {
        title: "Tipos de Mules",
        paragraphs: ["Salto Alto", "Salto Médio", "Planas", "Tiras"],
      },
      {
        title: "Materiais",
        paragraphs: ["Couro Legítimo", "Tecido", "Verniz", "Camurça"],
      },
      {
        title: "Cores e Estilos",
        paragraphs: ["Neutros", "Cores Sofisticadas", "Estampas"],
      },
      {
        title: "Ocasiões",
        paragraphs: ["Casual Chic", "Dia a Dia", "Festas e Eventos"],
      },
      {
        title: "Tendências",
        paragraphs: ["Minimalistas", "Com Detalhes"],
      },
    ],
  },
  shoulderBag: {
    sections: [
      {
        title: "Tipos de Bolsas de Ombro",
        paragraphs: ["Estruturadas", "Desestruturadas", "Tote", "Hobo"],
      },
      {
        title: "Materiais",
        paragraphs: [
          "Couro Legítimo",
          "Couro Texturizado",
          "Tecido Premium",
          "Couro Exótico",
        ],
      },
      {
        title: "Cores e Acabementos",
        paragraphs: [
          "Cores Clássicas",
          "Cores Modernas",
          "Acabamentos Metalizados",
        ],
      },
      {
        title: "Tamanhos",
        paragraphs: ["Pequena", "Média", "Grande"],
      },
      {
        title: "Ocasiões",
        paragraphs: ["Trabalho", "Dia a Dia", "Passeios e Eventos"],
      },
    ],
  },
  handBag: {
    sections: [
      {
        title: "Tipos de Bolsas de Mão",
        paragraphs: ["Estruturadas", "Mini Bolsas", "Alça Removível"],
      },
      {
        title: "Materiais",
        paragraphs: ["Couro Legítimo", "Cetim", "Couro Exótico", "Verniz"],
      },
      {
        title: "Cores e Detalhes",
        paragraphs: [
          "Cores Clássicas",
          "Cores Sofisticadas",
          "Detalhes em Pedraria, Fivelas e Bordados",
        ],
      },
      {
        title: "Ocasiões",
        paragraphs: ["Eventos Formais", "Casamentos", "Jantares"],
      },
    ],
  },
  clutches: {
    sections: [
      {
        title: "Tipos de Clutches",
        paragraphs: ["Estruturadas", "Envelope", "Com Alça de Mão"],
      },
      {
        title: "Materiais",
        paragraphs: [
          "Couro Premium",
          "Cetim",
          "Veludo",
          "Bordado com Pedraria",
        ],
      },
      {
        title: "Cores e Acabamentos",
        paragraphs: [
          "Cores Metálicas",
          "Tons Clássicos",
          "Estampas ou Texturas",
        ],
      },
      {
        title: "Ocasiões",
        paragraphs: ["Festas e Eventos", "Casamentos", "Coquetéis"],
      },
    ],
  },
};

// Função para atualizar o conteúdo de acordo com a categoria
function updateContent(category) {
  const content = contentData[category];
  const contentDivs = document.querySelectorAll(".content");

  // Limpa o conteúdo existente antes de atualizar
  contentDivs.forEach((div) => {
    const titleElement = div.querySelector(".content-title");
    const paragraphs = div.querySelectorAll("p");

    titleElement.textContent = ""; // Limpa o título anterior
    paragraphs.forEach((p) => {
      p.textContent = ""; // Limpa os parágrafos anteriores
    });
  });

  // Itera sobre as seções e atualiza o conteúdo
  content.sections.forEach((section, index) => {
    const contentDiv = contentDivs[index];
    if (!contentDiv) return; // Garante que o índice não exceda o número de contentDivs

    const titleElement = contentDiv.querySelector(".content-title");
    const paragraphs = contentDiv.querySelectorAll("p");

    // Atualiza o título
    titleElement.textContent = section.title;

    // Atualiza os parágrafos
    section.paragraphs.forEach((text, paraIndex) => {
      if (paragraphs[paraIndex]) {
        paragraphs[paraIndex].textContent = text;
      }
    });
  });
}

// Funções para adicionar e remover a classe "pressed"
function addPressed() {
  navToggle.classList.add("pressed");
}
function removePressed() {
  navToggle.classList.remove("pressed");
}

// Referências aos botões e conteúdo
const btnScarpin = document.getElementById("btn-scarpin");
const btnSandal = document.getElementById("btn-sandal");
const btnBoot = document.getElementById("btn-boot");
const btnMules = document.getElementById("btn-mules");
const btnShoulderBag = document.getElementById("btn-shoulder-bag");
const btnHandBag = document.getElementById("btn-hand-bag");
const btnClutches = document.getElementById("btn-clutches");
const navToggle = document.querySelector(".nav-toggle");
const toggleContent = document.getElementById("toggle-content");

// Eventos de mouseenter e mouseleave
btnScarpin.addEventListener("mouseenter", () => {
  addPressed();
  updateContent("scarpin");
});
btnSandal.addEventListener("mouseenter", () => {
  addPressed();
  updateContent("sandal");
});
btnBoot.addEventListener("mouseenter", () => {
  addPressed();
  updateContent("boot");
});
btnMules.addEventListener("mouseenter", () => {
  addPressed();
  updateContent("mules");
});
btnShoulderBag.addEventListener("mouseenter", () => {
  addPressed();
  updateContent("shoulderBag");
});
btnHandBag.addEventListener("mouseenter", () => {
  addPressed();
  updateContent("handBag");
});
btnClutches.addEventListener("mouseenter", () => {
  addPressed();
  updateContent("clutches");
});

navToggle.addEventListener("mouseleave", removePressed);
toggleContent.addEventListener("mouseleave", removePressed);

const radioButtons = document.querySelectorAll('input[name="radio-btn"]');
const shoeImage = document.getElementById("shoe-image");
const shoeTitle = document.getElementById("shoe-title");

// Função para trocar a imagem de acordo com a seleção
function updateShoeImage() {
  // Percorre todos os inputs radio
  radioButtons.forEach((radio) => {
    // Verifica se o radio está selecionado
    if (radio.checked) {
      // Atualiza o src da imagem com o valor do input radio
      shoeImage.src = radio.value;
      // Atualiza o texto do h2 com o atributo data-title
      shoeTitle.textContent = radio.getAttribute("data-title");
    }
  });
}

// Adiciona o evento change para cada input radio
radioButtons.forEach((radio) => {
  radio.addEventListener("change", updateShoeImage);
});
