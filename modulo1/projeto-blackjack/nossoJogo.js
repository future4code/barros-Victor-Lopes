/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const carta=comprarCarta()
const carta1=comprarCarta()
const carta2=comprarCarta()
const carta3=comprarCarta()

const soma=carta.valor+carta1.valor
const soma1=carta2.valor+carta3.valor

console.log("Boas vindas ao jogo de BlackJack!");

   const cancel=confirm("Quer iniciar uma nova rodada?")
   

      if(cancel===true){
         
         console.log(`Usuario: cartas: / ${carta.texto} / ${carta1.texto} / - pontuação ${soma}`)
         console.log(`computador: cartas: / ${carta2.texto} / ${carta3.texto} / - pontuação ${soma1}`)
         
            if(soma>soma1){console.log("O usuario venceu")}
               else if (soma<soma1){console.log("o computador venceu");}
                  else if(soma===soma1){console.log("Temos um empate");}
      }

      else{console.log(`O jogo acabou`)}   
      















        
      
   
