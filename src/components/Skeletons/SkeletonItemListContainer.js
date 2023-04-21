import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Slide from "../Slide/Slide"
import { CartContext } from "../../Context/CartContext";
import React, { useState, useEffect, useContext } from "react"



const SkeletonItemListContainer = () => {
    const { data, setData } = useContext(CartContext)

    return (
        <>

            <div className="container-fluid">

                <Slide />

                <div className="container">
                    <h1>Tienda Oficial de Pokemon</h1>

                    <div className="row">
                        {data.map((producto) => (
                            <div className="card" style={{ width: "18rem" }} key={producto.id}>
                                <Skeleton className="card-img-top mt-2" />

                                <div className="card-body">
                                    <h5 className="card-title"> <Skeleton /> </h5>
                                    <p className="card-text"> <Skeleton /> </p>
                                    <p> <Skeleton /> </p>
                                    <Skeleton height={38} width={81} className="btn-success" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </>
    )
}

export default SkeletonItemListContainer
// import Skeleton from "react-loading-skeleton";
// import 'react-loading-skeleton/dist/skeleton.css'



// const SkeletonItemListContainer = () => {

//     return (
//         <>

//             <Skeleton className="card-img-top mt-2" />

//             <div className="card-body">
//                 <h5 className="card-title"> <Skeleton /> </h5>
//                 <p className="card-text"> <Skeleton /> </p>
//                 <p> <Skeleton /> </p>
//                 <Skeleton height={38} width={81} className="btn-success" />
//             </div>

//         </>
//     )
// }

// export default SkeletonItemListContainer