import React, {useState} from 'react';
import styled, { useTheme } from 'styled-components';

const Carrito = ({carrito}) => {

    return ( 
        <div>
            <h5>Carrito de compras</h5>
            {carrito.length > 0 ? 
                carrito.map((producto, index)=>{
                    return(
                        <Producto key={index}> 
                            <NombreProducto>
                                {producto.nombre}
                            </NombreProducto>
                            Cantidad: {producto.cantidad}
                        </Producto>
                    );
                })
            :
                <p>Aún no has agregado productos al carrito</p>
            }
        </div>
    );
}

const Producto = styled.div `
    padding: 10px;
    border-bottom: 1px solid #a7a7a7;
    font-size: 14px;
`;

const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
    margin-bottom: 3px;
`;

export default Carrito;