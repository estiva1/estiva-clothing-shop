import { FC, memo } from "react";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles";

import { CartItem as TypedCartItem } from "../../store/cart/cart.types";

type CartItemProps = {
  cartItem: TypedCartItem;
};

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
});

export default CartItem;
