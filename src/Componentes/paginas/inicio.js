import React from "react"
import Carousel from "../Carousel/Carousel"
import Footer from "../Footer/Footer"


const Inicio = () => {
    return (
        <div> 
            <Carousel/>
                <div className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">   
                        <div className="carousel-item active" data-bs-interval="3000">
                        <img src="../carousel1.png" className="d-block w-100" alt="..."/>
                </div> 
                <div> 
                    <div className="carousel-item"data-bs-interval="3000">
                    <img src="../carousel2.png" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <div>
                    <div className="carousel-item"data-bs-interval="3000">
                    <img src="../carousel3.png" className="d-block w-100" alt="..."/>
                    </div>
                </div>   
                        
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            
            <Footer/>
                        <div className="container">
                            <p className="text-center">MEJ.Todos los derechos reservados - 2023</p>
                        </div>
        </div>
  
    )
} 



export default Inicio