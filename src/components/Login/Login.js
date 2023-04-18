import React, { useEffect, useState, useContext } from "react"
import "./Login.scss"
import { LoginContext } from "../../Context/LoginContext"

const Login = () => {
    // const { login } = useContext(LoginContext)

    const [valueLogin, setValueLogin] = useState({
        email: "",
        contraseña: ""
    })






    const handleChange = (e) => {
        setValueLogin({
            ...valueLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        //    login(valueLogin)
    }






    return (

        <div className="contenedor-login">

            <div class="container-fluid">
                <div class="row justify-content-center align-items-center min-vh-100">
                    <div class="col-sm-8 col-md-6 col-lg-4">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <img class="mx-auto d-block mb-4" src="/img/pokemon-logo.png" alt="Pokemon Store" width="auto" height="72" />
                                <h2 class="text-center mb-4">Ingresa con tu cuenta</h2>
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <label for="inputEmail" class="form-label visually-hidden">Direccion de Email</label>
                                        <input
                                            onChange={handleChange}
                                            name="email"
                                            type="email"
                                            class="form-control"
                                            id="inputEmail"
                                            placeholder="Direccion de Email"
                                            value={valueLogin.email}
                                            required autofocus />
                                    </div>
                                    <div class="mb-3">
                                        <label for="inputPassword" class="form-label visually-hidden">Contraseña</label>
                                        <input
                                            onChange={handleChange}
                                            name="contraseña"
                                            type="password"
                                            class="form-control"
                                            id="inputContraseña"
                                            placeholder="Contraseña"
                                            value={valueLogin.contraseña}
                                            required />
                                    </div>
                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="rememberMe" />
                                            <label class="form-check-label" for="rememberMe">Recordame</label>
                                        </div>
                                    </div>
                                    <button class="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
                                </form>
                                <div class="d-flex justify-content-between align-items-center mt-3">
                                    <a href="#" class="link-primary">Olvidaste tu contraseña?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Login