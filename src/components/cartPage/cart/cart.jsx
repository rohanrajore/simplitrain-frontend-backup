import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import './cart.css';
import CartCourse from "../course/course.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getSaveLater } from "../../../redux/cart/cart-actions.js";
import removeFromCart from "./removeFromCart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fetchSavedForLater from "./fetchSavedForLater.js";
import removeCoupon from "./removeCoupon.js";
import { addToCart } from "../../../redux/cart/cart-actions.js";
import { Col, Container, Row } from "react-bootstrap";
import { CartContainerStyle } from "../cart/course.style";
import CartIcon from "../../../assets/cart.svg";

const Cart = (props) => {
  const { cartArray,total,discount  } = useSelector((state) => {
    return {
      cartArray:state.cart.cartArray,
      total: state.cart.cartArray.length > 0?state.cart.cartArray.map(item => item.oldPrice).reduce((prev, next) => prev + next):0,
      discount: state.cart.cartArray.length > 0?state.cart.cartArray.map(item => item.discount).reduce((prev, next) => prev + next):0
    }
  });
  const saveLaterArray = useSelector((state) => state.cart.saveLaterArray);
  const user = useSelector((state) => state.user.currentUser);

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalDiscount = useSelector((state) => state.cart.totalDiscount)
  const grandTotalAmount = useSelector((state) => state.cart.grandTotalAmount);
  const gstTax = useSelector((state) => state.cart.tax);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      const response = await fetchSavedForLater(
        user === null ? "" : user.id,
        localStorage.getItem("anonymousUserID")
      );
      // Handle redux state
      if (response.actionResult === "SUCCESS") {
        let saveLater =
          response.saveLater.saveLaterItemList === null
            ? []
            : response.saveLater.saveLaterItemList;

        let obj = { saveLaterArray: saveLater };
        dispatch(getSaveLater(obj));
      }
    }
    fetch();
  }, [1]);

  const handleRemoveCoupon = async (cartItemID, couponCode) => {
    let response = await removeCoupon(
      cartItemID,
      couponCode,
      localStorage.getItem("anonymousUserID"),
      user === null ? "" : user.id
    );
    const status = await response.actionResult;
    if (status === "SUCCESS") {
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
    <CartContainerStyle className="page-section">
      <Container>
        <div className="cartPage-content">
          <Row>
            <Col sm={12} md={8} lg={9}>
              <div className="cartPage-courses">
                <div className="cartPage-current-courses">
                  <div className="cartPage-current-courses-title">
                    {cartArray.length + " "}
                    {cartArray.length < 2
                      ? "Course in Cart"
                      : "Courses in Cart"}
                    <img
                      style={{ width: 25 }}
                      src={CartIcon}
                      className="cartIcon"
                    />
                  </div>
                  <div className="cartPage-current-courses-content">
                    {cartArray.map((course) => (
                      <CartCourse
                        id={course.cartItemCard.id}
                        cartItemID={course.id}
                        img={course.cartItemCard.img}
                        title={course.cartItemCard.title}
                        author={course.cartItemCard.author}
                        key={course.id}
                        date={course.cartItemCard.date}
                        currentPrice={course.cartItemCard.currentPrice}
                        oldPrice={course.cartItemCard.oldPrice}
                        discount={course.cartItemCard.discount}
                        appliedCoupons={course.appliedCoupons}
                        availableCoupons ={course.availableCoupons}
                        handleRemoveCoupon={handleRemoveCoupon}
                      />
                    ))}
                  </div>
                </div>
                {saveLaterArray.length > 0 ? (
                  <div className="cartPage-current-courses cartPageTopMargin">
                    <div className="saveLater">Saved for Later</div>
                    <div
                      className="cartPage-current-courses-content"
                      style={{ marginBottom: 150 }}
                    >
                      {saveLaterArray.length > 0
                        ? saveLaterArray.map((course) => (
                            <CartCourse
                              id={course.saveLaterItemCard.courseBatchID}
                              img={course.saveLaterItemCard.img}
                              title={course.saveLaterItemCard.title}
                              author={course.saveLaterItemCard.author}
                              key={course.saveLaterItemCard.courseBatchID}
                              date={course.saveLaterItemCard.date}
                              currentPrice={
                                course.saveLaterItemCard.currentPrice
                              }
                              oldPrice={course.saveLaterItemCard.oldPrice}
                              discount={course.saveLaterItemCard.discount}
                              savedForLater={true}
                            />
                          ))
                        : "You haven't saved any courses for later."}
                    </div>
                  </div>
                ) : null}
              </div>
            </Col>

            <Col sm={12} md={4} lg={3}>
              <div className="cartPage-summary">
                <div className="cartPage-summary-details">
                  {/* {cartArray.map((course) => (
                    <div
                      className="cartPage-summary-course"
                      key={course.cartItemCard.id}
                    >
                      <div className="cartPage-summary-courseRow">
                        <div>{course.cartItemCard.title}</div>
                        <div>₹{course.cartItemCard.currentPrice}</div>
                      </div>

                      {course.appliedCoupons.map((coupon) => (
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
                                handleRemoveCoupon(course.id, coupon.name)
                              }
                            >
                              X
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))} */}

                  <div className="cartPage-summary-course">
                    <h2 className="cartPage-summary-course-head">Price Details</h2>
                    <div className="cartPage-summary-courseRow courseRow-item">
                      <div>Price <span style={{color:'#303030'}}>({cartArray.length} items)</span>: </div>
                      <div>₹ {totalAmount + totalDiscount}</div>
                    </div>

                    <div className="cartPage-summary-courseRow courseRow-item green">
                      <div>Discount: </div>
                      <div><span>-₹ {totalDiscount}</span></div>
                    </div>

                    {/*<div className="cartPage-summary-courseRow courseRow-subtotal">
                      <div>Subtotal: </div>
                      <div>₹ {totalAmount}</div>
                    </div>

                    <div className="cartPage-summary-courseRow courseRow-gst">
                      <div>GST 18%: </div>
                      <div>₹ {gstTax}</div>
                    </div>*/}
                  </div>

                  <div className="cartPage-summary-course">
                    <div className="cartPage-summary-courseRow checkout-totalDisc">
                      <div>Total: </div>
                      <div>₹ {totalAmount}</div>
                    </div>
                  </div>

                 <div className="cartPage-summary-course" style={{padding:'0px 20px'}}>
                  <Link to="/cart-checkout" className="cartPage-summary-button">
                      Checkout
                    </Link>
                 </div>
                </div>

                {/*

              <div className="cartPage-summary-couponList">
                    {couponApplied===""?"": couponApplied + "  is applied"}
              </div>*/}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </CartContainerStyle>
  );
};

export default Cart;
