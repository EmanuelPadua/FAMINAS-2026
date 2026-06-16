for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("-----------------------------------");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("-----------------------------------");

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.log("-----------------------------------");

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

console.log("-----------------------------------");

let numero = 5;

console.log(`Tabuada do ${numero}`)

for (let i = 1; i <= 10; i++) {
    let resultado = i * numero;
    console.log(`${numero} x ${i} = ${resultado}`)
}

console.log("-----------------------------------");

let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(soma);

console.log("-----------------------------------");

for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0)
        console.log(i);
}

console.log("-----------------------------------");

let pares = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        pares++;
    }
}
console.log(pares);

console.log("-----------------------------------");

let produto = 1;

for (let i = 1; i <= 5; i++) {
    let total = produto * i;
    produto *= i;
}
console.log(produto);

console.log("-----------------------------------");




//    node pratica/teste/script.js