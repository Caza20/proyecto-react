//import Product from "../Product/Product";
import { useParams } from "react-router-dom";
//import axios from "axios" ;
import ProductList from "../ProductList/ProductList";
import { useState, useEffect } from "react";


function ProductListContainer() {

    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();
    useEffect(() => {

        if (categoria) { 
            fetch('http://localhost:3001/productos')
                .then(promise => promise.json())
                .then(items => {
                    const products = items.filter(producto => producto.idCategoria === parseInt(categoria));
                    const itemsFiltrados = ProductList({ products });
                    setProductos(itemsFiltrados);
                });
        } else {
            fetch('http://localhost:3001/productos')
                .then(promise => promise.json())
                .then(products => {
                    const items = ProductList({ products });
                    setProductos(items);
                });
        }

    }, [categoria]);

    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}

export default ProductListContainer;