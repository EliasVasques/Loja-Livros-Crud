const { Router } = require('express')

const { addLivro, pegarLivros, removerLivro, alterarLivro } = require('../Controllers/livros')

const router = Router()

router.get('', pegarLivros)

router.post('', addLivro)

router.delete('/:id', removerLivro)

router.put('/:id', alterarLivro)

module.exports = router