import CartTypes from "./cart-types.js";

export const addToCart = (value) => ({
  type: CartTypes.ADD_TO_CART,
  payload: value
});

export const removeFromCart = (value) => ({
  type: CartTypes.REMOVE_FROM_CART,
  payload: value
});

export const addToWishlist = (value) => ({
  type: CartTypes.ADD_TO_WISHLIST,
  payload: value
});

export const cartToWishlistAction = (value) => ({
  type: CartTypes.CART_TO_WISHLIST,
  payload: value
});

export const cartToSaveLater = (value) => ({
  type: CartTypes.CART_TO_SAVE_LATER,
  payload: value
});

export const getSaveLater = (value) => ({
  type: CartTypes.GET_SAVE_LATER,
  payload: value
});

export const updateArrays = (value) => ({
  type: CartTypes.UPDATE_ARRAYS,
  payload: value
});
