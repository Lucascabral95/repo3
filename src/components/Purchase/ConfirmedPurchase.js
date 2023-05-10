import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import IdDeCompras from "./IdDeCompras"

import "./ConfirmedPurchase.scss"

const PurchaseNumber = () => {

    const { idDeCompra, numeroCompra } = useContext(CartContext)

    return (
        <>
            {idDeCompra ? (

                <div className="container contenedor-compra-confirmadad">

                    <img className="img-pika-happy" src="/img/pikachu-happy-unscreen.gif" alt="Pikachu contento" />
                    <h3> ¡Compra realizada con exito! </h3>
                    <span>Tu id de compra es: </span>
                    <span className="span-id-compra"> "{numeroCompra}" </span>
                    <img className="img-pokee" src="/img/pikachu-happy-poke.gif" alt="Pikachu contento" />

                </div >

            ) : (

                <IdDeCompras />

            )}
        </>

    )
}

export default PurchaseNumber