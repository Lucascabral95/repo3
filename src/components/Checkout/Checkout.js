import { useEffect, useState, useContext } from "react"
import "./Checkout.scss"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../Firebase/config"
import { Link } from "react-router-dom"
import { writeBatch, collection, where, documentId, updateDoc, doc, getDocs, addDoc, query } from "firebase/firestore"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {
    const { cart, setCart, contador, setContador,
        quantity, setQuantity, total, setTotal, vaciarCarrito, precioSumado,
        totalSuma, setTotalSuma, idDeCompra, setIdDeCompra,
        numeroCompra, setNumeroCompra } = useContext(CartContext);

    const [value, setValue] = useState({
        nombre: "",
        email: "",
        direccion: ""
    })

    const handleInputChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (value.nombre.length < 2) {
            alert("El nombre es muy corto")
            return
        }
        if (value.email.length < 4) {
            alert("El email es muy corto")
            return
        }
        if (value.direccion.length < 2) {
            alert("La direccion es muy corto")
            return
        }

        const orden = {
            cliente: value,
            items: cart,
            total: total,
            fyh: new Date
        }

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                console.log(doc.id)
                const numeroDeCompra = doc.id

                setNumeroCompra(numeroDeCompra)

                setIdDeCompra(true)
                setTimeout(() => {
                    setIdDeCompra(false)
                }, 40000)

                toast.success(`¡Compra exitosa! Anda a anotar tu id de compra 😃`)
            })
    }


    return (

        <div className="container">

            <h1 className="carrito-finalizacion">Checkout form</h1>
            <div className="row">

                <form className="col-12 col-md-6" onSubmit={handleSubmit}>

                    <h3>Direccion de envio</h3>

                    <input
                        value={value.nombre}
                        type="text"
                        className="form-control my-2"
                        placeholder="Tu nombre"
                        name="nombre"
                        onChange={handleInputChange}
                    />
                    <input
                        value={value.email}
                        type="email"
                        className="form-control my-2"
                        placeholder="Tu email"
                        name="email"
                        onChange={handleInputChange}
                    />
                    <input
                        value={value.direccion}
                        type="text"
                        className="form-control my-2"
                        placeholder="Tu direccion"
                        name="direccion"
                        onChange={handleInputChange}
                    />

                    {idDeCompra ? (

                        <>
                           <img className="finger-checkout-d" src="/img/icon-derecha.gif" alt="Dedo señalador" />
                            <Link to="/purchase" className="btn btn-primary" type="submit"> Ver numero de compra </Link>
                           <img className="finger-checkout-i" src="/img/icon-izquierda.gif" alt="Dedo señalador" />

                        </>

                    ) : (

                        <button className="btn btn-success" type="submit">Enviar</button>
                    )}

                    <ToastContainer autoClose={5000} />

                </form>

                <div className="articulos-deseados col-12 col-md-5 rounded offset-md-1 mt-4 mt-lg-0">
                    <div className="checkout-detail">
                        <div>
                            <h3>Tu carrito</h3>
                        </div>
                        <div >
                            <span className="rounded-circle">{quantity}</span>
                        </div>
                    </div>
                    <div className="checkout-contenedor rounded-3 border border-dark shadow p-3 mb-5 bg-body-tertiary" >

                        {cart.map((item) => (
                            <div key={item.id}>

                                <div className="checkout-products my-1">
                                    <div>
                                        <h6>{item.nombre} ({item.contador})</h6>
                                        <p>{item.categoria}</p>
                                    </div>
                                    <div>
                                        <p className="checkout-precio">${(item.contador * item.precio).toLocaleString().replace(",", ".")},00</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="checkout-total">
                            <h2 className="mt-3">Total: ${(total).toLocaleString().replace(",", ".")},00</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout
