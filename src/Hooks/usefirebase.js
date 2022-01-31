import { useState,useEffect } from "react"
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication()

const useFirebase = () => {
    const [user,setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const SignInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
         
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
          })
}

// observe whether user auth state change or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            }
          });
},[auth])

    return {
        user,
        SignInUsingGoogle,
        logOut,
    }
}

export default useFirebase;

