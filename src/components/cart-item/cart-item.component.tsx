import { FC } from "react";
import { CartItemContainer, ItemDetails, Price } from "./cart-item.styles";

import { CartItem as TCartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;

  return (
    <CartItemContainer>
      <img src={`${imageUrl}`} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
