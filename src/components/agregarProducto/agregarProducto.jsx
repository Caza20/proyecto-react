import React from 'react';
import { Link } from 'react-router-dom';

const AgregarProducto = () => {
    return (
        <div>
            <h1 className="text-secondary">Producto agregado al carrito</h1>
            <button className='btn-outline-success  rounded-0 boton_compra"'><Link className="text-decoration-none" to={'/'}><h3 className="nav-link text-dark">Seguir comprando</h3></Link></button>
            <button className='btn-outline-success  rounded-0 boton_compra"'><Link className="text-decoration-none" to={'/carrito'}><h3 className="nav-link text-dark">Ir al carrito</h3></Link></button>
        </div>
    );
}

export default AgregarProducto;
