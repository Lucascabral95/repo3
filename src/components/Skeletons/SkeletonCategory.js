import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Slide from "../Slide/Slide"
import { CartContext } from "../../Context/CartContext";
import React, { useState, useEffect, useContext } from "react"

const SkeletonCategory = () => {

    const { data, setData } = useContext(CartContext)

    return (
        <>


            <div className="container">
                <h1>Lista de Peliculas</h1>

                <div className="row">
                    {data.map((producto) =>
                        producto.categoria === "Pelicula" ? (
                            <div className="card" style={{ width: "18rem" }} key={producto.id}>
                                <Skeleton className="card-img-top" />

                                <div className="card-body">
                                    <h5 className="card-title"> <Skeleton /> </h5>
                                    <p className="card-text"> <Skeleton /> </p>
                                    <p> <Skeleton /></p>
                                    <Skeleton height={38} width={81} className="btn-success" />
                                </div>
                            </div>
                        ) : null
                    )}
                </div>
            </div>


        </>
    )
}

export default SkeletonCategory