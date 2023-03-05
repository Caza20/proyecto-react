import './App.css' ;
//import ProductList from "./components/ProductList/ProductList"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductListContainer from './components/ProductListContainer/ProductListContainer';


const App = ()=> {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProductListContainer/>}/>
      <Route path='/categoria/:categoria' element={<ProductListContainer/>}/>
      <Route path='/checkout' element={<p>checkout</p>} />
      <Route path='/carrito' element={<p>carrito</p>}/>
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App