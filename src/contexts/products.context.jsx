import { useState, createContext, useEffect } from "react";
import SHOP_DATA from "../shopdata.json";
// import {
//   createUserDocumentFromAuth,
//   onAuthStateChangedListener,
//   signOutUser,
// } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };

  useEffect(() => {
    // setProducts(SHOP_DATA);
  }, []);

  // useEffect(() => {
  //   signOutUser();
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     setCurrentUser(user);
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
