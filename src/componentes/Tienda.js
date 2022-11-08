import React from 'react';
import Productos from './Productos';

const Tienda = ({productos}) => {
    return ( 
        <div className='row mt-4'>
            <div className='col-12'>
                <h2>Tienda</h2>
                <Productos productos={productos}/>
            </div>
        </div>
    );
}

export default Tienda;