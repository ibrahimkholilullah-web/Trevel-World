import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.config';
const googleProvider = new GoogleAuthProvider()
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const AuthProvider = createContext()
const AuthPrivated = ({children}) => { 
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)
    const handleSignUpEmailandpassword = (email,password) =>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinWithUser = (email,password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignUp = ()=>{
        setLoding(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOutUser = () =>{
        setLoding(true)
        return signOut(auth)
    }
    const updateUser = updateInfo =>{
        return updateProfile(auth.currentUser, updateInfo)
    }
    useEffect(()=>{
        const unsunscribe = onAuthStateChanged(auth, (currendUser)=>{
            setUser(currendUser)
            setLoding(false)
        })
        return () =>{
            unsunscribe()
        }
    },[])
    const authInfo ={
        handleSignUpEmailandpassword,
        signinWithUser,
        googleSignUp,
        logOutUser,
        updateUser,
        setUser,
        user,
        loding
    }
    return (
       <AuthProvider.Provider value={authInfo}>
        {children}
       </AuthProvider.Provider>
    );
};

export default AuthPrivated;