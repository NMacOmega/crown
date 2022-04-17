import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addCartItem,
  removeCartItem,
  deleteCartItem,
} from "../../store/cart/cart.action";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);

  const onAddProduct = () => {
    dispatch(addCartItem(cartItems, cartItem));
  };
  const onRemoveProduct = () => {
    dispatch(removeCartItem(cartItems, cartItem));
  };
  const onDeleteProduct = () => {
    dispatch(deleteCartItem(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={`${imageUrl}`} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>

      <Quantity>
        <Arrow onClick={onRemoveProduct}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={onAddProduct}>&#10095;</Arrow>
      </Quantity>

      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={onDeleteProduct}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
