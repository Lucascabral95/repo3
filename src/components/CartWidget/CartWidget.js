import { IoIosCart } from "react-icons/io";
import "./CartWidget.scss";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import { AiFillHeart } from "react-icons/ai"



const CartWidget = () => {
  const { contador, setContador, totalCantidad, quantity, setQuantity } = useContext(CartContext)

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
          <Link to="/wishlist" className="wishlist-favoritos"> <AiFillHeart size={36} /> </Link>
        <Link to="/carrito">
          <IoIosCart
            className="carrito-navbar"
          />
        </Link>
        <span className="carrito-contador">{quantity}</span>
      
      </li>
    </ul>
  );
};

export default CartWidget;
