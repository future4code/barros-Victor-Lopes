

/* ------- interpretação de codigo ----------

---Exercicio 1---
Resposta: A- False
          B- False
          C- True
          D- booleans
        
---Exercicio 2---
Resposta: Ele irá retornar os dois valores juntos por conta das duas variaveis serem do tipo string.    

---Exercicio 3---

Criar duas novas variaveis pra poder trasnformar as primeiras em tipo number. Ex:

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
--------Variaveis novas-------
let n1=Number(primeiroNumero)
let n2=Number(segundoNumero)
------------------------------
const soma = n1 + n2

console.log(soma)


-------Escrita de codigo---------

---Exercicio 1---
Resposta:
*/
console.log("---Exercicio 1---")
let idadeUsuario=prompt("Qual sua idade?")
let melhorAmigo=prompt("qual a idade do seu melhor amigo(a)?")

let idUsu=Number(idadeUsuario)
let mAmi=Number(melhorAmigo)

let comparacao=idUsu>mAmi
console.log(`Sua idade é maior que a do seu amigo? ${comparacao}`)

let diferenca=idadeUsuario-melhorAmigo
console.log(`A diferença de idade é: ${diferenca} ano(s)`)

//---EXERCICIO 2---

console.log("---Exercicio 2----")

let nPar=prompt("Insira um numero par")
let NumberPar=Number(nPar)
let resto=NumberPar%2
console.log(`O resto da divisão é: ${resto}`)
//O resultado é sempre 0, pois um numero divido por outro numero par tem sempre um valor exato.

//O resultado é sempre 1

//---Exercicio 3---

console.log("---Exercicio 3---")

let anos=prompt("Qual sua idade em anos?")
let anosN=Number(anos)

console.log(`A sua idade em meses é ${12*anosN}`)
console.log(`Voce tem ${365*anosN} dias de vida`)
console.log(`Você tem ${(24*365)*anosN} horas de vida`)

//---Exercicio 4---
console.log("---Exercicio 4---")

let n1=prompt("Digite um numero")
let n2=prompt("digite outro numero")
let n1n=Number(n1)
let n2n=Number(n2)

console.log(`O primeiro numero é maior que o segundo? ${n1n>n2n}`)
console.log(`O primeiro numero é igual ao segundo? ${n1n===n2n}`)
let div=n1n%n2n
let div2=n2n%n1n
console.log(`O primeiro numero é divisivel pelo segundo? ${div===0}`)
console.log(`O segundo numero é divisivel pelo primeiro? ${div2===0}`)










     
        