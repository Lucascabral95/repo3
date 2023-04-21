import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import "./ItemListContainer.scss"
import Slide from "../Slide/Slide"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
//------------------------------------------------
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { CartContext } from "../../Context/CartContext";
//------------------------------------------------
//------------------------------------------------
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
//------------------------------------------------
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SkeletonItemListContainer from "../Skeletons/SkeletonItemListContainer"




function Contador() {
  const { data, setData, loadingSkeleton, setLoadingSkeleton, cart, setCart, producto, setproducto, cantidad,
    setCantidad, contador, setContador, wish, setWish, wishProducto,
    setWishProducto, wishlistOn, setWishlistOn,
    wishCantidad, setWishCantidad } = useContext(CartContext)


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

        <SkeletonItemListContainer />

      ) : (

        <div className="container-fluid">
          <Slide />

          <div className="container">
            <h1>Tienda Oficial de Pokemon</h1>

            <div className="row">
              {data.map((producto) => (
                <div className="card" style={{ width: "18rem" }} key={producto.id}>

                  <div>
                    <img
                      src={producto.imagen}
                      className="card-img-top mt-2"
                      alt={producto.nombre}
                      onMouseOver={() => setWish(true)}
                      onMouseOut={() => setWish(false)}
                    />

                    {wish && (
                      <div onMouseOver={() => setWish(true)} className="icons" onClick={() => handleWish(producto)}>
                        {wish ? <AiOutlineHeart size={25} /> : <AiFillHeart size={25} />}
                      </div>
                    )}
                    <ToastContainer draggable={true} autoClose={3000} position="bottom-right" />

                  </div>

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

        </div >
      )
      }
    </>
  );
}

export default Contador;
// import React, { useState, useEffect, useContext } from "react"
// import { Link } from "react-router-dom"
// import "./ItemListContainer.scss"
// // import mockData from "../../data/MOCK_DATA.json"
// import Slide from "../Slide/Slide"
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
// //------------------------------------------------
// import { collection, doc, getDocs } from "firebase/firestore";
// import { db } from "../../Firebase/config";
// import { CartContext } from "../../Context/CartContext";
// //------------------------------------------------
// //------------------------------------------------
// import Skeleton from "react-loading-skeleton";
// import 'react-loading-skeleton/dist/skeleton.css'
// //------------------------------------------------
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import SkeletonItemListContainer from "../Skeletons/SkeletonItemListContainer"




// function Contador() {
//   const { data, setData, loadingSkeleton, setLoadingSkeleton, cart, setCart, producto, setproducto, cantidad,
//     setCantidad, contador, setContador, wish, setWish, wishProducto,
//     setWishProducto, wishlistOn, setWishlistOn } = useContext(CartContext)


//   useEffect(() => {
//     setLoadingSkeleton(true)
//     const productosRef = collection(db, "productos-store");
//     setTimeout(() => {
//       getDocs(productosRef).then((productosSnapshot) => {
//         const productosData = productosSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setData(productosData);
//       });
//       setLoadingSkeleton(false)
//     }, 400);
//   }, []);



//   useEffect(() => {
//     console.log(wishProducto);

//   }, [wishProducto]);


//   const handleWish = (producto) => {

//     const productoExistente = wishProducto.find(articulo => articulo.nombre === producto.nombre);
//     // const productoExistente = wishProducto.find(articulo => articulo?.nombre === producto?.nombre);

//     if (productoExistente) {
//       const productoActualizado = { ...productoExistente, contador: productoExistente.contador + cantidad };
//       setWishProducto(wishProducto.map(articulo => (articulo.nombre === producto.nombre ? productoActualizado : articulo)));
//     } else {
//       setWishProducto([...wishProducto, { ...producto, contador: cantidad }]);
//     }

//     // setWishProducto([...wishProducto , producto]);
//     setWish(false)


//     setWishlistOn(true)

//     toast.success(`¡Ha agregado ${producto.categoria} de "${producto.nombre}" a Favoritos!`)
//   }


//   return (

//     <>

//       {loadingSkeleton ? (

//         <div className="container-fluid">

//           <Slide />

//           <div className="container">
//             <h1>Tienda Oficial de Pokemon</h1>

//             <div className="row">
//               {data.map((producto) => (
//                 <div className="card" style={{ width: "18rem" }} key={producto.id}>
// //                   {/* <Skeleton className="card-img-top mt-2" />

// //                   <div className="card-body">
// //                     <h5 className="card-title"> <Skeleton /> </h5>
// //                     <p className="card-text"> <Skeleton /> </p>
// //                     <p> <Skeleton /> </p>
// //                     <Skeleton height={38} width={81} className="btn-success" />
// //                   </div> */}
//                   <SkeletonItemListContainer />
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//       ) : (

//         <div className="container-fluid">
//           <Slide />

//           <div className="container">
//             <h1>Tienda Oficial de Pokemon</h1>

//             <div className="row">
//               {data.map((producto) => (
//                 <div className="card" style={{ width: "18rem" }} key={producto.id}>

//                   <div>
//                     <img
//                       src={producto.imagen}
//                       className="card-img-top mt-2"
//                       alt={producto.nombre}
//                       onMouseOver={() => setWish(true)}
//                       onMouseOut={() => setWish(false)}
//                     />

//                     {wish && (
//                       <div onMouseOver={() => setWish(true)} className="icons" onClick={() => handleWish(producto)}>
//                         {wish ? <AiOutlineHeart size={25} /> : <AiFillHeart size={25} />}
//                       </div>
//                     )}
//                     <ToastContainer draggable={true} autoClose={2000} />

//                   </div>

//                   <div className="card-body">
//                     <h5 className="card-title">{producto.nombre}</h5>
//                     <p className="card-text">{producto.descripcion}</p>
//                     <p>Categoría: {producto.categoria}</p>
//                     <Link to={`/productos/detalle/${producto.id}`} className='btn btn-primary'>Ver más</Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div >
//       )
//       }
//     </>
//   );
// }

// export default Contador;
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------


// import React, { useState, useEffect, useContext } from "react"
// import { Link } from "react-router-dom"
// import "./ItemListContainer.scss"
// // import mockData from "../../data/MOCK_DATA.json"
// import Slide from "../Slide/Slide"

// //------------------------------------------------
// import { collection, doc, getDocs } from "firebase/firestore";
// import { db } from "../../Firebase/config";
// import { CartContext } from "../../Context/CartContext";
// //------------------------------------------------
// // import { CartContext } from "../../Context/CartContext";
// //------------------------------------------------

// function Contador() {
//   const { data, setData, loadingSkeleton, setLoadingSkeleton } = useContext(CartContext)

//   useEffect(() => {
//     const productosRef = collection(db, "productos-store");
//      getDocs(productosRef).then((productosSnapshot) => {
//        const productosData = productosSnapshot.docs.map((doc) => ({
//          id: doc.id,
//          ...doc.data(),
//        }));
//        setData(productosData);
//      });
//    }, []);




//   return (

//     <div className="container-fluid">
//       <Slide />

//       <div className="container">
//         <h1>Tienda Oficial de Pokemon</h1>

//         <div className="row">
//           {data.map((producto) => (
//             <div className="card" style={{ width: "18rem" }} key={producto.id}>
//               <img
//                 src={producto.imagen}
//                 className="card-img-top mt-2"
//                 alt={producto.nombre}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{producto.nombre}</h5>
//                 <p className="card-text">{producto.descripcion}</p>
//                 <p>Categoría: {producto.categoria}</p>
//                 <Link to={`/productos/detalle/${producto.id}`} className='btn btn-primary'>Ver más</Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Contador;
