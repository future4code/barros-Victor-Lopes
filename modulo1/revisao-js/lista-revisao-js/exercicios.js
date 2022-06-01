// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array,a,b) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
 
    let numbersAsc = array.sort((a, b) => {
        return a - b;
    });

    return numbersAsc

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
   
   let par= array.filter((item)=>{
        if (item%2===0){
            return item
        }
 })
 return par
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  
    let par= array.filter((item)=>{
        if (item%2===0){
            
            return item
        }
 })
 const par1=  par.map ((item)=>{
    return item*item
 })
 return par1
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let max= Math.max(...array)
  return max
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior=0
    let menor=0
    let div
    
    
    if (num1>=num2){
        maior=num1
       }
           else if (num2>=num1){
               maior=num2
           }
    
           if(num1<=num2){
            menor=num1
           }
    
           else if(num2<=num1){
               menor=num2
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
return obj
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    
    let arraypares=[] 
   
    for (let i=0; i<n*2; i++){
       if(i%2===0){  
         arraypares.push(i)
       }
     }  
     return arraypares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

        if(ladoA===ladoB && ladoB===ladoC){
            return "Equilátero"
        }

            else if(ladoA===ladoB && ladoB!=ladoC || ladoA!=ladoB && ladoB===ladoC || ladoA===ladoC && ladoC!=ladoB){
                return "Isósceles"
            }

                else if (ladoA!=ladoB!=ladoC){
                    return "Escaleno"
                }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
    
let min= Math.min(...array)
let max= Math.max(...array)

let ambos = [min,max]

    const novoarray = array.filter ((item)=>{
        
        if (item>min && item<max){
            return item
        }

    })    
    
    let min1= Math.min(...novoarray)
    let max1= Math.max(...novoarray)

    let nem1=[max1, min1]
    
    if ( novoarray==0 ){
        return array
    }
    else{
        return nem1
    }
    
       
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  
    filme={
        nome: filme.nome,
        ano: filme.ano,
        diretor: filme.diretor,
        atores: filme.atores
        }
        return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
        
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   pessoa = {
       nome: pessoa.nome,
       idade: pessoa.idade,
       email: pessoa.email,
       endereco: pessoa.endereco
   }

   const novapessoa = {
       ...pessoa,
       nome: "ANÔNIMO"
   }

   return novapessoa

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const entrar = pessoas.filter((item)=>{
       if (item.altura>=1.5 && item.idade>14 && item.idade<60){
            return item
       }
   })
   return entrar
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const nEntrar= pessoas.filter ((item)=>{
    if (item.altura < 1.5 || item.idade<=14 || item.idade >60){
        return item
    }
  })
  return nEntrar
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
    let saldo = contas.map ((item)=>{
        return item.compras.reduce((valor1, valor2)=>{
           return  valor1+valor2
        },0)
    })
    for ( let i=0; i<contas.length; i++){
        contas[i].saldoTotal -= saldo[i]
        contas[i].compras = [] 
    }
    return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
   let ordenar = consultas.sort((a, b) => {
	
        return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
     
    });
     
    return ordenar
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    
    let ordenar = consultas.sort((a, b) => {
	
        return (a.dataDaConsulta > b.dataDaConsulta) ? 1 : ((b.dataDaConsulta > a.dataDaConsulta) ? -1 : 0);
     
    });
     
    return ordenar
}