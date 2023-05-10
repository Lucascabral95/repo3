import { createContext, useState, useEffect } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {

   const [ userEmail, setUserEmail ] = useState(
      JSON.parse(localStorage.getItem("userEmail") || "[]")
      )
      
      useEffect(() => {
          localStorage.setItem("userEmail", JSON.stringify(userEmail))
      },[userEmail])

      const [valueLogin, setValueLogin] = useState({
          email: "",
          contraseña: ""
      })
      
      const [acceso, setAcceso] = useState(
          JSON.parse(localStorage.getItem("acceso") || false)
      )
  
      useEffect(() => {
          localStorage.setItem("acceso", JSON.stringify(acceso))
      }, [acceso])


   return (
      <LoginContext.Provider value={{
         valueLogin,
         setValueLogin,
         acceso,
         setAcceso,
         userEmail,
         setUserEmail
      }}>

         {children}

      </LoginContext.Provider>
   )
}
