import './Contador.css'
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
                <button onClick={() => disCont()} className= "btn-sm boton_menos">-</button>
                <h3>{cont}</h3>
                <button onClick={() => aumCont()} className=" btn-sm boton_mas">+</button>
            </div>
                <button onClick={() => agregarAlCarrito()} className=" btn-sm  boton_agregar"><Link to={'/producto-agregado'}><h3>Agregar</h3></Link></button>
        </div>

    );
    
}
export default Contador;