import React, {useState} from 'react';
import styled from 'styled-components';
import { NavLink, Route, Routes } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Blog from './componentes/Blog';
import Tienda from './componentes/Tienda';
import Error404 from './componentes/Error404';
import Carrito from './componentes/Carrito';

const App = () => {

  const productos = [
    {id:1, nombre: 'Producto 1'},
    {id:2, nombre: 'Producto 2'},
    {id:3, nombre: 'Producto 3'},
    {id:4, nombre: 'Producto 4'},
  ];

  const [carrito, cambiarCarrito] = useState([]);

  const agregarPorductoCarrito = (idProductoAgregar, nombre) =>{
    // Si el carrito no tiene elementos entonces agregamos uno.
    if (carrito.length === 0) {
      cambiarCarrito([{id: idProductoAgregar, nombre: nombre, cantidad: 1}]);
    }else{
      // De otra forma, tenemos que revisar que el carrito no tenga ya el producto que queramos agregar
      // Si ya lo tiene entonces queremos actualizar su valor.
      // Si no lo tiene, entonces lo agregamos.

      // Para poder editar el arreglo, tenemos que clonarlo.
      const nuevoCarrito = [...carrito];

        // Comprobamos si el carrito ya tiene el ID del producto a agregar.
        const yaEstaEnCarrito = nuevoCarrito.filter((productoDeCarrito)=> {
          return productoDeCarrito.id === idProductoAgregar 
        }).length > 0;

        // Si ya tiene el producto, entonces lo tenemos que actualizar.
        if (yaEstaEnCarrito) {
          // Para ello, tenemos que buscarlo, obtener su posición en el arreglo.
          // Y en base a su posición ya actualizamos el valor.

          nuevoCarrito.forEach((productoDeCarrito, index)=>{
            if (productoDeCarrito.id === idProductoAgregar) {
              const cantidad = nuevoCarrito[index].cantidad;
              nuevoCarrito[index] = {
                id: idProductoAgregar, 
                nombre: nombre, 
                cantidad: cantidad + 1
              }
            }
          });
        // De otra forma entonces agregamos el producto al arreglo.
        }else{
          nuevoCarrito.push(
            {id: idProductoAgregar, nombre: nombre, cantidad: 1}
          );
        }
        // Por último, actualizamos el carrito.
        cambiarCarrito(nuevoCarrito);
    }
  }

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
          <div className='col-12 col-md-8'>
            <main className='container'>
              <Routes>

                <Route path='*' element={<Error404 />}/>

                <Route path='/' element={<Inicio />}/>

                <Route path='/blog' element={<Blog />}/>

                <Route path='/tienda' element={
                    <Tienda 
                      productos={productos}
                      agregarPorductoCarrito={agregarPorductoCarrito}
                    />
                  }/>

              </Routes>
          </main>
          </div>
          <div className='col-12 col-md-4'>
            <Aside>
              <Carrito carrito = {carrito}/>
            </Aside>
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

const Aside = styled.aside `
  padding: 20px 20px;
  border: 1px solid #dddd;
  border-radius: 0 0 6px 6px;
`;

export default App;