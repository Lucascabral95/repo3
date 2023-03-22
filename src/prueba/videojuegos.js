import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import mockData from "../data/MOCK_DATA.json"
import { Link } from "react-router-dom"


function Videojuegos() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const showLoading = async () => {
      const result = await Swal.fire({
        title: 'Por favor espere...',
        imageUrl: "https://www.pngmart.com/files/2/Pikachu-Transparent-Background.png",
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 1000,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('Cerrado por temporizador')
      }

      setData(mockData);
      setIsLoading(false);
    };

    showLoading();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Videojuegos</h1>

      <div className="row">
        {data.map((producto) =>
          producto.categoria === "Videojuego" ? (
            <div className="card" style={{ width: "18rem" }} key={producto.id}>
              <img
                src={producto.imagen}
                className="card-img-top"
                alt={producto.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p>Categoría: {producto.categoria}</p>
                <Link to={`/productos/videojuegos/detalle/${producto.id}`} className='btn btn-primary'>Ver más</Link>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
export default Videojuegos
