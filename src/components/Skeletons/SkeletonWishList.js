import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { CartContext } from "../../Context/CartContext";
import React, { useState, useEffect, useContext } from "react"
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
