import Login from "../components/Login/Login"
import { Routes, Route, Navigate } from "react-router-dom"
import Register from "../components/Register/Register"

const PublicRoutes = () => {

    return (
        <>

            <Routes>
                <Route path="/login" element={ <Login />} />
                <Route path="/register" element={ <Register />} />
                <Route path="/*" element={ <Navigate to={"/login"} /> } />
            </Routes>

        </>
    )
}

export default PublicRoutes