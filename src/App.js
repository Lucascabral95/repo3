import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss'
import { NavBar } from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import ProductoId from './components/ProductosId/ProductosId';
import Contador from "./components/ItemListContainer/ItemListContainer"
//BROWSER ROUTES, ROUTE, NAVIGATE
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Peliculas from "../src/prueba/peliculas"
import Peluches from "../src/prueba/peluches"
import Videojuegos from "../src/prueba/videojuegos"


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>

          <Route path='/' element={<Contador />} />
          <Route path='/productos/peliculas' element={<Peliculas />} />
          <Route path='/productos/peliculas/detalle/:id' element={<ProductoId />} />


          <Route path='/productos/videojuegos' element={<Videojuegos />} />
          <Route path='/productos/videojuegos/detalle/:id' element={<ProductoId />} />

          <Route path='/productos/peluches' element={<Peluches />} />
          <Route path='/productos/peluches/detalle/:id' element={<ProductoId />} />

          <Route path='*' element={<Navigate to={"/"} />} />

          <Route path='/productos/detalle/:id' element={<ProductoId />} />
          <Route path='/productos/:id' element={<ProductoId />} />

        </Routes>


        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;





