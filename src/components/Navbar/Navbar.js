import pokemonLogo from "../../assets/img/pokemon-logo.png"
import "./Navbar.scss"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
import React, { useContext } from "react"


export const NavBar = () => {

  return (
    <header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#home">
            <img className="pokemon-logo-blanco-dos" src="/img/pikachu-sonriente.png" alt="Cara de Pikachu" />
            <img className="pokemon-logo" src={pokemonLogo} alt="Logo de Pokemon" />
            <img className="pokemon-logo-blanco" src="/img/pikachu-sonriente.png" alt="Cara de Pikachu" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#responsive-navbar-nav" aria-controls="responsive-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="responsive-navbar-nav">
            <ul className="navbar-nav primer-ul me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link" href="#features">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to={"/productos/pelicula"} className="nav-link" href="#pricing">Peliculas</Link>
              </li>
              <li className="nav-item">
                <Link to={"/productos/peluche"} className="nav-link" href="#pricing">Peluches</Link>
              </li>
              <li className="nav-item">
                <Link to={"/productos/videojuego"} className="nav-link" href="#pricing">Videojuegos</Link>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>


    </header>
  )
}

export default NavBar;
