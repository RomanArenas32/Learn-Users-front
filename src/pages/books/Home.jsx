import { Header, Nabvar } from "../../components"
import { useAuth } from "../../hooks"
import './books.css'

export const Home = () => {


  const { auth } = useAuth();

  return (
    <>
      <Header />
      <div className="panels">

        <div className="panel blue">
          <h2 className="tip">Dowload</h2>
          <h6 className="second-text">Descarga y comparte informacion</h6>
        </div>
        <div className="panel green">
        <h2 className="tip">Inicia Sesion</h2>
          <h6 className="second-text">únete a la comunidad</h6>
        </div>
        {
          auth.emal && <div className="panel red">
            <p className="tip">Hover Me</p>
            <p className="second-text">Lorem Ipsum</p>
          </div>
        }

      </div>
      <hr />
    </>
  )
}
