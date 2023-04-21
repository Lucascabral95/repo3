import { useEffect, useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import NoPurchase from "./NoPurchase"

import "./ConfirmedPurchase.scss"

const PurchaseNumber = () => {

    const { idDeCompra, setIdDeCompra, numeroCompra, setNumeroCompra } = useContext(CartContext)

    return (
        <>
            {idDeCompra ? (

                <div className="container contenedor-compra-confirmadad">

                    <img className="img-pika-happy" src="/img/pikachu-happy-unscreen.gif" alt="Pikachu contento" />
                    <h3> ¡Compra realizada con exito! </h3>
                    <span>Tu numero de compra es: </span>
                    <span className="span-id-compra"> "{numeroCompra}" </span>
                    <img className="img-pokee" src="/img/pikachu-happy-poke.gif" alt="Pikachu contento" />

                </div >

            ) : (

                <NoPurchase /> 
                // null

            )}
        </>

    )
}

export default PurchaseNumber