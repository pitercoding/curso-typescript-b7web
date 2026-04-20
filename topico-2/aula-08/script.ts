function resumo(usuario: { nome: string; idade: number }) {
  return `Olá ${usuario.nome}! Você tem ${usuario.idade} anos`;
}

let u = {
  nome: "Racha Cuca",
  idade: 90,
};

resumo(u);