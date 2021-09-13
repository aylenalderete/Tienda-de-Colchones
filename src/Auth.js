// import React, { useEffect, useState } from "react";
// import {useDispatch} from 'react-redux';
// import firebase, { firebaseInitializeApp } from "./config/firebase";
// export const AuthContext = React.createContext();

// function AuthProvider({ children }) {
//     const dispatch = useDispatch()
//     const [currentUser, setCurrentUser] = useState(() => firebase.auth(firebaseInitializeApp).currentUser)

//     useEffect(() => {
//         const unsubscribe = firebase.auth(firebaseInitializeApp).onAuthStateChanged(setCurrentUser)
//         dispatch({ type: 'SET_LOGED_ACTIVE', payload: currentUser })
//         return () => unsubscribe()
//     }, [currentUser])

//     return (
//         <AuthContext.Provider value={{ currentUser }}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export default AuthProvider
