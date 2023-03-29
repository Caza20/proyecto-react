import React from 'react';
import { useRef } from 'react';
import { useCarritoContext } from '../../context/carritoContext';
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
        <div className='container formulario'>
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="row g-3 align-items-center cont-form">
                    <div className="col-auto">
                        <label htmlFor="nombreCompleto" className="form-label text-white"> <h2>Nombre y apellido:</h2></label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control form-control-lg" name="nombreCompleto"/>
                    </div>
                </div>
            
                <div className="row g-3 align-items-center cont-form">
                    <div className="col-auto">
                        <label htmlFor="email" className="form-label text-white"> <h2>Email:</h2></label>
                    </div>
                    <div className="col-auto">
                        <input type="email" className="form-control form-control-lg" name="email" />
                    </div>
                </div>
            
                <div className="row g-3 align-items-center cont-form">
                    <div className="col-auto">
                        <label htmlFor="dni" className="form-label text-white"> <h2>DNI:</h2></label>
                    </div>
                    <div className="col-auto">
                        <input type="number" className="form-control form-control-lg" name="dni"/>
                    </div>
                </div>

                <div className="row g-3 align-items-center cont-form">
                    <div className="col-auto">
                        <label htmlFor="celular" className="form-label text-white"> <h2>Celular:</h2> </label>
                    </div>
                    <div className="col-auto">
                        <input type="number" className="form-control form-control-lg" name="celular"/>
                    </div>
                </div>

                <div className="row g-3 align-items-center cont-form">
                    <div className="col-auto">
                        <label htmlFor="direccion" className="form-label text-white"><h2>Dirección:</h2></label>
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control form-control-lg" name="direccion"/>
                    </div>
                </div>

                <button type="submit" className='btn-outline-success  rounded-0 boton_compra '><h3 className="nav-link text-dark">Finalizar compra</h3></button>
            </form>
        </div>
    );
}

export default Checkout;
