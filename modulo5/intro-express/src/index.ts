import  express, {Request , Response}  from "express";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003,()=>{
    console.log("Server running in http://localhost:3003");
})

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Hello from express")
})

const users = [
    {
        id: '1',
        name: "Daniel",
        phone: "+55 00 0 0000-0000",
        email: "daniel@gmail.com",
        website: "QualWebsite?"
    },
    {
        id: '2',
        name: "vinicius",
        phone: "+55 00 0 0000-0000",
        email: "vinicius@gmail.com",
        website: "QualWebsite?"
    },
    {
        id: '3',
        name: "Joao",
        phone: "+55 00 0 0000-0000",
        email: "joao@gmail.com",
        website: "QualWebsite?"
    },
    {
        id: '4',
        name: "Pedro",
        phone: "+55 00 0 0000-0000",
        email: "Pedro@gmail.com",
        website: "QualWebsite?"
    },
    {
        id: '5',
        name: "Lucas",
        phone: "+55 00 0 0000-0000",
        email: "Lucas@gmail.com",
        website: "QualWebsite?"
    }
] 

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(users)
})

const posts = [
    {
        id:'1',
        tittle: "major",
        body: "se o major for o maior de todos o medo será pequeno, porque nem só a força contribui em uma guerra",
        useId:1
    },
    {
        id:'2',
        tittle: "melhor",
        body: "procurei ser o melhor em cada detahe que eu sabia, mas descobri que nem todo detalhe eu sabia que era meu",
        useId:2
    },
    {
        id:'3',
        tittle: "felicidade",
        body: "baseado em causas e ganhos, em festas e cantos, a felicidade não passa de ponto e qual ponto? O ponto de vista",
        useId:3
    },
    {
        id:'4',
        tittle: "simplicidade",
        body: "limpo e com brilho, lindo de ver, aquela tela com apenas uma linha, mas que siginifcava tudo, a linha da vida. Com um começo e fim.",
        useId:4
    },
    {
        id:'5',
        tittle: "dor",
        body: "viver é aprender, a dor faz parte do ser e do crescimento, sem a dor n seria possivel acreditar na felicidade, porque como saber oque é felicidade se nunca sentiu a dor?",
        useId:5
    }
]

app.get("/posts",(req: Request, res: Response)=>{
    res.status(200).send(posts)
})

app.get("/user/post",(req: Request, res: Response)=>{
    const userId = Number(req.query.iduser)

    if(!userId) {
        res.status(400).send("Digite o id em ambos")
    }else if (userId > posts.length){
        res.status(400).send(`Id não existe, so existe ${posts.length} atualmente`)
    }
    
    const postUser = posts.find((post)=>{
        return userId === post.useId
    })
     res.status(200).send(postUser)
})