function firstLetterLowerCase(name: string): string {
    let firstLetter = name.charAt(0).toLowerCase();
    return firstLetter + name.substring(1);
}

let nome: string = firstLetterLowerCase('Racha Cuca');

function somar(n1: number, n2: number): number {
    return n1 + n2;
}

let algumaCoisa = somar(90, 35);