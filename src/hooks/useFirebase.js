import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // google sing in
    const googleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
            })
    }

    // singOut
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        googleSingIn,
        logOut,

    }
};

export default useFirebase;