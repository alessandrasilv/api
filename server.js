const express = require('express')
const db = require('./db')
const app = express()
const port = 3333
const cors = require('cors')


app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500']
}))

const alunos = [
    {"nome": "", "url": ""}
]

app.get('/alunos', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT id, nome ,senha FROM alunos")
        res.json(rows)

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "erro ao buscar alunos" })

    }
})

app.post('/alunos', (req, res) => {
    const { nome, url } = req.body
    res.json({"nome": nome, "url": url})
})

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333')
})