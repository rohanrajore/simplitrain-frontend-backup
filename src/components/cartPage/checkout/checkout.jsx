import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import './checkout.css';
import paymentHandler from "./razorPayApi.js";
import { useSelector, useDispatch } from "react-redux";
import saveBillingDetails from "./saveBillingDetails.js";
import fetchCartCourses from "../../header/cart-dropdown/fetchCartCourses.js";
import removeCoupon from "../cart/removeCoupon.js";
import { addToCart } from "../../../redux/cart/cart-actions.js";
import ErrorComponent from "../../profile/errComponent/errorComponent.jsx";
import { Col, Container, Row } from "react-bootstrap";
import { CheckoutContainerStyle } from "../checkout/checkout.style";

const Checkout = (props) => {
  const [gender, setGender] = useState("Mr");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dial, setDial] = useState("91");
  const [errMsg, setErrMsg] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
  });
  const [isBlured, setIsBlured] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });
  const [checkoutPage, setCheckoutPage] = useState(1);
  const [cartID, setCartID] = useState("");
  const [orderID, setOrderID] = useState("");
  const [blockBtn, setBlockBtn] = useState(true);
  const { cartArray,total,discount  } = useSelector((state) => {
    return {
      cartArray:state.cart.cartArray,
      total: state.cart.cartArray.length > 0?state.cart.cartArray.map(item => item.oldPrice).reduce((prev, next) => prev + next):0,
      discount: state.cart.cartArray.length > 0?state.cart.cartArray.map(item => item.discount).reduce((prev, next) => prev + next):0
    }
  });
  // const cartArray = useSelector((state) => state.cart.cartArray);
  const gstTax = useSelector((state) => state.cart.tax);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartTotalDiscount = useSelector((state) => state.cart.totalDiscount);
  const cartGrandTotalAmount = useSelector(
    (state) => state.cart.grandTotalAmount
  );

  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetch() {
      let response = await fetchCartCourses(
        user === null ? "" : user.id,
        localStorage.getItem("anonymousUserID")
      );

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
        setCartID(response.cartID);
      }
    }
    if (cartArray.length > 0) {
      fetch();
    }
  }, []);

  useEffect(() => {
    if (user !== null && user.id !== null) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      if(user.mobile){
        let blankPosition = user.mobile.indexOf(" ");
        setDial(user.mobile.substr(0, blankPosition));
        setPhone(user.mobile.substr(blankPosition + 1));
      }
    }
  }, [1]);

  useEffect(() => {
    validationCheck();
  }, [firstName, lastName, email, phone]);

  const handleGender = (e) => setGender(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleCompanyName = (e) => setCompanyName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleDial = (e) => setDial(e.target.value);

  const validationCheck = () => {
    const checkProperties = (obj) => {
      for (let key in obj) {
        if (obj[key] !== "") return false;
      }
      return true;
    };

    let errorMessage = { firstName: "", lastName: "", email: "", phone: "" };

    errorMessage.firstName =
      firstName === ""
        ? "* First Name required"
        : !/^[a-zA-Z ]+$/.test(firstName)
        ? "* First Name must only contain letters"
        : "";
    errorMessage.lastName =
      lastName === ""
        ? "* Last Name required"
        : !/^[a-zA-Z ]+$/.test(lastName)
        ? "* Last Name must only contain letters"
        : "";
    errorMessage.email =
      email === ""
        ? "* Email required"
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ? "* Please enter valid email"
        : "";
    errorMessage.phone =
      phone === ""
        ? "* Phone required"
        : isNaN(phone)
        ? "* Phone must contain only numbers"
        : phone.length !== 10
        ? "* Phone length must be 10 digits"
        : "";
    setErrMsg(errorMessage);
    let check = checkProperties(errorMessage);
    if (check === true) {
      setBlockBtn(false);
    } else {
      setBlockBtn(true);
    }
    return check;
  };

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

  const handleSaveAndContinue = async () => {
    let check = validationCheck();
    if (check === true) {
      const response = await saveBillingDetails(
        cartID,
        user === null ? "" : user.id,
        localStorage.getItem("anonymousUserID"),
        firstName,
        lastName,
        companyName,
        email,
        dial,
        phone
      );
      if (response.actionResult === "SUCCESS") {
        setCheckoutPage(2);
      }
    } else setCheckoutPage(1);
  };

  const razorpayAPIs = async () => {
    await paymentHandler(cartID, user, dial, phone, email);
  };

  return (
    <CheckoutContainerStyle className="page-section">
      <Container>
        <div className="checkout-content">
          <Row>
            <Col sm={12} md={8} lg={9}>
              {cartArray.length < 1 ? (
                <div className="trending-noCourses">
                  There are no items in Cart
                </div>
              ) : (
                <div
                  className="checkout-billing-details"
                  style={{ display: checkoutPage === 2 ? "none" : "" }}
                >
                  <div className="checkout-billing-details-part">
                    <div className="checkout-billing-details-title">
                      Billing Details
                    </div>

                    <div className="checkout-billing-details-inputs row">
                      <div className="form-group col-md-4">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={firstName}
                          onChange={handleFirstName}
                          onBlur={()=>{setIsBlured({...isBlured,
                                                    "firstName":true})
                                  }}
                          required
                          style={{
                            border:
                              (errMsg.firstName && isBlured.firstName)?"1px solid red":'',
                          }}
                        />
                      {isBlured.firstName && errMsg.firstName !== "" && (
                          <ErrorComponent title={errMsg.firstName} />
                        )}
                      </div>

                      <div className="form-group col-md-4">
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={handleLastName}
                          onBlur={()=>{setIsBlured({...isBlured,
                                                    "lastName":true})
                                  }}
                          required
                          style={{
                            border:
                              (errMsg.lastName && isBlured.lastName)?"1px solid red":'',
                          }}
                        />
                      {isBlured.lastName && errMsg.lastName !== "" && (
                          <ErrorComponent title={errMsg.lastName} />
                        )}
                      </div>
                      <div className="form-group col-md-4">
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={companyName}
                          onChange={handleCompanyName}
                          required
                        />
                      </div>

                      <div
                        className="form-group col-md-6"
                        style={{ display: "flex" }}
                      >
                        <select
                          style={{ width: 70, padding: 2 }}
                          name="number"
                          id="number"
                          value={dial}
                          onChange={handleDial}
                          className="checkout-selectDial"
                        >
                          <option value="91">+91 (India)</option>
                          <option value="1">+1 (US)</option>
                          <option value="86">+86 (China)</option>
                          <option value="81">+81 (Germany)</option>
                          <option value="49">+49 (UK)</option>
                          <option value="39">+39 (Italy)</option>
                          <option value="1">+1 (Canada)</option>
                          <option value="82">+82 (South Korea)</option>
                          <option value="43">+43 (Australia)</option>
                          <option value="62">+62 (Indonesia)</option>
                          <option value="966">+966 (Saudi Arabia)</option>
                          <option value="41">+41 (Switzerland)</option>
                        </select>
                        <div style={{ width: "100%", marginLeft: 10 }}>
                          <input
                            type="text"
                            placeholder="Phone"
                            value={phone}
                            onChange={handlePhone}
                            onBlur={()=>{setIsBlured({...isBlured,
                                                      "phone":true})
                                    }}
                            required
                            style={{
                              border:
                                (isBlured.phone && errMsg.phone) ?"1px solid red":'',
                            }}
                          />
                        {isBlured.phone && errMsg.phone !== "" && (
                            <ErrorComponent title={errMsg.phone} />
                          )}
                        </div>
                      </div>

                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          placeholder="Email"
                          value={email}
                          onChange={handleEmail}
                          onBlur={()=>{setIsBlured({...isBlured,
                                                    "email":true})
                                  }}
                          required
                          style={{
                            border: (isBlured.email && errMsg.email)?"1px solid red":'',
                          }}
                        />
                      {isBlured.email &&  errMsg.email !== "" && (
                          <ErrorComponent title={errMsg.email} />
                        )}
                      </div>

                    </div>
                  </div>

                  <div className="checkout-billing-details-footer">
                    <div className="checkout-billing-details-btn-container">
                      <div
                        className={
                          blockBtn
                            ? `checkout-billing-footer-btn-blocked checkout-billing-details-footer-btn`
                            : "checkout-billing-details-footer-btn"
                        }
                        onClick={handleSaveAndContinue}
                      >
                        Save & Continue
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="checkout-billing-details"
                style={{ display: checkoutPage === 1 ? "none" : "" }}
              >
                <div className="checkout-billing-details-part">
                  <div className="checkout-billing-details-title">
                    Billing Details
                    <div
                      className="checkout-billing-details-footer-btn"
                      style={{marginTop:0}}
                      onClick={() => setCheckoutPage(1)}
                    >
                      Edit
                    </div>
                  </div>
                  <div className="checkout-billing-input-container">
                    <div className="billing-half-width">
                      <b>Full Name:</b>{" "}
                      {gender + " " + firstName + " " + lastName}
                    </div>
                    <div className="billing-half-width">
                      <b>Company:</b> {companyName}
                    </div>
                  </div>
                  <div className="checkout-billing-input-container">
                    <div className="billing-half-width">
                      <b>Email:</b> {email}
                    </div>
                    <div className="billing-half-width">
                      <b>Phone:</b> {dial + " " + phone}
                    </div>
                  </div>
                </div>

                <div className="payment-method-container">
                  <div className="payment-title">Select Payment Method </div>
                  <div
                    className="checkout-billing-details-footer-btn"
                    onClick={razorpayAPIs}
                  >
                    Pay with RazorPay
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <div className="cartPage-summary checkout-order-summary">
                <div className="cartPage-summary-details">
                <h2 className="cartPage-summary-course-head">Summary</h2>
                  {/* {cartArray.map((course) => (
                    <div
                      className="cartPage-summary-course"
                      key={course.cartItemCard.id}
                    >
                      <div className="cartPage-summary-courseRow">
                        <div>{course.cartItemCard.title}</div>
                        <div>₹ {course.cartItemCard.currentPrice}</div>
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
                    <div className="cartPage-summary-courseRow courseRow-item">
                      <div>Price <span style={{color:'#303030'}}>({cartArray.length} items)</span>: </div>
                      <div>₹ {cartTotalDiscount + cartTotalAmount}</div>
                    </div>

                    <div className="cartPage-summary-courseRow courseRow-item green">
                      <div>Discount: </div>
                      <div><span>-₹ {cartTotalDiscount}</span></div>
                    </div>
                  </div>
                  {/*<div className="cartPage-summary-course">
                    <div className="cartPage-summary-courseRow courseRow-subtotal">
                      <div>Subtotal: </div>
                      <div>₹ {cartTotalAmount}</div>
                    </div>

                    <div className="cartPage-summary-courseRow courseRow-gst">
                      <div>GST 18%: </div>
                      <div>₹ {gstTax}</div>
                    </div>
                  </div>*/}

                  <div className="cartPage-summary-course">
                    <div className="cartPage-summary-courseRow checkout-total">
                      <div>Total Amount: </div>
                      <div>₹ {cartTotalAmount}</div>
                    </div>
                  </div>
                  <div className="cartPage-summary-course">
                    <div className="cartPage-summary-courseRow checkout-totalDisc">
                      <div>Total Savings: </div>
                      <div> ₹ {cartTotalDiscount}</div>
                    </div>
                  </div>

                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </CheckoutContainerStyle>
  );
};

export default Checkout;
