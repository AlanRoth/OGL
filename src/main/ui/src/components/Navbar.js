import {NavLink} from "react-router-dom";
import '../assets/css/Navbar.css';

function Navbar() {
    return (
        <nav>
            <ul className="sidebar">
                <li className="navitem">
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li className="navitem">
                    <NavLink to="/customers">Customers</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;