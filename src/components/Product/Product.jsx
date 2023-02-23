

const Product = ({prod}) => {
    console.log(prod)
    return (

        <div className="cardProducto">
            <img src={prod.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5>{prod.nombre}</h5>
                        <p className="card-text">{prod.marca}</p>
                        <p className="card-text">{prod.precio}</p>
                        <p className="card-text">{prod.stock}</p>
                        <button className="btn btn-dark">agregar al carrito</button>
                </div>
            </div>
        );
    }
        



export default Product;
