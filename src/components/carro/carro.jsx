import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/carritoContext';
const Carro = () => {

   // const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext();
    

    return (
        <div>
    <p>Resumen de la compra: </p>
    <button > Vaciar carrito</button>
    <button> <Link to={"/"}></Link>Continuar comprando</button>
    <button> <Link to={"/checkout"}>Finalizar compra</Link></button>
    </div>
    );
}

export default Carro;
