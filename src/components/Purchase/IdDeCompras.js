import "./IdDeCompras.scss"
import { useEffect, useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const IdDeCompras = () => {

    const { numeroCompra, setNumeroCompra, loadingSkeleton, setLoadingSkeleton } = useContext(CartContext)

    useEffect(() => {
        setLoadingSkeleton(true)
        setTimeout(() => {

            setLoadingSkeleton(false)

        }, 300);
    }, [])

    return (

        <>
            {loadingSkeleton ? (

                <div className="container contenedor-id" >
                    <Skeleton />
                    <h3 className="empty-title"> <Skeleton /> </h3>
                    <span> <Skeleton /> </span>
                    <span className="span-id-compra"> <Skeleton /> </span>
                    <span className="ultimo-id"> <Skeleton /> </span>
                </div>

            ) : (

                <div className="container contenedor-id">

                    <img src="/img/pikachu-nube.gif" alt="Pikachu sobre una nube" />
                    <h3>¡Aqui esta tu ultimo id de compras pasadas!</h3>
                    <span>Tu ultimo id de compra es: </span>
                    <span className="span-id-compra"> "{numeroCompra}" </span>
                    <span className="ultimo-id">¡Guardalo! </span>

                </div>
            )}
        </>

    )
}

export default IdDeCompras