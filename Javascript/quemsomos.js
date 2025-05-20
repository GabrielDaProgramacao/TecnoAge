document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "img/ai-generated-9008727_1280.jpg",
    "img/senior-3336451_1280.jpg",
    "img/children-306607_1280.jpg"
  ];

  const textos = [
    "A Tecnosenior é uma organização sem fins lucrativos que acredita no poder transformador do conhecimento. Nosso objetivo é oferecer oportunidades de aprendizado a todos que buscam crescer e se desenvolver, promovendo inclusão e valorizando cada trajetória.",
    "Acreditamos que o envelhecimento pode ser ativo e produtivo, com aprendizado contínuo ao longo da vida.",
    "Nossa missão é unir gerações por meio do conhecimento e do respeito mútuo, promovendo uma sociedade mais justa e inclusiva."
  ];

  let imagemnoindex = 0;
  let intervalo;

  const carouselImage = document.getElementById("carousel-image");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const container = document.getElementById("carrossel_container");
  const textoatual = document.getElementById("texto_quem_somos");

  function MostreImagem(index) {
    carouselImage.style.opacity = 0;
    textoatual.style.opacity = 0;

    setTimeout(() => {
      carouselImage.src = images[index];
      textoatual.textContent = textos[index];

      carouselImage.style.opacity = 1;
      textoatual.style.opacity = 1;
    }, 300);
  }

  prevButton.addEventListener("click", () => {
    imagemnoindex = (imagemnoindex - 1 + images.length) % images.length;
    MostreImagem(imagemnoindex);
  });

  nextButton.addEventListener("click", () => {
    imagemnoindex = (imagemnoindex + 1) % images.length;
    MostreImagem(imagemnoindex);
  });

  function comecarcarrossel() {
    intervalo = setInterval(() => {
      imagemnoindex = (imagemnoindex + 1) % images.length;
      MostreImagem(imagemnoindex);
    }, 6000);
  }

  function pararcarrossel() {
    clearInterval(intervalo);
  }

  container.addEventListener("mouseenter", pararcarrossel);
  container.addEventListener("mouseleave", comecarcarrossel);

  comecarcarrossel();
  MostreImagem(imagemnoindex);
});