import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const cartData = [
  {
    id: 2,
    name: "Blue Beanie",
    imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    price: 18,
    quantity: 1,
  },
  {
    id: 1,
    name: "Brown Brim",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: 25,
    quantity: 1,
  },
  {
    id: 4,
    name: "Grey Brim",
    imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
    price: 25,
    quantity: 1,
  },
  {
    id: 8,
    name: "Wolf Cap",
    imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
    price: 14,
    quantity: 1,
  },
  {
    id: 7,
    name: "Red Beanie",
    imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
    price: 18,
    quantity: 1,
  },
  {
    id: 6,
    name: "Palm Tree Cap",
    imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
    price: 14,
    quantity: 1,
  },
  {
    id: 5,
    name: "Green Beanie",
    imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
    price: 18,
    quantity: 1,
  },
];

const Checkout = () => {
  const {
    // setCartItems,
    //...Remove above when done.
    cartItems,
    cartSubTotal,
    setIsCartOpen,
  } = useContext(CartContext);

  useEffect(() => {
    // setCartItems(cartData);
    setIsCartOpen(false);
  }, []);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartSubTotal.toFixed(2)}</span>
    </div>
  );
};

export default Checkout;
