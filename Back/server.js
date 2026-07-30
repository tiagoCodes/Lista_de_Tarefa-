import express from "express"
import { PrismaClient } from "./generated/prisma/client.js"
import cors from "cors"


const app = express()
const prisma = new PrismaClient()
app.use(express.json())
app.use(cors())

app.get('/registro', async (req, res) => {
    const access = await prisma.list_Task.findMany()

    res.status(200).json(access)
})

app.post('/registro', async (req, res) => {
    const access = await prisma.list_Task.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: Number(req.body.age)
        }
    })
    res.status(201).json(access)

})
app.put('/registro/:id', async (req, res) => {
    const access = await prisma.list_Task.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            age: Number(req.body.age),
            email: req.body.email
        }
    })
    res.status(201).json(access)
})
app.delete('/registro/:id', async (req, res) => {
    await prisma.list_Task.delete({
        where: {
            id: req.params.id,
        },
    })
    res.status(200).json('Deletado com sucesso!')
})

app.listen(3000)