import React, { useState, useEffect } from 'react';
import '../assets/css/blog.css';
import ListaCategorias from '../components/ListaCategorias';
import ListaPosts from '../components/ListaPosts';
import { Route, useParams, useRouteMatch, Switch, Link } from 'react-router-dom';
import { busca } from '../api/api';
import SubCategoria from '../paginas/SubCategoria';

const Categoria = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subcategorias, setSubcategorias] = useState([]);

  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubcategorias(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {
          subcategorias.map((subcategoria) => {
            return (
              <li
                className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
                key={subcategoria}
              >
                <Link to={`${url}/${subcategoria}`}>
                  { subcategoria }
                </Link>
              </li>
            );
          })
        }
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPosts url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  )
}

export default Categoria;