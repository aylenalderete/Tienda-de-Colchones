import React from 'react'
import "../../styles/GeneralComponents/layout.scss"
import 'animate.css';

function Navlinks() {
    return (
        <ul className="navlinks-container animate__slideInDown">
            <li>
                <a href="/">Inicio</a>
            </li>
            <li>
                <a href="/productos">Productos</a>
            </li>
            <li>
                <a href="/ContactoMayorista">Contacto mayorista</a>
            </li>
            <li>
                <a href="/login">Iniciar sesión</a>
            </li>  
        </ul>
    )
}

export default Navlinks