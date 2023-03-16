import './App.css';
/* Router DOM */
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Componentes */
import Navbar from './navbar/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>

        <Routes>
            <Route path='/' element={<h1>PAGINA PRINCIPAL</h1>}/> 

            <Route path='/seccion-1' element={<h1>Seccion 1</h1>}/>
            <Route path='/seccion-2' element={<h1>Seccion 2</h1>}/>
            <Route path='/seccion-3' element={<h1>Seccion 3</h1>}/>
            
            <Route path='/categorias/categoria-1' element={<h1>Categoria 1</h1>}/>
            <Route path='/categorias/categoria-2' element={<h1>Categoria 2</h1>}/>
            <Route path='/categorias' element={<h1>Todas las categorias</h1>}/>

            <Route path='/checkout' element={<p>Checkout</p>}/>

            <Route path='/carrito' element={<p>Carrito</p>}/>

        </Routes>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
