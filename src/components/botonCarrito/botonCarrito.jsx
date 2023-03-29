import React from 'react';
import { useCarritoContext } from '../../context/carritoContext';
import { Link } from 'react-router-dom';

const BotonCarrito = () => {

    const {getItemQuantity} = useCarritoContext();
    //<span>{getItemQuantity()}</span>
    // <Link className="btn btn-outline-success buscador" to={"/carrito"}>Carrito </Link>
    return (

        <>
        <button className="bg-carrito">
            <Link className="nav-link" id="navsec"to={`/carrito`}>
                <img className="imagenes" src="images/carrito.png" alt="carrito"/> 
                (<span>{getItemQuantity()}</span>)
            </Link>
        </button>
        
        </>
    );
}

export default BotonCarrito;
