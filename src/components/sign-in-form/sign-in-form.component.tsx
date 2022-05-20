import { useState, FormEvent, ChangeEvent } from "react";

// import {
//   signInWithGooglePopup,
//   // signInWithGitHubPopup,
//   // signInWithGoogleRedirect,
//   signInWithEmailAndPasswordForm,
// } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignUpContainer, ButtonsContainer } from "./sign-in-form.styles";
import { useDispatch } from "react-redux";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.action";

const SignInForm = () => {
  const dispatch = useDispatch();
  const defaultFormFields = { email: "", password: "" };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());

    // await signInWithGooglePopup();
  };
  // const logGitHubUser = async (event) => {
  //   event.preventDefault();
  //   await signInWithGitHubPopup();
  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      //   await signInWithEmailAndPasswordForm(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error);
      // switch (error.code) {
      //   case "auth/user-not-found":
      //     alert("User Account not found. Please register.");
      //     break;

      //   case "auth/wrong-password":
      //     alert("Password incorrect. Try again or reset password.");
      //     break;

      //   default:
      //     console.log(error);
      //     break;
      // }
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
