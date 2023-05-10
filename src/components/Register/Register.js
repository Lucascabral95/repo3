import React, { useContext } from "react";
import "./Register.scss"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Link } from "react-router-dom"
import { LoginContext } from "../../Context/LoginContext";


const Register = () => {

    const { valueLogin, setValueLogin } = useContext(LoginContext);

    const handleChange = (e) => {
        setValueLogin({
            ...valueLogin,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, valueLogin.email, valueLogin.contraseña)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error creating user:", errorCode, errorMessage);
                Swal.fire({
                    title: "¡Error!",
                    text: "El email ingresado ya esta en uso. O esta ingresando mismos pares email/contraseña ¡Intentalo de nuevo!",
                    icon: "error",
                    confirmButtonText: "Ok",
                    imageUrl: "/img/pikachu-electro.gif"
                });
            });
    };


    return (
        <div className="contenedor-login">
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-sm-8 col-md-6 col-lg-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <img className="mx-auto d-block mb-4" src="/img/pokemon-logo.png" alt="Pokemon Store" width="auto" height="72" />
                                <h2 className="text-center mb-4">Registrarme</h2>
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
                                    <button className="w-100 btn btn-lg btn-primary mb-2" type="submit">Registrarme</button>
                                    <Link to={"/login"}> Ya estoy registrado </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register