import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   const createUser = (email,password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googlesignIn =()=> {
        setLoading(true)
        return  signInWithPopup(auth, googleProvider)
    }
    
    const signIn = (email , password) => {
        setLoading(true)
            return signInWithEmailAndPassword(auth,email, password)
        }
     
        const logOut = ()=> {
            localStorage.removeItem('genious-token')
            return signOut(auth)
        }
      
   
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=> {
          return  unsubscribe()
        }
    },[])

    
    const authInfo = {
        user,
        loading,
        setLoading,
        googlesignIn,
        createUser,
        logOut,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;