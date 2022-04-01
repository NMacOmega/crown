import { useState } from "react";

import {
  signInWithGooglePopup,
  signInWithGitHubPopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInWithEmailAndPasswordForm,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const SignInForm = () => {
  const defaultFormFields = { email: "", password: "" };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async (event) => {
    const { user } = await signInWithGooglePopup();
    const userDocref = await createUserDocumentFromAuth(user);
    alert(`Welcome back ${user.displayName}!`);
  };
  const logGitHubUser = async (event) => {
    const { user } = await signInWithGitHubPopup();
    const userDocref = await createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInWithEmailAndPasswordForm(email, password);
      console.log(response);
      const { user } = response;
      const userDocref = await createUserDocumentFromAuth(user);
      resetFormFields();
      alert(`Welcome back ${user.displayName}!`);

      //Proceed from here to handle token from email authentication
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/user-not-found":
          alert("User Account not found. Please register.");
          break;

        case "auth/wrong-password":
          alert("Password incorrect. Try again or reset password.");
          break;

        default:
          console.log(error);
          break;
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>

      {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignInForm;
