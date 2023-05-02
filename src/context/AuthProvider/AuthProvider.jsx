import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const githubLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }
    useEffect(() =>{
         const unSubscribe = onAuthStateChanged(auth, (loggedUser) =>{
            setUser(loggedUser)
            setLoading(false)
         } ) 
         return () =>{
            unSubscribe()
         }
    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        logIn,
        logOut,
        googleLogIn,
        githubLogIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;