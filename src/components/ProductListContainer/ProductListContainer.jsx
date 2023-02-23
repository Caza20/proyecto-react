/*import { useState,useEffect } from "react";
import ProductList from "../ProductList/ProductList";
const ProductListContainer = () => {
    const[productos, setProductos] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/productos')
        .then(promise => promise.json())
        .then(products =>{
            console.log(products)
            setProductos(products)
        })
    }, [])
    return(
        //<section className="product_section">
            //<h1 className="product_tittle">nuestros productos </h1>
                <div className='row cardProductos'>
                    {productos}
                </div>
        //</section>
    )
};

export {ProductListContainer} */