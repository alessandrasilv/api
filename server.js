const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3333', 'http://127.0.0.1:3333']
}))

const alunos = [
    {"nome": "", "url": ""}
]

app.get('/alunos', (req, res) => {
    res.send('Pegando dados da API')
})

app.post('/alunos', (req, res) => {
    const { nome, url } = req.body
    res.json({"nome": nome, "url": url})
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3333')
})