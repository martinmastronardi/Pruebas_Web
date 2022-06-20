import '../../style/Layout.css'
// import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div>
            <nav>
                <ul className="holder">
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "Activo" : undefined}>Home</NavLink></li>
                    <li><NavLink to="/servicios" className={({ isActive }) => isActive ? "Activo" : undefined}>Servicios</NavLink></li>
                    <li><NavLink to="/nosotros" className={({ isActive }) => isActive ? "Activo" : undefined}>Nosotros</NavLink></li>
                    <li><NavLink to="/contacto" className={({ isActive }) => isActive ? "Activo" : undefined}>Contacto</NavLink></li>

                </ul>
            </nav>
        </div>
    );
}
export default Nav;