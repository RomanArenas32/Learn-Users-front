import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});


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