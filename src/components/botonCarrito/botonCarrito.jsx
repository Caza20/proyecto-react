import React from 'react';
import { useCarritoContext } from '../../context/carritoContext';
import { Link } from 'react-router-dom';

const BotonCarrito = () => {

    //const {getItemQuantity} = useCarritoContext();
    //<span>{getItemQuantity()}</span>
    // <Link className="btn btn-outline-success buscador" to={"/carrito"}>Carrito </Link>
    return (

        
        <button className="btn btn-dark"><Link className="nav-link" to={`/carrito`}> Carrito </Link></button>

    );
}

export default BotonCarrito;
