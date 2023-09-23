import { Link, useNavigate } from 'react-router-dom';
import { Alerta, Header } from '../../components';
import './pagesUser.css';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import clienteAxios from '../../config/axios';


export const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const navigate = useNavigate();

  const [alerta, setAlerta] = useState({});
  const {registrarUsuario} = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if([nombre, apellido, email, password].includes("")){
      setAlerta({
        mensaje: "No puede haber campos vacios",
        error: true
      });
      return
    }
    if(repetirPassword !== password){
      setAlerta({
        mensaje: "Las contraseñas no cohinciden",
        error: true
      });
      return
    }
    try {
      await clienteAxios.post(`/users/registrarse`, {nombre, apellido, email, password})
      setAlerta({
        mensaje: "Creado con exito!. Revisa tu correo electronico para confirmar tu usuario, luego inicia sesion",
        error: false
      });
    } catch (error) {
      setAlerta({
        mensaje: error.response.data.msg,
        error: true
      })
      return
    }
    setTimeout(() => {
      navigate("../login")
    }, 5000);
  }

const {mensaje} = alerta;
  return (
    <>
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-span">
          <label htmlFor="nombre" className="label">
            Nombre
          </label>
          <input type="text" name="nombre" id="nombre" className="span-p" value={nombre} onChange={e => setNombre(e.target.value)} />
        </div>
        <div className="input-span">
          <label htmlFor="apellido" className="label">
            Apellido
          </label>
          <input type="text" name="apellido" id="apellido" className="span-p" value={apellido} onChange={e => setApellido(e.target.value)} />
        </div>
        <div className="input-span">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" name="email" id="email" className="span-p" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-span">
          <label htmlFor="password" className="label">
            Contraseña
          </label>
          <input type="password" name="password" id="password" className="span-p" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="input-span mb-2">
          <label htmlFor="password" className="label">
            Repetir contraseña
          </label>
          <input type="password" name="password" id="password" className="span-p" value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)} />
        </div>
        
        <input className="submit" type="submit" value="Registrarte" />
        <div className="span">Ya tienes una cuenta?</div>
        <Link to="../login" className="span-p">
          <p>Logeate</p>
        </Link>
        {
          mensaje && <Alerta alerta={alerta}/>
        }
      </form>
    </>

  )
}
