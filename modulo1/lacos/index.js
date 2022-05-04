/* ----- EXERCECICIOS DE INTEPRETAÇÃO ------

--- Exercicio 1 ---
 
Resposta: O codigo está pegando o valor 0 e criou um laço para somar o "i", e o valor ira soma mais o "I".
          ira impirmir 10.

--- Exercicio 2 ---

Resposta: Letra A) 19, 21, 23, 25, 27, 30
          Letra B) sim, so usar console.log numeros

--- Exercicio 3 ---

Resposta: *, **, ***, ****
*/


// ----- EXERCICIO DE ESCRITA ------

//--Exercicio 1---

 /* let quantidadeAnimal = Number(prompt("Quantos animais de estimação voce têm?"))
let arrayAnimal = []
let nomes
    if (quantidadeAnimal===0){
        console.log("Que pena! Você pode adotar um pet");
    }   
        else if(quantidadeAnimal>0){
            
            for (let animais=0; animais < quantidadeAnimal; animais++){
                nomes = prompt("Digite o nome deles, um por um")
                    arrayAnimal.push(nomes)

            }
         console.log(arrayAnimal)
        }
 */
//---Exercicio 2---

let arrayOriginal = [10,21,32,15,17,42,66,120,128,33,67,68,65]
 


function LetraA () {
    for (let impirmirCadaUm of arrayOriginal){
        console.log(impirmirCadaUm);
    }
}



function LetraB() {
    for(let dividir10 of arrayOriginal){
        dividir10/=10
        console.log(dividir10)
    }
}


function LetraC() {
    let newarray=[]
    for(let resto2 of arrayOriginal){
        if((resto2%2)===0){
            newarray.push(resto2)
        }
    } 
    console.log(newarray);   
}

function LetraD () {
    for(let index of arrayOriginal){
        let saberIndex=arrayOriginal.indexOf(index)
        console.log(`O elemento do index ${saberIndex} é ${index}`);
    }
}


function LetraE() {
    let maiornumero = 0 
   
    for(let posicao=0; posicao<arrayOriginal.length; posicao++){
       let indicedoarray= arrayOriginal[posicao]

        if(indicedoarray>maiornumero){
            maiornumero=indicedoarray
        }
      }
    
  let menornumero = maiornumero 
      for(let posicao=0; posicao<arrayOriginal.length; posicao++){
        let indicedoarray= arrayOriginal[posicao]
 
         if(indicedoarray<menornumero){
             menornumero=indicedoarray
         }
     }
    console.log(`o maior numero é ${maiornumero} e o menor é ${menornumero}`)
}

