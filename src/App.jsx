import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Carousel } from './Componentes/Carousel/Carousel';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Carousel/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
