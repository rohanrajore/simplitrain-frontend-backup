import CartTypes from "./cart-types.js";

const INITIAL_STATE = {
  cartArray: [],
  tax: 0.0,
  totalAmount: 0.0,
  totalDiscount: 0.0,
  grandTotalAmount: 0.0,
  wishlistArray: [],
  saveLaterArray: [],
};

const cartReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_TO_CART:
      return {
        ...state,
        cartArray: action.payload.cartArray,
        tax: action.payload.tax,
        totalAmount: action.payload.totalAmount,
        grandTotalAmount: action.payload.grandTotalAmount,
        totalDiscount: action.payload.totalDiscount,
      };

    case CartTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartArray: action.payload,
      };

    case CartTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlistArray: action.payload.wishlistArray,
      };

    case CartTypes.CART_TO_WISHLIST:
      return {
        ...state,
        cartArray: action.payload.cartArray,
        tax: action.payload.tax,
        totalAmount: action.payload.totalAmount,
        totalDiscount: action.payload.totalDiscount,
        grandTotalAmount: action.payload.grandTotalAmount,
        wishlistArray: action.payload.wishlistArray,
      };

    case CartTypes.CART_TO_SAVE_LATER:
      return {
        ...state,
        cartArray: action.payload.cartArray,
        tax: action.payload.tax,
        totalAmount: action.payload.totalAmount,
        grandTotalAmount: action.payload.grandTotalAmount,
        totalDiscount: action.payload.totalDiscount,
        saveLaterArray: action.payload.saveLaterArray,
      };

    case CartTypes.GET_SAVE_LATER:
      return {
        ...state,
        saveLaterArray: action.payload.saveLaterArray,
      };

    case CartTypes.UPDATE_ARRAYS:
      return {
        ...state,
        saveLaterArray: action.payload.saveLaterArray,
        wishlistArray: action.payload.wishlistArray,
        cartArray: action.payload.cartArray,
        tax: action.payload.tax,
        totalAmount: action.payload.totalAmount,
        grandTotalAmount: action.payload.grandTotalAmount,
        totalDiscount: action.payload.totalDiscount
      };

    default:
      return state;
  }
};
export default cartReducers;
