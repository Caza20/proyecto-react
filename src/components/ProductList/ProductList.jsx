import Product from "../Product/Product";
import { useState, useEffect } from "react";

const ProductList = ({products}) => {
    const[productos, setProductos] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3001/productos')
        .then(promise => promise.json())
        .then(products =>{
            console.log(products)
            setProductos(products)
        })
    }, [])
    return (
        <>
            {
                productos.map(producto => <Product prod={products} />)
            }
        </>
    );
}

export default ProductList;
