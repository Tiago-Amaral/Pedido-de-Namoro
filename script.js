function sim() {
  alert("Você aceitou namorar comigo! :)");
  // redireciona para um URL apos aceitar aqui voce pode colocar o video de sua preferencia
  location.href="https://www.youtube.com/watch?v=hlAjJAlN7u0";
}

function desvia(t) {
  var btn = t;
  btn.style.position = 'absolute';
  btn.style.bottom = geraPosicao(10, 90);
  btn.style.left = geraPosicao(10, 90);
  
}

function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}