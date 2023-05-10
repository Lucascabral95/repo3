import { createContext, useState, useEffect } from "react";

export const WishListContext = createContext()

export const WishProvider = ({ children }) => {

    const [wishProducto, setWishProducto] = useState(
        JSON.parse(localStorage.getItem("wishlist") || "[]")
    )

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishProducto))
    }, [wishProducto])

    const [wishlist, setWishlist] = useState(
        JSON.parse(localStorage.getItem('wishlist') || '{"items":[], "quantity":0}')
    );

    const [wishCantidad, setWishCantidad] = useState(
        JSON.parse(localStorage.getItem('wishCantidad') || 0)
    );
    
    useEffect(() => {
        localStorage.setItem('wishCantidad', JSON.stringify(wishCantidad));
    }, [wishCantidad]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);


    const [wish, setWish] = useState(true)
    const [wishlistOn, setWishlistOn] = useState(false)

return(
    <WishListContext.Provider value={{ 
        wish,
        setWish,
        wishlistOn,
        setWishlistOn,
        wishProducto,
        setWishProducto,
        wishCantidad,
        setWishCantidad
    }}>
        {children}
    </WishListContext.Provider>
    
)

}