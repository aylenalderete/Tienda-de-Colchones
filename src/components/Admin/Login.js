import Layout from "../GeneralComponents/layout";
import React from 'react'
import "../../styles/login.scss"
import { useEffect, useState } from "react"

function Login() {
    const [datosUsuario, setdatosUsuario] = useState({nombre: '', contraseña: ''})

    const handleInputChange = (e) => {
        setdatosUsuario({...datosUsuario, [e.target.name] : e.target.value})
    }

    return (
        <Layout>
            <div className="login-section">
                <div className="login-container-info">
                    <h2>Iniciar sesión</h2>
                    <input className="login-input" autoComplete='off' name="usuario" onChange={handleInputChange} placeholder="Usuario"></input>
                    <input className="login-input" type='password' autoComplete='off' name="contraseña" onChange={handleInputChange} placeholder="Contraseña"></input>
                    <button className="login-button">Entrar</button>
                </div>
            </div>
        </Layout>
    )
}

export default Login
