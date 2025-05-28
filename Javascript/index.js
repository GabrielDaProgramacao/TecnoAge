window.addEventListener('DOMContentLoaded', () => {
  const tutorialModal = document.getElementById('tutorialModal');
  const centralVideo = document.getElementById('centralVideo');
  const btnSim = document.getElementById('btnSim');
  const btnNao = document.getElementById('btnNao');
  const btnFecharVideo = document.getElementById('btnFecharVideo');
  const btnReassistir = document.getElementById('btnReassistirTutorial');

  const mostrarBotaoReassistir = () => {
    btnReassistir.style.display = 'block';
  };

  if (!localStorage.getItem('tutorialVisto')) {
    tutorialModal.style.display = 'block';
  } else {
    mostrarBotaoReassistir();
  }

  btnSim.addEventListener('click', () => {
    tutorialModal.style.display = 'none';
    centralVideo.style.display = 'block';
    localStorage.setItem('tutorialVisto', 'true');
    mostrarBotaoReassistir();
  });

  btnNao.addEventListener('click', () => {
    tutorialModal.style.display = 'none';
    localStorage.setItem('tutorialVisto', 'true');
    mostrarBotaoReassistir();
  });

  btnFecharVideo.addEventListener('click', () => {
    centralVideo.style.display = 'none';
  });

  btnReassistir.addEventListener('click', () => {
    centralVideo.style.display = 'block';
  });

  let visivel = false;

  btnReassistir.addEventListener('click', function () {
  visivel = !visivel;
  centralVideo.style.display = visivel ? 'block' : 'none';
});


});