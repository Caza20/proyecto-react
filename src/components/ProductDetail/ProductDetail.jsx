import Contador from "../Contador/Contador";
//import { useCarritoContext } from "../../Context/CarritoContext"


const ProductDetail = ({item}) => {
    //const { addProduct } = useCarritoContext()
    const onAdd =(contador) =>{
        //addProduct(item, contador)
        console.log(contador)
    }

    return (
        <div className="row container d-flex align-items-center animate__animated animate__fadeInRight">
            <div className="col-md-4 imgBody">
            <div className="overflow ">
            <img src={item.img} alt="" className="img-fluid rounded-start"/>
            </div>
            </div>
            <div className="col-md-8">
                <div className="card-body column justify-content-center align-items-center text-secondary">
                    <h3 className="card-text">modelo:{item.nombre}</h3>
                    <h4 className="card-text">marca:{item.marca}</h4>
                    <h6 className="card-text">precio:${item.precio}</h6>
                    <h6 className="card-text">stock:{item.stock}</h6>
                    <Contador stock={item.stock} onAdd={onAdd}/>
                </div>
                
            </div>
        </div>
    );
}

export default ProductDetail;


