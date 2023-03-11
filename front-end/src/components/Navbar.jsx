import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li> <Link to="/">Accueil</Link> </li>
                    <li> <Link to="/contact">Contact</Link></li>
                    <li> <Link to="/portfolio">Portfolio</Link></li>
                    <li> <Link to="/login">Login</Link></li>
                    <li> <Link to="/register">Register</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;