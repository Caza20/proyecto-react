import React from 'react';
import { useRef } from 'react';
import { useCarritoContext } from '../../context/carritoContext';

const Checkout = () => {

//    const {carrito, totalPrice, emptyCart} = useCarritoContext()

    const datosFormulario = useRef()

//    const consultarFormulario = (e) => {
        // tenemos que prevenir el comportamiento del formulario para que no se refresque 
//        e.preventDefault()
        //transformamos los datos del form en un objeto
//        const datForm = new FormData(datosFormulario.current)
        //Object.fromEntries para poder mostrarlo de forma visual
//        console.log(object.fromEntries(datFrom))
        // podemos saber los productos que compro y lo que gasto.   console.log(carrito)
//        console.log(totalPrice())
//    }

    return (
        <div>
            <form  ref={datosFormulario}/>
            <div>
                <label htmlFor="nombreCompleto"> Nombre y apellido</label>
                <input type="text" name="nombreCompleto"/>
            </div>

            <div>
                <label htmlFor="email"> Email</label>
                <input type="text" name="email"/>
            </div>

            <button type="submit">Finalizar compra</button>
        </div>
    );
}

export default Checkout;
