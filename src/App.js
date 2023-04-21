import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss'
import { NavBar } from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import ProductoId from './components/ProductosId/ProductosId';
import Contador from "./components/ItemListContainer/ItemListContainer"
import Reacts, { useContext, useEffect, useState } from "react"
//BROWSER ROUTES, ROUTE, NAVIGATE
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
//
import Peliculas from "./pages/peliculas"
import Peluches from "./pages/peluches"
import Videojuegos from "./pages/videojuegos"
//---------------------------------------------------------------------
import Emptycart from './components/Carrito/EmptyCart';
//---------------------------------------------------------------------
import { CartContext } from "./Context/CartContext"
//---------------------------------------------------------------------
import CarritoCompras from "./components/Carrito/Carrito"
//---------------------------------------------------------------------
//---------------------------------------------------------------------
//---------------------------------------------------------------------
import Login from './components/Login/Login';
import Wishlist from './components/WishList/WishList';
//---------------------------------------------------------------------
import { CartProvider } from "./Context/CartContext"
//---------------------------------------------------------------------
import Checkout from './components/Checkout/Checkout';


import AppRouter from "./routes/AppRouter"

function App() {

  return (
    <div>
      <CartProvider>
           <AppRouter />
      </CartProvider>

    </div>
  );
}

export default App;
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './App.scss'
// import { NavBar } from "./components/Navbar/Navbar"
// import Footer from "./components/Footer/Footer"
// import ProductoId from './components/ProductosId/ProductosId';
// import Contador from "./components/ItemListContainer/ItemListContainer"
// import Reacts, { useContext, useEffect, useState } from "react"
// //BROWSER ROUTES, ROUTE, NAVIGATE
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
// //
// import Peliculas from "./pages/peliculas"
// import Peluches from "./pages/peluches"
// import Videojuegos from "./pages/videojuegos"
// //---------------------------------------------------------------------
// import Emptycart from './components/Carrito/EmptyCart';
// //---------------------------------------------------------------------
// import { CartContext } from "./Context/CartContext"
// //---------------------------------------------------------------------
// import CarritoCompras from "./components/Carrito/Carrito"
// //---------------------------------------------------------------------
// //---------------------------------------------------------------------
// //---------------------------------------------------------------------
// import Login from './components/Login/Login';
// import Wishlist from './components/WishList/WishList';
// //---------------------------------------------------------------------
// import { CartProvider } from "./Context/CartContext"
// //---------------------------------------------------------------------
// import Checkout from './components/Checkout/Checkout';

// function App() {
//     const [cart, setCart] = useState([])

//     const isInCart = (id) => {
//       return cart.some((prod) => prod.id === id)
//     }

//     const [contador, setContador] = useState(0)


//     const totalCantidad = () => {
//       return cart.reduce((acc, prod) => acc + prod.contador, 0)
//     }

//     const [quantity, setQuantity] = useState(0)


//     const [producto, setProducto] = useState(null);

//     const [total, setTotal] = useState(0);

//     const [cantidad, setCantidad] = useState(1);

//     const vaciarCarrito = () => {
//       setCart([])
//     }

//     const [data, setData] = useState([]);

//     const [isLoading, setIsLoading] = useState(true);

//     const [ loadingSkeleton, setLoadingSkeleton ] = useState(true)

//     const [wish, setWish] = useState(true)

//   const [ wishProducto, setWishProducto ] = useState([])

//   return (
//     <div>

//       <CartContext.Provider value={{
//         cart,
//         setCart,
//         isInCart,
//         contador,
//         setContador,
//         totalCantidad,
//         quantity,
//         setQuantity,
//         producto,
//         setProducto,
//         total,
//         setTotal,
//         vaciarCarrito,
//         data,
//         setData,
//         cantidad,
//         setCantidad,
//         isLoading,
//         setIsLoading,
//         loadingSkeleton,
//         setLoadingSkeleton,
//         wish,
//         setWish,
//         wishProducto,
//         setWishProducto
//       }}>



//         <BrowserRouter>
//           <NavBar />

//           <Routes>

//             <Route path='/' element={<Contador />} />
//             <Route path='/productos/peliculas' element={<Peliculas />} />
//             <Route path='/productos/peliculas/detalle/:id' element={<ProductoId />} />



//             <Route path='/carrito' element={<CarritoCompras />} />
//             <Route path='/checkout' element={<Checkout />} />

//             <Route path='/emptycart' element={<Emptycart />} />


//             <Route path="/login" element={<Login />} />
//             <Route path="/wishlist" element={<Wishlist />} />


//             <Route path='/productos/videojuegos' element={<Videojuegos />} />
//             <Route path='/productos/videojuegos/detalle/:id' element={<ProductoId />} />

//             <Route path='/productos/peluches' element={<Peluches />} />
//             <Route path='/productos/peluches/detalle/:id' element={<ProductoId />} />

//             <Route path='*' element={<Navigate to={"/"} />} />

//             <Route path='/productos/detalle/:id' element={<ProductoId />} />
//             <Route path='/productos/:id' element={<ProductoId />} />

//           </Routes>


//           <Footer />
//         </BrowserRouter>






//       </CartContext.Provider>
//     </div>
//   );
// }

// export default App;





