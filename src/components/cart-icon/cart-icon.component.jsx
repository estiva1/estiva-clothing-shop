import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { CartIconComponent, Icon, ItemCount } from "./cart-icon.styles.js";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconComponent onClick={toggleIsCartOpen}>
      <Icon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconComponent>
  );
};

export default CartIcon;
