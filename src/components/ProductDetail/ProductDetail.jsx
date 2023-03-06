

const ProductDetail = ({item}) => {
    return (
        <div className="row g-0">
            <div className="col-md-4 imgBody">
            <img src={item.img} alt="" className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-tittle">modelo:{item.nombre}</h5>
                    <p className="card-text">marca:{item.marca}</p>
                    <p className="card-text">precio:${item.precio}</p>
                    <p className="card-text">stock:{item.stock}</p>
                </div>
            </div>           
        </div>
    );
}

export default ProductDetail;
