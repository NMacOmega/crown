import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocref = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleuser}>Sign in with Booble Popup</button>
    </div>
  );
};

export default SignIn;
