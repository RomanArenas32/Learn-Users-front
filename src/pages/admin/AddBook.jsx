import { useState } from 'react';
import '../users/pagesUser.css';
import { useAuth } from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { Alerta, Header } from '../../components';

export const AddBook = () => {

  const [titulo, setTitulo] = useState("");
  const [anio, setAnio] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [url, setUrl] = useState("");
  const [publico, setPublico] = useState(true);
  const [alerta, setAlerta] = useState({});

  const navigate = useNavigate();

  const { auth } = useAuth();
console.log(auth)
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(titulo)

    setAlerta({
      mensaje: "Enviado con exito",
      error: false
    })
  }

  console.log(publico)
  const { mensaje } = alerta;
  return (
    <>
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-span">
          <label htmlFor="titulo" className="label">
            Titulo del libro
          </label>
          <input type="text" name="titulo" id="titulo" className='span-p' value={titulo} onChange={e => setTitulo(e.target.value)} />
        </div>
        <div className="input-span">
          <label htmlFor="titulo" className="label">
            Año
          </label>
          <input type="number" name="anio" id="anio" className='span-p' value={anio} onChange={e => setAnio(e.target.value)} />
        </div>
        <div className="input-span">
          <label htmlFor="titulo" className="label">
            Sinopsis
          </label>
          <input type="text" name="sinopsis" id="sinopsis" className='span-p' value={sinopsis} onChange={e => setSinopsis(e.target.value)} />
        </div>
        <div className="input-span">
          <label htmlFor="titulo" className="label">
            url
          </label>
          <input type="text" name="url" id="url" className='span-p' value={url} onChange={e => setUrl(e.target.value)} />
        </div>
        <div className="bauble_box">
          <input className="bauble_input" id="bauble_check" name="bauble" type="checkbox" />
          <label className="bauble_label" for="bauble_check" onClick={() => setPublico(!publico)}></label>
        </div>
        <input className="submit mt-3" type="submit" value="Agregar" />
        {
          mensaje && <Alerta alerta={alerta} />
        }

      </form>
    </>
  )
}
