// let numeros = [10, 20, 30];

// for (let i = 0; i < numeros.length; i++) {
//     numeros[0] = 40;
//     console.log(numeros[i]); 
// }

// let numero = [1, 2, 3, 4];

// numero.push(5);
// console.log(numero);

// console.log("====================================");

// let teste = ["Maça", "Banana", "Pera"];

// teste.push("Uva");

// console.log(teste);

// console.log("====================================");

// let teste1 = ["Manel", "Jao", "Preto", "Vilson"];

// teste1.pop();

// console.log(teste1);

// console.log("====================================");

// let teste2 = [10, 20, 30];
// let soma = 0;

// for (let i = 0; i < teste2.length; i++) {
//     soma += teste2[i];
// }

// console.log(soma);

console.log("====================================");

console.log("EXERCICIOS PRATICOS");
console.log("====================================");
console.log("EXERCICIO 1");
console.log("------------------------------------");

let nomes = ["João", "Maria", "Carlos", "Ana", "Pedro"];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log("====================================");
console.log("EXERCICIO 2");
console.log("------------------------------------");

let numeros = [10, 20, 30, 40, 50];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);

console.log("====================================");
console.log("EXERCICIO 3");
console.log("------------------------------------");

let numeros1 = [1,2,3,4,5,6,7,8,9,10];
let contador = 0;

for (let i = 0; i < numeros1.length; i++) {
    if (numeros1[i] % 2 == 0) {
        contador++;
    }
}

console.log(contador);

console.log("====================================");
console.log("EXERCICIO 4");
console.log("------------------------------------");

let notas = [7,8,10,6];
let soma1 = 0;
let media = 0;

for (let i = 0; i < notas.length; i++) {
    soma1 += notas[i];
    media = soma1 / 4;
}

console.log(media);












