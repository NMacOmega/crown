import { FC } from "react";
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
  DescriptionSpan,
  PriceSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

import { CartItem } from "../../store/cart/cart.types";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
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
      <DescriptionSpan>{name}</DescriptionSpan>

      <Quantity>
        <Arrow onClick={onRemoveProduct}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={onAddProduct}>&#10095;</Arrow>
      </Quantity>

      <PriceSpan>{price}</PriceSpan>
      <RemoveButton onClick={onDeleteProduct}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
