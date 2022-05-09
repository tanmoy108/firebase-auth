import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../firebase";

let userAuthContext = createContext();
export function UserAuthProvider({ children }) {
  const [user, setuser] = useState({});

  function create(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signout() {
    return signOut(auth);
  }

  function googlesignin() {
    const google = new GoogleAuthProvider();
    return signInWithPopup(auth, google);
  }

  function captcha(number) {
    const recaptcha = new RecaptchaVerifier("recaptcha-container", {}, auth);
    recaptcha.render();
    return signInWithPhoneNumber(auth, number, recaptcha);
  }

  useEffect(() => {
    const a = onAuthStateChanged(auth, (currentuser) => {
      setuser(currentuser);
    });
    return () => {
      a();
    };
  }, []);

  return (
    <>
      <userAuthContext.Provider
        value={{ user, create, signin, signout, googlesignin, captcha }}
      >
        {children}
      </userAuthContext.Provider>
    </>
  );
}

export function UserAuth() {
  return useContext(userAuthContext);
}
