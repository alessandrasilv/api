const express = require('express')
const app = express()

app.use(express.json())

const alunos = [
    {"nome": "ale", "idade": 17},
    {"nome": "emmy", "idade": 17},
    {"nome": "bruno", "idade": 17}
]

app.get('/alunos', (req, res) => {
    res.send('Pegando dados da API')
})

app.post('/alunos', (req, res) => {
    const { nome, idade } = req.body
    res.send(`Nome: ${nome} Idade: ${idade}`)
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})