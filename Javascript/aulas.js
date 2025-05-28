document.addEventListener("DOMContentLoaded", function () {

const botao = document.getElementById('hardware?');
const video = document.getElementById('video1');

botao.addEventListener('click', function () {

    video.style.display = 'block';

})

let visivel = false;

botao.addEventListener('click', function () {
  visivel = !visivel;
  video.style.display = visivel ? 'block' : 'none';
});

});