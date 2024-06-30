import { useContext } from "react";
import AuthContext from "../../contexts/auth";


export const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
   
  
    return (
        <div>
            {user.displayName}
        </div>
    )
}