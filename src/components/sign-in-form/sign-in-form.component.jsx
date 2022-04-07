import { useContext, useState } from "react";

import {
  signInWithGooglePopup,
  signInWithGitHubPopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  signInWithEmailAndPasswordForm,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignUpContainer, ButtonsContainer } from "./sign-in-form.styles";

const SignInForm = () => {
  const defaultFormFields = { email: "", password: "" };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    await signInWithGooglePopup();
  };
  const logGitHubUser = async (event) => {
    event.preventDefault();
    await signInWithGitHubPopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPasswordForm(email, password);
      resetFormFields();
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
    <SignUpContainer>
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

        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            SIGN IN WITH GOOGLE
          </Button>
        </ButtonsContainer>
      </form>

      {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </SignUpContainer>
  );
};

export default SignInForm;
