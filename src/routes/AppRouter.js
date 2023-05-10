import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from "./PublicRoutes"
import PrivateRoutes from "./PrivateRoutes"
import React, { useContext } from "react"
import { LoginContext } from "../Context/LoginContext";


const AppRouter = () => {

    const { acceso } = useContext(LoginContext)

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