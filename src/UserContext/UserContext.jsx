import React, { createContext, useEffect } from 'react'
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
function UserContext({ children }) {
    const [dark, setDark] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updateState, setUpdateState] = useState(false);
    const auth = getAuth(app);
    const userinfo = { dark, setDark, user, setUser, loading, setLoading, updateState, setUpdateState };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
            }
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext;