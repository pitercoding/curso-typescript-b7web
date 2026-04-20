interface Usuario {
  nome: string,
  idade: number,
};

function imprimir(usuario: Usuario) {
  return `Olá, ${usuario.nome}! Você tem ${usuario.idade} anos.`
}

imprimir({
  nome: 'Racha Cuca',
  idade: 90,
})