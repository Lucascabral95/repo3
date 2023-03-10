import pokemonLogo from "../../assets/img/pokemon-logo.png"
import "./Navbar.scss"
import CartWidget from "../CartWidget/CartWidget"


export const NavBar = () => {
  return (
    <header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">

          <a className="navbar-brand" href="#home">
            <img className="pokemon-logo" src={pokemonLogo} alt="Logo de Pokemon" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#responsive-navbar-nav" aria-controls="responsive-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="responsive-navbar-nav">
            <ul className="navbar-nav primer-ul me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#features">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Peliculas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Peluches</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Videojuegos</a>
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
