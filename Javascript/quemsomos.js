document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "img/ai-generated-9008727_1280.jpg",
    "img/senior-3336451_1280.jpg",
    "img/children-306607_1280.jpg"
  ];
  let imagemnoindex = 0;
  let intervalo;

  const carouselImage = document.getElementById("carousel-image");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const container = document.getElementById("carrossel_container");

  function MostreImagem(imagem) {
    carouselImage.src = images[imagem];
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

  function MostreImagem(imagem) {
  carouselImage.style.opacity = 0;
  setTimeout(() => {
    carouselImage.src = images[imagem];
    carouselImage.style.opacity = 1;
  }, 200);
}
});

// Criar javascript para que o texto seja modificado a medida que a imagem é modificada //
// Adicionar transição suave aos textos //