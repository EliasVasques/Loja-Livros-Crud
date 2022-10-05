const livroModel = require('../Models/livro') 

const pegarLivros = ( req, res ) => {
    livroModel.find()
        .then((livro) => res.status(200).json(livro))
        .catch((erro) => res.status(400).json({erro: erro}))
}

const addLivro = ( req, res ) => {
    livroModel.create( req.body )
        .then((livro) => res.status(200).json(livro))
        .catch((erro) => res.status(400).json({erro: erro}))
}

const removerLivro = ( req, res ) => {
    const id = req.params.id
    livroModel.findByIdAndDelete( id )
        .then((livro) => res.status(200).json(livro))
        .catch((erro) => res.status(400).json({erro: erro}))
}

const alterarLivro = ( req, res ) => {
    const id = req.params.id
    console.log(id)
    livroModel.findByIdAndUpdate( id , req.body )
        .then((livro) => res.status(200).json(livro))
        .catch((erro) => res.status(400).json({erro: erro}))
}

module.exports = {
    addLivro,
    pegarLivros,
    removerLivro,
    alterarLivro
}