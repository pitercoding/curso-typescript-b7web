function imprimeDetalhes(usuario: { nome: string; idade?: number }) {
  if(usuario.idade !== undefined) {
    return `Olá ${usuario.nome}! Você tem ${usuario.idade} anos`;
  } else {
    return `Olá ${usuario.nome}!`;
  }
}

let u = {
  nome: "Racha Cuca",
};

imprimeDetalhes(u);