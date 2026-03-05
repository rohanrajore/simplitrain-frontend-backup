import React, { useState } from "react";
// import './course.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cart-actions.js";
import addItemToCart from "../../course-details/courseCard/addToCart";
import removeFromCart from "../../cartPage/cart/removeFromCart.js";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import {
  faBroadcastTower,
  faCheck,
  faCalendar,
  faMapMarkedAlt,
  faUserCircle,
  faGripHorizontal,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import {
  CourseCard,
  CourseCover,
  CourseDetail,
  CourseFooter,
} from "./course.style.jsx";

const Course = (props) => {
  const [couponSelected, setCouponSelected] = useState({
    id: "",
    name: "",
    discount: "",
  });

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartArray);
  const user = useSelector((state) => state.user.currentUser);
  // If isAdded length is 1 then it means this course is already in cart
  const isAdded = !cart
    ? []
    : cart.filter((cartItem) => cartItem.cartItemCard.id === props.id);

  // This will tell us is course started
  const isStarted = moment(props.startDate) < moment();

  const handleAddCart = async () => {
    let response;
    // If isAdded length===1 means that batch is already in the cart,
    // and therefore should be removed if its clicked.. And vice versa...
    if (isAdded.length === 1) {
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
  };

  return (
    <CourseCard id={props.id} style={{ left: props.position }}>
      <CourseCover
        style={{
          background: `url(${props.img})`,
          backgroundSize: "cover",
          height: 150,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <CourseDetail>
        <Link to={`/course-details/${props.id}`}>
          <div className="trendingCourse-item">
            <div className="trendingCourse-title"> {props.title} </div>
          </div>
        </Link>

        <div className="trendingCourse-item">
          <svg
            width="17"
            height="18"
            style={{ marginRight: 5 }}
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.38411 4.0013H5.05078V3.16797H11.7174V4.0013H13.3841V3.16797H15.0508V5.66797H1.71745V3.16797H3.38411V4.0013ZM1.71745 7.33463V15.668H15.0508V7.33463H1.71745ZM5.05078 1.5013H11.7174V0.667969H13.3841V1.5013H15.0508C15.9713 1.5013 16.7174 2.24749 16.7174 3.16797V15.668C16.7174 16.5884 15.9713 17.3346 15.0508 17.3346H1.71745C0.796973 17.3346 0.0507812 16.5884 0.0507812 15.668V3.16797C0.0507812 2.24749 0.796973 1.5013 1.71745 1.5013H3.38411V0.667969H5.05078V1.5013Z"
              fill="#EB5757"
            />
          </svg>
          <span>{props.date}</span>
        </div>

        <div className="trendingCourse-item" style={{height: 40, overflow: 'hidden'}}>

          {props.location === null ? <FontAwesomeIcon
            icon={faBroadcastTower}
          />:<svg
              width="17"
              height="18"
              style={{ marginRight: 5 }}
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.29763 14.2142L8.38412 15.0118L7.4706 14.2142C4.2078 11.3651 2.55078 8.84398 2.55078 6.5013C2.55078 3.18581 5.13703 0.667969 8.38412 0.667969C11.6312 0.667969 14.2174 3.18581 14.2174 6.5013C14.2174 8.84398 12.5604 11.3651 9.29763 14.2142ZM3.12207 11.3375C3.46423 11.8059 3.84538 12.2824 4.26534 12.7671C2.71349 13.1166 1.71745 13.6127 1.71745 14.0013C1.71745 14.6738 4.70007 15.668 8.38412 15.668C12.0682 15.668 15.0508 14.6738 15.0508 14.0013C15.0508 13.6127 14.0547 13.1166 12.5029 12.7671C12.9229 12.2824 13.304 11.8059 13.6462 11.3375C15.5202 11.9061 16.7174 12.8183 16.7174 14.0013C16.7174 16.0903 12.9843 17.3346 8.38412 17.3346C3.78389 17.3346 0.0507812 16.0903 0.0507812 14.0013C0.0507812 12.8183 1.24806 11.9061 3.12207 11.3375ZM8.38411 2.33464C10.7206 2.33464 12.5508 4.11643 12.5508 6.5013C12.5508 8.20711 11.1947 10.3062 8.38411 12.798C5.57355 10.3062 4.21745 8.20711 4.21745 6.5013C4.21745 4.11643 6.04765 2.33464 8.38411 2.33464ZM8.38411 4.0013C9.76483 4.0013 10.8841 5.12059 10.8841 6.5013C10.8841 7.88201 9.76483 9.0013 8.38411 9.0013C7.0034 9.0013 5.88411 7.88201 5.88411 6.5013C5.88411 5.12059 7.0034 4.0013 8.38411 4.0013ZM7.55078 6.5013C7.55078 6.04106 7.92388 5.66797 8.38412 5.66797C8.84435 5.66797 9.21745 6.04106 9.21745 6.5013C9.21745 6.96154 8.84435 7.33463 8.38412 7.33463C7.92388 7.33463 7.55078 6.96154 7.55078 6.5013Z"
                fill="#EB5757"
              />
            </svg>}
          <span>
            {!props.location ? "Online Class" : props.location}
          </span>
        </div>

        <Link to={`/instructor-profile/${props.authorID}`}>
          <div className="trendingCourse-item trendingCourse-link">
            <svg
              width="19"
              height="18"
              style={{ marginRight: 5 }}
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.38281 18C4.41225 18 0.382812 13.9706 0.382812 9C0.382812 4.02944 4.41225 0 9.38281 0C14.3534 0 18.3828 4.02944 18.3828 9C18.3828 13.9706 14.3534 18 9.38281 18ZM15.4369 13.1924C16.2627 12.0025 16.7466 10.5574 16.7466 8.99936C16.7466 4.93254 13.4497 1.63572 9.38292 1.63572C5.3161 1.63572 2.01929 4.93254 2.01929 8.99936C2.01929 10.5573 2.5031 12.0022 3.32867 13.1921C4.24957 11.9759 6.4133 11.4539 9.38266 11.4539C12.3523 11.4539 14.5162 11.976 15.4369 13.1924ZM14.2629 14.5139C14.0236 13.6527 12.3033 13.0903 9.38266 13.0903C6.46247 13.0903 4.74219 13.6526 4.50252 14.5135C5.80181 15.6643 7.51078 16.363 9.38292 16.363C11.2549 16.363 12.9637 15.6645 14.2629 14.5139ZM9.38284 4.09027C7.4021 4.09027 6.11011 5.5268 6.11011 7.363C6.11011 10.1672 7.55081 11.4539 9.38284 11.4539C11.1976 11.4539 12.6556 10.21 12.6556 7.52663C12.6556 5.66247 11.3581 4.09027 9.38284 4.09027ZM7.74634 7.36428C7.74634 9.22094 8.41578 9.81882 9.3827 9.81882C10.3463 9.81882 11.0191 9.24478 11.0191 7.52791C11.0191 6.50553 10.3773 5.72791 9.3827 5.72791C8.34667 5.72791 7.74634 6.39541 7.74634 7.36428Z"
                fill="#EB5757"
              />
            </svg>
            <span>{props.author}</span>
          </div>
        </Link>

        {props.seatsLeft &&
        <div className="trendingCourse-item">
          <svg
            width="17"
            height="16"
            style={{ marginRight: 5 }}
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.382812 2.40009C0.382812 3.72563 1.45733 4.80019 2.78281 4.80019C4.1083 4.80019 5.18281 3.72563 5.18281 2.40009C5.18281 1.07456 4.1083 0 2.78281 0C1.45733 0 0.382812 1.07456 0.382812 2.40009ZM3.58291 2.39947C3.58291 2.84131 3.22474 3.1995 2.78291 3.1995C2.34108 3.1995 1.98291 2.84131 1.98291 2.39947C1.98291 1.95762 2.34108 1.59944 2.78291 1.59944C3.22474 1.59944 3.58291 1.95762 3.58291 2.39947ZM8.38273 4.80019C7.05725 4.80019 5.98273 3.72563 5.98273 2.40009C5.98273 1.07456 7.05725 0 8.38273 0C9.70822 0 10.7827 1.07456 10.7827 2.40009C10.7827 3.72563 9.70822 4.80019 8.38273 4.80019ZM9.18276 2.39947C9.18276 2.84131 8.82459 3.1995 8.38276 3.1995C7.94094 3.1995 7.58276 2.84131 7.58276 2.39947C7.58276 1.95762 7.94094 1.59944 8.38276 1.59944C8.82459 1.59944 9.18276 1.95762 9.18276 2.39947ZM13.9829 4.80019C12.6574 4.80019 11.5829 3.72563 11.5829 2.40009C11.5829 1.07456 12.6574 0 13.9829 0C15.3084 0 16.3829 1.07456 16.3829 2.40009C16.3829 3.72563 15.3084 4.80019 13.9829 4.80019ZM14.7826 2.39947C14.7826 2.84131 14.4244 3.1995 13.9826 3.1995C13.5408 3.1995 13.1826 2.84131 13.1826 2.39947C13.1826 1.95762 13.5408 1.59944 13.9826 1.59944C14.4244 1.59944 14.7826 1.95762 14.7826 2.39947ZM2.78281 10.401C1.45733 10.401 0.382812 9.32647 0.382812 8.00094C0.382812 6.6754 1.45733 5.60084 2.78281 5.60084C4.1083 5.60084 5.18281 6.6754 5.18281 8.00094C5.18281 9.32647 4.1083 10.401 2.78281 10.401ZM3.58291 8.00031C3.58291 8.44216 3.22474 8.80034 2.78291 8.80034C2.34108 8.80034 1.98291 8.44216 1.98291 8.00031C1.98291 7.55847 2.34108 7.20028 2.78291 7.20028C3.22474 7.20028 3.58291 7.55847 3.58291 8.00031ZM8.38267 10.401C7.05718 10.401 5.98267 9.32647 5.98267 8.00094C5.98267 6.6754 7.05718 5.60084 8.38267 5.60084C9.70815 5.60084 10.7827 6.6754 10.7827 8.00094C10.7827 9.32647 9.70815 10.401 8.38267 10.401ZM9.18276 8.00031C9.18276 8.44216 8.82459 8.80034 8.38276 8.80034C7.94094 8.80034 7.58276 8.44216 7.58276 8.00031C7.58276 7.55847 7.94094 7.20028 8.38276 7.20028C8.82459 7.20028 9.18276 7.55847 9.18276 8.00031ZM13.983 10.401C12.6575 10.401 11.583 9.32647 11.583 8.00094C11.583 6.6754 12.6575 5.60084 13.983 5.60084C15.3085 5.60084 16.383 6.6754 16.383 8.00094C16.383 9.32647 15.3085 10.401 13.983 10.401ZM14.7826 8.00031C14.7826 8.44216 14.4244 8.80034 13.9826 8.80034C13.5408 8.80034 13.1826 8.44216 13.1826 8.00031C13.1826 7.55847 13.5408 7.20028 13.9826 7.20028C14.4244 7.20028 14.7826 7.55847 14.7826 8.00031ZM8.38267 16C7.05718 16 5.98267 14.9254 5.98267 13.5999C5.98267 12.2744 7.05718 11.1998 8.38267 11.1998C9.70815 11.1998 10.7827 12.2744 10.7827 13.5999C10.7827 14.9254 9.70815 16 8.38267 16ZM9.18276 13.6012C9.18276 14.043 8.82459 14.4012 8.38276 14.4012C7.94094 14.4012 7.58276 14.043 7.58276 13.6012C7.58276 13.1593 7.94094 12.8011 8.38276 12.8011C8.82459 12.8011 9.18276 13.1593 9.18276 13.6012Z"
              fill="#EB5757"
            />
          </svg>

            <span>
              {props.seatsLeft}{" "}
              {props.seatsLeft === 1 ? " seat left" : " seats left"}
            </span>
        </div>
         }
      </CourseDetail>
      <CourseFooter>
        <div className="trendingCourse-actualPrice">
          <FontAwesomeIcon icon={faRupeeSign} />
          <span> {props.price} </span> {/*props.price is price after discount*/}
        </div>
        <div className="trendingCourse-Price">
          <FontAwesomeIcon icon={faRupeeSign} />
          {props.actualPrice} {/*props.actualPrice is price before discount*/}
        </div>

        {isAdded.length !== 1 && (
          <button
            className="trendingCourse-cart"
            onClick={handleAddCart}
          >
            Add to Cart
          </button>
        )}
        {isAdded.length === 1 && (
          <button
            className="trendingCourse-cart insideCart"
            onClick={handleAddCart}
          >
            <FontAwesomeIcon icon={faCheck} />
            Added to Cart
          </button>
        )}
      </CourseFooter>
    </CourseCard>
  );
};

export default Course;
