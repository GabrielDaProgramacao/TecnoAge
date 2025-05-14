document.addEventListener("DOMContentLoaded", function () {
  const artigo = document.getElementById("cursoHardware");

  artigo.addEventListener("click", function () {
    window.location.href = "hardware_software.html";
  });

  const curso = document.getElementById("cursoHardware");
  const botao = document.getElementById("botao_curso");

  curso.addEventListener("mouseenter", function () {
    botao.style.background = "linear-gradient(45deg, #dbbd91, #f0dfc5)";
    botao.style.color = "white";
    botao.style.transition = "background 0.2s ease, color 0.2s ease";
  });

  curso.addEventListener("mouseleave", function () {
    botao.style.background = "";
    botao.style.color = "";
  });

  curso.addEventListener("click", function () {
    botao.style.background = "linear-gradient(45deg, #dbbd91, #f0dfc5)";
    botao.style.color = "white";
  });
});