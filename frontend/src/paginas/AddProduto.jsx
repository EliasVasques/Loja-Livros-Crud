import React, { useEffect } from 'react'

import Form from '../componentes/Form'
import './AddProduto.css'

const AddProduto = () => {

    // EDITAR (id na url)
    let id = null
    const buscadorParametros = new URLSearchParams(location.search)
    if(buscadorParametros.has('id')) id = buscadorParametros.get('id')

    return(
        <div className='container'>
            <Form id={id} />
        </div>
    )
}

export default AddProduto
