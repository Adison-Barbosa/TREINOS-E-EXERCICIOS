let saldo = 0; // Começa com saldo zerado

// Pega os botões do HTML
let botaoDepositar = document.getElementById("depositar");
let botaoSacar = document.getElementById("sacar");
let botaoSaldo = document.getElementById("saldo");
let mensagem = document.getElementById("mensagem");

// Função para depositar
botaoDepositar.onclick = function() {
  let valor = prompt("Digite o valor do depósito:");
  valor = parseFloat(valor);

  if (isNaN(valor) || valor <= 0) {
    mensagem.textContent = "Valor inválido!";
  } else {
    saldo += valor;
    mensagem.textContent = "Depósito de R$ " + valor.toFixed(2) + " realizado com sucesso!";
  }
};

// Função para sacar
botaoSacar.onclick = function() {
  let valor = prompt("Digite o valor do saque:");
  valor = parseFloat(valor);

  if (isNaN(valor) || valor <= 0) {
    mensagem.textContent = "Valor inválido!";
  } else if (valor > saldo) {
    mensagem.textContent = "Saldo insuficiente!";
  } else {
    saldo -= valor;
    mensagem.textContent = "Saque de R$ " + valor.toFixed(2) + " realizado com sucesso!";
  }
};

// Função para mostrar saldo
botaoSaldo.onclick = function() {
  mensagem.textContent = "Seu saldo atual é de R$ " + saldo.toFixed(2);
};