import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../services/FirebaseConfig"
import { Navigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@Auth:token");
            const sessionUser = sessionStorage.getItem("@Auth:user");
            if(sessionToken && sessionToken) {
                setUser( JSON.parse(sessionUser))
            }
        };
        loadStoreAuth();
    }, [])

    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            sessionStorage.setItem("@Auth:token", token);
            sessionStorage.setItem("@Auth:user", JSON.stringify(user));
            setUser(user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    const signOut = () => {
        sessionStorage.clear();
        setUser(null);

        return <Navigate to="/" />
    }


  return (
    <AuthContext.Provider value={{ signIn, signed: !!user, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

