import logo from '../../images/logo.png'
import './estilo.css';


function Logo() {
    return (
        <div className='logo'>
          <img src={logo} alt='Logo-Biblioteca'></img>
        </div>
    )
}

export default Logo;