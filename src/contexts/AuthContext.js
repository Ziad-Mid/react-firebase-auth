import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset
} from "firebase/auth";

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise, //placeHolder function for init
  login: () => Promise,
  logOut: () => Promise,
  signInWithGoogle: () => Promise,
  signInWithFacebook: () => Promise,
  signInWithGithub: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
});

//CUSTOM HOOK
export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    //when component Mount
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    //when component unnmount
    return () => {
      unsubscribe();
    };
  }, []);

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth,provider);
  }

  function signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth,provider);
  }

  function signInWithGithub(){
    const provider = new GithubAuthProvider()
    return signInWithPopup(auth,provider);
  }


  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function forgotPassword(email){
    return sendPasswordResetEmail(auth,email,{url:'http://localhost:3000/login'})
  }

  function resetPassword(oobCode , newPassword){
    return confirmPasswordReset(auth,oobCode,newPassword)
  }


  const value = {
    currentUser,
    register,
    login,
    logOut,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    forgotPassword,
    resetPassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
