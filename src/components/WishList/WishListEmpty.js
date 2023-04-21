import "./WishListEmpty.scss"
import React, { useContext, useEffect, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Wishlistempty = () => {

    const { loadingSkeleton, setLoadingSkeleton } = useContext(CartContext)

    useEffect(() => {
        setLoadingSkeleton(true)
        setTimeout(() => {
            setLoadingSkeleton(false)
            
        }, 300);
    },[])

    return (

        <> {loadingSkeleton ? (

        <div className="container wishlist">
            <Skeleton className="img-wishlist" />
            <h3 className="title-wishlist"> <Skeleton /> </h3>
            <span className="span-wishlist"> <Skeleton /> </span>
        </div>

        ) : (


        <div className="container wishlist">
            <img className="img-wishlist" src="https://cdn.dribbble.com/users/249543/screenshots/3582074/media/c0933e0e9766f0dae3f8407a01e79bc7.gif" />
            <h3 className="title-wishlist">Tu Wishlist esta vacia</h3>
            <span className="span-wishlist">Hace como Pikachu y corre a buscar tus articulos favoritos</span>
        </div>

        )}
        </>
    )
}

export default Wishlistempty