import React, { useEffect, useState, useContext } from "react"
import "./Login.scss"
import { CartContext } from "../../Context/CartContext"

const Login = () => {

    const { valueLogin, setValueLogin, acceso, setAcceso } = useContext(CartContext)


    const handleChange = (e) => {
        setValueLogin({
            ...valueLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const match = MOCK_USUARIOS.find((user) => user.email === valueLogin.email && user.contraseña === valueLogin.contraseña)

        if (match) {
            console.log("Usuario valido, podes ingresar")
            setAcceso(true)
        } else {
            alert("Usuario invalido. Intentalo de nuevo")
            setAcceso(false)
        }
        return match
    }


    const MOCK_USUARIOS = [
        {
            id: 1,
            email: "usuario.pikachu@hotmail.com",
            contraseña: "pikachu"
        },
        {
            id: 2,
            email: "usuario.bulbasur@hotmail.com",
            contraseña: "bulbasur"
        },
        {
            id: 3,
            email: "usuario.mew@hotmail.com",
            contraseña: "mew"
        },
        {
            id: 4,
            email: "usuario.charmander@hotmail.com",
            contraseña: "charmander"
        },
        {
            id: 5,
            email: "usuario.ponyta@hotmail.com",
            contraseña: "ponyta"
        },
        {
            id: 6,
            email: "usuario.eevee@hotmail.com",
            contraseña: "eevee"
        },
        {
            id: 7,
            email: "usuario.cyndaquil@hotmail.com",
            contraseña: "cyndaquil"
        },
    ]


    return (

                <div className="contenedor-login">

                    <div className="container-fluid">
                        <div className="row justify-content-center align-items-center min-vh-100">
                            <div className="col-sm-8 col-md-6 col-lg-4">
                                <div className="card shadow-sm">
                                    <div className="card-body">
                                        <img className="mx-auto d-block mb-4" src="/img/pokemon-logo.png" alt="Pokemon Store" width="auto" height="72" />
                                        <h2 className="text-center mb-4">Ingresa con tu cuenta</h2>
                                        <form onSubmit={handleSubmit}>
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
                                            <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
                                        </form>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <a href="#" className="link-primary">Olvidaste tu contraseña?</a>
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