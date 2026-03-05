import React, { useState } from "react";
// import './courseCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useHistory } from "react-router-dom";
import { faHeart, faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faShareAlt,
  faCheck,
  faRupeeSign,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../../../redux/cart/cart-actions.js";
import Coupon from "./coupon.jsx";
import addItemToCart from "./addToCart";
import removeFromCart from "../../cartPage/cart/removeFromCart.js";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import addItemToWishlist from "./addToWishlist.js";
import removeFromWishlist from "../../header/cart-dropdown/removeCourseFromWishlist.js";
import { CardBecomeInstructor, CardContainer } from "./courseCard.style.jsx";
import Instructor from "../instructor/instructor.jsx";
// import InstructorImage from '../../../assets/instructor.png';
import InstructorImage from "../../../assets/619cd80499428.jpg";
// import InstructorImage from '../../../assets/619a83cc9b689.jpg';
import moment from "moment";
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints.js";

const CourseCard = (props) => {
  // HERE WE JUST SET OUR PROP AS DETAILS, SO WE DONT NEED TO WRITE props.details EVERYTIME
  const { isLg, isXl } = useMatchBreakpoints();
  const isMobie = !isLg && !isXl;
  const details = props.details;
  const imageUrl = details.imageUrl;
  const [couponSelected, setCouponSelected] = useState({
    id: "",
    name: "",
    discount: "",
  });

  const handleCouponSelection = (e) => {
    let id = e.target.getAttribute("id");
    let name = e.target.getAttribute("name");
    let discount = e.target.getAttribute("discount");

    // Here we check if we clicked on already selected coupon, if that is case then
    // that coupon will be deselected, otherwise new coupon that we clicked will be selected
    if (couponSelected.id === id) {
      setCouponSelected({ id: "", name: "", discount: "" });
    } else {
      let coupon = { id: id, name: name, discount: discount };
      setCouponSelected(coupon);
    }
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.currentUser);

  const cart = useSelector((state) => state.cart.cartArray);
  const wishlist = useSelector((state) => state.cart.wishlistArray);

  // If isAddedWishlist length is 1 then it means this course is already in cart
  const isAddedWishlist = wishlist.filter(
    (wishlistItem) => wishlistItem.wishListItemCard.courseBatchID === props.id
  );
  // If isAdded length is 1 then it means this course is already in cart
  const isAddedCart = cart.filter(
    (cartItem) => cartItem.cartItemCard.id === props.id
  );

  const handleAddCart = async (arg) => {
    // If isAddedCart length===1 means that batch is already in the cart,
    // and therefore should be removed if its clicked.. And vice versa...
    let response;
    if (isAddedCart.length === 1) {
      response = await removeFromCart(
        props.id,
        localStorage.getItem("anonymousUserID"),
        user === null ? "" : user.id,
        couponSelected.id,
        couponSelected.name
      );
    } else {
      response = await addItemToCart(
        props.id,
        localStorage.getItem("anonymousUserID"),
        user === null ? "" : user.id,
        couponSelected.id,
        couponSelected.name
      );
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
    if (status === "SUCCESS") {
      if (user === null || user.id === null) {
        localStorage.setItem("anonymousUserID", response.cart.anonymousUserID);
      }
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
      if (arg === "buyNow") {
        history.push("/cart");
      }
    }
  };

  const handleAddToWishlist = async () => {
    // If isAddedWishlist length===1 means that batch is already in the wishlist,
    // and therefore should be removed if its clicked.. And vice versa...
    let response;
    if (isAddedWishlist.length === 1) {
      response = await removeFromWishlist(props.id, user.id);
    } else {
      response = await addItemToWishlist(props.id, user.id);
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
    if (status === "SUCCESS") {
      let wishlist = response.wishlist.wishListItemList;
      let obj = { wishlistArray: wishlist };
      dispatch(addToWishlist(obj));
    }
  };
  //This will tell us is course started
  const isStarted = moment(props.startDate) < moment();

  return (
    <div style={{ position: "sticky", top: 30, zIndex: 10 }}>
      <CardContainer className={isMobie ? "mobile-fixed" : null}>
        {/* This will style our background image*/}

        <div className="card-price">
          <div className="card-price-tags">
            <div>
              {/* IF THERE IS DISCOUNT THEN SHOW ALL DETAILS, OTHERWISE SHOW ONLY REAL PRICE */}
              <div style={{ textAlign: "left" }}>
                <FontAwesomeIcon icon={faRupeeSign} />
                {couponSelected.id === "" && details.price.isDiscount === "yes"
                  ? details.price.discountedValue
                  : couponSelected.id !== "" &&
                    details.price.isDiscount === "yes"
                  ? details.price.discountedValue - couponSelected.discount
                  : couponSelected.id !== "" &&
                    details.price.isDiscount !== "yes"
                  ? details.price.value - couponSelected.discount
                  : details.price.value}
              </div>
              {/* IF THERE IS DISCOUNT THEN THESE FIELDS WOULD BE DISPLAYED, OTHERWISE IT WONT SHOW */}
              <div className="main-price" style={{ textAlign: "left" }}>
                {" "}
                <FontAwesomeIcon icon={faRupeeSign} />{" "}
                {details.price.isDiscount === "yes" ? details.price.value : ""}{" "}
              </div>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: 16,
                  color: "#303030",
                  marginLeft: 15,
                }}
              >
                (<FontAwesomeIcon style={{ fontSize: 14 }} icon={faRupeeSign} />
                {details.price.discount + ""} off)
              </p>
            </div>

            {user!== null && user.id !== null && (
              <div
                style={{ textAlign: "right" }}
                className={
                  isStarted
                    ? "heartIcon-red heartIcon-red-disabled"
                    : "heartIcon-red"
                }
                onClick={!isStarted ? handleAddToWishlist : () => {}}
              >
                <FontAwesomeIcon
                  icon={isAddedWishlist.length === 1 ? solidHeart : faHeart}
                  className="heartIcon"
                />
              </div>
            )}
            {/*<FontAwesomeIcon style={{color:'#45a6de'}} icon={faShareAlt} size='2x'/>*/}
          </div>

          <div className="card-price-promotion">
            {couponSelected && couponSelected.id ? (
              <p>
                <span style={{ color: "#2da0df" }}>{couponSelected.name}</span>
                &nbsp;&nbsp;applied&nbsp;&nbsp;(
                <FontAwesomeIcon icon={faRupeeSign} /> {couponSelected.discount}{" "}
                off)
              </p>
            ) : null}

            {/* <p style={{fontSize:"16px",fontStyle:'italic'}}>

              {couponSelected.id==="" && details.price.isDiscount==="yes"?("Save INR " + details.price.discount) :
               couponSelected.id!=="" && details.price.isDiscount==="yes"?("Save INR " + (parseInt(details.price.discount) + parseInt(couponSelected.discount))) :
               couponSelected.id!=="" && details.price.isDiscount!=="yes"?("Save INR " + couponSelected.discount) :
                ""}</p> */}
          </div>
        </div>

        {isAddedCart.length < 1 && (
          <button
            className={
              isStarted
                ? "btn btn-primary card-buttons card-button1 card-button1-disabled"
                : "btn btn-primary card-buttons card-button1"
            }
            onClick={
              !isStarted
                ? () => {
                    handleAddCart("add");
                  }
                : () => {}
            }
          >
            Add to Cart
          </button>
        )}

        {isAddedCart.length === 1 && (
          <Link
            className="btn btn-primary card-buttons insideCart-Link"
            to="/cart"
          >
            Go to Cart
          </Link>
        )}

        {isAddedCart.length < 1 && (
          <button
            style={{ lineHeight: "30px" }}
            className={"btn outline-primary card-buttons card-button2"}
            onClick={
              !isStarted
                ? () => {
                    handleAddCart("buyNow");
                  }
                : () => {}
            }
          >
            Buy Now
          </button>
        )}
        {isAddedCart.length === 1 && (
          <div
            style={{ lineHeight: "30px" }}
            className={
              "btn outline-primary card-buttons card-button2 card-button2-disabled"
            }
          >
            Buy Now
          </div>
        )}
        <div className="card-coupons">
          {props.coupons.map((coupon) => (
            <Coupon
              coupon={coupon}
              key={coupon.id}
              couponSelected={couponSelected}
              handleCouponSelection={handleCouponSelection}
            />
          ))}
        </div>
      </CardContainer>
      <CardBecomeInstructor>
        <img src={InstructorImage} />
        <div className="card-become-text">
          {" "}
          Want to share your knowledge with the world?{" "}
        </div>
        <Link to="/become-an-instructor" className="card-buttons card-button2">
          {" "}
          Become an Instructor
        </Link>
      </CardBecomeInstructor>
    </div>
  );
};

export default CourseCard;
