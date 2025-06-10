const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')
require('dotenv').config()
const uri = process.env.URI
const client = new MongoClient(uri)
const mydb = client.db('mydb').collection('contacts')
const contactsDAO = require('./contactsDAO')
app.listen(3000, () => {
    console.log("Servidor Rodando...")
})

app.get('/all', async (req, res) => {
    const docs = await async contactsDAO.getUsers(mydb)
    res.json(JSON.parse(JSON.stringify(docs, null, 2)))
})

app.get('/add/:n/:t/:e', async (req, res) => {
    const doc = {
        nome: req.params.n,
        telefone: req.params.t,
        email: req.params.e
    }
    const result = await contactsDAO.insertUser(mydb, doc)
    res.json(result)
})

app.get('/del/:n', async (req, res) =>{
    const name = {
        nome : req.params.n
    }

    const result = await contactsDAO.deleteUserByNome(mydb, name)
    res.json(result)
})

app.get('/uptade/:e/:t', async (req, res) => {
    const old_email ={
        email: req.params.e
    }

    const new_tel = {
        $set : {telefone: req.params.t}
    }

    const result = await contactsDAO.updateTelefoneByEmail(mydb, old_email, new_tel)
    res.json(result)
})