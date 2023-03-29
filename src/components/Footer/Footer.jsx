import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    return(

        <div className = "footer container-fluid"> 
            <div className="row p-5">
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <h1 className="footer-text">MEJ</h1>
                    <h3 className="footer-text">Seguinos en nuestras redes sociales</h3>
                    <ul>
                        <li>
                    <a href='https://es-la.facebook.com/' target="_blank" rel="noreferrer" className="redes">
                        <img className="imagenes" src="images/face-ic.png" alt="facebook"/> 
                    </a>
                    </li>
                    <li>
                    <a href='https://twitter.com/'target="_blank" rel="noreferrer" className='me-4 text-reset'>
                        <img src="images/twitter.png" alt="twiter"/> 
                    </a>
                    </li>
                    <li>
                    <a href='https://www.instagram.com/' target="_blank" rel="noreferrer" className='me-4 text-reset'>
                        <img src="images/instagram.png" alt="instagram"/>
                    </a> 
                    </li>
                    </ul>

                </div>
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <h2 className="footer-text">Marcas</h2>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"> 
                            <Link className="nav-link text-secondary" to={'/marcas/motorola'}><h4>Motorola</h4></Link>
                        </li>

                         <li className="nav-item"> 
                            <Link className="nav-link text-secondary" to={'/marcas/samsung'}><h4>Samsung</h4></Link>
                        </li>

                        <li className="nav-item"> 
                            <Link className="nav-link text-secondary" to={'/marcas/xiaomi'}><h4>Xiaomi</h4></Link>
                        </li>
            
                        <li className="nav-item"> 
                            <Link className="nav-link text-secondary" to={'/marcas/lenovo'}><h4>Lenovo</h4></Link>
                        </li>
            
                        <li className="nav-item"> 
                            <Link className="nav-link text-secondary" to={'/marcas/universal'}><h4>Universal</h4></Link>
                        </li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <h2 className="footer-text">Categorías</h2>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link text-secondary" to={'/categorias/1'}><h4>Celulares</h4></Link></li>
                        <li className="nav-item"><Link className="nav-link text-secondary" to={'/categorias/2'}><h4>Auriculares</h4></Link></li>
                        <li className="nav-item"><Link className="nav-link text-secondary" to={'/categorias/3'}><h4>Smartwatches</h4></Link></li>
                        <li className="nav-item"><Link className="nav-link text-secondary" to={'/categorias/4'}><h4>Varios</h4></Link></li>
                        <li className="nav-item"><Link className="nav-link text-secondary" to={'/todas-las-categorias'}><h4>Todas las categorías</h4></Link></li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <h2 className="footer-text">Nosotros</h2>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link text-secondary" to={'/'}><h4>Sobre nosotros</h4></Link></li>
                        <li className="nav-item"><Link className="nav-link text-secondary" to={'/'}><h4>Contacto</h4></Link></li>
                        <li className="nav-item"><Link className="nav-link text-secondary" to={'/'}><h4>Soporte</h4></Link></li>
                    </ul>
                </div>

            </div>
            <div className='footer text-center p-4 col-xs-12' bg-color='rgba(0, 0, 0, 0.05'>
                <h4 className="footer-text">MEJ.Todos los derechos reservados© 2023</h4>
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'> </a>
            </div>
        </div>

    )
}

export default Footer