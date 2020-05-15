import { createSelector } from "reselect";
import CartItem from "../../components/cart-item/cart-item.component";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart]);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
