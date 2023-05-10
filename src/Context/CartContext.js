import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('carrrito') || '[]')
    )

    useEffect(() => {
        localStorage.setItem('carrrito', JSON.stringify(cart))
    }, [cart])


    const [quantity, setQuantity] = useState(
        JSON.parse(localStorage.getItem("quantity") || 0)
    )

    useEffect(() => {
        localStorage.setItem("quantity", JSON.stringify(quantity))
    }, [quantity])

    //------------------------------------------------------------
    const [wishProducto, setWishProducto] = useState(
        JSON.parse(localStorage.getItem("wishlist") || "[]")
    )

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishProducto))
    }, [wishProducto])
    //--------------------------------------------------------------------------------------
    const [wishlist, setWishlist] = useState(
        JSON.parse(localStorage.getItem('wishlist') || '{"items":[], "quantity":0}')
    );

    const [wishCantidad, setWishCantidad] = useState(
        JSON.parse(localStorage.getItem('wishCantidad') || 0)
    );

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    useEffect(() => {
        localStorage.setItem('wishCantidad', JSON.stringify(wishCantidad));
    }, [wishCantidad]);

    const addToWishlist = (product) => {
        const updatedWishlist = {
            items: [...wishlist.items, product],
            quantity: wishlist.quantity + 1
        };
        setWishlist(updatedWishlist);
        setWishCantidad(wishCantidad + 1);
    };
    //-----------------------------------------------------------------

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const [contador, setContador] = useState(0)


    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.contador, 0)
    }

    const [producto, setProducto] = useState(null);

    const [total, setTotal] = useState(0);

    const [cantidad, setCantidad] = useState(1);

    const vaciarCarrito = () => {
        setCart([])
    }

    const [data, setData] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [loadingSkeleton, setLoadingSkeleton] = useState(true)

    const [wish, setWish] = useState(true)

    const [idDeCompra, setIdDeCompra] = useState(false)
    //---------------------------------------------------------------------
    const [numeroCompra, setNumeroCompra] = useState(
        JSON.parse(localStorage.getItem("numeroCompra") || "[]")
    )


    useEffect(() => {
        localStorage.setItem("numeroCompra", JSON.stringify(numeroCompra))
    }, [numeroCompra])
    //---------------------------------------------------------------------


    const [valueLogin, setValueLogin] = useState({
        email: "",
        contraseña: ""
    })
    //--------------------------------------------------------------------------------------
    const [wishlistOn, setWishlistOn] = useState(false)
    //--------------------------------------------------------------------------------------
    const [acceso, setAcceso] = useState(
        JSON.parse(localStorage.getItem("acceso") || false)
    )

    useEffect(() => {
        localStorage.setItem("acceso", JSON.stringify(acceso))
    }, [acceso])
    //---------------------------------------------------------
    const [ userEmail, setUserEmail ] = useState(
        JSON.parse(localStorage.getItem("userEmail") || "[]")
    )

    useEffect(() => {
        localStorage.setItem("userEmail", JSON.stringify(userEmail))
    },[userEmail])


    
    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            isInCart,
            contador,
            setContador,
            totalCantidad,
            quantity,
            setQuantity,
            producto,
            setProducto,
            total,
            setTotal,
            vaciarCarrito,
            data,
            setData,
            cantidad,
            setCantidad,
            isLoading,
            setIsLoading,
            loadingSkeleton,
            setLoadingSkeleton,
            wish,
            setWish,
            wishProducto,
            setWishProducto,
            valueLogin,
            setValueLogin,
            wishlistOn,
            setWishlistOn,
            idDeCompra,
            setIdDeCompra,
            numeroCompra,
            setNumeroCompra,
            wishCantidad,
            setWishCantidad,
            acceso,
            setAcceso,
            userEmail,
            setUserEmail
        }}>
            {children}

        </CartContext.Provider>
    )
}