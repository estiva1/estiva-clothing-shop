import { useSelector } from "react-redux";
import ChekoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import { CheckoutContainer, EmptyMessage, Total } from "./checkout.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <ChekoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <EmptyMessage>It's empty here... :(</EmptyMessage>
      )}
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default Checkout;
