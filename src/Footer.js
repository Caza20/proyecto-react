import React from "react";
import {Link} from 'react-route-dom'


const Footer =( )=>{

    return(
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className= 'row'>
                        <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justyfy-content-center'> 
                            <img src='./logo192.png' className="mx-2" heigth='80'/>
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                        <li className="font-weight-bold mb-2">MEJ.</li>
                        <li className="text-center">Celulares y accesorios</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                        <li className="font-weight-bold mb-2">Seguinos</li>
                        <li className="d-flex justify-content-beetwen">
                            <i className="bi bi-facebook"></i>
                        </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                        <li className="font-weight-bold mb-2">Seguinos</li>
                        <li className="d-flex justify-content-beetwen">
                            <i className="bi bi-instagram"></i>
                        </li>
                        </ul>    
                            

                    </nav>

                </div>
            </footer>


        </div>
    )

}

export default Footer