import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/GeneralComponents/layout.scss"

function Navlinks({open}) {           
    return (
        <ul className={`navlinks-container ${open && 'animate__slideInDown'}`}>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/productos">Productos</Link>
            </li>
            <li>
                <Link to="/ContactoMayorista">Contacto mayorista</Link>
            </li>
        </ul>
    )
}

export default Navlinks
