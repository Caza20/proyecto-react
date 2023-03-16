import React from 'react';

/* Componentes */
import BotonResponsive from './botonResponsive/botonResponsive';
import Logo from './logo/logo';
import BotonCarrito from '../botonCarrito/botonCarrito';
import Buscador from './buscador/buscador';



const Navbar = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                    <div className="container-fluid" id = "contenedorNav">
  
                        <BotonResponsive/>
                        
                        <Logo/>
            
                        <Buscador/>

                        <BotonCarrito/>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
