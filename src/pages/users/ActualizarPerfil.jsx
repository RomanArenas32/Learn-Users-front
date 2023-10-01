import { useEffect, useState } from 'react';
import { Alerta, Logo } from '../../components'
import './pagesUser.css'
import { useAuth } from '../../hooks';

export const ActualizarPerfil = () => {

  const claveSecreta = import.meta.env.CONTRA_SECRETA_ADMIN;
  const [perfil, setPerfil] = useState({})
  const [alerta, setAlerta] = useState({});

  const { actualizarPerfil, auth } = useAuth();

  useEffect(() => {
    setPerfil(auth)
  }, [auth])

 
  console.log(perfil)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { nombre, apellido } = perfil;
    if ([nombre, apellido].includes("")) {
      setAlerta({
        mensaje: "No puede haber campos vacios",
        error: true
      });
      return
    }

    await actualizarPerfil(perfil);
    setAlerta({
      mensaje: "Usuario actualizado con exito",
      error: false
    })
  }

  const { mensaje } = alerta;
  return (
    <>
      <Logo />
      <header className='header-perfil'>
        <h1 className='titulo'>Learn Users</h1>
      </header>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-span">
          <label htmlFor="nombre" className="label">
            Nombre
          </label>
          <input type="text" name="nombre" id="nombre" className="span-p"
            value={perfil.nombre || ""}
            onChange={e => setPerfil({
              ...perfil,
              [e.target.name]: e.target.value
            })} 
            />
        </div>
        <div className="input-span">
          <label htmlFor="apellido" className="label">
            Apellido
          </label>
          <input type="text" name="apellido" id="apellido" className="span-p" 
          value={perfil.apellido || ""}
              onChange={e => setPerfil({
                ...perfil,
                [e.target.name] : e.target.value
              })}
          />
        </div>
        <div className="input-span">
          <label htmlFor="rol" className="label">
            Rol
          </label>
          <select
            name="rol"
            id="rol"
            className="span-p"
            value={perfil.rol || "USUARIO"}
              onChange={e => setPerfil({
                ...perfil,
                [e.target.name] : e.target.value
              })}
          >
            <option value="ADMINISTRADOR">ADMIN</option>
            <option value="USUARIO">USER</option>
          </select>
        </div>

        <div className="input-span mb-2">
          <label htmlFor="password" className="label">
            ingresa la contraseña del administrador
          </label>
          <input type="password" name="password" id="password" className="span-p" value={""} onChange={e => setRepetirPassword(e.target.value)} />
        </div>

        <input className="submit" type="submit" value="Actualizar" />


        {
          mensaje && <Alerta alerta={alerta} />
        }
      </form>
    </>
  )
}
