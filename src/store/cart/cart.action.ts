import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { createAction, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;


export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));


export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => 
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));


export const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): SetCartItems => {
  const newCartItems = addCartItemHelper(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem): SetCartItems => {
  const newCartItems = removeCartItemHelper(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const deleteCartItem = (cartItems: CartItem[], productToDelete: CartItem): SetCartItems => {
  const newCartItems = deleteCartItemHelper(cartItems, productToDelete);
  return setCartItems(newCartItems);
};

const addCartItemHelper = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem)
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItemHelper = (cartItems: CartItem[], productToRemove: CartItem): CartItem[] => {  
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCartItem && existingCartItem.quantity === 1)
    return deleteCartItemHelper(cartItems, productToRemove);

  return cartItems.map((cartItem) =>
  cartItem.id === productToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  );
};

const deleteCartItemHelper = (cartItems: CartItem[], productToDelete: CartItem): CartItem[] =>
  cartItems.filter((item) => item.id !== productToDelete.id);








