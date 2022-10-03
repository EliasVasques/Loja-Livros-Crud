const livroModel = require('../Models/livro') 

const pegarLivros = ( req, res ) => {
    livroModel.find()
        .then((livro) => res.status(200).json(livro))
        .catch((erro) => res.status(400).json({erro: erro}))
}

const addLivros = ( req, res ) => {
    livroModel.create( req.body )
        .then((livro) => res.status(200).json(livro))
        .catch((erro) => res.status(400).json({erro: erro}))
}

module.exports = {
    addLivros,
    pegarLivros
}