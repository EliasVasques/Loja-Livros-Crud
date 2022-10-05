import React, { useEffect, useState } from 'react'
import Livro from '../componentes/Livro'
import './Livros.css'

const Livros = () => {

    const [livros, setLivros] = useState(null)

    useEffect(() => {
        console.log('Fazendo requisição...')
        
        const pegarLivros = async () => {
            const resposta = await fetch('/api/livros')
            const json = await resposta.json()
            if(resposta.ok) {
                setLivros(json)
            }
        } 
        pegarLivros()
    })
    
    return(
        <div className='livros'>
            { livros && livros.map( (livro) => (
                <Livro key={livro._id} livro={livro} />
            )) }
        </div>
    )

}

export default Livros
