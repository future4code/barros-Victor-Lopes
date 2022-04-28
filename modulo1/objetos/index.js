/* ------ EXERCICIO DE INTEPRETAÇÃO-------

---EXERCICIO 1---

Letra A)
    Resposta:   Matheus Nachtergaele
                Virginia Cavendish
                Canal Brasil, 19h

--- Exercicio 2 ---

Letra A)
    Resposta:   false
                undefined

Letra B)    
    Resposta:   No primeiro console, ele coloca pessoa como valor de atributo da função, e pucha o backender como informação.
                Sera undefined, pois não existe nenhuma chave com o nome de altura

------- EXERCICO DE ESCRITA --------

--- Exercicio 1 ---

Letra A)
    Resposta:
*/

    const person={
        nome: "Victor",
        apelidos: ["vitinho", "Tripa", "CHUP-CHUP"]
    }
function escritaPerson(pesoa){
    
        console.log(`Eu sou ${pesoa.nome}, mas pode me chamar de ${pesoa.apelidos[0]}, ${pesoa.apelidos[1]} ou ${pesoa.apelidos[2]}`);
}

// Letra B)
//  Resposta:

    const newPerson={
        ...person,
        apelidos:["vitrola", "tripozudinho", "tri-tri"]
    }

escritaPerson(newPerson)
    

/*--- Exercicio 2 ---
Letra B)
    Resposta:
*/

    const person1={
        nome:"victor",
        idade:19,
        profissao:"marceneiro"
    }

        const person2={
            nome:"juliene",
            idade:22,
            profissao:"açougueira"   
        }

// Letra B)
//  Resposta:

        function thepersons (array1, array2, array3){
            
            array1=[person1.nome, person1.nome.length,person1.idade, person1.profissao, person1.profissao.length]
            array2=[person2.nome, person2.nome.length,person2.idade, person2.profissao, person2.profissao.length]
            
            array3= array1.concat(array2)
          
            return array3 
    }

/* -----Exercicio 3-----

Letra A)
    Repsosta:
*/

    let carrinho=[]

//Letra B)
    // Resposta:
        const fruit1={
            nome:"Abacaxi",
            disponibilidade:true
     }

            const fruit2={
            nome:"Mamão",
            disponibilidade:true
         }

                const fruit3={
                nome:"Goiaba",
                disponibilidade:true
             }

//Letra C)
    //Repsosta:
    
    function ready(frutas){
        carrinho=[fruit1, fruit2, fruit3]
        return carrinho
    }

    carrinho=ready()

    console.log(carrinho)

//--- DESAFIO 3 ---
        function estoque (fruta){
           fruta={
               ...fruit1,
               disponibilidade:false
           }
            return fruta
        }

     console.log(estoque())



/* ------- DESAFIOS -------

--- DESAFIO 1 ---
*/

 function usuario (name, yearsOld, occupation,obj){
  
    name=prompt("Qual seu nome?")
    yearsOld=Number(prompt("Qual sua idade"))
    occupation=prompt("Qual sua profissão?")

        obj={
            nome: name,
            profissao:occupation,
            idade: yearsOld
        }

        console.log(obj, typeof obj);
        
}

usuario()

// --- DESAFIO 2 ---

function objts (obj1, obj2, comp1, comp2){
    
    obj1={
        nome:"O amor",
        anoLancamento:2004
    }

        obj2={
            nome:"O odio",
            anoLancamento:2004
        }
            comp1=obj1.anoLancamento<obj2.anoLancamento
            comp2=obj1.anoLancamento===obj2.anoLancamento

    console.log(`
    O primeiro filme foi lançado antes do primeiro? ${comp1}
 O segundo filme foi lançado no mesmo ano do segundo? ${comp2}`);    
}

objts()

//---DESAFIO 3---


