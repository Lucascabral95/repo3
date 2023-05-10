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

    
    const [idDeCompra, setIdDeCompra] = useState(false)
    //---------------------------------------------------------------------
    const [numeroCompra, setNumeroCompra] = useState(
        JSON.parse(localStorage.getItem("numeroCompra") || "[]")
        )
        
        
    useEffect(() => {
        localStorage.setItem("numeroCompra", JSON.stringify(numeroCompra))
    }, [numeroCompra])
    
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
            idDeCompra,
            setIdDeCompra,
            numeroCompra,
            setNumeroCompra
        }}>
            {children}

        </CartContext.Provider>
    )
}

