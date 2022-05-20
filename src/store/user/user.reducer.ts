import { AnyAction } from "redux";
import { signInSuccess, signInFailed, signOutSuccess, signOutFailed, signUpFailed } from "./user.action";

import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null,
  readonly isLoading: boolean,
  readonly error: Error | null
};

const USER_INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction): UserState => {

  if(signInSuccess.match(action))
    return {
      ...state,
      currentUser: action.payload,
      isLoading: false,
    };

  if(signOutSuccess.match(action))
    return { ...state, currentUser: null };

  if(signInFailed.match(action) 
  || signOutFailed.match(action) 
  || signUpFailed.match(action))
    return { ...state, error: action.payload };

  return state;  
};





  // switch (type) {
  //   case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
  //     return {
  //       ...state,
  //       currentUser: payload,
  //       isLoading: false,
  //     };

    // case USER_ACTION_TYPES.SIGN_IN_FAILED:
    //   return { ...state, error: payload };

    // case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
    //   return { ...state, currentUser: null };

    // case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    //   return { ...state, error: payload };

    // case USER_ACTION_TYPES.SIGN_UP_FAILED:
    //   return { ...state, error: payload };

    // default:
    //   return state;