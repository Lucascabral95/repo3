import { useContext, useEffect, useState } from "react";
import "./EmptyCart.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { AiFillHeart } from "react-icons/ai"


const Emptycart = () => {

    const [loadingToast, setLoadingToast] = useState(false)


    const handleEmpty = () => {
        if (!loadingToast) {

            // toast.error("Carrito vacio", {
            //     position: "top-left"
            // })
            toast.error("Carrito vacio", {
                position: "top-right"
            })
            toast.error("Carrito vacio", {
                position: "bottom-left"
            })
            toast.error("Carrito vacio", {
                position: "bottom-right"
            })
            setLoadingToast(true)
        }
    }
    const handleEmptyTwo = () => {
        // toast.error(<div>
        //     <img className="img-emptyTwo" src="/img/pokemon-sad.png" />
        //     ¡Carrito vacio!
        //     <img className="img-emptyTwo" src="/img/pokemon-sad.png" />
        // </div>, {
        //     position: "top-left"
        // })
        toast.error(<div>
            <img className="img-emptyTwo" src="/img/pokemon-sad.png" />
            ¡Carrito vacio!
            <img className="img-emptyTwo" src="/img/pokemon-sad.png" />
        </div>, {
            position: "top-right"
        })
        toast.error(<div>
            <img className="img-emptyTwo" src="/img/pokemon-sad.png" />
            ¡Carrito vacio!
            <img className="img-emptyTwo" src="/img/pokemon-sad.png" />
        </div>, {
            position: "bottom-left"
        })
        toast.error(<div>
            <img className="img-emptyTwo" src="/img/pokemon-sad.png" />
            ¡Carrito vacio!
            <img className="img-emptyTwo" src="/img/pokemon-sad.png" />
        </div>, {
            position: "bottom-right"
        })
    }


    return (

        <div className="container empty-cart" onMouseOut={handleEmpty} onClick={handleEmptyTwo}>
            <img className="empty-img" src="/img/pikachu-tierno.jpg" />
            <h3 className="empty-title">Tu carrito esta vacio</h3>
            <span className="empty-span">Parece que no añadiste nada a tu carrito</span>
            <span className="empty-span">Por favor, volve a explorar las categorias y elegi algo que vaya con vos 😉</span>
            <ToastContainer autoClose={1500} />
        </div>

    )
}

export default Emptycart