type User = {
  nome: string,
  idade: number,
};

function resumo(usuario: User) {
  return `Olá, ${usuario.nome}! Você tem ${usuario.idade} anos.`
}

resumo({
  nome: 'Racha Cuca',
  idade: 90,
})