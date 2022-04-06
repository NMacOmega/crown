import { CartItemContainer, ItemDetails, Price } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
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
