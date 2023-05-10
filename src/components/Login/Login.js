import React, { useEffect, useContext } from "react"
import "./Login.scss"
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Link } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/config"
import { LoginContext } from "../../Context/LoginContext";

const Login = () => {

    const { valueLogin, setValueLogin, setAcceso, setUserEmail } = useContext(LoginContext)

    const handleChange = (e) => {
        setValueLogin({
            ...valueLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const auth = getAuth();
        signInWithEmailAndPassword(auth, valueLogin.email, valueLogin.contraseña)
            .catch((error) => {
                const errorMessage = error.message;
                console.log("Error en inicio de sesión:", errorMessage)
                Swal.fire({
                    icon: "error",
                    title: "¡Fallido inicio de sesion",
                    text: "El email o la contraseña son incorrectos.",
                    imageUrl: "/img/pikachu-confundido.gif",
                    timer: 4000,
                    showConfirmButton: true,
                    allowOutsideClick: true,
                })
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                setAcceso({
                    email: user.email,
                    acceso: true
                })
                console.log("Bienvenido: " + user.email)
                setUserEmail(user.email)
            } else {
                setAcceso(false)
            }
            console.log(user)
        })
    }, [])


    return (
        <div className="contenedor-login">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-sm-8 col-md-6 col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <img className="mx-auto d-block mb-4" src="/img/pokemon-logo.png" alt="Pokemon Store" width="auto" height="72" />
                                <h2 className="text-center mb-4">Ingresa con tu cuenta</h2>
                                <form onSubmit={handleSubmit} className="form-login">
                                    <div className="mb-3">
                                        <label htmlFor="input" className="form-label visually-hidden">Direccion de Email</label>
                                        <input
                                            onChange={handleChange}
                                            name="email"
                                            type="email"
                                            className="form-control"
                                            id="inputEmail"
                                            placeholder="Direccion de Email"
                                            value={valueLogin.email}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="input" className="form-label visually-hidden">Contraseña</label>
                                        <input
                                            onChange={handleChange}
                                            name="contraseña"
                                            type="password"
                                            className="form-control"
                                            id="inputContraseña"
                                            placeholder="Contraseña"
                                            value={valueLogin.contraseña}
                                            required />
                                    </div>
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="rememberMe" />
                                            <label className="form-check-label" htmlFor="rememberMe">Recordame</label>
                                        </div>
                                    </div>
                                    <button className="w-100 btn btn-lg btn-primary mb-2" type="submit">Ingresar</button>
                                    <Link to={"/register"}> ¿No tenes una cuenta? Regístrate ahora. </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
