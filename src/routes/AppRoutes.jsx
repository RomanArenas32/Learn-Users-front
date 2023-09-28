import { Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks"
import { Home } from "../pages/books";
import {  Login,  Register } from "../pages/users";
import { AddBook } from "../pages/admin";

export const AppRoutes = () => {

  const { auth } = useAuth();


  return (
    <>
      <Routes>
        {/* Rutas públicas (accesibles para todos) */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/registrarse" element={<Register />} />
        <Route path="/login" element={<Login />} />
                   
        {/* Rutas privadas (accesibles solo para usuarios o administradores) */}
      </Routes>
      <Routes>
        {/* Rutas públicas (accesibles para todos) */}
        <Route path="/panel" element={<AddBook />} />


        {/* Rutas privadas (accesibles solo para usuarios o administradores) */}
      </Routes>
    </>

  );
}