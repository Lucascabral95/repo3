import "./WishList.scss"
import React, { useEffect, useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext";
import Wishlistempty from "./WishListEmpty";


const Wishlist = () => {
    const { wishProducto, setWishProducto, cart, setCart, producto, setProducto, quantity, setQuantity } = useContext(CartContext)

    return (

        <>
            {quantity === 0 ? (

                <Wishlistempty />

            ) : (
                <div className="container">

                    {wishProducto.map((articulo) =>
                        <div key={articulo.id}>
                            <h1> {articulo.nombre} </h1>
                            <img src={articulo.imagen} />
                            <p>{articulo.categoria}</p>
                        </div>
                    )}
                </div>


            )}
        </>
    )
}

export default Wishlist