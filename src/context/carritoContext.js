import { useContext, createContext, useState } from "react";


const CarritoContext = createContext();

export const useCarritoContext = () => useContext(CarritoContext);

export const CarritoProvider = (props) => {
  
    const [carrito, setCarrito] = useState([]);
  
  // para saber si esta el producto necesitamos enviarle como parametro a la funcion el id que es unico de cada producto.
      
    const isInCart = (id) =>{
      return carrito.find(producto => producto.id === id)
  // devuelve el objeto si existe y sino existe devuelve undefined  
    }

    //para agregar un producto al carrito necesitamos enviarle el producto y la cantidad. OJO siempre hay que controlar el stock que se tiene del producto. Si agregamos el producto aunque este el producto pisamos el valor de cantidad. No sumamos.

  const addProduct = (producto, cantidad) => {

    // consultamos si existe en el carrito
       if (isInCart(producto.id)){
    // existe el producto. Entonces lo buscamos.
          const indice = carrito.findIndex(prod => prod.id === producto.id)
          const aux = [...carrito]
          aux[indice].cant = cantidad 
          setCarrito(aux)          
       } else{
    // no existe el producto. Entonces tenemos que crearlo y agregarle la propiedad de la cantidad.
          const nuevoProducto = {
            ...producto,
            cant: cantidad
          }
          setCarrito([...carrito, nuevoProducto])
       }
      }
    
    // vaciar carrito
    
      const emptyCart = () => {
          setCarrito([])
        } 
    
    // eliminar producto
    
      const removeItem = (id) => {
        setCarrito(carrito.filter(producto => producto.id !== id))
      }
    
    // cantidad de productos del carritos. Sirve para darle un valor al numero que aparece en el carrito.
    
      const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.cant, 0)
      } 
    
    // precio total
    
      const totalPrice = () => {
        return carrito.reduce((acum,prod) => acum += (prod.cant*prod.precio), 0)
      } 
    
    // tenemos que retornar los valores
    
      return (
        <CarritoContext.Provider value = {{carrito, isInCart, addProduct, emptyCart, removeItem, getItemQuantity, totalPrice}}>
        {props.children}
        </CarritoContext.Provider>
      )
      
       
    }
    