import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import "./profileIcons.css";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faShoppingCart,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLearner,
  selectIsInstructor,
} from "../../../redux/user/user.selectors";
import CartDropdown from "../cart-dropdown/cartDropdown.jsx";
import fetchCartCourses from "../cart-dropdown/fetchCartCourses.js";
import fetchWishlistCourses from "../cart-dropdown/fetchWishlistCourses.js";
import { addToCart, addToWishlist } from "../../../redux/cart/cart-actions.js";
import { ProfileIconsContainer } from "./profileIcons.styles";
import CartIcon from "../../../assets/cart.svg";
import BellIcon from "../../../assets/bell.svg";
import HeartIcon from "../../../assets/heart.svg";

const ProfileIcons = (props) => {
  const [counter, setCounter] = useState(2);
  const [cartCounter, setCartCounter] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const handleShowCart = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setShowCart(true);
    document.addEventListener("click", closeCart);
  };

  const handleShowWishlist = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setShowWishlist(true);
    document.addEventListener("click", closeWishlist);
  };

  const closeCart = (e) => {
    let cartCourseRemove = document.getElementById("cartCourse-remove");
    let cartDropdown = document.getElementById("cartDropdown");
    if (e.target === cartDropdown || e.target === cartCourseRemove) {
    } else {
      setShowCart(false);
      document.removeEventListener("click", closeCart);
    }
  };
  const closeWishlist = (e) => {
    let cartCourseRemove = document.getElementById("cartCourse-remove");
    let cartDropdown = document.getElementById("cartDropdown");
    if (e.target === cartDropdown || e.target === cartCourseRemove) {
    } else {
      setShowWishlist(false);
      document.removeEventListener("click", closeWishlist);
    }
  };

  const cartArray = useSelector((state) => state.cart.cartArray);
  const wishlistArray = useSelector((state) => state.cart.wishlistArray);
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const isLearner = useSelector(selectIsLearner);
  const isInstructor = useSelector(selectIsInstructor);

  let disableIcon;

  if (isInstructor && location.pathname.includes("instructor")) {
    if (!location.pathname.includes("instructor-profile")) {
      disableIcon = false;
    } else {
      disableIcon = true;
    }
  } else {
    disableIcon = true;
  }

  useEffect(() => {
    async function fetch() {
      console.log(localStorage.getItem("anonymousUserID"));
      // If this clause is true, then user got loged out, so we dont have either user or anonymousID then we dont call fetchCart API
      if (user === "" && localStorage.getItem("anonymousUserID") === "") {
      } else {
        let response = await fetchCartCourses(
          user === null ? "" : user.id,
          localStorage.getItem("anonymousUserID")
        );

        // Wishlist flow
        if (user !== null && user.id !== null) {
          let wishlistResponse = await fetchWishlistCourses(user.id);
          console.log(wishlistResponse);
          let wishlist = wishlistResponse.wishListItemList;
          let wishlistObj = { wishlistArray: wishlist };
          dispatch(addToWishlist(wishlistObj));
        }

        if (!response) {
          let defaultObj = {
            cartArray: [],
            tax: 0.0,
            totalAmount: 0.0,
            grandTotalAmount: 0.0,
            totalDiscount: 0.0,
          };
          dispatch(addToCart(defaultObj));
        } else {
          // Cart flow
          let cart = response.cartItemList;
          let tax = response.tax;
          let totalAmount = response.totalAmount;
          let totalDiscount = response.totalDiscount;
          let grandTotalAmount = response.grandTotalAmount;
          let obj = {
            cartArray: cart,
            tax: tax,
            totalAmount: totalAmount,
            grandTotalAmount: grandTotalAmount,
            totalDiscount: totalDiscount,
          };
          if (obj.cartArray === undefined) {
            let defaultObj = {
              cartArray: [],
              tax: 0.0,
              totalAmount: 0.0,
              grandTotalAmount: 0.0,
              totalDiscount: 0.0,
            };
            dispatch(addToCart(defaultObj));
          } else {
            dispatch(addToCart(obj));
          }
        }
      }
    }
    fetch();
  }, [user]);

  return (
    <ProfileIconsContainer>
      {isLearner && disableIcon && (
        <div className="icon-notification" style={{ position: "relative" }}>
          <div
            className="heartIconDiv"
            onClick={!showWishlist ? handleShowWishlist : () => {}}
          >
            <NotificationBadge
              className="badge-notification"
              count={!wishlistArray ? 0 : wishlistArray.length}
              effect={Effect.SCALE}
            />
            <img src={HeartIcon} style={{ width: 20 }} />
            {/* <FontAwesomeIcon className="heartIcon" icon={faHeart} size="2x" /> */}
          </div>
          {showWishlist && <CartDropdown name="wishlist" />}
        </div>
      )}

      {isLearner && disableIcon && (
        <div className="icon-notification" style={{ position: "relative" }}>
          <div
            className="cartIcon"
            onClick={!showCart ? handleShowCart : () => {}}
          >
            <NotificationBadge
              className="badge-notification"
              count={!cartArray ? 0 : cartArray.length}
              effect={Effect.SCALE}
            />
            <img className="shoppingCart" style={{ width: 20 }} src={CartIcon} />
            {/* <FontAwesomeIcon className="shoppingCart" icon={faShoppingCart} size="2x" /> */}
          </div>
          {showCart && <CartDropdown name="cart" />}
        </div>
      )}

      {/* <div className="icon-notification">
            <div className="bellIconDiv">
            <NotificationBadge className="badge-notification" count={counter} effect={Effect.SCALE}/>
            <img style={{ width:20 }} src={BellIcon} />
            </div>
           </div> */}

      <div
        className="profile-img-accountBox"
        onClick={!props.showDropdown ? props.handleShowDropdown : () => {}}
      >
        <img
          className="img-profile"
          alt="profile"
          src={
            user
              ? user.profileImg
                ? user.profileImg
                : "https://i.pinimg.com/474x/8c/70/8b/8c708b478e0e71f7599b75b9cc108ddf.jpg"
              : "https://i.pinimg.com/474x/8c/70/8b/8c708b478e0e71f7599b75b9cc108ddf.jpg"
          }
        />
        {/* <div className="myAccount-box">
                  <div>{user?user.firstName:""} {user?user.lastName.slice(0,1) + ".":""}</div>
                  <FontAwesomeIcon icon={faChevronDown}/>
             </div> */}
      </div>
    </ProfileIconsContainer>
  );
};

export default ProfileIcons;
