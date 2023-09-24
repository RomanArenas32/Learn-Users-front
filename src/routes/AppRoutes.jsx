import { Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks"
import { Home } from "../pages/books";
import { ConfirmarCuenta, Login, NuevaContraseña, OlvidePassword, Register } from "../pages/users";

export const AppRoutes = () => {

  const { auth } = useAuth();


  return (
    <Routes>
      {/* Rutas públicas (accesibles para todos) */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      <Route path="/registrarse" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmar/:id" element={<ConfirmarCuenta />} />
      <Route path="/olvide-password" element={<OlvidePassword />} />
      <Route path="/olvide-password/:token" element={<NuevaContraseña />} />
    </Routes>
  );
}