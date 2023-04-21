import "./WishList.scss"
import React, { useEffect, useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext";
import Wishlistempty from "./WishListEmpty";
import { Link, useParams } from "react-router-dom"

//---------------------------------------------------------------------
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import SkeletonWishList from "../Skeletons/SkeletonWishList"


const Wishlist = () => {
    const { wishProducto, setWishProducto, cart, setCart, producto,
        setProducto, quantity, setQuantity, wishlistOn, setWishlistOn,
        wishCantidad, setWishCantidad,
        loadingSkeleton, setLoadingSkeleton } = useContext(CartContext)


    const eliminarArticulo = (index) => {
        const newWish = [...wishProducto]
        newWish.splice(index, 1)
        setWishProducto(newWish)
        setWishCantidad(wishCantidad - 1)
    }

    const vaciarWishList = () => {
        setWishProducto([])
        setWishCantidad(0)
    }


    useEffect(() => {
        setLoadingSkeleton(true)
        setTimeout(() => {

            setLoadingSkeleton(false)

        }, 1000);
    }, [])



    return (

        <>
            {wishCantidad === 0 ? (

                <Wishlistempty />

            ) : (

                <>
                    {
                        loadingSkeleton ? (
                            <SkeletonWishList />
                        ) : (

                            <div className="container contenedor-productos-deseados">

                                <h3> Productos deseados </h3 >

                                <div className="row">


                                    {wishProducto.map((articulo, wish) =>
                                        <Card key={wish} className="card-contenedora" sx={{ maxWidth: 345 }}>
                                            <CardMedia
                                                component="img"
                                                alt={articulo.nombre}
                                                // width="321"
                                                height="300"
                                                image={articulo.imagen}
                                                style={{ objectFit: "contain", width: "100%" }}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {articulo.nombre}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {articulo.descripcion}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Stock: {articulo.stock}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Link to={`/productos/detalle/${articulo.id}`} className="btn" size="small" >
                                                    VER MAS
                                                </Link>

                                                <Button size="small" onClick={eliminarArticulo}>Eliminar de la Wishlsit</Button>
                                            </CardActions>
                                        </Card>
                                    )}
                                    <button className="btn btn-danger" onClick={vaciarWishList}> Vaciar lista de deseados</button>
                                </div>
                            </div >

                        )}
                </>
            )}
        </>
    )
}

export default Wishlist
// import "./WishList.scss"
// import React, { useEffect, useState, useContext } from "react"
// import { CartContext } from "../../Context/CartContext";
// import Wishlistempty from "./WishListEmpty";
// import { Link, useParams } from "react-router-dom"

// //---------------------------------------------------------------------
// // import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// import SkeletonWishList from "../Skeletons/SkeletonWishList"


// const Wishlist = () => {
//     const { wishProducto, setWishProducto, cart, setCart, producto,
//         setProducto, quantity, setQuantity, wishlistOn, setWishlistOn,
//         wishCantidad, setWishCantidad,
//         loadingSkeleton, setLoadingSkeleton } = useContext(CartContext)


//     const eliminarArticulo = (index) => {
//         const newWish = [...wishProducto]
//         newWish.splice(index, 1)
//         setWishProducto(newWish)
//         setWishCantidad(wishCantidad - 1)
//     }

//     const vaciarWishList = () => {
//         setWishProducto([])
//         setWishCantidad(0)
//     }


// useEffect(() => {
//     loadingSkeleton(true)
//     setTimeout(() => {

//         loadingSkeleton(false)

//     }, 4000);
// },[])



//     return (

//         <>
//             {wishCantidad === 0 ? (

//                 <Wishlistempty />

//             ) : (
//                 <div className="container contenedor-productos-deseados">

//                     <h3> Productos deseados </h3>

//                     <div className="row">


//                         {wishProducto.map((articulo, wish) =>
//                             <Card key={wish} className="card-contenedora" sx={{ maxWidth: 345 }}>
//                                 <CardMedia
//                                     component="img"
//                                     alt={articulo.nombre}
//                                     // width="321"
//                                     height="300"
//                                     image={articulo.imagen}
//                                     style={{ objectFit: "cover", width: "100%" }}
//                                 />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="div">
//                                         {articulo.nombre}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         {articulo.descripcion}
//                                     </Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         Stock: {articulo.stock}
//                                     </Typography>
//                                 </CardContent>
//                                 <CardActions>
//                                     <Link to={`/productos/detalle/${articulo.id}`} className="btn" size="small" >
//                                         VER MAS
//                                     </Link>

//                                     <Button size="small" onClick={eliminarArticulo}>Eliminar de la Wishlsit</Button>
//                                 </CardActions>
//                             </Card>
//                         )}
//                         <button className="btn btn-danger" onClick={vaciarWishList}> Vaciar lista de deseados</button>
//                     </div>
//                 </div>

//             )}
//         </>
//     )
// }

// export default Wishlist
//----------------------------------------------------------------------------------------------------------------
// import "./WishList.scss"
// import React, { useEffect, useState, useContext } from "react"
// import { CartContext } from "../../Context/CartContext";
// import Wishlistempty from "./WishListEmpty";
// import { Link } from "react-router-dom"


// const Wishlist = () => {
//     const { wishProducto, setWishProducto, cart, setCart, producto,
//         setProducto, quantity, setQuantity, wishlistOn, setWishlistOn } = useContext(CartContext)

//     return (

//         <>
//             {wishlistOn === false ? (
//                 // {quantity === 0 ? (

//                 <Wishlistempty />

//             ) : (
//                 <div className="container contenedor-productos-deseados">

//                     <h3> Productos deseados </h3>

//                     <div className="row">


//                         {wishProducto.map((articulo) =>
//                             // <div key={articulo.id}>
//                             //     <h1> {articulo.nombre} </h1>
//                             //     <img src={articulo.imagen} />
//                             //     <p>{articulo.categoria}</p>
//                             // </div>
//                             <div className="card col-4" style={{ maxWidth: '345px' }}>
//                                 <img
//                                     className="card-img-top"
//                                     src={articulo.imagen}
//                                     alt={articulo.nombre}
//                                     // style={{ height: '300px', objectFit: 'cover' }}
//                                     style={{ height: 'auto', width: "auto"  }}
//                                 />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{articulo.nombre}</h5>
//                                     <p className="card-text">{articulo.descripcion}</p>
//                                 </div>
//                                 <div className="card-footer">
//                                     {/* <button className="btn btn-sm btn-primary me-2">Ir a comprarlo</button> */}
//                                     <button className="btn btn-sm me-2 ">Ir a comprarlo</button>
//                                     {/* <button className="btn btn-sm btn-secondary">Eliminar de la Wishlsit</button> */}
//                                     <button className="btn btn-sm  ">Eliminar de la Wishlsit</button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>


//             )}
//         </>
//     )
// }

// export default Wishlist
//-----------------------------------------------------------------------------------------------------
// import "./WishList.scss"
// import React, { useEffect, useState, useContext } from "react"
// import { CartContext } from "../../Context/CartContext";
// import Wishlistempty from "./WishListEmpty";
// import { Link } from "react-router-dom"


// const Wishlist = () => {
//     const { wishProducto, setWishProducto, cart, setCart, producto,
//         setProducto, quantity, setQuantity, wishlistOn, setWishlistOn } = useContext(CartContext)

//     return (

//         <>
//             { wishlistOn === false ? (
//             // {quantity === 0 ? (

//                 <Wishlistempty />

//             ) : (
//                 <div className="container contenedor-productos-deseados">

//                     <h3> Productos deseados </h3>

//                     {wishProducto.map((articulo) =>
//                         <div key={articulo.id}>
//                             <h1> {articulo.nombre} </h1>
//                             <img src={articulo.imagen} />
//                             <p>{articulo.categoria}</p>
//                         </div>
//                     )}
//                 </div>


//             )}
//         </>
//     )
// }

// export default Wishlist