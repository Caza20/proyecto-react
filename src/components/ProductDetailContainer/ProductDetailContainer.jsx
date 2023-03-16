import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//IMPORTACION
import ProductDetail from "../ProductDetail/ProductDetail";

const ProductDetailContainer = () => {
   const [producto, setproducto] = useState([]);
    const {id} =useParams()

    useEffect(()=>{
        fetch('http://localhost:3001/productos')
        .then(response => response.json())
        .then(productos =>{
            const product = productos.find(item => item.id === parseInt(id))
            setproducto(product)
        })
    }, [])
    return (
        
       <div className="card mb-3 container itemDetail">
            <ProductDetail item = {producto} />            
        </div>
    );
}

export default ProductDetailContainer;

