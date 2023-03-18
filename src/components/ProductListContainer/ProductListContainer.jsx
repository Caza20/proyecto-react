//import Product from "../Product/Product";
import { useParams } from "react-router-dom";
import axios from "axios" ;
import ProductList from "../ProductList/ProductList";
import { useState, useEffect } from "react";


function ProductListContainer() {

    const [productos, setProductos] = useState([]);
    const { categoria, marca } = useParams();
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
            if (marca){
                axios.get('http://localhost:3001/productos')
                .then(promise => promise.data)
                .then(items => {
                    const products = items.filter(producto => producto.marca === (marca));
                    const itemsFiltrados = ProductList({ products });
                    setProductos(itemsFiltrados);
                });
            } else{
                axios.get('http://localhost:3001/productos')
                    .then(promise => promise.data)
                    .then(products => {
                        const items = ProductList({ products });
                        setProductos(items);
                    });
            }
        }   
        },[categoria, marca]); 
    

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
        <div className='row cardProductos'>
            {productos}
        </div> 
    );
}

export default ProductListContainer;