import Layout from "../GeneralComponents/layout";
import React from 'react'
import "../../styles/login.scss"
import { useState } from "react"
import { singInWithEmailAndPass } from "../../database/auth";

function Login() {
    const [datosUsuario, setdatosUsuario] = useState({email: '', password: ''})
    
    const handleInputChange = (e) => {
        setdatosUsuario({...datosUsuario, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await singInWithEmailAndPass(datosUsuario.email, datosUsuario.password)
    }

    return (
        <Layout>
            <div className="login-section">
                <form onSubmit={handleSubmit} className="login-container-info">
                    <h2>Iniciar sesión</h2>
                    <input required className="login-input" type='email' autoComplete='off' name="email" onChange={handleInputChange} placeholder="email"></input>
                    <input required className="login-input" type='password' autoComplete='off' name="password" onChange={handleInputChange} placeholder="Contraseña"></input>
                    <button type='submit' className="login-button">Entrar</button>
                </form>
            </div>
        </Layout>
    )
}

export default Login
