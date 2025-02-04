/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../context";
import { Navigate } from "react-router-dom";


function PrivateRoute({children}) {
   const { user } = useContext(AuthContext);


   if (user) {
      return children;
   } 

   return <Navigate to={"/logine"}></Navigate>
   

}

export default PrivateRoute;
