import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Slide from "../Slide/Slide"
import { CartContext } from "../../Context/CartContext";
import React, { useState, useEffect, useContext } from "react"
//--------------------------------------------------------------------------------------------
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const SkeletonWishList = () => {
    const { wish } = useContext(CartContext)

    return(
        <>

          <div className="container contenedor-productos-deseados">
             <h3> Productos deseados </h3 >
                <div className="row">

                       <Card key={wish} className="card-contenedora" sx={{ maxWidth: 345 }}>
                                 <Skeleton
                                    height="300"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    
                                        <Skeleton />

                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    
                                    <Skeleton />

                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    
                                    <Skeleton />

                                    </Typography>
                                </CardContent>
                                <CardActions>

                                    <Skeleton width={84} height={32}  className="btn" size="small"/>

                                    <Skeleton width={177} height={32} />

                                </CardActions>
                            </Card>

             </div>       
     </div>
        
        </>
    )
}

export default SkeletonWishList
//----------------------------------------------------------------------------------------------------------------
// import Skeleton from "react-loading-skeleton";
// import 'react-loading-skeleton/dist/skeleton.css'
// import Slide from "../Slide/Slide"
// import { CartContext } from "../../Context/CartContext";
// import React, { useState, useEffect, useContext } from "react"
// //--------------------------------------------------------------------------------------------
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';



// const SkeletonWishList = () => {

//     return(
//         <>
        
//         <Card key={wish} className="card-contenedora" sx={{ maxWidth: 345 }}>
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
        
//         </>
//     )
// }

// export default SkeletonWishList