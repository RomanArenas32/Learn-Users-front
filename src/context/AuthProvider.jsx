import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(()=>{
    const autenticarUsuario = async()=>{
      const token = localStorage.getItem('token');
      if(!token) return


      const config = {
        headers: {
         "Content-Type": "application/json",
          Autorization: `Bearer ${token}`
        }
      }
      try {
        const  {data} = await clienteAxios.get(`/users/perfil`, config);
        console.log(data)
      } catch (error) {
        console.log(error.response.data.msg)
      }
    }
    autenticarUsuario();
  }, [])

  console.log(auth)

  return (
    <AuthContext.Provider
      value={{
       
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export {
  AuthProvider
}

export default AuthContext