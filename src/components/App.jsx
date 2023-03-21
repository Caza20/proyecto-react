import './App.css';
import 'react-toastify/dist/ReactToastify.css';
/* Router DOM */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Toastify
import { ToastContainer } from 'react-toastify';

/* Componentes */
import Navbar from './navbar/navbar';

import { CarritoProvider } from '../context/CarritoContext';
import ProductListContainer from './ProductListContainer/ProductListContainer';
import ProductDetailContainer from './ProductDetailContainer/ProductDetailContainer';
import Carro from './carro/carro';
import Checkout from './checkout/checkout';
import AgregarProducto from './agregarProducto/agregarProducto';



function App() {
  return (
    <div className="App">
       <CarritoProvider>
      <BrowserRouter>
       
        <Navbar/>

        <Routes>
            <Route path='/' element={<ProductListContainer/>}/> 

            <Route path='/marcas/:marca' element={<ProductListContainer/>}/>
            <Route path='/marcas/:marca' element={<ProductListContainer/>}/>
            <Route path='/marcas/:marca' element={<ProductListContainer/>}/>
            <Route path='/marcas/:marca' element={<ProductListContainer/>}/>
            <Route path='/marcas/:marca' element={<ProductListContainer/>}/>
            

            <Route path='/categorias/:categoria' element={<ProductListContainer/>}/>
            <Route path='/categorias/:categoria' element={<ProductListContainer/>}/>
            <Route path='/categorias/:categoria' element={<ProductListContainer/>}/>
            <Route path='/categorias/:categoria' element={<ProductListContainer/>}/>
            <Route path='/todas-las-categorias' element={<ProductListContainer/>}/>
            <Route path='/producto/:id' element={<ProductDetailContainer/>}/>
            
            <Route path='/producto-agregado' element={<AgregarProducto/>}/>

            <Route path='/checkout' element={<Checkout/>}/>

            <Route path='/carrito' element={<Carro/>}/>

        </Routes>
        <ToastContainer/>
      </BrowserRouter>
      </CarritoProvider>
    </div>
  );
}

export default App;
