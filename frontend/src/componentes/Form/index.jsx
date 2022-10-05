import React from 'react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

import './index.css'

const Form = ( {id}) => {

    const [nome, setNome] = useState('')
    const [autor, setAutor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImagem] = useState('')

    if(id) {
        //criar api retornar base no id e setar parametros
        //setNome()
    }

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
        <form action="" className='add-produto' onSubmit={submitFeito}>
            <label>Nome</label>
            <input type="text" onChange={(e) => setNome(e.target.value)} />

            <label>Autor</label>
            <input type="text" onChange={(e) => setAutor(e.target.value)} />

            <label>Descrição</label>
            <input type="text" onChange={(e) => setDescricao(e.target.value)} />

            <label>Preço</label>
            <input type="number" onChange={(e) => setPreco(e.target.value)} />

            <label>Imagem</label>
            <input type="text" onChange={(e) => setImagem(e.target.value)} />

            <button>Adcionar</button>
        </form>
    )
}

export default Form