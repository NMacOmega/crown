import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartItems,
  selectCartSubtotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles";

const Checkout = () => {
  const dispatch = useDispatch();
  // const { cartItems, cartSubTotal, isCartOpen, setIsCartOpen } =
  //   useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const cartSubTotal = useSelector(selectCartSubtotal);

  useEffect(() => {
    dispatch(setIsCartOpen(false));
  }, []);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartSubTotal.toFixed(2)}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
