import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Slide from "../Slide/Slide"
import { CartContext } from "../../Context/CartContext";
import React, { useState, useEffect, useContext } from "react"
import { FcDownLeft } from "react-icons/fc";




const SleletonCarrito = () => {

    const { cart, setCart, contador, setContador, quantity, setQuantity, total, setTotal, cantidad, setCantidad,
        producto, setProduct, isLoading, setIsLoading } = useContext(CartContext);


    return (
        <>

            <div className="container contenedor-carrito">

                <div className="contenedor-carrito">
                    <h5 className="contenedor-carrito cart">Mi carrito</h5>
                    <h5 className="contenedor-carrito items">{quantity} items</h5>
                </div>
                <hr />

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Total</th>
                            <th scope="col">Eliminar producto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={index}>
                                <td className="align-middle">
                                    <div className="carrito-foto-nombre">
                                        <Skeleton className="item-img" />
                                        <p className="item-name"> <Skeleton /> </p>
                                    </div>
                                </td>
                                <td className="align-middle">

                                    <div className="btn-group" >
                                        
                                            <Skeleton width={33} height={38} className="btn" />
                                            <Skeleton width={33} height={38} className="btn" />
                                            <Skeleton width={33} height={38} className="btn" />

                                    </div>
                                </td>
                                <td className="align-middle">
                                    <div className="carrito-precio">
                                        <p> <Skeleton /> </p>
                                    </div>
                                </td>
                                <td className="align-middle">
                                    <div className="carrito-precio">
                                        <p> <Skeleton /> </p>
                                    </div>
                                </td>
                                <td className="align-middle">
                                    <div className="carrito-button">

                                    <Skeleton height={38} width={81} className="btn" />  

                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="row finalizacion">
                    <div className="acomodador">
                        <div className="div-link btn">
                            {/* < FcDownLeft size={25} /> */}

                            <Skeleton height={38} width={200} className="btn" />

                        </div>
                        <div className="div-total-carrito">
                            <h4 className="total-carrito"> <Skeleton /> </h4>
                        </div>
                    </div>
                    <div className="div-checkout">

                    {/* <Skeleton height={38} width={128} className="btn btn-success" /> */}
                    <Skeleton height={38} width={128} className="btn" />

                    </div>
                    <div className="div-trash">

                    {/* <Skeleton height={38} width={181} className="btn btn-danger" /> */}
                    <Skeleton height={38} width={181} className="btn" />

                    </div>
                </div>


            </div>


        </>
    )
}

export default SleletonCarrito
// import Skeleton from "react-loading-skeleton";
// import 'react-loading-skeleton/dist/skeleton.css'
// import Slide from "../Slide/Slide"
// import { CartContext } from "../../Context/CartContext";
// import React, { useState, useEffect, useContext } from "react"



// const SleletonCarrito = () => {

//     const { cart, setCart, contador, setContador, quantity, setQuantity, total, setTotal, cantidad, setCantidad,
//         producto, setProduct, isLoading, setIsLoading } = useContext(CartContext);


//     return (
//         <>

//             <div className="container contenedor-carrito">

//                 <div className="contenedor-carrito">
//                     <h5 className="contenedor-carrito cart">Mi carrito</h5>
//                     <h5 className="contenedor-carrito items">{quantity} items</h5>
//                 </div>
//                 <hr />

//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th scope="col">Producto</th>
//                             <th scope="col">Cantidad</th>
//                             <th scope="col">Precio</th>
//                             <th scope="col">Total</th>
//                             <th scope="col">Eliminar producto</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {cart.map((item, index) => (
//                             <tr key={index}>
//                                 <td className="align-middle">
//                                     <div className="carrito-foto-nombre">
//                                         <img src={item.imagen} alt={item.nombre} className="item-img" />
//                                         <p className="item-name">{item.nombre}</p>
//                                     </div>
//                                 </td>
//                                 <td className="align-middle">

//                                     <div className="btn-group" >
//                                         <button type="button" className="btn btn-info"
//                                             onClick={() => (item.contador > 1 ? (actualizarCantidad(index, item.contador - 1), setQuantity(quantity - 1)) : null)}
//                                         >
//                                             -
//                                         </button>
//                                         <button type="button" className="btn"> {item.contador} </button>
//                                         <button type="button" className="btn btn-info"
//                                             onClick={() => actualizarCantidad(index, item.contador + 1, setQuantity(quantity + 1))}
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </td>
//                                 <td className="align-middle">
//                                     <div className="carrito-precio">
//                                         <p>${(item.precio).toLocaleString().replace(",", ".")},00</p>
//                                     </div>
//                                 </td>
//                                 <td className="align-middle">
//                                     <div className="carrito-precio">
//                                         <p>${(item.precio * item.contador).toLocaleString().replace(",", ".")},00</p>
//                                     </div>
//                                 </td>
//                                 <td className="align-middle">
//                                     <div className="carrito-button">
//                                         <button className="btn btn-info" onClick={eliminarProducto}>
//                                             Eliminar
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>

//                 <div className="row finalizacion">
//                     <div className="acomodador">
//                         <div className="div-link btn btn-warning">
//                             < FcDownLeft size={25} />
//                             <Link to="/" className="btn" >
//                                 Regresar al incio
//                             </Link>
//                         </div>
//                         <div className="div-total-carrito">
//                             <h4 className="total-carrito">Total: ${(total).toLocaleString().replace(",", ".")},00</h4>
//                         </div>
//                     </div>
//                     <div className="div-checkout">
//                         <Link to="/checkout" className="btn btn-success">
//                             Checkout
//                         </Link>
//                     </div>
//                     <div className="div-trash">
//                         <button className="btn btn-danger" onClick={vaciarCarrito}>
//                             <FcFullTrash size={26} /> Vaciar Carrito <FcFullTrash size={26} />
//                         </button>
//                     </div>
//                 </div>


//             </div>


//         </>
//     )
// }

// export default SleletonCarrito