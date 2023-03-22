import Contador from "../Contador/Contador";
//import { useCarritoContext } from "../../Context/CarritoContext"


const ProductDetail = ({item}) => {
    //const { addProduct } = useCarritoContext()
    const onAdd =(contador) =>{
        //addProduct(item, contador)
        console.log(contador)
    }

    return (
        <div className="card text-center animate__animated animate__fadeInRight">
            <div className="d-flex justify-content-center align-items-center ">
            <img src={item.img} alt="" className="img-fluid container justify-content-center"/>
            </div>
            <div className="card-body text-light col-md-8">
                <div className="container card-body text-secondary row">
                    <h3 className="card-text">modelo:{item.nombre}</h3>
                    <h4 className="card-text">marca:{item.marca}</h4>
                    <h6 className="card-text">precio:${item.precio}</h6>
                    <h6 className="card-text">stock:{item.stock}</h6>
                </div>
            </div> 
            <div className='container contador'>
                <Contador stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    );
}

export default ProductDetail;


/* 
<div className='container contador'>
                <Contador stock={item.stock} onAdd={onAdd}/>
            </div>    */       