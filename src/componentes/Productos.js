import React from 'react';
import styled from 'styled-components';

const Productos = ({productos}) => {

    return ( 
        <div>
            <h5>Productos</h5>
            <ContenedorProductos>
                {productos.map((producto, index)=>{
                    return(
                        <Producto className='col-12 col-md-5' key={producto.id}>
                            <p><b>{producto.nombre}</b></p>
                            <Boton>Agregar al Carrito</Boton>
                        </Producto>
                    );
                })}
            </ContenedorProductos>
        </div>
    );
}

const ContenedorProductos = styled.div `
    margin-top: 20px;
`;
const Producto = styled.div `
    border: 1px solid #e9e9e9;
    border-radius: 6px;
    display: inline-block;
    margin: 5px;
    text-align: center;
    padding: 20px 20px;
`;
const Boton = styled.div `
    background: #b30d0da6;
    color: #fff;
    border-radius: 6px;
    padding: 5px 0px;
    cursor: pointer;
    transition: .3s ease;

    &:hover{
        background: #b30d0d;
    }
`;

export default Productos;