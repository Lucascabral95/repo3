import { createContext, useState } from "react";

export const LoginContext = createContext()

const MOCK_USUARIOS = [
    {
       id: 1 ,
       email: "usuario.Pikachu@hotmail.com",
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
       id:5 ,
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

