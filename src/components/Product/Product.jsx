import { Link } from "react-router-dom";
import './Product.css';

const Product = ({prod}) => {
    console.log(prod)
    return (

        <div className='card text-center animate__animated animate__fadeInRight'>
            <div className="overflow">
            <img src={prod.img} className="card-img-top" alt="..." /> 
            </div>
                <div className="card-body text-light">
                
                    <ul className="card-text text-secondary">
                        <li className="card-text1"><h5>Modelo:{prod.nombre}</h5></li>
                        <li className="card-text1">Marca:{prod.marca}</li>
                        <li className="card-text1">Precio:${prod.precio}</li>
                        <li className="card-text1">Stock:{prod.stock}</li>
                        <button className="btn btn-outline-secondary rounded-0 boton_compra"><Link className="nav-link" to={`/producto/${prod.id}`}> ver producto </Link></button>
                    </ul>
                </div>
            </div>
        );
    }




export default Product;
