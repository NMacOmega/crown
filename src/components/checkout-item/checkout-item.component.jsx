import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
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
      <Name>{name}</Name>

      <Quantity>
        <Arrow onClick={onRemoveProduct}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={onAddProduct}>&#10095;</Arrow>
      </Quantity>

      <Price>{price}</Price>
      <RemoveButton onClick={onDeleteProduct}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
