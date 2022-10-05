import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const Navbar = () => {
    
    return(
        <nav>
            <Link to="/">
                <ion-icon name="book-outline"></ion-icon>
            </Link>

            <Link to="/addProduto">Add Produto</Link>
        </nav>
    )
}

export default Navbar
