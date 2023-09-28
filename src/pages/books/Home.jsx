import { useNavigate } from "react-router-dom"
import { Header } from "../../components"
import { useAuth } from "../../hooks"
import './books.css'



export const Home = () => {

  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();


  const cerrarSesion = () => {
    setAuth({})
  }


  return (
    <>
      <Header />
      <div className="bienvenido">
        {
          auth.email
            ?
            <>
              <h2> Bienvenido User !!!!!</h2>

              <div className="perfil">
                <div className="perfil-details">
                  <p className="text-title">Hola {auth.nombre} {auth.apellido}</p>
                  <p className="text-body">Actualiza tu perfil para publicar contenido</p>
                  <p className="text-body">o descarga todo el contenido gratuito mas abajo en el boton "Dowload"</p>
                </div>
                <button className="perfil-button">Actualizar tu perfil</button>
              </div>
            </>
            :
            <>

              <div className="perfil">
                <div className="perfil-details">
                  <p className="text-title">Inicia Sesion para utilizar la app</p>
                  <p className="text-body">Actualiza tu perfil para publicar contenido</p>
                  <p className="text-body">cuando lo hagas podras descarga todo el contenido gratuito y mas</p>
                </div>
              </div>
            </>
        }
      </div>

      <div className="panels">
        {

          auth.email
            ?
            <>
              <div className="panel red" onClick={cerrarSesion}>
                <p className="tip">Salir!</p>
                <p className="second-text">Vuelve pronto</p>
              </div>
              <div className="panel blue">
                <h2 className="tip">Dowload</h2>
                <h6 className="second-text">Descarga y comparte informacion</h6>
              </div>
            </>

            :
            <div className="panel green" onClick={() => navigate('../login')}>
              <h2 className="tip">Inicia Sesion</h2>
              <h6 className="second-text">únete a la comunidad</h6>
            </div>
        }




      </div>
      <hr />
    </>
  )
}
