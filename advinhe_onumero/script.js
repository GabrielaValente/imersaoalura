var secretNumber = parseInt(Math.random() * 11);

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == secretNumber) {
    resultado.innerHTML = "Uhuuu! Parabéns, você acertou!";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Ops! Você deve digitar um número de 0 a 10!";
  } else {
    if (chute > secretNumber) {
      resultado.innerHTML = "O número secreto é menor, tente novamente!";
    } else {
      resultado.innerHTML = "O número secreto é maior, tente novamente!";
    }
  }
}
