import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import './course.css';
import moment from "moment";
import removeFromCart from "../cart/removeFromCart.js";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  cartToWishlistAction,
  addToWishlist,
  cartToSaveLater,
  getSaveLater,
} from "../../../redux/cart/cart-actions.js";
import { Link } from "react-router-dom";
import cartToWishlist from "../cart/cartToWishlist";
import wishlistToCart from "../cart/wishlistToCart";
import removeFromWishlist from "../../header/cart-dropdown/removeCourseFromWishlist.js";
import cartToSavedForLater from "../cart/cartToSavedForLater";
import savedForLaterToCart from "../cart/savedForLaterToCart";
import removeFromSavedLater from "../cart/removeFromSavedLater";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import addCoupon from "../cart/addCoupon.js";
import { CartCourseContainer } from "./course.style";
import { Col, Container, Row } from "react-bootstrap";
import CalendarIcon from "../../../assets/calendar.svg";
import ClockIcon from "../../../assets/clock.svg";
import PinIcon from "../../../assets/pin.svg";
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints.js";

const CartCourse = (props) => {
  const date = moment(
    props.date.includes("[Etc/UTC]")
      ? props.date.replace("[Etc/UTC]", "")
      : props.date
  ).format("Do MMM YYYY");
  const { isLg, isXl } = useMatchBreakpoints();
  const isMobie = !isLg && !isXl;
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [couponValue, setCouponValue] = useState("");

  const handleCoupon = (e) => setCouponValue(e.target.value);


  const handleAddCoupon = async (couponValue) => {
    let response, status, msg;
      response = await addCoupon(
        props.cartItemID,
        couponValue,
        localStorage.getItem("anonymousUserID"),
        user === null ? "" : user.id
      );
      status = await response.actionResult;
      msg = await response.message;
      if (status === "SUCCESS") {
        setCouponValue("");
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
      else{
        // show notification to user
        store.addNotification({
          title: status.toUpperCase(),
          message: msg,
          type: status === "FAILURE" ? "danger" : "success",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 4000,
          },
        })
      }
  };

  const handleCouponRadioInput = async (couponName)=>{
    if(props.appliedCoupons.length>0){
        await props.handleRemoveCoupon(props.cartItemID, props.appliedCoupons[0].name)
    }
    await handleAddCoupon(couponName)
    //console.log(e.target.value)
  }

  const removeCourse = async () => {
    let response;
    //This case is when course is already in savedForLater
    if (props.savedForLater === true) {
      response = await removeFromSavedLater(
        props.id,
        localStorage.getItem("anonymousUserID"),
        user === null ? "" : user.id
      );
      if (response.actionResult === "SUCCESS") {
        let saveLaterArray = response.saveLater.saveLaterItemList;
        let obj = { saveLaterArray: saveLaterArray };
        dispatch(getSaveLater(obj));
      }
    }
    // This case is when course is in wishlist
    else if (props.wishlist === true) {
      response = await removeFromWishlist(props.id, user.id);
      if (response.actionResult === "SUCCESS") {
        let wishlistArray = response.wishlist.wishListItemList;
        let obj = { wishlistArray: wishlistArray };
        dispatch(addToWishlist(obj));
      }
    }
    //This case is when course is in cart
    else {
      response = await removeFromCart(
        props.id,
        localStorage.getItem("anonymousUserID"),
        user === null ? "" : user.id
      );
      if (response.actionResult === "SUCCESS") {
        let cart = response.cart.cartItemList;
        let tax = response.cart.tax;
        let totalAmount = response.cart.totalAmount;
        let grandTotalAmount = response.cart.grandTotalAmount;
        let totalDiscount = response.cart.totalDiscount;

        let obj = {
          cartArray: cart,
          tax: tax,
          totalAmount: totalAmount,
          grandTotalAmount: grandTotalAmount,
          totalDiscount: totalDiscount,
        };
        dispatch(addToCart(obj));
      }
    }
  };

  const handleWishlist = async () => {
    let response;
    // This flow is when we move from wishlist to cart
    if (props.wishlist === true) {
      response = await wishlistToCart(props.id, user === null ? "" : user.id);
    }
    // This flow is when we move from cart to wishlist
    else {
      response = await cartToWishlist(props.id, user === null ? "" : user.id);
    }

    const status = await response.actionResult;
    const msg = await response.message;

    // show notification to user
    store.addNotification({
      title: status.toUpperCase(),
      message: msg,
      type: status === "FAILURE" ? "danger" : "success",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 4000,
      },
    });
    // Handle redux state
    if (response.actionResult === "SUCCESS") {
      let cart = response.cart.cartItemList;
      let tax = response.cart.tax;
      let totalAmount = response.cart.totalAmount;
      let grandTotalAmount = response.cart.grandTotalAmount;
      let totalDiscount = response.cart.totalDiscount;
      let wishlist = response.wishlist.wishListItemList;
      let obj = {
        cartArray: cart,
        tax: tax,
        totalAmount: totalAmount,
        grandTotalAmount: grandTotalAmount,
        totalDiscount: totalDiscount,
        wishlistArray: wishlist,
      };
      dispatch(cartToWishlistAction(obj));
    }
  };

  const handleSavedForLater = async () => {
    let response;
    //This case is when course is already in savedForLater
    if (props.savedForLater === true) {
      response = await savedForLaterToCart(
        props.id,
        user === null ? "" : user.id,
        localStorage.getItem("anonymousUserID")
      );
    }
    //This case is when course is in cart
    else {
      response = await cartToSavedForLater(
        props.id,
        user === null ? "" : user.id,
        localStorage.getItem("anonymousUserID")
      );
    }
    // Handle redux state
    if (response.actionResult === "SUCCESS") {
      let cart = response.cart.cartItemList;
      let tax = response.cart.tax;
      let totalAmount = response.cart.totalAmount;
      let grandTotalAmount = response.cart.grandTotalAmount;
      let totalDiscount = response.cart.totalDiscount;
      let saveLater = response.saveLater.saveLaterItemList;
      let obj = {
        cartArray: cart,
        tax: tax,
        totalAmount: totalAmount,
        grandTotalAmount: grandTotalAmount,
        totalDiscount: totalDiscount,
        saveLaterArray: saveLater,
      };
      dispatch(cartToSaveLater(obj));
    }
  };

  return (
    <CartCourseContainer style={{ width: props.wishlist && !isMobie ? "90%" : "100%" }}>
      <div className="cartCourse-content">
        <div
          className="cartCourse-image"
          style={{ background: `url(${props.img})` }}
        ></div>
        {/* <img className="cartCourse-image" src={props.img} alt="course"/> */}
        <div className="cartCourse-top">
          <div className="cartCourse-first">
            <Link
              to={`/course-details/${props.id}`}
              className="cartCourse-title"
            >
              {props.title}
            </Link>
            <div className="cartCourse-author">by {props.author}</div>
            <div className="cartCourse-date">
              <img src={CalendarIcon} /> {date}
            </div>
          </div>
          <div className="cartCourse-second">
            <div className="cartCourse-prices">
              <div className="cartCourse-price">₹ {props.currentPrice}</div>
              <div className="cartCourse-off">
                ₹{" "}
                <span className="cartCourse-textThrough">
                  {props.oldPrice}{" "}
                </span>
                ({props.discount} Off)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cartCourse-bottom">
        <div className="cartCourse-actions">
          <div
            className="cartCourse-save cartCourseRemove"
            onClick={removeCourse}
          >
            {" "}
            Remove{" "}
          </div>

          {props.wishlist !== true && (
            <div
              className="cartCourse-save saveSideBorder"
              style={{
                borderRight:
                  user !== null && user.id !== null && props.savedForLater !== true ? "" : "none",
              }}
              onClick={handleSavedForLater}
            >
              {props.savedForLater ? "Move to Cart" : "Save for later"}
            </div>
          )}

          {user !== null && user.id !== null && props.savedForLater !== true && (
            <div className="cartCourse-save" onClick={handleWishlist}>
              {props.wishlist === true ? "Add to Cart" : "Move to Wishlist"}
            </div>
          )}
        </div>
        {props.wishlist !== true && props.savedForLater !== true && (

          <div className="cartPage-summary-coupon">
            {/**props.appliedCoupons.map((coupon) => (
              <div
                className="cartPage-summary-courseRow"
                key={coupon.id}
                id={coupon.id}
              >
                <div style={{ fontWeight: "normal" }}>
                  Coupon Applied:
                  <span
                    style={{ color: "#4183c4", marginLeft: "5px" }}
                  >
                    {coupon.name}
                  </span>
                </div>
                <div>
                  - ₹ {coupon.discount}
                  <span
                    className="cartPage-remove-coupon"
                    onClick={() =>
                      props.handleRemoveCoupon(props.cartItemID, coupon.name)
                    }
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </div>
              </div>
            ))**/}

            <div className="cartPage-summary-courseRow">
              <div style={{ fontWeight: "normal" }}>
                Apply Coupon:
              </div>
            </div>

            {props.availableCoupons.map(couponItem=>(
              <div className="cartPage-summary-coupon-box" key={couponItem.id}>
                  <input
                    placeholder={"Enter Coupon Code"}
                    type="radio"
                    name={`cartPage-available-coupon-${props.id}`}
                    value={couponItem.name}
                    onChange={()=>handleCouponRadioInput(couponItem.name)}
                    id={couponItem.id}
                    checked={couponItem.name === props.appliedCoupons[0]?.name}
                  />
                <label htmlFor={couponItem.id}>{couponItem.name} - <b> ₹ {couponItem.discount} off</b></label>

              </div>
            ))}
          </div>
        )}
      </div>
    </CartCourseContainer>
  );
};

export default CartCourse;
