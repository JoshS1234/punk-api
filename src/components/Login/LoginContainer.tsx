import { auth } from "../../../firebaseSetup";
import LoginCurrUser from "./LoginCurrUser";
import { FormEvent, useState } from "react";
import LoginNewUser from "./LoginNewUser";
import LoginForgotPassword from "./LoginForgotPassword";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const LoginContainer = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [hasForgottenPassword, setHasForgottenPassword] = useState(false);

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const email = target.email.value;
    const password1 = target.password.value;
    const password2 = target.password2.value;

    if (password1 == password2) {
      createUserWithEmailAndPassword(auth, email, password1)
        .then((data) => {
          console.log("new account created");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      target.reset();
      alert("your passwords did not match");
    }
  };

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const email = target.email.value;
    const password = target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log("signed in");
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleForgotPasswordEmail = (e: FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;

    const email = target.email.value;
    if (!email) {
      // sendPasswordResetEmail(auth, email)
      //   .then((data) => {
      alert(
        "If this email is registered, then a password reset email has been sent"
      );
      // })
      // .catch((err) => {
      //   alert(err);
      // });
    } else {
      alert("Please enter your registered email");
    }
  };

  const handleSwitchToNewUser = () => {
    setIsNewUser(true);
    setHasForgottenPassword(false);
  };

  const handleSwitchToCurrUser = () => {
    setIsNewUser(false);
    setHasForgottenPassword(false);
  };

  const handleSwitchToForgotPass = () => {
    setIsNewUser(false);
    setHasForgottenPassword(true);
  };

  return (
    <>
      <h1>Brewdog encyclopedia</h1>
      {isNewUser ? (
        <LoginNewUser
          handleSignUp={handleSignUp}
          handleSwitchToCurrUser={handleSwitchToCurrUser}
        />
      ) : hasForgottenPassword ? (
        <LoginForgotPassword
          handleForgotPasswordEmail={handleForgotPasswordEmail}
          handleSwitchToCurrUser={handleSwitchToCurrUser}
        />
      ) : (
        <LoginCurrUser
          handleSignIn={handleSignIn}
          handleSwitchToNewUser={handleSwitchToNewUser}
          handleSwitchToForgotPass={handleSwitchToForgotPass}
        />
      )}
    </>
  );
};

export default LoginContainer;
