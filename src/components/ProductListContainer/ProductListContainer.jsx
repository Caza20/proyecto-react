//import Product from "../Product/Product";
import { useParams } from "react-router-dom";
import axios from "axios" ;
import ProductList from "../ProductList/ProductList";
import { useState, useEffect } from "react";


function ProductListContainer() {

    const [productos, setProductos] = useState([]);
    const { categoria } = useParams();
    useEffect(() => {

        if (categoria) { 
            axios.get('http://localhost:3001/productos')
                .then(promise => promise.data)
                .then(items => {
                    const products = items.filter(producto => producto.idCategoria === parseInt(categoria));
                    const itemsFiltrados = ProductList({ products });
                    setProductos(itemsFiltrados);
                });
        } else {
            axios.get('http://localhost:3001/productos')
                .then(promise => promise.data)
                .then(products => {
                    const items = ProductList({ products });
                    setProductos(items);
                });
            }
        },[categoria]); 
    

/*   useEffect(()=>{
    axios.get('http://localhost:3001/productos')
    .then((res)=>{
        const constantePrueba = res.data
        const items = ProductList({constantePrueba});
        console.log(res)
        setProductos(items)
    })
    }, []); */

    return (
        <div className='container d-flex space-between-center align-items-center'>
            <div className="row">
                <div className="col-md-4">
            {productos}
            </div>
            </div>
        </div> 
    );
}

export default ProductListContainer;