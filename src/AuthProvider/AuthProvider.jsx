import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  //   User Login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Google Signin
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //   User SignUp
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   User Logout
  const logOut = () => {
    return signOut(auth);
  };

  //   User Profile Update
  const profileUpdate = (updatedUser) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedUser);
  };

  //   User Observer function
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
      console.log("Current User -->", currUser);
    });
    return () => {
      return unSubscribe();
    };
  });

  const userInfo = {
    user,
    loading,
    userLogin,
    googleSignIn,
    createUser,
    logOut,
    profileUpdate,
  };
  return (
    <>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
