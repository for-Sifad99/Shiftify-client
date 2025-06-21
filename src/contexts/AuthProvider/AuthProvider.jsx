import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import auth from '../../firebase/firebase.config'

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();

    //? Create User:
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //? SignIn User:
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //? Google SignIn: 
    const GoogleSignIn = () => {
        setLoading(true);

        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    //? SignOut User: 
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        GoogleSignIn,
        signOutUser
    };

    //? Observer:
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, []);

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;