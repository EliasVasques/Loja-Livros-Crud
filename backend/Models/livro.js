const mongoose = require('mongoose')
const { Schema } = mongoose

const livroSchema = new Schema({
    nome: {
        type: String,
        required: true 
    },
    autor: {
        type: String,
        required: true 
    },
    descricao: {
        type: String,
    },
    preco: {
        type: Number,
        required: true 
    },
    imagem: {
        type: String,
        //required: true 
    }
}, { timestamps: true })

module.exports = mongoose.model( 'livro', livroSchema )