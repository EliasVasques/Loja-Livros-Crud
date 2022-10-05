import React, { useEffect, useState } from 'react'

import './index.css'

const Form = ( { id }) => {

    const [nome, setNome] = useState('')
    const [autor, setAutor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImagem] = useState('')

    useEffect(() => {
        if(id) {
            const setarValoresForm = async () => {
                const resposta = await fetch('api/livros/' + id)
                const json = await resposta.json()
                if(resposta.ok) {
                    setNome(json.nome)
                    setAutor(json.autor)
                    setDescricao(json.descricao)
                    setPreco(json.preco)
                    setImagem(json.imagem)
                } else {
                    window.location = '/'
                }
            }
            setarValoresForm()
        }
    }, [])

    const submitFeito = async (e) => {
        e.preventDefault() // não recarregar a página

        const novoLivro = { nome, autor, descricao, preco, imagem }

        let resposta;
        if(id) {
            resposta = await fetch('/api/livros/' + id , { 
                method: 'PUT',
                body: JSON.stringify(novoLivro),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        else {
            resposta = await fetch('/api/livros', { 
                method: 'POST',
                body: JSON.stringify(novoLivro),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        
        if(resposta.ok) {
            window.location = '/'
        }
    }

    return(
        <form action="" className='form' onSubmit={submitFeito}>
            <label>Nome</label>
            <input type="text" onChange={e => setNome(e.target.value)} value={nome} required />

            <label>Autor</label>
            <input type="text" onChange={(e) => setAutor(e.target.value)} value={autor} required />

            <label>Descrição</label>
            <input type="text" onChange={(e) => setDescricao(e.target.value)} value={descricao} required />

            <label>Preço</label>
            <input type="number" onChange={(e) => setPreco(e.target.value)} value={preco} required min="1" />

            <label>Imagem</label>
            <input type="text" onChange={(e) => setImagem(e.target.value)} value={imagem} required/>

            <button>{ id ? 'Alterar Livro' : 'Adcionar Livro' }</button>
        </form>
    )
}

export default Form