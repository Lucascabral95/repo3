import Login from "../components/Login/Login"
import { Routes, Route, Navigate } from "react-router-dom"


const PublicRoutes = () => {

    return (
        <>

            <Routes>
                <Route path="/login" element={ <Login />} />
                {/* <Route path="*" element={ <Navigate to={"/login"} />} /> */}
            </Routes>

        </>
    )
}

export default PublicRoutes