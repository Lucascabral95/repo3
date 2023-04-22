import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";
import { CartContext } from "../Context/CartContext";
import SkeletonCategory from "../components/Skeletons/SkeletonCategory";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Videojuegos() {
  const [data, setData] = useState([]);

  const { isLoading, setIsLoading, loadingSkeleton, setLoadingSkeleton,
    wish, setWish, wishlistOn, setWishlistOn, wishProducto, setWishProducto,
    cantidad, setWishCantidad, wishCantidad } = useContext(CartContext)


  useEffect(() => {
    setLoadingSkeleton(true)
    setTimeout(() => {
      const q = query(collection(db, "productos-store"), where("categoria", "==", "Videojuego"));
      getDocs(q).then((querySnapshot) => {
        const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setData(docs);
        setIsLoading(false);
        setLoadingSkeleton(false)
      }).catch((error) => {
        console.log("Error getting documents: ", error);
      });
    }, 400);
  }, [])



  const handleWish = (producto) => {
    const productoExistente = wishProducto.find(articulo => articulo.nombre === producto.nombre);

    if (productoExistente) {
      const productoActualizado = { ...productoExistente, contador: productoExistente.contador + cantidad };
      setWishProducto(wishProducto.map(articulo => (articulo.nombre === producto.nombre ? productoActualizado : articulo)));
    } else {
      setWishProducto([...wishProducto, { ...producto, contador: cantidad }]);
      setWishCantidad(wishCantidad + 1)
    }
    setWish(false)
    setWishlistOn(true)

    toast.success(`¡Ha agregado ${producto.categoria} de "${producto.nombre}" a Favoritos!`)
  }



  return (

    <>
      {loadingSkeleton ? (

        <SkeletonCategory />

      ) : (

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
                    <ToastContainer draggable={true} autoClose={3000} position="bottom-right" />
                    <div className="contenedor-botones">
                      <Link to={`/productos/detalle/${producto.id}`} className='btn btn-primary'>Ver más</Link>
                      <div className="contenedor-fav-star">
                        <div className="p-de-fav">
                          <img src="/img/icon-derecha.gif" />
                        </div>
                        <div className="div-estrella-favoritos">
                          <img className="estrella-favoritos" onClick={() => handleWish(producto)} src="/img/mario-estrella.png" alt="Estrella de Favoritos" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>

      )}
    </>
  );
}
export default Videojuegos
