import React from 'react';
import { useRef } from 'react';
import { useCarritoContext } from '../../context/CarritoContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const {totalPrice, emptyCart} = useCarritoContext()

    const datosFormulario = useRef()

    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        
        // tenemos que prevenir el comportamiento del formulario para que no se refresque 
        e.preventDefault()
        //transformamos los datos del form en un objeto
        const datForm = new FormData(datosFormulario.current)
        //Object.fromEntries para poder mostrarlo de forma visual
        const cliente = Object.fromEntries(datForm);
        console.log(Object.fromEntries(datForm))
        // podemos saber los productos que compro y lo que gasto.   console.log(carrito)
        console.log(totalPrice())

        toast.success(`Hola ${cliente.nombreCompleto}, tu compra ha sido finalizada`)
        emptyCart();
        e.target.reset();
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
            <div className='mb-3'>
                <label className="form-label" htmlFor="nombreCompleto"> Nombre y apellido</label>
                <input type="text" name="nombreCompleto"/>
            </div>

            <div className='mb-3'>
                <label htmlFor="email"> Email</label>
                <input type="text" name="email"/>
            </div>

            <div className='mb-3'>
                <label htmlFor="dni"> DNI</label>
                <input type="number" name="dni"/>
            </div>

            <div className='mb-3'>
                <label htmlFor="celular"> Celular </label>
                <input type="number" name="celular"/>
            </div>

            <div className='mb-3'>
                <label htmlFor="direccion">Dirección</label>
                <input type="text" name="direccion"/>
            </div>

            <button type="submit" className='btn btn-dark'>Finalizar compra</button>
            </form>
        </div>
    );
}

export default Checkout;
