import { createContext, useState } from "react";
import Login from "../components/Login/Login"

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {

   return (


      <Login />

   )
}
