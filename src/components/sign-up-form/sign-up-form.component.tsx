import { useState, FormEvent, ChangeEvent } from "react";

import { AuthError, AuthErrorCodes } from "firebase/auth";

// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles.tsx";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import {
  SignUpContainer,
  ButtonsContainer,
} from "../sign-in-form/sign-in-form.styles";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!displayName || !email || !password || !confirmPassword) return;
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      dispatch(signUpStart(displayName, email, password));
      // const { user } = await createAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      // await createUserDocumentFromAuth(user, {
      //   displayName,
      // });
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Cannot create user. Email already in use.");
      }
      console.log(`User creation encountered errror`, error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        <ButtonsContainer>
          <Button type="submit">Sign Up</Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
