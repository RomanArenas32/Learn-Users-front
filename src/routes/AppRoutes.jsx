import { Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks"
import { Home } from "../pages/books";
import { Login, Register } from "../pages/users";

export const AppRoutes = () => {

  const { auth } = useAuth();


  return (
    <Routes>
      {/* Rutas públicas (accesibles para todos) */}
      <Route path="/" element={<Home />} />
      <Route path="/registrarse" element={<Register />} />
      <Route path="/login" element={<Login />} />


      
    </Routes>
  );
}