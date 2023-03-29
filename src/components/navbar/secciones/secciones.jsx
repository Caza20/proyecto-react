import React from 'react';
import { Link } from 'react-router-dom';



const Secciones = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item"> 
                    <Link className="nav-link text-white"  id="navsec" aria-current="page" to={'/marcas/motorola'} >Motorola</Link>
            </li>

            <li className="nav-item"> 
                    <Link className="nav-link text-white" id="navsec" aria-current="page" to={'/marcas/samsung'}>Samsung</Link>
            </li>

            <li className="nav-item"> 
                    <Link className="nav-link text-white" id="navsec" aria-current="page" to={'/marcas/xiaomi'}>Xiaomi</Link>
            </li>
            
            <li className="nav-item"> 
                    <Link className="nav-link text-white" id="navsec" aria-current="page" to={'/marcas/lenovo'}>Lenovo</Link>
            </li>
            
            <li className="nav-item"> 
                    <Link className="nav-link text-white" id="navsec" aria-current="page" to={'/marcas/universal'}>Universal</Link>
            </li>


           <li className="nav-item active dropdown "> 
                    <Link className="nav-link dropdown-toggle text-white"  id="navsec" aria-current="page" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </Link>
                    
                    <ul className="dropdown-menu" >
                        <li><Link className="dropdown-item text-white" id="navsecDown" aria-current="page" to={'/categorias/1'}>Celulares</Link></li>
                        <li><Link className="dropdown-item text-white" id="navsecDown" aria-current="page" to={'/categorias/2'}>Auriculares</Link></li>
                        <li><Link className="dropdown-item text-white" id="navsecDown" aria-current="page" to={'/categorias/3'}>Smartwatches</Link></li>
                        <li><Link className="dropdown-item text-white" id="navsecDown" aria-current="page" to={'/categorias/4'}>Varios</Link></li>
                        <li><hr className="dropdown-divider text-white" /></li>
                        <li><Link className="dropdown-item text-white" id="navsecDown" aria-current="page" to={'/todas-las-categorias'}>Todas las categorías</Link></li>
                    </ul>
            </li> 


        </ul>
    </div>
    );
}

export default Secciones;
