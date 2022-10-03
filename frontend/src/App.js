import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './componentes/Navbar/index'
import AddProduto from './paginas/AddProduto'
import Livros from './paginas/Livros'

const App = () => {

  return( 
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Livros />
          </Route> 
          <Route path="/addProduto">
            <AddProduto />
          </Route>
        </Switch>
      </BrowserRouter>
  )
}

export default App;
