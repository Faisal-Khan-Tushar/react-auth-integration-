import { useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
//machine ta use korar age toh machine take chalano lagbe.
initializeAuthentication();
const useFirebase=()=>{
  const [user,setUser]=useState({});
  const [error,setError]=useState("");
  const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle=()=>{
  signInWithPopup(auth,googleProvider)
  .then(result=>{
    console.log(result.user)
    setUser(result.user)
  })
  .catch(error=>{
    setError(error.message);
  })
  }
  return {
    user,
    error,
    signInWithGoogle
  }
}
export default useFirebase;