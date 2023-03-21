import React from 'react';
import { Link } from 'react-router-dom';

const AgregarProducto = () => {
    return (
        <div>
            <h1>Producto agregado al carrito</h1>
            <button className='btn btn-dark'><Link to={'/'}>Seguir comprando</Link></button>
            <button className='btn btn-dark'><Link to={'/carrito'}>Ir al carrito</Link></button>
        </div>
    );
}

export default AgregarProducto;
