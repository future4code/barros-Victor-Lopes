import express, { Request, Response } from "express"

import cors from 'cors'
import { table } from "console"

const app = express()

app.use(express.json())

app.use(cors())

app.get("/ping", (req: Request, res: Response) => {
    res.send("pong")
})

type ToDo = {
    userId: number,
    id: number,
    tittle: string,
    completed: boolean
}

const afazeres: ToDo[] = [
    {
        userId: 1,
        id: 1,
        tittle: "planjeamento",
        completed: true
    },
    {
        userId: 1,
        id: 6,
        tittle: "planjeamento",
        completed: true
    },
    {
        userId: 1,
        id: 7,
        tittle: "planjeamento",
        completed: true
    },
    {
        userId: 2,
        id: 2,
        tittle: "lavar casa",
        completed: false
    },
    {
        userId: 3,
        id: 3,
        tittle: "dar comida pro dog",
        completed: true
    },
    {
        userId: 4,
        id: 4,
        tittle: "ligar pra crush",
        completed: false
    },
    {
        userId: 5,
        id: 5,
        tittle: "correr",
        completed: false
    },
]
// exercicio 4

app.get("/toDoLoading", (req: Request, res: Response) => {
    const trueOrFalse = req.body.completedOrIncompleted

    const inLoading = afazeres.filter((andamento) => {
        return andamento.completed === trueOrFalse
    })
    res.status(200).send(inLoading)
})

//exercicio 5

app.post("/addToDo", (req: Request, res: Response) => {
    const { userId, id, tittle, completed } = req.body

    for (let i = 0; i < afazeres.length; i++) {
        if (afazeres[i].id === id) {
            res.status(500).send(`Digite um id maior que ${afazeres.length}`)
        }
    }
    afazeres.push(
        {
            userId: userId,
            id: id,
            tittle: tittle,
            completed: completed
        }
    )
    res.status(200).send(afazeres)

})

//exercicio 6

app.patch("/update", (req: Request, res: Response) => {
    const finId = Number(req.query.id)

    const tarefa = afazeres.filter((tarefa) => tarefa.id === finId)[0]

    tarefa.completed = !tarefa.completed

    res.send(tarefa)
})

//exercicio 7

app.delete("/delet", (req:Request, res: Response)=> {
    const idDelet = Number(req.query.deletId)

    const serachObject = afazeres.findIndex((afazeres)=>{
        return afazeres.id === idDelet
    })

    afazeres.splice(serachObject, 1)

    res.status(200).send(afazeres)
    
})

//exercicio 8

app.get("/userTarefa", (req: Request, res:Response) => {
    const getIdUser = Number(req.headers.id)

    const afazerUser = afazeres.filter((afazer)=> afazer.userId === getIdUser)

    res.send(afazerUser)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});