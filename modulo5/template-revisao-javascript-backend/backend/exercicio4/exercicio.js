console.log("exercicio 4");
const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]

if (primeiraLista[1].nome === segundaLista[0].nome) {
    segundaLista.splice(0,1)
    let newList = [].concat(primeiraLista, segundaLista)
    console.log(newList);
}

