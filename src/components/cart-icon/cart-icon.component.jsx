import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = (props) => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = (event) => {
    event.preventDefault();
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
export default CartIcon;