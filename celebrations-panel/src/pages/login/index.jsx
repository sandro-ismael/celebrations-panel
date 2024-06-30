import { useContext } from "react";
import AuthContext from "../../contexts/auth";
import { Navigate } from "react-router-dom";

export const Login = () => {
    const { signIn, signed } = useContext(AuthContext);


        if(!signed) {
            return <button onClick={() => signIn()}>Login</button>
        } else {
            return <Navigate to="/dashboard" />;
        }

}