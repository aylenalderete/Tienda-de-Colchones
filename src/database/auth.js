import Swal from "sweetalert2";
import { auth } from "../config/firebase"
import { store } from "../store";

export const singInWithEmailAndPass = async (email, pass) => {
    try {
        await auth.signInWithEmailAndPassword(email, pass)
    } catch (err) {
        Swal.fire('Credenciales inválidas')
    }
}

export const logout = async () => {
    try {
        await auth.signOut()
        store.dispatch({type: 'RESET_ALL'})
    } catch (err) {
        Swal.fire('Error al cerrar sesión')
    }
}