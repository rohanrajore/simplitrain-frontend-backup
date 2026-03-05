import React, { useState } from "react";
// import './course.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStartOutline,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faStopwatch,
  faCalendar,
  faStarHalfAlt,
  faMapMarkedAlt,
  faStar,
  faRupeeSign,
  faShoppingCart,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SchedulePopup from "../../../../common/schedulePopup/schedulePopup.jsx";
import moment from "moment";
import AllReviews from "../allReviews/allReviews.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/cart/cart-actions.js";
import { addToWishlist } from "../../../../redux/cart/cart-actions.js";
import addItemToCart from "../../../course-details/courseCard/addToCart";
import removeFromCart from "../../../cartPage/cart/removeFromCart.js";
import addItemToWishlist from "../../../course-details/courseCard/addToWishlist";
import removeFromWishlist from "../../../header/cart-dropdown/removeCourseFromWishlist.js";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import {
  BrowseCoursesCourse,
  CourseLeftContent,
  CourseRightContent,
} from "./course.style";
import Calendar from "../../../../assets/calendar.svg";
import Clock from "../../../../assets/clock.svg";

const Course = (props) => {
  const smallSize = "1x";
  const bigSize = "2x";
  const [showSchedule, setShowSchedule] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const handleShowSchedule = () => setShowSchedule(!showSchedule);
  const handleShowReviews = () => setShowReviews(!showReviews);
  const [couponSelected, setCouponSelected] = useState({
    id: "",
    name: "",
    discount: "",
  });

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartArray);
  const wishlist = useSelector((state) => state.cart.wishlistArray);
  const user = useSelector((state) => state.user.currentUser);

  // If isAddedWishlist length is 1 then it means this course is already in cart
  const isAddedWishlist = wishlist.filter(
    (wishlistItem) => wishlistItem.wishListItemCard.courseBatchID === props.id
  );
  // If isAddedCart length is 1 then it means this course is already in cart
  const isAddedCart = cart.filter(
    (cartItem) => cartItem.cartItemCard.id === props.id
  );
  // This will tell us is course started
  const isStarted = moment(props.startDate) < moment();

  const handleAddCart = async () => {
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
        totalDiscount: totalDiscount,
        grandTotalAmount: grandTotalAmount,
      };
      dispatch(addToCart(obj));
    }
  };

  const handleAddToWishlist = async () => {
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

  return (
    <BrowseCoursesCourse>
      <CourseLeftContent>
        <div
          className="course-leftContent-image"
          style={{ background: `url(${props.img})` }}
        ></div>
        {/* <img src={props.img} alt="course" className="course-leftContent-image"/> */}
        <div className="course-leftContent-details">
          <Link to={`/course-details/${props.id}`}>
            <div className="leftContent-details-title">{props.title}</div>
          </Link>
          <div className="leftContent-details-author">
            by{" "}
            <Link to={`/instructor-profile/${props.authorID}`}>
              {" "}
              {props.author}{" "}
            </Link>
          </div>
          {props.distance && (
            <div className="distance-away">
              <FontAwesomeIcon
                icon={faStreetView}
                style={{ color: "rgb(235, 87, 87)" }}
              />
              {props.distance} km away
            </div>
          )}
          <div className="leftContent-details-date">
            <div>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0495 2.66797H3.71615C2.97977 2.66797 2.38281 3.26492 2.38281 4.0013V13.3346C2.38281 14.071 2.97977 14.668 3.71615 14.668H13.0495C13.7859 14.668 14.3828 14.071 14.3828 13.3346V4.0013C14.3828 3.26492 13.7859 2.66797 13.0495 2.66797Z"
                  stroke="#EB5757"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.0508 1.33203V3.9987"
                  stroke="#EB5757"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.71484 1.33203V3.9987"
                  stroke="#EB5757"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.38281 6.66797H14.3828"
                  stroke="#EB5757"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {/* <FontAwesomeIcon icon={faCalendar} style={{color:'orange'}}/> */}
              {props.date}
            </div>
            <div>
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4776:62631)">
                  <path
                    d="M8.38151 13.75C12.0634 13.75 15.0482 10.9518 15.0482 7.5C15.0482 4.04822 12.0634 1.25 8.38151 1.25C4.69961 1.25 1.71484 4.04822 1.71484 7.5C1.71484 10.9518 4.69961 13.75 8.38151 13.75Z"
                    stroke="#EB5757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.38281 3.75V7.5L11.0495 8.75"
                    stroke="#EB5757"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4776:62631">
                    <rect
                      width="16"
                      height="15"
                      fill="white"
                      transform="translate(0.382812)"
                    />
                  </clipPath>
                </defs>
              </svg>

              {/* <img src={Clock} style={{ marginLeft:5 }} /> */}
              {/* <FontAwesomeIcon icon={faStopwatch} style={{color:'orange'}}/>  */}
              {props.time}
            </div>
            <div className="simulate-link" onClick={handleShowSchedule}>
              More
            </div>
            {showSchedule && (
              <SchedulePopup
                handleShowFullTime={handleShowSchedule}
                scheduleTime={props.scheduleTime}
                startDate={props.startDate}
                endDate={props.endDate}
                ignoreWeekend={props.ignoreWeekend}
              />
            )}
          </div>
          <div className="leftContent-details-location">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.7056 12.1936L7.88338 12.9116L7.06116 12.1936C4.12443 9.62902 2.63301 7.3596 2.63301 5.25085C2.63301 2.26643 4.9608 0 7.88338 0C10.806 0 13.1338 2.26643 13.1338 5.25085C13.1338 7.3596 11.6423 9.62902 8.7056 12.1936ZM3.14717 9.60316C3.45513 10.0248 3.79819 10.4537 4.17619 10.89C2.77942 11.2047 1.88292 11.6512 1.88292 12.001C1.88292 12.6063 4.56746 13.5012 7.88334 13.5012C11.1992 13.5012 13.8838 12.6063 13.8838 12.001C13.8838 11.6512 12.9873 11.2047 11.5905 10.89C11.9685 10.4537 12.3115 10.0248 12.6195 9.60316C14.3062 10.115 15.3839 10.9361 15.3839 12.001C15.3839 13.8814 12.0238 15.0015 7.88334 15.0015C3.74285 15.0015 0.382812 13.8814 0.382812 12.001C0.382812 10.9361 1.46044 10.115 3.14717 9.60316ZM7.88334 1.50286C9.9863 1.50286 11.6336 3.10674 11.6336 5.25347C11.6336 6.78895 10.413 8.67845 7.88334 10.9214C5.35366 8.67845 4.13308 6.78895 4.13308 5.25347C4.13308 3.10674 5.78037 1.50286 7.88334 1.50286ZM7.8833 3.00228C9.12602 3.00228 10.1335 4.0098 10.1335 5.25265C10.1335 6.49549 9.12602 7.50301 7.8833 7.50301C6.64057 7.50301 5.63314 6.49549 5.63314 5.25265C5.63314 4.0098 6.64057 3.00228 7.8833 3.00228ZM7.1332 5.24837C7.1332 4.83409 7.46901 4.49825 7.88325 4.49825C8.2975 4.49825 8.63331 4.83409 8.63331 5.24837C8.63331 5.66265 8.2975 5.99849 7.88325 5.99849C7.46901 5.99849 7.1332 5.66265 7.1332 5.24837Z"
                fill="#EB5757"
              />
            </svg>

            {/* <FontAwesomeIcon icon={faMapMarkedAlt} style={{color:'orange'}}/> */}
            {!props.location ? " Online" : props.location}
          </div>
        </div>
      </CourseLeftContent>

      <CourseRightContent>
        {/*<div className="rightContent-share"><FontAwesomeIcon icon='share-alt' style={{color:'#48bdf7'}} size='2x'/> </div>*/}
        <div>
          <div className="rightContent-price">
            <div>
              <FontAwesomeIcon icon={faRupeeSign} />
              {props.price}
            </div>
            <div
              style={{
                textDecoration: "line-through",
                fontSize: "14px",
                color: "#909090",
                marginLeft: 10,
                fontWeight: "400",
              }}
            >
              <FontAwesomeIcon icon={faRupeeSign} style={{ width: 8 }} />
              {props.oldPrice}
            </div>
          </div>
          <div className="rightContent-ratings">
            <FontAwesomeIcon
              icon={
                props.rating < 0.5
                  ? faStartOutline
                  : props.rating >= 0.5 && props.rating < 1
                  ? faStarHalfAlt
                  : faStar
              }
              style={{ color: "#e39e09" }}
              size="1x"
            />
            <FontAwesomeIcon
              icon={
                props.rating < 1.5
                  ? faStartOutline
                  : props.rating >= 1.5 && props.rating < 2
                  ? faStarHalfAlt
                  : faStar
              }
              style={{ color: "#e39e09" }}
              size="1x"
            />
            <FontAwesomeIcon
              icon={
                props.rating < 2.5
                  ? faStartOutline
                  : props.rating >= 2.5 && props.rating < 3
                  ? faStarHalfAlt
                  : faStar
              }
              style={{ color: "#e39e09" }}
              size="1x"
            />
            <FontAwesomeIcon
              icon={
                props.rating < 3.5
                  ? faStartOutline
                  : props.rating >= 3.5 && props.rating < 4
                  ? faStarHalfAlt
                  : faStar
              }
              style={{ color: "#e39e09" }}
              size="1x"
            />
            <FontAwesomeIcon
              icon={
                props.rating < 4.5
                  ? faStartOutline
                  : props.rating >= 4.5 && props.rating < 5
                  ? faStarHalfAlt
                  : faStar
              }
              style={{ color: "#e39e09", marginRight: "10px" }}
              size="1x"
            />
            ({props.reviews})
          </div>
          <Link
            className="simulate-link"
            style={{ marginBottom: 30 }}
            to={`/course-details/${props.id}#course-reviews`}
          >
            See all reviews
          </Link>
          <Link
            to={`/course-details/${props.id}`}
            className="button linkHoverbtn"
          >
            Details
          </Link>
        </div>
        <div>
          {user !== null && user.id !== null && (
            <div
              className={
                isStarted
                  ? "heartIconHover heartIconHover-disabled"
                  : "heartIconHover"
              }
              onClick={isStarted ? () => {} : handleAddToWishlist}
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill={isAddedWishlist.length === 1 ? "#2D9CDB" : "none"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4776:62649)">
                  <path
                    d="M17.748 3.84319C17.3223 3.41736 16.817 3.07956 16.2607 2.84909C15.7045 2.61862 15.1084 2.5 14.5063 2.5C13.9042 2.5 13.308 2.61862 12.7518 2.84909C12.1956 3.07956 11.6902 3.41736 11.2646 3.84319L10.3813 4.72652L9.49795 3.84319C8.63821 2.98344 7.47215 2.50045 6.25628 2.50045C5.04042 2.50045 3.87436 2.98344 3.01462 3.84319C2.15487 4.70293 1.67188 5.86899 1.67188 7.08485C1.67187 8.30072 2.15487 9.46678 3.01462 10.3265L3.89795 11.2099L10.3813 17.6932L16.8646 11.2099L17.748 10.3265C18.1738 9.90089 18.5116 9.39553 18.742 8.83932C18.9725 8.2831 19.0911 7.68693 19.0911 7.08485C19.0911 6.48278 18.9725 5.88661 18.742 5.33039C18.5116 4.77418 18.1738 4.26882 17.748 3.84319V3.84319Z"
                    stroke="#2D9CDB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4776:62649">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.382812)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}
          <div
            className={
              isStarted
                ? "heartIcon-blue heartIcon-blue-disabled"
                : "heartIcon-blue"
            }
            onClick={isStarted ? () => {} : handleAddCart}
          >
            {isAddedCart.length !== 1 && (
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="#2D9CDB"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.03385 1.80229C3.87458 1.80194 3.72105 1.82003 3.57515 1.85443C3.37515 1.41204 3.11097 1.01515 2.81051 0.713604C2.30053 0.201799 1.49622 0 0.382812 0V1.8C1.06298 1.8 1.45438 1.8982 1.54226 1.9864C1.88122 2.32657 2.17638 3.01776 2.17638 3.6L2.1854 3.72728L3.06413 9.90046C1.59379 9.97702 0.454733 11.1229 0.383914 12.5554L0.382812 13.5C0.46964 14.9795 1.60491 16.1177 3.02227 16.1985L3.22585 16.1989C3.59486 17.2481 4.5917 18 5.76353 18C6.93492 18 7.93147 17.2487 8.3008 16.2H10.4005C10.7699 17.2487 11.7664 18 12.9378 18C14.4237 18 15.6282 16.7912 15.6282 15.3C15.6282 13.8088 14.4237 12.6 12.9378 12.6C11.7664 12.6 10.7699 13.3513 10.4005 14.4H8.3008C7.93147 13.3513 6.93492 12.6 5.76353 12.6C4.59213 12.6 3.59558 13.3513 3.22626 14.4H3.07317C2.61582 14.3725 2.20556 13.9612 2.17477 13.4461L2.17638 12.6C2.20057 12.1332 2.60802 11.7243 3.11761 11.6989L4.88799 11.6993L4.90082 11.7H13.9394L14.0718 11.6578C14.7517 11.4413 15.296 10.9275 15.5538 10.2623L15.6482 10.0746L15.9552 9.46429C16.2728 8.83253 16.5903 8.19968 16.8998 7.58142C17.6578 6.06697 18.1345 5.1045 18.2401 4.86815C18.7822 3.65441 17.684 2.72022 16.5615 2.70032L4.03385 1.80229ZM13.6281 9.89994H4.96821C4.91063 9.88388 4.86675 9.83493 4.85816 9.77396L3.9794 3.6006L16.4296 4.49538C16.2117 4.94123 15.8157 5.73759 15.2973 6.77343L15.2843 6.79938C14.9884 7.39062 14.6712 8.02259 14.3541 8.65351L14.0475 9.26306L13.9313 9.4939L13.8876 9.59594C13.8407 9.72692 13.7477 9.83456 13.6281 9.89994ZM12.938 16.1984C13.4332 16.1984 13.8347 15.7955 13.8347 15.2984C13.8347 14.8014 13.4332 14.3984 12.938 14.3984C12.4427 14.3984 12.0413 14.8014 12.0413 15.2984C12.0413 15.7955 12.4427 16.1984 12.938 16.1984ZM6.66051 15.2984C6.66051 15.7955 6.25901 16.1984 5.76373 16.1984C5.26845 16.1984 4.86694 15.7955 4.86694 15.2984C4.86694 14.8014 5.26845 14.3984 5.76373 14.3984C6.25901 14.3984 6.66051 14.8014 6.66051 15.2984Z"
                  fill="#2D9CDB"
                />
              </svg>
            )}

            {isAddedCart.length === 1 && (
              <FontAwesomeIcon icon={faShoppingCart} size="1x" />
            )}
          </div>
        </div>
      </CourseRightContent>
    </BrowseCoursesCourse>
  );
};

export default Course;
