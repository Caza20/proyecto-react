import React from 'react';

/* Seccion del buscador de la navbar */
const Buscador = () => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent ">
            <form className="d-flex" role="search">
              <input className="form-control me-2 buscador" type="search" placeholder="Buscá tu producto" aria-label="Search" />
              <button className="btn btn-outline-success buscador" type="submit">Buscar</button>
            </form>
        </div>
    );
}

export default Buscador;
