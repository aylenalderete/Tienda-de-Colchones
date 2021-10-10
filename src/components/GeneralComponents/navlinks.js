import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../database/auth'
import "../../styles/GeneralComponents/layout.scss"

function Navlinks({open}) {    
    const {isLogged} = useSelector(state => state.user)

    return (
        <ul className={`navlinks-container ${open && `animate__slideInDown ${isLogged && 'loged'}`}`}>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/productos">Productos</Link>
            </li>
            <li>
                <Link to="/ContactoMayorista">Contacto mayorista</Link>
            </li>
            {isLogged && (
                <>
                    <li>
                        <Link to='/admin'>Admin</Link>
                    </li>
                    <li onClick={() => logout()} >
                        Cerrar sesión
                    </li>
                </>
            )}
        </ul>
    )
}

export default Navlinks
