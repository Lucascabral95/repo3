// import BrowserRouter from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import PublicRoutes from "./PublicRoutes"
import PrivateRoutes from "./PrivateRoutes"


const AppRouter = () => {


    return (
        <>
            <BrowserRouter>

                {/* <PublicRoutes /> */}

                <PrivateRoutes />

            </BrowserRouter>


        </>
    )
}

export default AppRouter