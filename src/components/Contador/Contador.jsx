import { useState } from "react";
import { Link } from 'react-router-dom';

const Contador = ({stock, onAdd}) => {
    const [cont, setCont] = useState (1)
    const disCont = () => cont > 1 && setCont(cont-1)
    const aumCont = () => cont < stock && setCont(cont+1)
    const agregarAlCarrito = () => onAdd(cont)

    return (
        <div className="container justify-content-center contenedor">
            <div className="contador">
                <button onClick={() => disCont()} className="btn-outline-success  rounded-0 boton_compra boton_menos"><h3>-</h3></button>
                <h2>{cont}</h2>
                <button onClick={() => aumCont()} className="btn-outline-success  rounded-0 boton_compra boton_mas"><h3>+</h3></button>
            </div>
                <button onClick={() => agregarAlCarrito()} className="btn-outline-success  rounded-0 boton_compra "><Link className="nav-link text-dark" to={'/producto-agregado'}><h3>Agregar</h3></Link></button>
        </div>

    );
    
}
export default Contador;