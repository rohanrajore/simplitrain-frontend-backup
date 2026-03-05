import React, { useState } from "react";
// import "./cartCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import removeFromCart from "../../../cartPage/cart/removeFromCart.js";
import wishlistToCart from "../../../cartPage/cart/wishlistToCart.js";
import removeFromWishlist from "../removeCourseFromWishlist.js";
import {
  addToCart,
  addToWishlist,
  cartToWishlistAction,
  updateArrays
} from "../../../../redux/cart/cart-actions.js";
import { faCalendar, faRupeeSign } from "@fortawesome/free-solid-svg-icons";

const CartCourse = (props) => {
  const [showRemoveBtn, setShowRemoveBtn] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartArray);
  const date = moment(
    props.date.includes("[Etc/UTC]")
      ? props.date.replace("[Etc/UTC]", "")
      : props.date
  ).format("Do MMM YYYY");
  const user = useSelector((state) => state.user.currentUser);

  const removeCourse = async () => {
    if (props.action === "cart") {
      let response = await removeFromCart(
        props.id,
        localStorage.getItem("anonymousUserID"),
        user === null ? "" : user.id
      );
      if (response.actionResult === "SUCCESS") {
        let cart = response.cart.cartItemList;
        let tax = response.cart.tax;
        let totalAmount = response.cart.totalAmount;
        let totalDiscount = response.cart.totalDiscount;
        let grandTotalAmount = response.cart.grandTotalAmount;

        let obj = {
          cartArray: cart,
          tax: tax,
          totalAmount: totalAmount,
          grandTotalAmount: grandTotalAmount,
          totalDiscount: totalDiscount,
        };
        dispatch(addToCart(obj));
      }
    } else {
      let response = await wishlistToCart(
        props.id,
        user === null ? "" : user.id
      );
      if (response.actionResult === "SUCCESS") {
        // Handle redux state
        if (response.actionResult === "SUCCESS") {
          let cart = response.cart.cartItemList;
          let tax = response.cart.tax;
          let totalAmount = response.cart.totalAmount;
          let totalDiscount = response.cart.totalDiscount;
          let grandTotalAmount = response.cart.grandTotalAmount;
          let wishlist = response.wishlist.wishListItemList;
          let saveLater = response.saveLater.saveLaterItemList

          let obj = {
            cartArray: cart,
            tax: tax,
            totalAmount: totalAmount,
            grandTotalAmount: grandTotalAmount,
            totalDiscount: totalDiscount,
            wishlistArray: wishlist,
            saveLaterArray: saveLater
          };

          dispatch(updateArrays(obj))
        }
      }
    }
  };

  return (
    <div
      className="cartCourse-dropdown"
      id="cartCourse-dropdown"
      onMouseEnter={() => setShowRemoveBtn(true)}
      onMouseLeave={() => setShowRemoveBtn(false)}
    >
      <div
        className="cartCourse-dropdown-image"
        style={{ background: `url(${props.img})` }}
      ></div>
      {/* <img src={props.img} alt="course"/> */}
      <div className="cartCourse-dropdown-content">
        <div className="cartCourse-dropdown-title">
          {props.title.length < 23
            ? props.title
            : props.title.slice(0, 23) + "..."}
        </div>
        <div className="cartCourse-dropdown-sub">By {props.author}</div>
        <div className="cartCourse-dropdown-date">
          <FontAwesomeIcon icon={faCalendar} style={{ marginRight: "5px" }} />
          {date}
        </div>
        <div className="cartCourse-dropdown-price">
          <FontAwesomeIcon icon={faRupeeSign} style={{ marginRight: "5px" }} />
          {props.price}
        </div>
      </div>

      {
        <div className="cartCourse-backdrop">
          <button
            id="cartCourse-remove"
            className="cartCourse-remove"
            onClick={removeCourse}
          >
            {props.action === "cart" ? "Remove" : "Add to Cart"}
          </button>
        </div>
      }
    </div>
  );
};

export default CartCourse;
