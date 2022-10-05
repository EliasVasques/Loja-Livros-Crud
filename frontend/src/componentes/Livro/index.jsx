import React from "react"

import './index.css'

const Livro = ( { livro } ) => {
    
    const deletarLivro = () => {
        fetch('api/livros/' + livro._id, {
            method: 'DELETE',
        })
    }

    const editar = () => {
        window.location = '/addProduto?id=' + livro._id
    }

    return(
        <div className="livro">
            <img src={ livro.imagem } />
            <p>By { livro.autor }</p>
            <p><strong>{ livro.nome }</strong></p>
            <p><strong>R${ livro.preco }</strong></p>
            <button className="alterar" onClick={editar}>Alterar</button>
            <button className="deletar" onClick={deletarLivro}>Deletar</button>
        </div>
    )
}

export default Livro