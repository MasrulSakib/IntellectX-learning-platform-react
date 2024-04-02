import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const Context = ({ children }) => {

    const otherSignInOption = (provider) => {
        return signInWithPopup(auth, provider);
    }


    const user = { displayName: 'Sakib' }
    const authInfo = { user, otherSignInOption };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;