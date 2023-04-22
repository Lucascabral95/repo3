import React, { useState, useEffect, useContext } from "react";
import  { Link }  from "react-router-dom" 
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import { db } from "../Firebase/config";
import { CartContext } from "../Context/CartContext";
import SkeletonCategory from "../components/Skeletons/SkeletonCategory";




function Peliculas() {
    const [data, setData] = useState([]);

    const { isLoading, setIsLoading, loadingSkeleton, setLoadingSkeleton } = useContext(CartContext)


    useEffect(() => {
      setLoadingSkeleton(true)
      setTimeout(() => {
        const q = query(collection(db, "productos-store"), where("categoria", "==", "Pelicula"));
        getDocs(q).then((querySnapshot) => {
          const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setData(docs);
          setIsLoading(false);
          setLoadingSkeleton(false)
        }).catch((error) => {
          console.log("Error getting documents: ", error);
        });
      }, 400);
    },[])
    

    return (

          <>

            { loadingSkeleton ? (

               <SkeletonCategory />

            ) : (

      <div className="container">
        <h1>Lista de Peliculas</h1>
  
        <div className="row">
          {data.map((producto) =>
            producto.categoria === "Pelicula" ? (
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
                  <Link to={`/productos/peliculas/detalle/${producto.id}`} className='btn btn-primary'>Ver más</Link>
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
  
  export default Peliculas
