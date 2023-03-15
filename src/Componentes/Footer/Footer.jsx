import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return(
      <div>
            <div className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className= 'row'>
                        
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li>
                            <Link className="col-12 col-md-3 d-flex aling-items-center justyfy-content-center" to={'/'}> 
                            <img src="logo192.png" className="mx-2" alt=""/>   
                            </Link>
                            </li>
                            <li className="font-weight-bold mb-2">MEJ.</li>
                            <li className="text-center">Celulares y accesorios</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className="font-weight-bold mb-2">Seguinos</li>
                            <li className="d-flex justify-content-beetwen">
                                
                            </li>
                        </ul>                    
                        <div className="container">
                            <p className="text-center">MEJ.Todos los derechos reservados - 2023</p> 
                        </div>  
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Footer