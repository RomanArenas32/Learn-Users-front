import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components';
import { AuthProvider } from './context/AuthProvider';
import { AdminLayout, AuthLayout, UsersLayout } from './layout';
import { ActualizarPerfil, Login, Register } from './pages/users';
import { AddBook } from './pages/admin';
import { Home } from './pages/books';

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>

        <Routes>
          <Route path='/' element={<UsersLayout />}>
            <Route index element={<Home />} />
            <Route path="/perfil" element={<ActualizarPerfil />} />
          </Route>
        </Routes>

        <Routes>
          <Route path='/' element={<AdminLayout />}>
            <Route path="/panel" element={<AddBook />} />
          </Route>
        </Routes>

        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrar" element={<Register />} />
          </Route>
        </Routes>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}
