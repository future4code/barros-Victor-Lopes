console.log("exercicio 3");
const contas = [
    {
        email: "astrodev@labenu.com",
        password: "abc123"
    },
    {
        email: "bananinha@gmail.com",
        password: "bananinha"
    }
]
let email = process.argv[2]
let senha = process.argv[3]
let newEmail = email.includes("@")
let newSenha = senha.slice('')

if (email === contas[0].email && senha == contas[0].password || email === contas[1].email && senha == contas[1].password) {
    console.log("login bem-sucedido");
} else if (newEmail === false) {
    console.log("e-mail inválido");
} else if (newSenha.length < 6) {
    console.log("senha deve possuir no mínimo 6 caracteres");
} else {
    console.log("e-mail ou senha incorretos");
}
