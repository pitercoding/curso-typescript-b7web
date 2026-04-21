"use strict";
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let botao = document.getElementById("calcular");
let resultado = document.getElementById("resultado");
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener("click", function () {
    let n1 = parseFloat(numero1.value);
    let n2 = parseFloat(numero2.value);
    resultado.innerHTML = calcular(n1, n2).toString();
});
