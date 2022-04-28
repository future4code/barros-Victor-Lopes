/* ------ EXERCICIO DE ESCRITA ------

--- Exercicio 1-
*/

const idade=Number(prompt("Qual sua idade?"))

if (idade>=18){
    console.log(`Meus parabéns, você pode dirigir.`);
}   else{console.log(`Infelizmente você não pode dirigir pois so é permitido para maiores de idade.
Você tem ${idade} anos de idade.`);}

//---Exercicio 2---

const horario=prompt(`Digite "M" se voce estuda de manhã.
Digite "V" se você estuda a tarde.
Digite "N" se você estuda a noite`).toLowerCase()

if (horario==="m"){
    console.log(`Bom dia!`)
}
    else if(horario==="v"){
        console.log(`Boa tarde!`)
    }

        else if(horario==="n"){
            console.log(`Boa noite!`);
        }

// --- Exercicio 3 ----

        switch (horario) {
            case "m":
                console.log(`Bom dia!`);
                break;
            case "v":
                console.log(`Boa tarde!`);
                break;
            case "n":
                console.log("Boa noite!");        
                break
            default:
                break;
        }

// --- Exercicio 4 ---

function cinema (genero, valor, lanche) {
    
    genero=prompt("Qual o genero do filme?").toLowerCase()
    valor=Number(prompt("Qual o valor do ingresso?"))

        if(genero==="fantasia" && valor<=15){
            // --- DESAFIO 1 ---
            lanche=prompt("Qual lanche você vai comer?").split(" ")

            console.log(`Bom filme! Aproveite seu ${lanche}`)
        } 
            else if (genero==="fantasia" && valor>15){
                console.log("!!! Escolha outro filme pois o ingresso esta acima do desejado!!!")
            }
                else if(genero!="fantasia" && valor<=15){
                    console.log("Escolha outro filme, pois não é o genero desejado");
                }

                else{console.log("Escolha outro filmes, pois genero e ingresso não é o desejado");}
}

cinema()

// ----- DESAFIOS ----

//--- Desafio 2 ---

//SOLICITAÇÃO
let nome=prompt("Qual é o seu nome completo?").toLowerCase()

let tipoJogo=prompt(`Qual o tipo de jogo?
IN - Internacional
DO - Domestico`).toLowerCase()

let etapaJogo= prompt(`Qual a etapa do jogo?
SF - Semi-final
DT - Decisão de terceiro lugar
FI - Final`).toLowerCase()

let categoria=Number(prompt(`Qual a categoria, 1, 2, 3 ou 4?`))

let quantidadeIngresso=Number(prompt(`Qual a quantidade de ingresso em numeros?`))

//Valores ingresso
let ingressoSf1=1320
let ingressoSf2=880
let ingressoSf3=550
let ingressoSf4=220

let ingressoDt1=660
let ingressoDt2=440
let ingressoDt3=330
let ingressoDt4=170

let ingressoFI1=1980
let ingressoFI2=1320
let ingressoFI3=880
let ingressoFI4=330

//tipoJogo Domestico SF
    if (tipoJogo==="do" && etapaJogo==="sf" && categoria===1){
        console.log(`Nome do cliente: ${nome}
        Tipo do jogo:  Nacional
        Etapa do jogo: Semi-final
        Categoria: 1
        Quantidade de ingresso: ${quantidadeIngresso}
        ---valores---
        Valor do ingreso: R$ ${ingressoSf1}
        Valor total: R$ ${ingressoSf1*quantidadeIngresso}`)
    }

            else if (tipoJogo==="do" && etapaJogo==="sf" && categoria===2){
                console.log(`Nome do cliente: ${nome}
                Tipo do jogo:  Nacional
                Etapa do jogo: Semi-final
                Categoria: 2
                Quantidade de ingresso: ${quantidadeIngresso}
                ---valores---
                Valor do ingreso: R$ ${ingressoSf2}
                Valor total: R$ ${ingressoSf2*quantidadeIngresso}`)
            }

                   else if (tipoJogo==="do" && etapaJogo==="sf" && categoria===3){
                        console.log(`Nome do cliente: ${nome}
                        Tipo do jogo:  Nacional
                        Etapa do jogo: Semi-final
                        Categoria: 3
                        Quantidade de ingresso: ${quantidadeIngresso}
                        ---valores---
                        Valor do ingreso: R$ ${ingressoSf3}
                        Valor total: R$ ${ingressoSf3*quantidadeIngresso}`)
                    }

                           else if (tipoJogo==="do" && etapaJogo==="sf" && categoria===4){
                                console.log(`Nome do cliente: ${nome}
                                Tipo do jogo:  Nacional
                                Etapa do jogo: Semi-final
                                Categoria: 4
                                Quantidade de ingresso: ${quantidadeIngresso}
                                ---valores---
                                Valor do ingreso: R$ ${ingressoSf4}
                                Valor total: R$ ${ingressoSf4*quantidadeIngresso}`)
                            }

//tipoJogo domestico DT

else if (tipoJogo==="do" && etapaJogo==="dt" && categoria===1){
    console.log(`Nome do cliente: ${nome}
    Tipo do jogo:  Nacional
    Etapa do jogo: Decisão do 3° Lugar 
    Categoria: 1
    Quantidade de ingresso: ${quantidadeIngresso}
    ---valores---
    Valor do ingreso: R$ ${ingressoDt1}
    Valor total: R$ ${ingressoDt1*quantidadeIngresso}`)
}

else if (tipoJogo==="do" && etapaJogo==="dt" && categoria===2){
    console.log(`Nome do cliente: ${nome}
    Tipo do jogo:  Nacional
    Etapa do jogo: Decisão do 3° Lugar 
    Categoria: 2
    Quantidade de ingresso: ${quantidadeIngresso}
    ---valores---
    Valor do ingreso: R$ ${ingressoDt2}
    Valor total: R$ ${ingressoDt2*quantidadeIngresso}`)
}

else if (tipoJogo==="do" && etapaJogo==="dt" && categoria===3){
    console.log(`Nome do cliente: ${nome}
    Tipo do jogo:  Nacional
    Etapa do jogo: Decisão do 3° Lugar 
    Categoria: 3
    Quantidade de ingresso: ${quantidadeIngresso}
    ---valores---
    Valor do ingreso: R$ ${ingressoDt3}                                                    
    Valor total: R$ ${ingressoDt3*quantidadeIngresso}`)                                                   
 }                                               


else if (tipoJogo==="do" && etapaJogo==="dt" && categoria===4){
    console.log(`Nome do cliente: ${nome}                                                    
    Tipo do jogo:  Nacional
    Etapa do jogo: Decisão do 3° Lugar                                                   
    Categoria: 4                                                 
    Quantidade de ingresso: ${quantidadeIngresso}                                                    
    ---valores---                                                    
    Valor do ingreso: R$ ${ingressoDt4}                                                    
    Valor total: R$ ${ingressoDt4*quantidadeIngresso}`)                                                    
}   

//tipoJogo domestico FI

else if (tipoJogo==="do" && etapaJogo==="fi" && categoria===1){
    console.log(`Nome do cliente: ${nome}                                                    
    Tipo do jogo:  Nacional
    Etapa do jogo: Final                                                  
    Categoria: 1                                                 
    Quantidade de ingresso: ${quantidadeIngresso}                                                    
    ---valores---                                                    
    Valor do ingreso: R$ ${ingressoFI1}                                                    
    Valor total: R$ ${ingressoFI1*quantidadeIngresso}`)                                                    
}  

else if (tipoJogo==="do" && etapaJogo==="fi" && categoria===2){
    console.log(`Nome do cliente: ${nome}                                                    
    Tipo do jogo:  Nacional
    Etapa do jogo: Final                                                  
    Categoria: 2                                                
    Quantidade de ingresso: ${quantidadeIngresso}                                                    
    ---valores---                                                    
    Valor do ingreso: R$ ${ingressoFI2}                                                    
    Valor total: R$ ${ingressoFI2*quantidadeIngresso}`)                                                    
} 

else if (tipoJogo==="do" && etapaJogo==="fi" && categoria===3){
    console.log(`Nome do cliente: ${nome}                                                    
    Tipo do jogo:  Nacional
    Etapa do jogo: Final                                                  
    Categoria: 3                                                 
    Quantidade de ingresso: ${quantidadeIngresso}                                                    
    ---valores---                                                    
    Valor do ingreso: R$ ${ingressoFI3}                                                    
    Valor total: R$ ${ingressoFI3*quantidadeIngresso}`)                                                    
} 

else if (tipoJogo==="do" && etapaJogo==="fi" && categoria===4){
    console.log(`Nome do cliente: ${nome}                                                    
    Tipo do jogo:  Internacional 
    Etapa do jogo: Final                                                  
    Categoria: 4                                                 
    Quantidade de ingresso: ${quantidadeIngresso}                                                    
    ---valores---                                                    
    Valor do ingreso: R$ ${ingressoFI4}                                                    
    Valor total: R$ ${ingressoFI4*quantidadeIngresso}`)                                                    
} 




//tipoJogo Internacional





else if (tipoJogo==="in" && etapaJogo==="sf" && categoria===1){
    console.log(`Nome do cliente: ${nome}
    Tipo do jogo:  Internacional 
    Etapa do jogo: Semi-final
    Categoria: 1
    Quantidade de ingresso: ${quantidadeIngresso}
    ---valores---
    Valor do ingreso: U$ ${ingressoSf1}
    Valor total: U$ ${(ingressoSf1*quantidadeIngresso)/4.10}`)
}

        else if (tipoJogo==="in" && etapaJogo==="sf" && categoria===2){
            console.log(`Nome do cliente: ${nome}
            Tipo do jogo:  Internacional 
            Etapa do jogo: Semi-final
            Categoria: 2
            Quantidade de ingresso: ${quantidadeIngresso}
            ---valores---
            Valor do ingreso: U$ ${ingressoSf2}
            Valor total: U$ ${(ingressoSf2*quantidadeIngresso)/4.10}`)
        }

               else if (tipoJogo==="in" && etapaJogo==="sf" && categoria===3){
                    console.log(`Nome do cliente: ${nome}
                    Tipo do jogo:  Internacional 
                    Etapa do jogo: Semi-final
                    Categoria: 3
                    Quantidade de ingresso: ${quantidadeIngresso}
                    ---valores---
                    Valor do ingreso: U$ ${ingressoSf3}
                    Valor total: U$ ${(ingressoSf3*quantidadeIngresso)/4.10}`)
                }

                       else if (tipoJogo==="in" && etapaJogo==="sf" && categoria===4){
                            console.log(`Nome do cliente: ${nome}
                            Tipo do jogo:  Internacional 
                            Etapa do jogo: Semi-final
                            Categoria: 4
                            Quantidade de ingresso: ${quantidadeIngresso}
                            ---valores---
                            Valor do ingreso: U$ ${ingressoSf4}
                            Valor total: U$ ${(ingressoSf4*quantidadeIngresso)/4.10}`)
                        }



else if (tipoJogo==="in" && etapaJogo==="dt" && categoria===1){
console.log(`Nome do cliente: ${nome}
Tipo do jogo:  Internacional 
Etapa do jogo: Decisão do 3° Lugar 
Categoria: 1
Quantidade de ingresso: ${quantidadeIngresso}
---valores---
Valor do ingreso: U$ ${ingressoDt1}
Valor total: U$ ${(ingressoDt1*quantidadeIngresso)/4.10}`)
}

else if (tipoJogo==="in" && etapaJogo==="dt" && categoria===2){
console.log(`Nome do cliente: ${nome}
Tipo do jogo:  Internacional 
Etapa do jogo: Decisão do 3° Lugar 
Categoria: 2
Quantidade de ingresso: ${quantidadeIngresso}
---valores---
Valor do ingreso: U$ ${ingressoDt2}
Valor total: U$ ${(ingressoDt2*quantidadeIngresso)/4.10}`)
}

else if (tipoJogo==="in" && etapaJogo==="dt" && categoria===3){
console.log(`Nome do cliente: ${nome}
Tipo do jogo:  Internacional 
Etapa do jogo: Decisão do 3° Lugar 
Categoria: 3
Quantidade de ingresso: ${quantidadeIngresso}
---valores---
Valor do ingreso: U$ ${ingressoDt3}                                                    
Valor total: U$ ${(ingressoDt3*quantidadeIngresso)/4.10}`)                                                   
}                                               


else if (tipoJogo==="in" && etapaJogo==="dt" && categoria===4){
console.log(`Nome do cliente: ${nome}                                                    
Tipo do jogo:  Internacional 
Etapa do jogo: Decisão do 3° Lugar                                                   
Categoria: 4                                                 
Quantidade de ingresso: ${quantidadeIngresso}                                                    
---valores---                                                    
Valor do ingreso: U$ ${ingressoDt4}                                                    
Valor total: U$ ${(ingressoDt4*quantidadeIngresso)/4.10}`)                                                    
}   

//tipoJogo domestico FI

else if (tipoJogo==="in" && etapaJogo==="fi" && categoria===1){
console.log(`Nome do cliente: ${nome}                                                    
Tipo do jogo:  Internacional 
Etapa do jogo:  Final                                                  
Categoria: 1                                                 
Quantidade de ingresso: ${quantidadeIngresso}                                                    
---valores---                                                    
Valor do ingreso: U$ ${ingressoFI1}                                                    
Valor total: U$ ${(ingressoFI1*quantidadeIngresso)/4.10}`)                                                    
}  

else if (tipoJogo==="in" && etapaJogo==="fi" && categoria===2){
console.log(`Nome do cliente: ${nome}                                                    
Tipo do jogo:  Internacional 
Etapa do jogo:  Final                                                  
Categoria: 2                                                
Quantidade de ingresso: ${quantidadeIngresso}                                                    
---valores---                                                    
Valor do ingreso: U$ ${ingressoFI2}                                                    
Valor total: U$ ${(ingressoFI2*quantidadeIngresso)/4.10}`)                                                    
} 

else if (tipoJogo==="in" && etapaJogo==="fi" && categoria===3){
console.log(`Nome do cliente: ${nome}                                                    
Tipo do jogo:  Internacional 
Etapa do jogo:  Final                                                  
Categoria: 3                                                 
Quantidade de ingresso: ${quantidadeIngresso}                                                    
---valores---                                                    
Valor do ingreso: U$ ${ingressoFI3}                                                    
Valor total: U$ ${(ingressoFI3*quantidadeIngresso)/4.10}`)                                                    
} 

else if (tipoJogo==="in" && etapaJogo==="fi" && categoria===4){
console.log(`Nome do cliente: ${nome}                                                    
Tipo do jogo:  Internacional 
Etapa do jogo:  Final                                                  
Categoria: 4                                                 
Quantidade de ingresso: ${quantidadeIngresso}                                                    
---valores---                                                    
Valor do ingreso: U$ ${ingressoFI4}                                                    
Valor total: U$ ${(ingressoFI4*quantidadeIngresso)/4.10}`)                                                    
} 


else{console.log("Não podemos indetificar sua escolha")}
