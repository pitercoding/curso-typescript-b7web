const nomeTeste: string = 'Racha Cuca';

function imprimirTeste(n1: number): string {
    return 'O parâmetro era: ' + n1;
}

console.log(imprimirTeste(15));

//Comando: tsc src/watchMode.ts -w