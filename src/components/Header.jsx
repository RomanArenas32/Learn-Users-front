import { Logo } from './Logo'
import './components.css'

export const Header = () => {
  return (
    <>
      <Logo />
      <header className='header'>
        <h1 className='titulo'>Learn Users</h1>
      </header>
    </>

  )
}
