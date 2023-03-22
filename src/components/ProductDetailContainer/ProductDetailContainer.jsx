import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios" 

//IMPORTACION
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} =useParams()

    useEffect(()=>{
        axios.get('http://localhost:3001/productos')
        .then(promise => promise.data)
        .then(productos =>{
            const product = productos.find(item => item.id === parseInt(id))
            setProducto(product)
        })
    }, []) 
/* useEffect(()=>{
        axios.get('http://localhost:3001/productos')
        .then((res)=>{
            console.log(res)
            setProducto(res.data)
        }) 

    },[]) */
    return (
        <div className="card mb-3">
            <ProductDetail item = {producto} />            
        </div>
    );
}

export default ProductDetailContainer;
