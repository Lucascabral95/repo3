import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from "./PublicRoutes"
import PrivateRoutes from "./PrivateRoutes"
import { CartContext } from '../Context/CartContext';
import React, { useContext, useEffect, useState } from "react"

const AppRouter = () => {

    const { acceso, setAcceso } = useContext(CartContext)


    return (
        <>
            <BrowserRouter>

                <> {
                    acceso ? (
                        <PrivateRoutes />
                    ) : (
                        <PublicRoutes />
                    )}
                </>


            </BrowserRouter>

        </>
    )
}

export default AppRouter