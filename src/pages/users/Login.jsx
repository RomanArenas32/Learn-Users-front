import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components';
import './pagesUser.css';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Alerta } from '../../components/Alerta';
import clienteAxios from '../../config/axios';

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const navigate = useNavigate();

  const { setAuth } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setAlerta({ mensaje: 'No puede haber campos vacios', error: true });
      return;
    }
    try {
      const { data } = await clienteAxios.post(`/users/login`, { email, password });
      const { usuario } = data;
      localStorage.setItem('token', usuario.token);
      setAuth(usuario)
      setAlerta({
        mensaje: "Usuario autenticado correctamente. Redireccionando....",
        error: false
      });
    } catch (error) {
      setAlerta({ mensaje: error.response.data.msg, error: true })
      return;
    }
    setTimeout(() => {
      navigate("../home")
    }, 6000);

  }
  const { mensaje } = alerta;
  return (
    <>
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-span">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" name="email" id="email" className='span-p' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-span">
          <label htmlFor="password" className="label" >
            Contraseña
          </label>
          <input type="password" name="password" id="password" className="span-p" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="span">
          <Link className='span-p' to="../olvide-password">
            <p >Olvidaste tu contraseña?</p>
          </Link>

        </div>
        <input className="submit" type="submit" value="Ingresa" />
        <div className="span">
          Aun no tienes una cuenta?
        </div>
        <Link to="../registrarse" className='span-p'> <p>Registrate</p></Link>
        {
          mensaje && <Alerta alerta={alerta} />
        }

      </form>
    </>

  );
};

