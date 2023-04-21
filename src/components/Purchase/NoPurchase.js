import "./NoPurchase.scss"
import { Link } from "react-router-dom"


const NoPurchase = () => {

    return (

        <div className="container contenedor-no-purchase">

            <img src="/img/pikachu-no-purchase.gif" alt="Pikachu con sueño" />
            <h3>¡Usted aun no ha realizado ninguna compra!</h3>
            {/* <Link to="/" className="btn btn-primary boton-inicio">Ir al inicio</Link> */}

        </div>


    )
}

export default NoPurchase