import { IoIosCart } from "react-icons/io";
import "./CartWidget.scss";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import { AiFillHeart } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"
import { GiConfirmed } from "react-icons/gi"



const CartWidget = () => {
  const { contador, setContador, totalCantidad, quantity, setQuantity,
    wishCantidad, setWishCantidad, acceso, setAcceso } = useContext(CartContext)

  const handleLogout = () => {
    setAcceso(false)
  }


  return (
    
    <ul className="navbar-nav">
      <li className="nav-item">

        <div className="div-icons">
          <Link to="/carrito">
            <span className="carrito-contador">{quantity}</span>
            <IoIosCart size={36}
              className="carrito-navbar"
            />
          </Link>
        </div>

        <div className="div-icons">
        <span className="carrito-contador">{wishCantidad}</span>
          <Link to="/wishlist" className="wishlist-favoritos"> <AiFillHeart size={36} /> </Link>
        </div>

        <div className="div-icons">
          <Link to={"/iddecompra"} className="button-buy"> <GiConfirmed size={36} style={{ color: "yellow" }} /> </Link>
        </div>

        <div className="div-icons">
          <BiLogOut style={{ color: "yellow" }} size={36} onClick={handleLogout} className="wishlist-logout" />
        </div>

      </li>
    </ul>
  );
};

export default CartWidget;
