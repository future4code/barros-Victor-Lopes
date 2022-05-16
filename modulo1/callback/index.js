/* ----- EXERCICIOS DE INTEPRETAÇÃO -----

--- Exercicio 1 ---

Resposta: apelido: "Mandi" nome: "Amanda Rangel"
          apelido: "Laura" nome: "Laís Petra"
          apelido: "Chijo" nome: "Letícia Chijo"

--- Exerecicio 2 ---

Resposta: Amanda Rangel
          Lais Petra
          Letícia Chijo

--- Exercicio 3 ---

Resposta: nome: Amanda Rangel, apelido: Mandi
          nome: Lais Petra, apelido: Laura

----- EXERCICIO DE INTEPRETAÇÃO -----

*/

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

/*
--- Exerecicio 1 ---

Letra A) 
*/

const Nomedog = pets.map((nomes)=>{
    return nomes.nome
})


//Letra B)

const soSalchicha = pets.filter((racaSalchicha)=>{
        return racaSalchicha.raca === "Salsicha"
})

//Letra C)

const clientesPooodle = pets.filter((poodles)=>{
        if (poodles.raca === "Poodle"){
            return `Você ganhou um cupom de 10% de desconto para podar o ${poodles.nome}`
        }
})

// --- Exercicio 2 ---

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //Letra A)

 const nomesProduto = produtos.map((itens)=>{
     return itens.nome
 })

//Letra B)

const desconto5 = produtos.map((item)=>{
    const novopreco = (item.preco*5)/100
    const newobject = {
        nome: item.nome, preco: item.preco-novopreco
    }
    return newobject
})

// Letra C)

const bebidas = produtos.filter((iten)=>{
    if (iten.categoria==="Bebidas"){
        return iten
    }
})

// Letra D)

const nomeype= produtos.filter((items)=>{
   
   if (items.nome.includes("Ypê")){
    return items
}
    
})

//Letra E)

const frase = nomeype.map((item)=>{   
    
   return `compre ${item.nome} por ${item.preco}`

})



// ---- DESAFIOS ----

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 pokemons.sort(function(a, b) {
    if(a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  });
  console.log(pokemons);