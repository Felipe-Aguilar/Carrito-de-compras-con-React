import React from 'react';
import styled from 'styled-components';
import { NavLink, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Tienda from './componentes/Tienda';
import Error404 from './componentes/Error404';

const App = () => {

  const productos = [
    {id:1, nombre: 'Producto 1'},
    {id:2, nombre: 'Producto 2'},
    {id:3, nombre: 'Producto 3'},
    {id:4, nombre: 'Producto 4'},
  ];

  return ( 
    <Contenedor className='container-fluid vh-100'>
      <Menu className='row justify-content-between align-items-center pl-5 pr-5'>
        <div>
          <h1>LP CALZADOS</h1>
        </div>
        <div>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/tienda">Tienda</NavLink>
        </div>
        <div className='d-none d-md-block'>
          <p>Carrito</p>
        </div>
      </Menu>

      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-9'>
            <main className='container'>
              <Routes>

                <Route path='*' element={<Error404 />}/>

                <Route path='/' element={<Inicio />}/>

                <Route path='/blog' element={<Blog />}/>

                <Route path='/tienda' element={<Tienda productos={productos}/>}/>

              </Routes>
          </main>
          </div>
          <div className='col-12 col-md-3'>
            <aside>
              <h4>Sidebar</h4>
            </aside>
          </div>
        </div>

      </div>
      
    </Contenedor>
  );
}

const Contenedor = styled.div `

`;

const Menu = styled.div `
  background: #1b1b1b;
  padding: 20px 10px;

  h1{
    color: #fff;
    font-family: 'Bebas Neue', cursive;
    margin:0;
    @media screen and (max-width: 575px){
      margin-bottom: 15px;
    }
  }

  a{
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    transition: .3s ease;
    border-bottom: 3px solid transparent;

    &:hover{
      border-bottom: 3px solid #b30d0d;
      color: #dddddd;
    }
  }
  p{
    color: transparent;
  }
  div{
    @media screen and (max-width: 575px){
      width: 100%;
      text-align: center;
    }
  }
`;

export default App;