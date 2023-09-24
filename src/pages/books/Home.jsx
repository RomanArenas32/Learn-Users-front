import { useNavigate } from "react-router-dom"
import { Header, Nabvar } from "../../components"
import { useAuth } from "../../hooks"
import './books.css'

export const Home = () => {

  const navigate = useNavigate();
  const { auth } = useAuth();

  return (
    <>
      <Header />
      <div className="panels">

        <div className="panel blue">
          <h2 className="tip">Dowload</h2>
          <h6 className="second-text">Descarga y comparte informacion</h6>
        </div>
        <div className="panel green" onClick={()=> navigate('../login')}>
        <h2 className="tip">Inicia Sesion</h2>
          <h6 className="second-text">únete a la comunidad</h6>
        </div>
        {
          auth.emal && <div className="panel red">
            <p className="tip">Salir!</p>
            <p className="second-text">Vuelve pronto</p>
          </div>
        }

      </div>
      <hr />
    </>
  )
}
