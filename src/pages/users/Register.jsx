import { Link } from 'react-router-dom';
import { Header } from '../../components';
import './pagesUser.css';

export const Register = () => {
  return (
    <>
      <Header />
      <form className="form">
        <div className="input-span">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" name="email" id="email" className='span-p' />
        </div>
        <div className="input-span">
          <label htmlFor="password" className="label" >
            Contraseña
          </label>
          <input type="password" name="password" id="password" className="span-p" />
        </div>
        <div className="span">
          <Link className='span-p' to="olvide-password">
            <p >Olvidaste tu contraseña?</p>
          </Link>

        </div>
        <input className="submit" type="submit" value="Ingresa" />
        <div className="span">
          Aun no tienes una cuenta?
        </div>
        <Link to="registrarse" className='span-p'> <p>Registrate</p></Link>

      </form>
    </>
  )
}
