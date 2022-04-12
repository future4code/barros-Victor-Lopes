/*  -----Exerceicio 1------

  Resposta: 10, 10, 5.

    -----Exercicio 2----

  Resposta: 10, 10, 10.

    -----Exercicio 3-----

  Resposta: Let horaTrabalho, let valorDia, a estrturua de codigo calcula o quanto voce recebe por hora, 
baseado no quanto você recebe por dia e quantas horas você trabalha.
--------------------------------------------------------------------------------------------------------

Exercicio de escrita
*/

//  -----Exercicio 1------

console.log("-------Exercicio 1------")

let nome =prompt("qual seu nome?")
let idade=prompt("qual sua idade?")

console.log(typeof nome, typeof idade)

//ficou indefinido, pois não tem nenhum valor atribuido a ela.

//Agora ambas as variaveis são do tipo String

console.log("Olá",nome,"voce tem",idade,"anos")

// -----Exercicio 2-----

console.log('-----Exercicio 2-----')

let pUm=prompt("Você esta feliz hoje?")
let pDois=prompt("voce toma café da manha?")
let pTres=prompt("Voce gosta de correr?")

console.log("Você esta feliz hoje?",pUm)
console.log("voce toma café da manha?",pDois)
console.log("voce gosta de correr?",pTres)

//  -----Exercicio 3-----

console.log("-----Exercicio 3-----")

let a = 10
let b = 25
let c

c=b
b=a
console.log("O novo valor de a é", c) //25
console.log("O novo valor de b é", b)//10



