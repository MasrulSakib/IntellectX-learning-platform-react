import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const Context = ({ children }) => {
    const [user, setUser] = useState(null);

    const otherSignInOption = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user auth changed', currentUser);

            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }

            return () => {
                unsubscribe();
            }
        })

    }, [])


    const authInfo = { user, otherSignInOption, createNewUser };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;