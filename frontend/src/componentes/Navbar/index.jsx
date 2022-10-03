import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const Navbar = () => {
    
    return(
        <nav>
            <ion-icon name="book-outline"></ion-icon>
            <div className="links">
                <Link to="/">Livros</Link>
                <Link to="/addProduto">Add Produto</Link>
            </div>
        </nav>
    )
}

export default Navbar
