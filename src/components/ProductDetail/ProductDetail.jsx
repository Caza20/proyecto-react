import Contador from "../Contador/Contador";

import { useCarritoContext } from "../../context/carritoContext";

const ProductDetail = ({item}) => {
    const { addProduct } = useCarritoContext();
    const onAdd =(contador) =>{
        addProduct(item, contador)
        console.log(contador)
    }

    return (
        <div className="row container d-flex align-items-center animate__animated animate__fadeInRight">
            <div className="col-md-4 imgBody">
                <div className="overflow">
                    <img src={item.img} alt="" className="img-fluid rounded-start"/>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card-body1 justify-content-center align-items-center text-secondary">
                    <h2 className="card-text1">{item.nombre}</h2>
                    <hr></hr>
                    <h4 className="card-text1">Marca: {item.marca}</h4>
                    <h4 className="card-text1">Precio:${item.precio}</h4>
                    <h4 className="card-text1">Stock:{item.stock}</h4>
                    <Contador stock={item.stock} onAdd={onAdd}/>
                </div>
            </div> 
        </div>
    );
}

export default ProductDetail;


/* 
<div className='container contador'>
                <Contador stock={item.stock} onAdd={onAdd}/>
            </div>    */       
