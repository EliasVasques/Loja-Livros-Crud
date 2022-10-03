const express = require('express')
const mongoose = require('mongoose')
const livros = require('./Routes/livros')
require('dotenv').config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log('Rodando na porta ' + process.env.PORT)) 
    })
    .catch((erro) => {
        console.log( erro ) 
    })

// middlewares
app.use('/api/livros', livros)


   