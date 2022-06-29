/* let animal=prompt("é um animal, sim ou nao?").toLowerCase()

if (animal==="sim"){
let pgnt1=prompt("Tem pena? sim ou nao?").toLowerCase()
    
    if(pgnt1==="sim"){
        console.log("é uma avé")
    }
        else{
            let pgnt2=prompt("Tem pelo?")
                if (pgnt2==="sim"){
                console.log("é um mamifero")

                     }
                     else{
                         console.log("é outra classifcação")
                     }
        }
}

else{
    console.log("então é outra coisa")
} */


/* let num1=Number(prompt("digite um numero")) 
let num2=Number(prompt("digite outro numero"))

if(num1===num2){
    console.log("os numeros são iguais");
}
    else if(num1>num2){
    console.log(`O numero ${num1}, é maior que ${num2}`);
    }
        else if(num1<num2){
            console.log(`O numero ${num1}, é menor que ${num2}`)
        } */


      /*   let num1=10
        let num2=15

       console.log( (num1===num2)?"igual":"diferente" ) */

   /*    function inicial(pokemon){
          
        pokemon=prompt(`
          Qual seu pokemon inicial favorito
          1- bulbassaur
          2-charmander
          3-squirtle`).toLowerCase()

            switch (pokemon) {
                case "bulbassaur":
                    return "Veneno e grama"
                    break
                case "charmander":
                    return "fogo"
                    break
                case "squirtle":
                    return "Agua" 
                    break   
                default:
                    return "Não é um incial"
                    break
            }
      }

      console.log(inicial()) */

      /* function facul(nome,eM,idade,outrafacul) {
          nome=prompt("Qual seu nome?")
          eM=prompt("Ja cursou o E.M?").toLowerCase()
          idade=Number(prompt("Qual sua idade?"))
          outrafacul=prompt("Ja esta em outra facul?").toLowerCase()

          if(eM==="sim" && idade>=18 && outrafacul==="nao"){
              return `${nome} Você pode fazer a facul, meus parabens` 
          }
          else {
              return `
              ${nome} você nâo pode fazer a facul, pois não atende algum dos requisitos.
              
              ter cursado o ensino medio. Cursou: ${eM}.
              
              ser maior de 18. Idade: ${idade}.
              
              não estár em outra facul. outra facul: ${outrafacul}.`
          }
      }
      console.log(facul()) */

     /*  function autorefresh() {
          window.location =  window.location.href
      }

      function name(atualizar) {
          
      
      atualizar=prompt("voce deseja atualizar a pagina?").toLowerCase()
     
      if (atualizar==="sim"){
          alert("clique em ok, para atualizar", 200, setInterval(autorefresh(),2000))
      }
       else if (atualizar==="nao"||atualizar==="nâo") {
       document.write("Continua nessa pagina vazia então...")
      }
    }
    name() */


  /*   let soma  
    let number=0

    while(soma !== 0){
        soma=Number(prompt("digite um numero"))
        number+=soma
    }
    console.log(number) */

   /*  for(let i=20; i>=10; i--){console.log(`diminuiu ${i}`);} */
   /* let arraye1=[11, 15, 18, 14, 12, 13]
let maior=0
 function descobrir(){
  for (let cadaNumero of arraye1){
      if (cadaNumero>maior){
          maior=cadaNumero
        }
      
  }
console.log(maior)
} 

descobrir() */

/* function verificaImpar(numero, imprimir) {
    if (numero%2===1){
        imprimir()
    }
}
 function imprimirM() {
     console.log(`O numero  é impar`);
 }

 verificaImpar(17, imprimirM) */
/* 
const arrayNumeros = [10,11,12,13,14,15]

const numeroarray = arrayNumeros.map((numero, index)=>{
    console.log(`O elemento ${index} é ${numero}`);
}) */

/* let produto = prompt(`Digite o nome do produto`)

    let preco = Number(prompt(`Digite o preço do produto`))

        preco  
        
            console.log(`O gerente ficou doido! agora o produto ${produto} passou de $${preco},00 por $${preco-1},00 `); */

/* let num1 = Number(prompt(`Insira um numero!`))
let num2 = Number(prompt(`Insira outro numero`))

console.log(`soma ${num1+num2}
subtração ${num1-num2}
multiplicação ${num1*num2}
divisão ${num1/num2}
resto ${num1%num2}`); */

/* let ale=8

let numRandon = Number(prompt(`Digite um numero aleatorio de 1 a 10`))

    if(numRandon > ale){
        console.log(`O numero digitado ${numRandon} é maior que o numero sorteado ${ale}`);
    }
        else if(numRandon < ale){
            console.log(`O numero digitado ${numRandon} é menor que o numero sorteado ${ale}`);
        }

            else if(numRandon === ale){
                console.log(`O numero digitado ${numRandon} é igual o numero sorteado ${ale}`);
            } */


/* let pergunta1= Number(prompt(`Qual sua idade?`))
let pergunta2= Number(prompt(`Qual sua altura?`))
let pergunta3= Number(confirm(`Possui algum porblema cardiaco?`))

if(pergunta1>=18 && pergunta2>=1.60  && pergunta3===false){
    console.log(`Voce pode entrar no brinquedo`);
}
else{console.log(`Voce n pode entrar no brinquedo`);} */

/* let m =15
let m2=30

let maior=0
let menor=0

let menos= maior-menor

if (m>m2){
    maior=m
   }
       else if (m2>m){
           maior=m2
       }

       if(m<m2){
        menor=m
       }

       else if(m2<m){
           menor=m2
       }
      

       if(maior%menor===0){
        div=true
    }
        else{
            div=false
        }

        const obj = {
            maiorNumero: maior,
            maiorDivisivelPorMenor: div,
            diferenca: maior-menor
        }

        console.log(obj.maiorNumero, obj.maiorDivisivelPorMenor, obj.diferenca);
 */
/* let n=3
        let arraypares=[] 
        for (let i=0; i<n*2; i++){
           if(i%2===0){  
             arraypares.push(i)
           }
         }  
         console.log(arraypares); */
/* const array = [22,33]

let min= Math.min(...array)
let max= Math.max(...array)


    const novoarray = array.filter ((item)=>{
        
        if (item>min && item<max){
            return item
        }

    })    
    let min1= Math.min(...novoarray)
    let max1= Math.max(...novoarray)
let junc= [max1, min1]
        const maiormenor = novoarray.filter ((item)=>{
            if(item===max1 && item===min1)
                return item
        })

        console.log(junc); */

        let arr = [
            { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] }
            
        ] 
let soma = arr[0].compras[0]+arr[0].compras[1]+arr[0].compras[2]
        console.log(arr[0].saldoTotal-soma)


        for (let i=0; i<arr.length; i++){
            let soma = arr[i].compras[i]++
            console.log(soma); 
         }