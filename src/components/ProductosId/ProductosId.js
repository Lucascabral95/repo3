import "./ProductosId.scss"
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
// import mockData from "../../data/MOCK_DATA.json";
//----------------------------------------------------------
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import { CartContext } from "../../Context/CartContext";
//----------------------------------------------------------
// import Skeleton from "react-loading-skeleton";
// import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonProductosId from "../Skeletons/SkeletonProductosId";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
//----------------------------------------------------------
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductoId = () => {
    const { id } = useParams();
    const { cantidad, setCantidad, quantity } = useContext(CartContext)

    const { cart, setCart, isInCart, producto, setProducto, data, setData, loadingSkeleton, setLoadingSkeleton } = useContext(CartContext);


// const colors = ["#A9F5F2", "#FFFF00", "#BCA9F5"]
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];


    //------------------------------------------------------------------------------
    // useEffect(() => {
    //     const productoRef = doc(db, "productos-store", id);
    //     getDoc(productoRef).then((productoDoc) => {
    //         if (productoDoc.exists()) {
    //             setProducto(productoDoc.data());
    //         } else {
    //             console.log("No se encontró el producto.");
    //         }
    //     });
    // }, [id]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoadingSkeleton(false)
    //     }, 800);
    // }, [])
    //------------------------------------------------------------------------------
    useEffect(() => {
        setLoadingSkeleton(true);
        const productoRef = doc(db, "productos-store", id);
        setTimeout(() => {
            getDoc(productoRef).then((productoDoc) => {
                if (productoDoc.exists()) {
                    setProducto(productoDoc.data());
                } else {
                    console.log("No se encontró el producto.");
                }
                setLoadingSkeleton(false);
            });
        }, 200);
    }, [id]);



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

        toast.success( cantidad === 1 ? (
            ("¡Usted agrego exitosamente 1 articulo al carrito!")
        ) : ( 
            (`¡Usted agrego exitosamente ${cantidad} articulos al carrito!`) 
        ))
    };
    

    return (

        <>
            {loadingSkeleton ? (

                // <div className="container">
                //     <div className="row">
                //         <div className="col-md-6">
                //             <Skeleton className="producto-imagen" />
                //         </div>
                //         <div className="col-md-6 producto-info">
                //             <h2 className="producto-titulo"> <Skeleton /> </h2>
                //             <p className="producto-precio"><Skeleton /></p>
                //             <p className="producto-precio"><Skeleton /></p>
                //             <p className="producto-categoria"><Skeleton /></p>

                //             <div className="d-flex">
                //                 <div className="cantidad d-flex">
                //                     <Skeleton height={29} width={29} className="btn-cantidad" />
                //                     <Skeleton height={38} width={60} className="form-control d-inline-block" />
                //                     <Skeleton height={29} width={29} className="btn-cantidad" />
                //                 </div>
                //                 <Skeleton height={38} width={151} className="btn-success" />
                //                 <Skeleton height={38} width={145} className="btn-warning" />
                //             </div>
                //         </div>

                //     </div>
                // </div>

                <SkeletonProductosId />

            ) : (

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="producto-imagen" src={producto.imagen} />
                        </div>
                        <div className="col-md-6 producto-info">
                            <h2 className="producto-titulo">{producto.categoria} de {producto.nombre}</h2>
                            <p className="producto-precio">{producto.descripcion}</p>
                            <p className="producto-precio">$ {producto.precio}</p>
                            <p className="producto-categoria">Categoría: {producto.categoria}</p>


                            <div className="cantidad">
                                <button className="btn btn-cantidad" onClick={handleRestar} >
                                    -
                                </button>
                                {/* <input
                                    type="text"
                                    className="form-control d-inline-block"
                                    style={{ width: '60px', textAlign: 'center' }}
                                    value={cantidad}
                                    onChange={(event) => setCantidad(Number(event.target.value))}
                                    min="1"
                                    max={producto.stock}
                                /> */}
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
                            <ToastContainer autoClose={1500} draggable={true}/>
                            <Link to="/carrito" className="btn btn-warning" onClick={() => setCantidad(1)}>
                                Terminar compra
                            </Link>

                        </div>
                    </div>
                </div>

            )}
        </>

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