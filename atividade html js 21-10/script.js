let input = document.getElementById("comidaInput");
let paragrafo = document.getElementById("mensagem");

input.addEventListener("input", () => {
  const valor = input.value.trim().toLowerCase();

  if (valor === "pão com ovo") {
    paragrafo.textContent = "Isso é café da manhã!";
  } else if (valor === "feijão com arroz") {
    paragrafo.textContent = "Isso é almoço!";
  } else if (valor === "" ) {
    paragrafo.textContent = "Isso é jantar!";
  } else {
    paragrafo.textContent = "Isso é jantar!";
  }
});