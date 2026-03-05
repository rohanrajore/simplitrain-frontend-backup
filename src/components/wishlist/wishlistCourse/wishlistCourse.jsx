import React from "react";
import "./wishlistCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import removeFromWishlist from "../../header/cart-dropdown/removeCourseFromWishlist.js";
import wishlistToCart from "../../cartPage/cart/wishlistToCart";
import { useSelector, useDispatch } from "react-redux";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import {
  cartToWishlistAction,
  addToWishlist,
} from "../../../redux/cart/cart-actions.js";
import moment from "moment";

const WishlistCourse = (props) => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const removeCourse = async () => {
    let response = await removeFromWishlist(props.id, user.id);
    if (response.actionResult === "SUCCESS") {
      let wishlistArray = response.wishlist.wishListItemList;
      let obj = { wishlistArray: wishlistArray };
      dispatch(addToWishlist(obj));
    }
  };

  const moveToCart = async () => {
    let response = await wishlistToCart(props.id, user.id);

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
      let totalDiscount = response.cart.totalDiscount;
      let grandTotalAmount = response.cart.cartGrandTotalAmount;
      let wishlist = response.wishlist.wishListItemList;
      let obj = {
        cartArray: cart,
        tax: tax,
        totalAmount: totalAmount,
        totalDiscount: totalDiscount,
        grandTotalAmount: grandTotalAmount,
        wishlistArray: wishlist,
      };
      dispatch(cartToWishlistAction(obj));
    }
  };

  return (
    <div className="wishlistCourse-container" id={props.id}>
      <div className="wishlistCourse-left">
        <img src={props.img} />
        <div className="wishlistCourse-info">
          <div className="wishlistCourse-title">{props.title}</div>
          <div className="wishlistCourse-author">by {props.author}</div>
          <div className="wishlistCourse-date">
            <div>
              <FontAwesomeIcon
                icon="calendar"
                style={{
                  color: "#ce6268",
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              {moment(
                props.date.includes("[Etc/UTC]")
                  ? props.date.replace("[Etc/UTC]", "")
                  : props.date
              ).format("Do MMM YYYY")}{" "}
              -
              {" " +
                moment(
                  props.date.includes("[Etc/UTC]")
                    ? props.endDate.replace("[Etc/UTC]", "")
                    : props.endDate
                ).format("Do MMM YYYY")}
            </div>

            <div>
              <FontAwesomeIcon
                icon="stopwatch"
                style={{
                  color: "#ce6268",
                  fontSize: "18px",
                  marginRight: "10px",
                }}
              />
              {props.time}
            </div>
          </div>
          <div className="wishlistCourse-location">
            <FontAwesomeIcon
              icon="map-marker-alt"
              style={{
                color: "#ce6268",
                fontSize: "18px",
                marginRight: "10px",
              }}
            />
            {!props.location ? "Online" : props.location}
          </div>
        </div>
      </div>

      <div className="wishlistCourse-right">
        <div>
          {" "}
          <FontAwesomeIcon
            icon="rupee-sign"
            style={{ color: "black", fontSize: "23px" }}
          />
          {props.currentPrice}
        </div>
        <div className="rightContent-ratings wishlistCourse-ratings">
          <FontAwesomeIcon
            icon={
              props.rating < 0.5
                ? ["far", "star"]
                : props.rating >= 0.5 && props.rating < 1
                ? "star-half-alt"
                : "star"
            }
            style={{ color: "#e39e09" }}
            size="1x"
          />
          <FontAwesomeIcon
            icon={
              props.rating < 1.5
                ? ["far", "star"]
                : props.rating >= 1.5 && props.rating < 2
                ? "star-half-alt"
                : "star"
            }
            style={{ color: "#e39e09" }}
            size="1x"
          />
          <FontAwesomeIcon
            icon={
              props.rating < 2.5
                ? ["far", "star"]
                : props.rating >= 2.5 && props.rating < 3
                ? "star-half-alt"
                : "star"
            }
            style={{ color: "#e39e09" }}
            size="1x"
          />
          <FontAwesomeIcon
            icon={
              props.rating < 3.5
                ? ["far", "star"]
                : props.rating >= 3.5 && props.rating < 4
                ? "star-half-alt"
                : "star"
            }
            style={{ color: "#e39e09" }}
            size="1x"
          />
          <FontAwesomeIcon
            icon={
              props.rating < 4.5
                ? ["far", "star"]
                : props.rating >= 4.5 && props.rating < 5
                ? "star-half-alt"
                : "star"
            }
            style={{ color: "#e39e09", marginRight: "10px" }}
            size="1x"
          />
          ({props.reviews})
        </div>
        <Link
          to={`/course-details/${props.id}#course-reviews`}
          className="simulate-link wishlistCourse-seeAll"
        >
          See all reviews
        </Link>
        <div className="wishlistCourse-btns">
          <div onClick={moveToCart}>Add to Cart</div>
          <div onClick={removeCourse}>Remove From Wishlist</div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCourse;
