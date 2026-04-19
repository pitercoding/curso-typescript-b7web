let numero1 = document.getElementById("numero1") as HTMLInputElement;
let numero2 = document.getElementById("numero2") as HTMLInputElement;
let botao = document.getElementById("calcular") as HTMLButtonElement;
let resultado = document.getElementById("resultado") as HTMLDivElement;

function calcular(n1: number, n2: number): number {
  return n1 + n2;
}

botao.addEventListener("click", function () {
  let n1 = parseFloat(numero1.value);
  let n2 = parseFloat(numero2.value);

  resultado.innerHTML = calcular(n1, n2).toString();
});
