import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
//--------------------------------------------------------------------------------
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
//--------------------------------------------------------------------------------
import Peliculas from "../pages/peliculas"
import Peluches from "../pages/peluches"
import Videojuegos from "../pages/videojuegos"
//--------------------------------------------------------------------------------
import ProductoId from "../components/ProductosId/ProductosId"
import Wishlist from "../components/WishList/WishList"
import CarritoCompras from "../components/Carrito/Carrito"
import Checkout from "../components/Checkout/Checkout"
import Emptycart from "../components/Carrito/EmptyCart"

import Login from "../components/Login/Login"
import ConfirmedPurchase from "../components/Purchase/ConfirmedPurchase"


const PrivateRoutes = () => {

    return (

        <>
            <Navbar />

            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/productos/peliculas' element={<Peliculas />} />
                <Route path='/productos/videojuegos' element={<Videojuegos />} />
                <Route path='/productos/peluches' element={<Peluches />} />
                <Route path='/productos/peliculas/detalle/:id' element={<ProductoId />} />
                <Route path='/productos/videojuegos/detalle/:id' element={<ProductoId />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path='/carrito' element={<CarritoCompras />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/emptycart' element={<Emptycart />} />
                <Route path='/productos/peluches/detalle/:id' element={<ProductoId />} />
                <Route path='/productos/detalle/:id' element={<ProductoId />} />
                <Route path='/productos/:id' element={<ProductoId />} />
                <Route path='*' element={<Navigate to={"/"} />} />

                <Route path="/login" element={<Login />} />

                <Route path="/purchase" element={<ConfirmedPurchase />} />


            </Routes>

            <Footer />
        </>

    )
}

export default PrivateRoutes 