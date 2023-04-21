import "./ProductosId.scss"
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
//----------------------------------------------------------
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { CartContext } from "../../Context/CartContext";
//----------------------------------------------------------
import SkeletonProductosId from "../Skeletons/SkeletonProductosId";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
//----------------------------------------------------------
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







const ProductoId = () => {
    const { id } = useParams();

    const { cart, setCart, isInCart, producto, setProducto, data, setData, loadingSkeleton, setLoadingSkeleton,
        cantidad, setCantidad, quantity, setQuantity } = useContext(CartContext);

    const [loading, setLoading] = useState(true);


    // const [loading, setLoading] = useState(true);


    // useEffect(() => {
    //     setLoadingSkeleton(true);
    //     const productoRef = doc(db, "productos-store", id);
    //     setTimeout(() => {
    //         getDoc(productoRef).then((productoDoc) => {
    //             if (productoDoc.exists()) {
    //                 setProducto(productoDoc.data());
    //             } else {
    //                 console.log("No se encontró el producto.");
    //             }
    //             setLoadingSkeleton(false);
    //         });
    //     }, 200);
    // }, [id]);





    useEffect(() => {
        const productoRef = doc(db, "productos-store", id);
        getDoc(productoRef)
            .then((productoDoc) => {
                if (productoDoc.exists()) {
                    setProducto(productoDoc.data());
                } else {
                    console.log("No se encontró el producto.");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);



console.log(cart)


    // useEffect(() => {
    //     const productoRef = doc(db, "productos-store", id);
    //     getDoc(productoRef).then((productoDoc) => {
    //       if (productoDoc.exists()) {
    //         setProducto(productoDoc.data());
    //       } else {
    //         console.log("No se encontró el producto.");
    //       }
    //     });
    //   }, [id]);





    // useEffect(() => {
    //             const productoRef = doc(db, "productos-store", id);
    //             getDoc(productoRef).then((productoDoc) => {
    //                 if (productoDoc.exists()) {
    //                     setProducto(productoDoc.data());
    //                 } else {
    //                     console.log("No se encontró el producto.");
    //                 }
    //             });
    //         }, [id]);


    // useEffect(() => {
    //     setLoadingSkeleton(true)
    //     setTimeout(() => {
    //         setLoadingSkeleton(false)
    //     }, 400);
    // },[])



    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    };

    const handleSumar = () => {
        if (cantidad < producto.stock) {
            setCantidad(cantidad + 1);
        }
    };














    const handleAgregar = () => {
        const productoExistente = cart.find(item => item.nombre === producto.nombre);

        if (productoExistente) {
            const productoActualizado = { ...productoExistente, contador: productoExistente.contador + cantidad };
            setCart(cart.map(item => (item.nombre === producto.nombre ? productoActualizado : item)));
        } else {
            setCart([...cart, { ...producto, contador: cantidad }]);
        }


        // const carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
        // setCart(carritoGuardado || [])
        // console.log(carritoGuardado || [])
        // //--------------------------------------------------------------------------------
        // //ACA SE GUARDA EN EL LOCAL STORAGE
        // localStorage.setItem("carrito", JSON.stringify(nuevoCarrito))
        // const nuevoCarrito = [...cart, { ...producto, contador: cantidad }]
        // const nuevoCarrito = [...cart, { ...producto, cantidad }]
        // const nuevoCarrito = cart.map(item => (item.nombre === producto.nombre ? { ...producto, contador: productoExistente.contador + cantidad } : item));
        // localStorage.setItem("carrito", JSON.stringify(nuevoCarrito))
        //--------------------------------------------------------------------------------

        toast.success(cantidad === 1 ? (
            ("¡Usted agrego exitosamente 1 articulo al carrito!")
        ) : (
            (`¡Usted agrego exitosamente ${cantidad} articulos al carrito!`)
        ))
    };

    // useEffect(() => {
    //     localStorage.setItem("carrito", JSON.stringify(cart))
    // },[cart])

    // // ACA SE LLAMA A LOS OBJETOS DEL LOCAL STORAGE
    // useEffect(() => {
    //     const carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
    //     setCart(carritoGuardado || [])
    //     console.log(carritoGuardado || [])
    // }, [])
    // //-----------------------------------------------------------------------------



    if (loading) {
        // return <p>Cargando...</p>;
        return <SkeletonProductosId />
    }


    return (

        // <>
        //     {loadingSkeleton ? (

        //         <SkeletonProductosId />

        //     ) : (

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="producto-imagen" src={producto.imagen} /></div>
                <div className="col-md-6 producto-info">
                    <h2 className="producto-titulo">{producto.categoria} de {producto.nombre}</h2>
                    <p className="producto-precio">{producto.descripcion}</p>
                    <p className="producto-precio">$ {producto.precio}</p>
                    <p className="producto-categoria">Categoría: {producto.categoria}</p>

                    <div className="cantidad">
                        <button className="btn btn-cantidad" onClick={handleRestar} >
                            -
                        </button>

                        <input
                            type="number"
                            className="form-control d-inline-block"
                            style={{ width: "60px", textAlign: "center" }}
                            value={cantidad}
                            onChange={(event) => setCantidad(Number(event.target.value))}
                            min="1"
                            max={producto.stock}
                        />
                        <button className="btn btn-cantidad" onClick={handleSumar}>
                            +
                        </button>
                    </div>
                    <button className="btn btn-success" onClick={handleAgregar}>
                        Agregar al Carrito
                    </button>
                    <ToastContainer autoClose={1500} draggable={true} />
                    <Link to="/carrito" className="btn btn-warning" onClick={() => setCantidad(1)}>
                        Terminar compra
                    </Link>

                </div>
            </div>
        </div>

        //     )}
        // </>

    );
}

export default ProductoId;
// import "./ProductosId.scss"
// import { useEffect, useState, useContext } from "react";
// import { useParams, Link } from "react-router-dom";
// // import mockData from "../../data/MOCK_DATA.json";
// //----------------------------------------------------------
// import { getDoc, doc } from "firebase/firestore";
// import { db } from "../../Firebase/config";
// import { CartContext } from "../../Context/CartContext";
// import Skeleton from "react-loading-skeleton";
// //----------------------------------------------------------

// const ProductoId = () => {
//     const { id } = useParams();
//     const { cantidad, setCantidad, quantity } = useContext(CartContext)

//     // const [cantidad, setCantidad] = useState(1);
//     // const [producto, setProducto] = useState(null);

//     const [cargaImagen, setCargaImagen] = useState(true)

//     const { cart, setCart, isInCart, producto, setProducto, data, setData } = useContext(CartContext);


//     useEffect(() => {
//         const productoRef = doc(db, "productos-store", id);
//         getDoc(productoRef).then((productoDoc) => {
//             if (productoDoc.exists()) {
//                 setProducto(productoDoc.data());
//             } else {
//                 console.log("No se encontró el producto.");
//             }
//         });
//     }, [id]);



//     const handleRestar = () => {
//         if (cantidad > 1) {
//             setCantidad(cantidad - 1)
//         }
//     };

//     const handleSumar = () => {
//         if (cantidad < producto.stock) {
//             setCantidad(cantidad + 1);
//         }
//     };


//     const handleAgregar = () => {
//         const productoExistente = cart.find(item => item.nombre === producto.nombre);

//         if (productoExistente) {
//             const productoActualizado = { ...productoExistente, contador: productoExistente.contador + cantidad };
//             setCart(cart.map(item => (item.nombre === producto.nombre ? productoActualizado : item)));
//         } else {
//             setCart([...cart, { ...producto, contador: cantidad }]);
//         }
//     };


//     if (!producto) {
//         return <div>Cargando...</div>;
//     }

//     return (

//         <div className="container">
//             <div className="row">
//                 <div className="col-md-6">
//                     <img className="producto-imagen" src={producto.imagen} />
//                 </div>
//                 <div className="col-md-6 producto-info">
//                     <h2 className="producto-titulo">{producto.categoria} de {producto.nombre}</h2>
//                     <p className="producto-precio">{producto.descripcion}</p>
//                     <p className="producto-precio">$ {producto.precio}</p>
//                     <p className="producto-categoria">Categoría: {producto.categoria}</p>


//                     <div className="cantidad">
//                         <button className="btn btn-cantidad" onClick={handleRestar} >
//                             -
//                         </button>
//                         {/* <input
//                             type="text"
//                             className="form-control d-inline-block"
//                             style={{ width: '60px', textAlign: 'center' }}
//                             value={cantidad}
//                             onChange={(event) => setCantidad(Number(event.target.value))}
//                             min="1"
//                             max={producto.stock}
//                         /> */}
//                         <input
//                             type="number"
//                             className="form-control d-inline-block"
//                             style={{ width: "60px", textAlign: "center" }}
//                             value={cantidad}
//                             onChange={(event) => setCantidad(Number(event.target.value))}
//                             min="1"
//                             max={producto.stock}
//                         />
//                         <button className="btn btn-cantidad" onClick={handleSumar}>
//                             +
//                         </button>
//                         {/* <button className="btn btn-primary btn-actualizacion" onClick={actualizarCantidad} >Actualizar</button> */}
//                     </div>
//                     <button className="btn btn-success" onClick={handleAgregar}>
//                         Agregar al Carrito
//                     </button>
//                     <Link to="/carrito" className="btn btn-warning" onClick={() => setCantidad(1)}>
//                         Terminar compra
//                     </Link>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductoId;