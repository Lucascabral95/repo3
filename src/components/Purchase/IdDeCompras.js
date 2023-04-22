import "./IdDeCompras.scss"
import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import NoPurchase from "./NoPurchase";
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';


const IdDeCompras = () => {

    const { numeroCompra, setNumeroCompra, loadingSkeleton, setLoadingSkeleton } = useContext(CartContext)

    useEffect(() => {
        setLoadingSkeleton(true)
        setTimeout(() => {
            setLoadingSkeleton(false)
        }, 300);
    }, [])


    const handleTrash = () => {
        setNumeroCompra([])
        Swal.fire({
            title: '¡Eliminado!',
            text: 'Eliminaste el id de tu ultima compra.',
            icon: 'success',
            imageUrl: "/img/pikachu-sorprendido.jpg",
            timer: 0,
            showConfirmButton: true,
            allowOutsideClick: true,
          });
    }


    return (
        <div>
            {numeroCompra.length === 0 ? (
                <NoPurchase />
            ) : (
                <>
                    {loadingSkeleton ? (
                        <div className="container contenedor-id">
                            <Skeleton />
                            <h3 className="empty-title">
                                <Skeleton />
                            </h3>
                            <span>
                                <Skeleton />
                            </span>
                            <span className="span-id-compra">
                                <Skeleton />
                            </span>
                            <span className="ultimo-id">
                                <Skeleton />
                            </span>
                            <Skeleton />
                        </div>
                    ) : (
                        <div className="container contenedor-id">
                            <img src="/img/pikachu-nube.gif" alt="Pikachu sobre una nube" />
                            <h3>¡Aqui esta tu ultimo id de compras pasadas!</h3>
                            <span>Tu ultimo id de compra es: </span>
                            <span className="span-id-compra"> "{numeroCompra}" </span>
                            <span className="ultimo-id">¡Guardalo! </span>
                            <Link>
                                <img
                                    src="/img/eliminar.gif"
                                    alt="Carrito de basura"
                                    style={{ width: "60px", height: "auto" }}
                                    onClick={handleTrash}
                                />
                            </Link>
                        </div>
                    )}
                </>
            )}
        </div>
    );

}

export default IdDeCompras