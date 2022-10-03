const { Router } = require('express')

const { addLivros, pegarLivros } = require('../Controllers/livros')

const router = Router()

router.get('', pegarLivros)

router.post('', addLivros)

module.exports = router