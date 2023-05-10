import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { CartContext } from "../../Context/CartContext";
import React, { useContext } from "react"


const SleletonCarrito = () => {

    const { cart, quantity } = useContext(CartContext);


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

                            <Skeleton height={38} width={200} className="btn" />

                        </div>
                        <div className="div-total-carrito">
                            <h4 className="total-carrito"> <Skeleton /> </h4>
                        </div>
                    </div>
                    <div className="div-checkout">

                    <Skeleton height={38} width={128} className="btn" />

                    </div>
                    <div className="div-trash">

                    <Skeleton height={38} width={181} className="btn" />

                    </div>
                </div>


            </div>


        </>
    )
}

export default SleletonCarrito
