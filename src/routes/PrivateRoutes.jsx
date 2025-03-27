import { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to="/register"></Navigate>
};

export default PrivateRoutes;