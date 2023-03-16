import './App.css';
/* Router DOM */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Componentes */
import Navbar from './navbar/navbar';

import { CarritoProvider } from '../context/carritoContext';
import ProductListContainer from './ProductListContainer/ProductListContainer';
import ProductDetailContainer from './ProductDetailContainer/ProductDetailContainer';
import Carro from './carro/carro';
import Checkout from './checkout/checkout';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CarritoProvider/>
        <Navbar/>

        <Routes>
            <Route path='/' element={<ProductListContainer/>}/> 

            <Route path='/seccion-1' element={<h1>Seccion 1</h1>}/>
            <Route path='/seccion-2' element={<h1>Seccion 2</h1>}/>
            <Route path='/seccion-3' element={<h1>Seccion 3</h1>}/>
            
            <Route path='/categorias/:categoria' element={<ProductListContainer/>}/>
            <Route path='/categorias/categoria-2' element={<h1>Categoria 2</h1>}/>
            <Route path='/todas-las-categorias' element={<ProductListContainer/>}/>
            <Route path='/producto/:id' element={<ProductDetailContainer/>}/>


            <Route path='/checkout' element={<Checkout/>}/>

            <Route path='/carrito' element={<Carro/>}/>

        </Routes>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
