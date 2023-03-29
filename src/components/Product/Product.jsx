import { Link } from "react-router-dom";


const Product = ({prod}) => {
    console.log(prod)
    return (

        <div className="container cardProducto row animate__animated animate__fadeInRight">
            <div className="card">
                <div className="overflow">
                    <img src={prod.img} className="card-img-top" alt="..." /> 
                </div>
                <div className="card-body text-light">
                    <ul className="card-text text-secondary column">
                        <li className="card-text1"><h3>{prod.nombre}</h3></li>
                        <li className="card-text1"><h5>Marca: {prod.marca}</h5></li>
                        <li className="card-text1"><h5>Precio: ${prod.precio}</h5></li>
                        <li className="card-text1"><h5>Stock: {prod.stock}</h5></li>
                        <button className="btn-outline-success  rounded-0 boton_compra "><Link className="nav-link text-dark" to={`/producto/${prod.id}`}> <h3>Ver producto</h3> </Link></button>
                    </ul>
                </div>
            </div>
        </div>
        );
    }




export default Product;
