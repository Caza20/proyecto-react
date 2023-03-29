import React from 'react';
import { Link } from 'react-router-dom';

/* Componentes */
import Secciones from '../secciones/secciones';
const Logo = () => {
    return (
        <div className = "navbar-brand" id = "contenedorSecciones">
            <div>
                <Link className="navbar-brand text-white" id="navsec" to={'/'}>LOGO</Link>
            </div>

            <Secciones/>
            
        
        </div>
    );
}

export default Logo;
