
import logo from '../../assets/descarga.png'
import CartWidget from '../CartWidget';

const Navbar = () =>{

    return(
    <header className="header">
        <nav className="navbar container">
            <figure className="navbar__logo">
                <img src={logo} alt="logo" />
            </figure>
            <menu className="navbar__menu">
                <li className="navbar__item"><a href="" className='navbar__link'>Shop</a></li>
                <li className="navbar__item"><a href="" className='navbar__link'>Contacto</a></li>
                <li className="navbar__item"><a href="" className='navbar__link'>Login</a></li>
                <li><a href="" className='navbar__link'><CartWidget quantity={1}/>
                    </a>
                    </li>
            </menu>
        </nav>
    </header>
    );
}
export default Navbar;