import { Link } from 'react-router-dom'
import './components.css';


export const Nabvar = () => {
  return (
    <div className='navegacion'>
      <Link to="login" className="btn btn-primary me-3">Ingresar</Link>
      <Link to="libros" className="btn btn-primary">Libros</Link>
    </div>
  )
}
