import React from "react"
import Carousel from "../Carousel/Carousel"
import Footer from "../Footer/Footer"


const Inicio = () => {
    return (
        <div> 
            <Carousel />
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
                <footer className="w-100" id="pie">
                    <p>MEJ. &copy; Todos los derechos reservados 2023</p>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
                    <script src="https://unpkg.com/typewriter-effect@lastest/dist/core.js"></script>
                    <script src="items.js"></script>
                </footer>
        </div>
  
    )
} 



export default Inicio