import { IoIosCart } from "react-icons/io";
import "./CartWidget.scss";
import { useContext } from "react";
import { Link } from "react-router-dom"
import { AiFillHeart } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"
import { GiConfirmed } from "react-icons/gi"
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/config"
import { CartContext } from "../../Context/CartContext"
import { WishListContext } from "../../Context/WishListContext"
import { LoginContext } from "../../Context/LoginContext";


const CartWidget = () => {

  const { quantity } = useContext(CartContext)
  const { setAcceso } = useContext(LoginContext)
  const { wishCantidad } = useContext(WishListContext)

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setAcceso(false)
      })
  }

  return (

    <ul className="navbar-nav">
      <li className="nav-item">

        <div className="div-icons">
          <Link to="/carrito">
            <span className="carrito-contador amigos-cart">{quantity}</span>
            <IoIosCart size={36}
              className="carrito-navbar react-icon amigos-cart"
            />
          </Link>
        </div>
        <div className="div-icons">
          <span className="carrito-contador second">{wishCantidad}</span>
          <Link to="/wishlist" className="wishlist-favoritos"> <AiFillHeart size={36} className=" second" /> </Link>
        </div>
        <div className="div-icons">
          <Link to={"/iddecompra"} className="button-buy"> <GiConfirmed className="second" size={36} style={{ color: "yellow" }} /> </Link>
        </div>
        <div className="div-icons">
          <Link>
            <BiLogOut style={{ color: "yellow" }} size={36} onClick={handleLogout} className="wishlist-logout react-icon" />
          </Link>
        </div>

      </li>
    </ul>
  );
};

export default CartWidget;
