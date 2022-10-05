const { Router } = require('express')

const { addLivro, pegarLivros, removerLivro, alterarLivro, pegarUmLivro } = require('../Controllers/livros')

const router = Router()

router.get('', pegarLivros)

router.get('/:id', pegarUmLivro)

router.post('', addLivro)

router.delete('/:id', removerLivro)

router.put('/:id', alterarLivro)

module.exports = router