import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';
const Carro = () => {

    const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext();
    

    return (
        <>
            {carrito.length === 0 
            ?
                <>
                    <h1>Carrito vacio</h1>
                    <button className='btn btn-dark'><Link to={'/'} className='nav-link'>Ir al inicio</Link></button>
                </>
            :
                <>
                    {carrito.map(prod => 
                        <div key={prod.id}>
                            <div>
                                <img src={prod.img} alt="imagen del producto"/>
                            </div>
                            <div>
                                <h5>{prod.nombre} {prod.modelo}</h5>
                                <p>Cantidad: {prod.cant}</p>
                                <p>Precio unitario: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</p>
                                <p>Subtotal: ${new Intl.NumberFormat('de-DE').format(prod.precio*prod.cant)}</p>
                                <button onClick={()=> removeItem(prod.id)}>Eliminar producto</button>
                            </div>
                        </div>
                
                    )}

                    <div className="divButtons">
                        <p>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <button  onClick={() => emptyCart()}> Vaciar carrito</button>
                        <button className="btn btn-dark">  <Link to={"/"}>Continuar comprando</Link></button>
                        <button className="btn btn-dark"> <Link to={"/checkout"}>Finalizar compra</Link></button>
                    </div>
                </>
            }

        </>
    );
}

export default Carro;
