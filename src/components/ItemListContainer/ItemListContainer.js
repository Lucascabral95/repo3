import "./ItemListContainer.scss"
import React, { useState, useEffect } from "react"
import mockData from "../../data/MOCK_DATA.json"
import { Link } from "react-router-dom"
import Slide from "../Slide/Slide"


function Contador() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(mockData);
  }, []);

  return (

    <div className="container-fluid">
      <Slide />

      <div className="container">
        <h1>Tienda Oficial de Pokemon</h1>

        <div className="row">
          {data.map((producto) => (
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
                <Link to={`/productos/detalle/${producto.id}`} className='btn btn-primary'>Ver más</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Contador;
