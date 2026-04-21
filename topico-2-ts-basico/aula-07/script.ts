let names = ["Racha Cuca", "Quase Nada", "Poucas Trancas", 90, true];

names.forEach(function (nome) {
  if (typeof nome === "string") {
    console.log(nome.toUpperCase());
  } else {
    console.log(nome);
  }
});
