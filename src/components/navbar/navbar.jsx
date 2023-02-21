import React from 'react';

/* Componentes */
import BotonResponsive from './botonResponsive/botonResponsive';
import Logo from './logo/logo';
import Carrito from '../carrito/carrito';
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

                        <Carrito/>
                        
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
