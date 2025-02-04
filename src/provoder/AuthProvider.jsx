/* eslint-disable react/prop-types */
import { AuthContext } from "../context";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../database/firevaseauth";
import { useEffect, useState } from "react";

function AuthProvider({ children }) {

   const [user,setUser]=useState(null)
   

   const creatuser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password)
   } 

   const singIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
   };


   const signOutUser = () => {
      return signOut(auth)
   }

   useEffect(() => {
     const unscribe= onAuthStateChanged(auth, (currentUser) => {

         if (currentUser) {
            console.log(currentUser);
            setUser(currentUser);

         } else {
            console.log("user is loggrd out");
            setUser(null)

         }

      });

      return () => {
         unscribe()
      };

  },[])

   const authInfo = {
      creatuser,
      singIn,
      user,
      signOutUser,
      
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
}

export default AuthProvider;
