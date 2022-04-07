import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

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
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const onAddProduct = () => {
    addItemToCart(cartItem);
  };
  const onRemoveProduct = () => {
    removeItemFromCart(cartItem);
  };
  const onDeleteProduct = () => {
    deleteItemFromCart(cartItem);
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
