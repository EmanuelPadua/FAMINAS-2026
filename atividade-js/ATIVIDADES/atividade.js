// Exercício 01
let nome = "emanuel";
console.log(nome);

// Exercício 02
let idade = 18;
console.log(idade);

// Exercício 03
const cidade = "Miradouro";
console.log(cidade);

// Exercício 04
let curso = "ADS";
let periodo = 5;
console.log("Curso:", curso, "-", "Período:", periodo);

// Exercício 05
let mensagem = "Estou aprendendo JavaScript";
console.log(mensagem);

// Exercício 06
let produto = "Mouse";
let preco = 59.90;
let quantidade = 2;
console.log(produto);
console.log(preco);
console.log(quantidade);

// Exercício 07
console.log("Produto:", produto, "\nPreço:", preco, "\nQuantidade:", quantidade);

// Exercício 08
let saldo = 100;
saldo = 150;
console.log(saldo);

// Exercício 09
const PI = 3.14;
let raio = 5;
console.log(PI, raio);

// Exercício 10
let nomeAluno = "Emanuel";
let matricula = 12616211;
let cursoAluno = "ADS";
let nota = 50;
console.log("Nome:", nomeAluno, "\nMatrícula:", matricula, "\nCurso:", cursoAluno, "\nNota:", nota);

// Exercício 11
let a = 25, b = 20;
console.log(a + b);

// Exercício 12
console.log(a - b);

// Exercício 13
console.log(a * b);

// Exercício 14
console.log(a / b);

// Exercício 15
let numero1 = 10;
console.log(numero1 * 2);

// Exercício 16
let numero2 = 21;
console.log(numero2 * 3);

// Exercício 17
let preco1 = 100;
let desconto = 20;
console.log(preco1 - desconto);

// Exercício 18
let nota1 = 7;
let nota2 = 8;
let nota3 = 9;
console.log((nota1 + nota2 + nota3) / 3);

// Exercício 19
let minutos = 120;
console.log("Horas:", minutos / 60);

// Exercício 20
let dias = 7;
console.log("Horas:", dias * 24);

// Exercício 21
let idade1;
console.log(idade1 >= 18);

// Exercício 22
let notaAT;
console.log(notaAT >= 60);

// Exercício 23
let senha = "1234";
console.log(senha == "1234");

// Exercício 24
let a1 = 10, b1 = 8;
console.log(a1 > b1)

// Exercício 25
let temperatura;
console.log(temperatura < 0);

// Exercício 26
let usuarioLogado = true;
console.log(!usuarioLogado);

// Exercício 27
let idade2 = 20;
let temCarteira = true;
console.log(idade2 >= 18 && temCarteira);

// Exercício 28
let nota4 = 75;
let frequencia = 80;
console.log("O aluno foi aprovado:", nota4 >= 60 && frequencia >= 75);

// Exercício 29
let temIngresso = false;
let nomeNaLista = true;
console.log("Pode entrar:", temIngresso || nomeNaLista);

// Exercício 30
let valorCompra = 250;
console.log(valorCompra >= 100 && valorCompra <= 500);

// Exercício 31
let pessoa = 18;

if (pessoa >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Exercício 32
let numeroAT32 = 10;

if (numeroAT32 > 0) {
    console.log("Número positivo!");
} else {
    console.log("Número negativo!");
}

// Exercício 33
let numeroAT33 = -10;

if (numeroAT33 < 0) {
    console.log("Número positivo!");
} else {
    console.log("Número negativo!");
}

// Exercício 34
let numeroAT34 = 0;

if (numeroAT34 == 0) {
    console.log("Igual a zero!");
}

// Exercício 35
let notaAT35 = 75;

if (notaAT35 >= 60) {
    console.log("APROVADO!");
}

// Exercício 36
let senhaAT36 = "admin123"

if (senhaAT36 == "admin123") {
    console.log("SENHA CORRETA!");
} else {
    console.log("SENHA INCORRETA!");
}

// Exercício 37
let numeroAT37 = 68;

if (numeroAT37 % 2 == 0) {
    console.log("PAR!");
} else {
    console.log("IMPAR!");
}

// Exercício 38
let numeroAT38 = 67;

if (numeroAT38 % 2 == 0) {
    console.log("IMPAR!");
} else {
    console.log("PAR!");
}

// Exercício 39
let pessoaAT39 = 18;
let carteira = true;

if (pessoaAT39 >= 18 && carteira == true) {
    console.log("PODE DIRIGIR!");
} else {
    console.log("nao pode");
}

// Exercício 40
let compra = 250;

if (compra > 200) {
    console.log("FRETE GRÁTIS");
} else {
    console.log("N PODE");
}

// Exercício 41
let idadeAT41 = 25;

if (idadeAT41 < 12) {
    console.log("Criança");
} else if (idadeAT41 <= 17) {
    console.log("Adolescente");
} else if (idadeAT41 <= 59) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

// Exercício 42
let notaAT42 = 95;

if (notaAT42 < 60) {
    console.log("REPROVADO")
} else if (notaAT42 < 79) {
    console.log("APROVADO");
} else {
    console.log("APROVADO COM DESTAQUE");
}

// Exercício 43
let temperaturaAT43 = 25;

if (temperaturaAT43 < 15) {
    console.log("FRIO");
} else if (temperaturaAT43 <= 25) {
    console.log("AGRADÁVEL");
} else {
    console.log("QUENTE");
}

// Exercício 44
let compraAT44 = 502;

if (compraAT44 < 100) {
    console.log("SEM DESCONTO");
} else if (compraAT44 <= 499) {
    console.log("10% DE DESCONTO");
} else {
    console.log("20% DE DESCONTO");
}

// Exercício 45
let numeroAT45 = 67;

if (numeroAT45 > 0) {
    console.log("POSITIVO");
} else if (numeroAT45 < 0) {
    console.log("NEGATIVO")
} else {
    console.log("ZERO");
}

// Exercício 46
let notas1 = 50;
let notas2 = 100;
let notas3 = 100;
let media = (notas1 + notas2 + notas3) / 3;

if (media < 60) {
    console.log("REPROVADO!!");
} else if (media <= 69) {
    console.log("RECUPERAÇÃO!!");
} else {
    console.log("APROVADO!!");
}

// Exercício 47
let salario = 5000;

if (salario == 1500) {
    console.log("baixo");
} else if (salario <= 4000) {
    console.log("médio");
} else {
    console.log("alto");
}

// Exercício 48
let produtos = 51;

if (produtos == 0) {
    console.log("ESGOTADO");
} else if (produtos <= 10) {
    console.log("ESTOQUE BAIXO");
} else if (produtos <= 50) {
    console.log("ESTOQUE MÉDIO");
} else {
    console.log("ESTOQUE ALTO");
}

// Exercício 49
let numeroAT49 = 7

switch(numeroAT49) {
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("segunda");
        break;
    case 3:
        console.log("terça");
        break;
    case 4:
        console.log("quarta");
        break;
    case 5:
        console.log("quinta");
        break;
    case 6:
        console.log("sexta");
        break;
    case 7:
        console.log("sábado");
        break;
    default:
        console.log("opção inválida");
}

// Exercício 50
let letra = "A";

switch(letra) {
    case "A":
        console.log("excelente");
        break;
    case "B":
        console.log("bom");
        break;
    case "C":
        console.log("regular");
        break;
    default:
        console.log("conceito inválido");
}

// Exercício 51
let menu = 1;

switch(menu) {
    case 1:
        console.log("Cadastrar");
        break;
    case 2:
        console.log("Editar");
        break;
    case 3:
        console.log("Excluir");
        break;
    case 4:
        console.log("Listar");
        break;
    default:
        console.log("inválido");
}

// Exercício 52
let mes = "Novembro";

switch(mes) {
    case "Janeiro":
        console.log("Verão")
        break;
    case "Fevereiro":
        console.log("Verão")
        break;
    case "Março":
        console.log("Outono")
        break;
    case "Abril":
        console.log("Outono")
        break;
    case "Maio":
        console.log("Outono")
        break;
    case "Junho":
        console.log("Inverno")
        break;
    case "Julho":
        console.log("Inverno")
        break;
    case "Agosto":
        console.log("Inverno")
        break;
    case "Setembro":
        console.log("Primavera")
        break;
    case "Outubro":
        console.log("Primavera")
        break;
    case "Novembro":
        console.log("Primavera")
        break;
    case "Dezembro":
        console.log("Verão")
        break;
}

// Exercício 53
let operacao = "*";

switch(operacao) {
    case "+":
        console.log("ADIÇÃO");
        break;
    case "-":
        console.log("SUBTRAÇÃO");
        break;
    case "*":
        console.log("MULTIPLICAÇÃO");
        break;
    case "/":
        console.log("DIVISÃO");
        break;
    default:
        console.log("INVÁLIDO");
}

// Exercício 54
let usuario = "admin";

switch(usuario) {
    case "admin":
        console.log("acesso total");
        break;

    case "editor":
        console.log("acesso de edição");
        break;

    case "visitante":
        console.log("acesso de leitura");
        break;

    default:
        console.log("acesso negado");
}

// Ecercício 55
for (let i = 1; i <=10; i++) {
    console.log(i);
}

// Exercício 56
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Exercício 57
for (let i = 2; i <= 20; i+= 2) {
    console.log(i % 2 == 0);
}

// Exercício 58
for (let i = 1; i <= 20; i+= 2) {
    console.log(i);
}

// Exercício 59
let numeroAT59 = 5;

for (let i = 1; i <= 10; i++) {
    let resultado = numeroAT59 * i;
    console.log(`${numeroAT59} x ${i} = ${resultado}`)
}

// Exercício 60
let soma = 0;

for ( let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(soma)

// Exercício 61
let multiplos = 0;

for (let i = 1; i <= 30; i++) {
    if ( i % 3 === 0) {
        console.log(i);
    }
}

// Exercício 62
let pares = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        pares++;
    }
}
console.log(pares);

// Exercício 63
let produtoAT63 = 1;

for (let i = 1; i <= 5; i++) {
    produtoAT63 *= i;
}
console.log(produtoAT63);

// Exercício 64
























// Exercício 68
// let numeroAT68 = 0;

// for (let i = 1; i <= 50; i++) {
//     if (i % 5 == 0) {
//         numeroAT68++;
//     }
// }
// console.log(numeroAT68);

// Exercício 70
//for (let i = 1; i <= 10; i++) {
    //console.log(`\n--- Tabuada do ${i} ---`);
    //for (let j = 1; j <= 10; j++) {
        //console.log(`${i} x ${j} = ${i * j}`);
    //}
//}