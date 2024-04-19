import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const otherSignInOption = (provider) => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    const createNewUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser !== null) {
                if (!isThirdPartyProvider(currentUser.providerData)) {
                    // For email/password sign-in, check if email is verified
                    if (!currentUser.emailVerified) {
                        console.log('Email not verified. User cannot log in.');
                        await logOut(); // Force logout if email is not verified
                    } else {
                        setUser(currentUser);
                    }
                } else {
                    // For third-party providers (Google, GitHub), no email verification check needed
                    setUser(currentUser);
                }
            } else {
                setUser(null);
            }

            setLoader(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    // Helper function to check if provider is third-party (Google, GitHub, etc.)
    const isThirdPartyProvider = (providerData) => {
        const thirdPartyProviders = ['google.com', 'github.com']; // Add more if needed
        return providerData.some(provider => thirdPartyProviders.includes(provider.providerId));
    }


    const authInfo = { user, loader, setLoader, emailVerification, otherSignInOption, createNewUser, userLogIn, updateUserProfile, logOut };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;