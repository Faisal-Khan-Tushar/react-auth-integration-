import { useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,GithubAuthProvider} from "firebase/auth";
//machine ta use korar age toh machine take chalano lagbe.
initializeAuthentication();
const useFirebase=()=>{
  const [user,setUser]=useState({});
  const [error,setError]=useState("");
  const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider();
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
  const signInWithGithub=()=>{
    signInWithPopup(auth,githubProvider)
    .then(result=>{
      setUser(result.user)
    })
  }
  const logout=()=>{
    signOut(auth)
    .then(()=>{
      setUser({})
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
    logout,
    signInWithGithub,
    signInWithGoogle
  }
}
export default useFirebase;