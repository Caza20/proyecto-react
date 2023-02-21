import React from 'react';
import { Link } from 'react-router-dom';



const Secciones = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent contenedorSecciones">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"> 
                    <Link className="nav-link "  id="navsec" aria-current="page" to={'/seccion-1'} >Sección 1</Link>
                </li>
                
                <li className="nav-item"> 
                    <Link className="nav-link" id="navsec" to={'/seccion-2'}>Sección 2</Link>
                </li>
                
                <li className="nav-item active dropdown"> 
                    <Link className="nav-link dropdown-toggle"  id="navsec" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </Link>
                    
                    <ul className="dropdown-menu" >
                        <li><Link className="dropdown-item" id="navsecDown" to={'/categorias/categoria-1'}>Categoria 1</Link></li>
                        <li><Link className="dropdown-item" id="navsecDown" to={'/categorias/categorias-2'}>Categoria 2</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" id="navsecDown" to={'/categorias'}>Todas las categorías</Link></li>
                    </ul>
                </li> 

                <li className="nav-item"> 
                    <Link className="nav-link" id="navsec" to={'/seccion-3'}>Sección 3</Link>
                </li>

            </ul>
        </div>
    );
}

export default Secciones;
