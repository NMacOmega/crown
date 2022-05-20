// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Category } from "../../store/categories/category.types";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIY6N-NO6b_9ZigNgVG3HcKQ7VuiluD4k",
  authDomain: "crwn-db-ced59.firebaseapp.com",
  projectId: "crwn-db-ced59",
  storageBucket: "crwn-db-ced59.appspot.com",
  messagingSenderId: "661680966491",
  appId: "1:661680966491:web:7f6d208cfdf7ff587da87e",
};

// Initialize Firebase
/*const firebaseApp =*/ initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

gitHubProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGitHubPopup = () =>
  signInWithPopup(auth, gitHubProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const db = getFirestore();


export type ObjectToAdd = {
  title: string;
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};



export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category);

  // .reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});
  // return categoryMap;
};

export type AdditionalInformation = {
  displayName?: string;
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error);
    }
  }
  return userSnapShot as QueryDocumentSnapshot<UserData>;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

// export const signInWithEmailAndPasswordForm = async (email, password) => {
//   if (!email || !password) return;
//   return await signInWithEmailAndPassword(auth, email, password);
// };

export const signOutUser = async () => {
   await signOut(auth);
};

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
  if (callback === null) return;
  onAuthStateChanged(auth, callback);
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
