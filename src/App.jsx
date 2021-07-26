import React from 'react';
import './assets/css/base/base.css';
// Router: Pega o BrowserRouter, mas utiliza como Router.
// Route: Define qual componente deve renderizar conforme o caminho.
// Switch: Quando o route encontra um componente para renderizar, ele para de procurar outros.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';

function App() {
  return (
  <Router>
    <Cabecalho />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/sobre'>
        <Sobre />
      </Route>
      <Route path='/categoria/:id'>
        <Categoria />
      </Route>
      <Route path='/posts/:id'>
        <Post />
      </Route>
      <Route>
        <Pagina404 />
      </Route>
    </Switch>
  </Router>
  )
}

export default App
