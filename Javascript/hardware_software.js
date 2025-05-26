document.addEventListener("DOMContentLoaded", function () {
  const alerta = document.getElementById('alerta');
  const btnAceitar = document.getElementById('aceitar');
  const termos = document.getElementById('termos');

  if (!localStorage.getItem('alerta')) {
    alerta.classList.add('visivel');
    document.body.classList.add('modal-aberto');
  }

  btnAceitar.addEventListener('click', function (event) {
    event.preventDefault();

    const mensagemErroExistente = document.getElementById('mensagemErro');
    if (mensagemErroExistente) {
      mensagemErroExistente.remove();
    }

    if (termos.checked) {
      alerta.classList.remove('visivel');
      document.body.classList.remove('modal-aberto');
      localStorage.setItem('alerta', 'true');
    } else {
      const mensagemErro = document.createElement('p');
      mensagemErro.id = 'mensagemErro';
      mensagemErro.textContent = 'Você precisa aceitar a checkbox.';
      mensagemErro.style.color = 'red';
      mensagemErro.style.margin = '0 auto';
      termos.parentNode.appendChild(mensagemErro);
    }
  });
});
