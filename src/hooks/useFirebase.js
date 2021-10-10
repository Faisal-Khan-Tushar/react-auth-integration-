import { useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged} from "firebase/auth";
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
  onAuthStateChanged(auth,user=>{
    if(user){
      console.log('inside the state change',user);
      setUser(user);
    }
  })
  return {
    user,
    error,
    signInWithGoogle
  }
}
export default useFirebase;