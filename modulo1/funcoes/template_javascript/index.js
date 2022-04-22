/* -----Exercicio de escrita-----

---Exercicio 1---

Letra A) Resposta: 10
                   50

Letra B) Resposta: Não aparecia nada, pois o valor so seria armazenado dentro da função.

---Exercicio 2---

Letra A) Resposta: Essa função pega a string que o usuario escreveu, transforma todas as letras em minuscula 
e confere se tem cenoura na frase ou texto.

Letra B) Resposta: i-  true
                   ii-  true
                   iii-  false 

*/

// -----Exercicio de escrita-----

//---Exercicio 1---

// Letra A)

function aboutMe(){
    console.log("Eu sou Victor, tenho 19 anos, moro em Ibirite.")
}

//Letra B)

function person(name, yearsOld, city, occupation){
    
    name=prompt("Qual seu nome?")
    yearsOld=prompt("Qual sua idade?")
    city=prompt("Qual cidade você mora?")
    occupation=prompt("Qual sua profissão?")

    console.log(`Eu sou ${name} Tenho ${yearsOld} anos, moro em ${city} e sou ${occupation}.`)
  
}

//---Exercicio 2---

//Letra A)

function plus(number1, number2){
    number1=1
    number2=5
    let resul=number1+number2
    
    return resul
}

console.log(plus())

//Letra B)

function comparation(number1, number2){
    number1=10
    number2=8
    let resul=number1>=number2
    
    return resul
}    

//Letra C)

function pair(number1){
    number1=587
    let calc=number1%2
    let comp=calc===0

    return comp
}

//Letra D)

function string(text){
    text="i'm the best or no?"
    console.log(text.length, text.toUpperCase())

}

//---Exercicio 3---

function operations(number1, number2){

    number1=Number(prompt("Digite um numero"))
    number2=Number(prompt("Digite outro numero"))

    let plus=number1+number2
    let sub=number1-number2
    let multi=number1*number2
    let division=number1/number2

    console.log(`
    Numeros inseridos ${number1} e ${number2}
    Soma: ${plus}
    Diferença: ${sub}
    Multipliação: ${multi}
    Divisão: ${division}`)
}

operations()

//-------FIM-------

//-------DESAFIOS------
 
//---Desafio 1---

//Letra A)

const arrow= (parament)=>{
    console.log(parament)
}


//Letra B)

const arrowplus=(number1, number2)=>{
    
    number1=10
    number2=20
    let plus=number1+number2
    return plus

   

}

arrow(arrowplus())

//----Desafio 2-----

function pitagoras(cateto1, cateto2, hip){
    
    cateto1=100
    cateto2=50
    hip= Math.sqrt(cateto1^2+cateto2^2)

    return hip    
}

console.log(pitagoras())


