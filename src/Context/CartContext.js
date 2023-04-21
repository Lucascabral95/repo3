import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const [contador, setContador] = useState(0)


    const totalCantidad = () => {
        return cart.reduce((acc, prod) => acc + prod.contador, 0)
    }

    const [quantity, setQuantity] = useState(0)


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

    const [wishProducto, setWishProducto] = useState([])

    const [idDeCompra, setIdDeCompra] = useState(false)

    const [numeroCompra, setNumeroCompra] = useState("")
 


    const [valueLogin, setValueLogin] = useState({        
        email: "",
        contraseña: ""
    })
    //--------------------------------------------------------------------------------------
    const [wishlistOn, setWishlistOn] = useState(false)
    const [wishCantidad, setWishCantidad] = useState(0)

    //--------------------------------------------------------------------------------------

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
            setWishCantidad
        }}>
            {children}

        </CartContext.Provider>
    )
}