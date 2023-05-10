import React, { useEffect, useContext } from "react"
import { Link, useParams } from "react-router-dom"
import "./ItemListContainer.scss"
import Slide from "../Slide/Slide"
import SkeletonItemListContainer from "../Skeletons/SkeletonItemListContainer"
import 'react-loading-skeleton/dist/skeleton.css'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WishListContext } from "../../Context/WishListContext"


function Contador() {
  const { categoria } = useParams();

  const { data, setData, loadingSkeleton, setLoadingSkeleton, cantidad } = useContext(CartContext)

  const { setWish, wishProducto, setWishProducto, 
    setWishlistOn, wishCantidad, setWishCantidad } = useContext(WishListContext)

  useEffect(() => {
    setLoadingSkeleton(true)
    const productosRef = collection(db, "productos-store");
    setTimeout(() => {
      getDocs(productosRef).then((productosSnapshot) => {
        const productosData = productosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(productosData);
      });
      setLoadingSkeleton(false)
    }, 400);
  }, []);

  useEffect(() => {
    console.log(wishProducto);
  }, [wishProducto]);

  const handleWish = (producto) => {
    const productoExistente = Array.isArray(wishProducto) && wishProducto.find(articulo => articulo.nombre === producto.nombre);
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

  const productosFiltrados = categoria ? data.filter(producto => producto.categoria.toLowerCase() === categoria) : data;

  return (
    <>
      {loadingSkeleton ? (
        <SkeletonItemListContainer />
      ) : (
        <div className="container-fluid">
          <Slide />
          <div className="container">
            <h1>Tienda Oficial de Pokemon</h1>
            <div className="row">
              {productosFiltrados.map((producto) => (
                <div className="card" style={{ width: "18rem" }} key={producto.id}>
                  <div>
                    <img
                      src={producto.imagen}
                      className="card-img-top mt-2"
                      alt={producto.nombre}
                      onMouseOver={() => setWish(true)}
                      onMouseOut={() => setWish(false)}
                    />
                    <ToastContainer draggable={true} autoClose={3000} position="bottom-right" />
                  </div>
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
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contador;