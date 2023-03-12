import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <header>
            <nav>
                <ul className="navbar">
                    <li> <NavLink to="/accueil" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Accueil</NavLink></li>
                    <li> <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Contact</NavLink></li>
                    <li> <NavLink to="/portfolio" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Portfolio</NavLink></li>
                    <li className="right"> <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Login</NavLink></li>
                    <li className="right"> <NavLink to="/register" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Register</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;