import { IoIosCart } from "react-icons/io";
import "./CartWidget.scss"


const CartWidget = () => {

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="navbar-brand" href="#home">
                    <IoIosCart className="carrito-navbar" />
                    <span className="carrito-contador">0</span>
                </a>
            </li>
        </ul>
    )
}

export default CartWidget