console.log("exercício 2");

let number = Number(process.argv[2])

if (number >= 1 && number <= 10 ) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i} `);
    }
} else if (number <1 || number > 10) {
    console.log("Erro. Parâmetro inválido (’número precisa valer entre 1 e 10’)");
} else {
    console.log("Erro. Parâmetro inválido (’deve ser um número’)");
}
