//------ EXERCICIOS DE INTERPRETAÇÃO-------
/* 
Questão A- Resposta: Undefinide, pois não tem valor atribuido.

Questão B- Resposta: Null, pois o valor inserido eé null.

Questão C- Resposta: 11

Questão D- Resposta: 3

Questão E- Resposta: 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

Questão F- Resposta: 9

-----Exercicio 2-----

Questão A- Resposta: SUBI NUM ÔNIBUS EM MIRROCOS, 27

*/

// Exercicio de escrita

//Exercicio 1

let email=prompt("Qual o seu email?")
let nome=prompt("Qual seu nome?")
console.log(`O E-mail "${email}" foi cadastrado com sucesso. Seja bem vinda(o) ${nome}`)

// Exercicio 2

let food=["macarrão" ,"arroz" ,"feijão" ,"frango" , "batata"]
console.log(food)
console.log(`Essas são minhas comidas favoritas 
1- ${food[0]}
2- ${food[1]} 
3- ${food[2]} 
4- ${food[3]} 
5- ${food[4]} `)

let bestFood=prompt("Qual a sua comida favorita?")
food.splice(1,1,bestFood)

console.log(food)

//Exercicio 3

let listaDeTarefas=[]
let tarefa1=prompt("Digite a primeira tarefa que você realiza no dia")
let tarefa2=prompt("Digite a segunda tarefa que você realiza no dia")
let tarefa3=prompt("Digite a terceira tarefa que você realiza no dia")
listaDeTarefas=[tarefa1, tarefa2, tarefa3]
console.log(`as tarefas são ${listaDeTarefas}`)
let conclused=Number(prompt("Digite o indice da tarefa que realizou, 0, 1 ou 2 sendo '0' o priemiro e asim por diante"))
listaDeTarefas.splice(conclused, 1)
console.log(`Ainda falta ${listaDeTarefas.length} tarefas para realizar e as tarefas são ${listaDeTarefas}`)

//desafio 1]

let words=prompt("digite uma frase")
let others=words.split(" ");

console.log(others)

//desafio 2

 let array=["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let search=array.indexOf("Abacaxi")

console.log(`o indice do abacaxi é ${search} o tamanho do array é ${array.length}`)


