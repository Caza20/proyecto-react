import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/carritoContext';
const Carro = () => {

    const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext();
    

    return (
        <>
            {carrito.length === 0 
            ?
                <div className="container carritoVacio">
                    <h1 className="text-secondary">Carrito vacio</h1>
                    <button className="btn-outline-success  rounded-0 boton_compra "><Link to={'/'} className="nav-link text-dark"><h2>Ir al inicio</h2></Link></button>
                </div>
            :
                <>
                    {carrito.map(prod => 
                    
                        <div className="row container d-flex cont-carro align-items-center animate__animated animate__fadeInRight" key={prod.id}>
                            <div className="col-md-4 imgBody">
                                <div className="overflow">
                                    <img src={prod.img} alt="imagen del producto" className="img-fluid rounded-start"/>
                                </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body1 column justify-content-center align-items-center text-secondary">
                                        <h2 className="card-text1">{prod.nombre} {prod.modelo}</h2>
                                        <hr></hr>
                                        <h3 className="card-text1">Cantidad: {prod.cant}</h3>
                                        <h3 className="card-text1">P. unit.: ${new Intl.NumberFormat('de-DE').format(prod.precio)}</h3>
                                        <h3 className="card-text1">Subtotal: ${new Intl.NumberFormat('de-DE').format(prod.precio*prod.cant)}</h3>
                                        <button className="btn-outline-success  rounded-0 boton_compra " onClick={()=> removeItem(prod.id)}><h3 className="nav-link text-dark">Eliminar producto</h3></button>
                                    </div>
                                </div>
                        
                        
                        </div>
                    )}

                    <div className="divButtons">
                        <h3 className="text-secondary">Resumen de la compra: ${new Intl.NumberFormat('de-DE').format(totalPrice())}</h3>
                        <button  className="btn-outline-success  rounded-0 boton_compra" onClick={() => emptyCart()}> <h3 className="nav-link text-dark">Vaciar carrito </h3></button>
                        <button className="btn-outline-success  rounded-0 boton_compra">  <Link className="text-decoration-none" to={"/"}><h3 className="nav-link text-dark">Continuar comprando </h3></Link></button>
                        <button className="btn-outline-success  rounded-0 boton_compra"> <Link  className="text-decoration-none" to={"/checkout"}><h3 className="nav-link text-dark">Finalizar compra</h3></Link></button>
                    </div>
                </>
            }

        </>
    );
}

export default Carro;
