import React from 'react';
import {MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
    return(
        <div> 
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                        <span>Seguinos en nuestras redes sociales</span>
                    </div>

                    <div>
                        <a href='https://es-la.facebook.com/' target="_blank" className='me-4 text-reset'>
                        <img src="facebook.png" alt="facebook"/> 
                        </a>
                        <a href='https://twitter.com/'target="_blank" className='me-4 text-reset'>
                        <img src="twitter.png" alt="twiter"/> 
                        </a>
                        <a href='https://www.instagram.com/' target="_blank" className='me-4 text-reset'>
                        <img src="instagram.png" alt="instagram"/>
                        </a>
                    </div>
                </section>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                                    <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>
                                                <MDBIcon icon="gem" className="me-3" />
                                            MEJ.
                                        </h6>
                                        <p>Más entretenimiento & Más rendimiento</p>  
                                        
                                    </MDBCol>

                                    <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                        <h7 className='text-uppercase fw-bold mb-4'>Productos</h7>
                                            <p>
                                                <a href='#!' className='text-reset'>Smartphones</a>
                                            </p>
                                            <p>
                                                <a href='#!' className='text-reset'>Iphone</a>
                                            </p>            
                                            <p>
                                                <a href='#!' className='text-reset'>Accesorios</a>
                                            </p>
                                    </MDBCol>

                                    <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                        <h7 className='text-uppercase fw-bold mb-4'>Sitios útiles</h7>
                                            <p>
                                                <a href='#!' className='text-reset'>Sobre nosotros </a>
                                            </p>    
                                            <p>
                                                <a href='#!' className='text-reset'>Modelos</a>
                                            </p>   
                                            <p>
                                                <a href='#!' className='text-reset'>Venta on-line</a>
                                            </p>       
                                            <p>
                                                <a href='#!' className='text-reset'>Soporte</a>
                                            </p>               
                                    </MDBCol>

                                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                        <h7 className='text-uppercase fw-bold mb-4'>Contacto</h7>
                                            <p>
                                                <MDBIcon className="me-2"/>Peña 2028 - Palermo, Buenos Aires,Argentina.
                                            </p>
                                            <p>
                                                <MDBIcon icon="e-mail" className="me-3"/>mej.contacto@gmail.com
                                            </p>   
                                            <p>
                                                <MDBIcon icon="teléfono" className="me-3"/>+549-11-4595688
                                            </p>
                                    </MDBCol>                    
                        </MDBRow>       
                </MDBContainer>           
                </section>              
                    <div className='text-center p-4' bg-color='rgba(0, 0, 0, 0.05'>
                        MEJ.Todos los derechos reservados© 2023
                        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'> </a>
                    </div>
            </MDBFooter>
        </div>
    )
}

export default Footer