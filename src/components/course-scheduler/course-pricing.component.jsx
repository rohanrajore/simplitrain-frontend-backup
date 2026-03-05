import React, { Component } from "react";
import ComboBox from "../../common/combobox/combo-box";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import $ from "jquery";
import DatePickerComponent from "../../common/datepicker/date-picker-component";
//import './course-pricing.component.css';
import { CoursePriceTopForm } from '../course-scheduler/course-price.style';
import { Col, Container, Row } from 'react-bootstrap';

const currencyList = [
  { id: "inr", name: "INR", value: "INR" },
  { id: "usd", name: "USD", value: "USD" },
];

class CoursePricing extends Component {
  constructor(props) {
    super(props);
    var couponList = [];
    var couponRows = [];
    var rel = "0";
    if (
      props.fieldValues.couponList &&
      props.fieldValues.couponList.length > 0
    ) {
      couponList = props.fieldValues.couponList;
      for (var i = 0; i < couponList.length; i++) {
        let currRow = couponList[i];
        couponRows = couponRows.concat(
          <div key={"" + i} className="course-price-coupon-content">
            <Row>
              <Col>
                  <input
                    id="couponCode"
                    type="text"
                    className="course-price-coupon-element form-control"
                    placeholder="Specify coupon code"
                    defaultValue={currRow.couponCode}
                  />
              </Col>

              <Col>
                  <input
                    id="discountedCouponPrice"
                    type="text"
                    className="course-price-coupon-element form-control"
                    placeholder="Discounted price"
                    defaultValue={currRow.discountedCouponPrice}
                  />
              </Col>

              <Col>
                  <input
                    id="noOfCoupons"
                    type="text"
                    className="course-price-coupon-element form-control"
                    placeholder="No of coupons"
                    defaultValue={currRow.noOfCoupons}
                  />
              </Col>

              <Col>
                <div className="course-price-coupon-element">
                  <DatePickerComponent
                    value={new Date()}
                    datePickerId="startDate"
                    inputId="startDateInput"
                    className="form-control"
                  />
                </div>
              </Col>

              <Col>
                <div className="course-price-coupon-element">
                  <DatePickerComponent
                    value={new Date()}
                    datePickerId="endDate"
                    inputId="endDateInput"
                    className="form-control"
                  />
                </div>
              </Col>
          </Row>
          </div>
        );
      }
      rel += i - 1;
    } else {
      couponRows = couponRows.concat(
        <div key="0" className="course-price-coupon-content">
          <Row>
            <Col>
                <input
                id="couponCode"
                type="text"
                className="course-price-coupon-element form-control"
                placeholder="Specify coupon code"
              />
            </Col>
            <Col>
                <input
                id="discountedCouponPrice"
                type="text"
                className="course-price-coupon-element form-control"
                placeholder="Discounted price"
              />
            </Col>
            <Col>
                <input
                id="noOfCoupons"
                type="text"
                className="course-price-coupon-element form-control"
                placeholder="No of coupons"
              />
            </Col>
            <Col>
              <div className="course-price-coupon-element">
                <DatePickerComponent
                  value={new Date()}
                  datePickerId="startDate"
                  inputId="startDateInput"
                  className="form-control"
                />
              </div>
            </Col>
            <Col>
              <div className="course-price-coupon-element">
                <DatePickerComponent
                  value={new Date()}
                  datePickerId="endDate"
                  inputId="endDateInput"
                  className="form-control"
                />
              </div>
            </Col>
          </Row>
        </div>
      );
    }

    this.state = {
      couponRows: couponRows,
      couponList: props.fieldValues.couponList || [],
      rel: rel
    };

    this.state.currency = props.fieldValues.currency
      ? { id: "_1", name: props.fieldValues.currency }
      : { id: "", name: "" };
  }

  componentDidUpdate() {
    var data = {};

    this.setCurrency(this.refs["currency-ref"], data);
    this.setCouponList(this.refs["coupon-list"], data);

    if (this.props.saveValues) {
      this.props.saveValues(data);
    }
  }

  setCurrency = (currencyDOM, data) => {
    var inputGroupList = currencyDOM.querySelectorAll(".input-group");
    for (var i = 0; i < inputGroupList.length; i++) {
      data["currency"] = this.state.currency.name;
      if (data["currency"]) {
        data["actualPrice"] = (
          inputGroupList[i].querySelector("#actualPrice") || {}
        ).value;
        data["discountedPrice"] = (
          inputGroupList[i].querySelector("#discountedPrice") || {}
        ).value;
      }
    }
  };

  setCouponList = (couponListDOM, data) => {
    var inputGroupList = couponListDOM.querySelectorAll(".input-group");
    var couponObj = {
      couponCode: "",
      discountedCouponPrice: "",
      noOfCoupons: 0,
      startDate: null,
      endDate: null,
    };

    var couponList = [];
    for (var i = 0; i < inputGroupList.length; i++) {
      var tmpCouponObj = $.extend(true, {}, couponObj);
      tmpCouponObj.couponCode = (
        inputGroupList[i].querySelector("#couponCode") || {}
      ).value;
      if (tmpCouponObj.couponCode) {
        tmpCouponObj.discountedCouponPrice = (
          inputGroupList[i].querySelector("#discountedCouponPrice") || {}
        ).value;
        tmpCouponObj.noOfCoupons = (
          inputGroupList[i].querySelector("#noOfCoupons") || {}
        ).value;
        tmpCouponObj.startDate = (
          inputGroupList[i].querySelector("#startDateInput") || {}
        ).value;
        tmpCouponObj.endDate = (
          inputGroupList[i].querySelector("#endDateInput") || {}
        ).value;

        couponList.push(tmpCouponObj);
      }
    }
    data["couponList"] = couponList;
  };

  handleAddClick = (e) => {
    var rel = e.target.parentElement.parentElement.parentElement.getAttribute(
      "rel"
    );
    rel = parseInt(rel) + 1;
    let webId = "coupon-id" + rel;
    e.target.parentElement.parentElement.parentElement.setAttribute("rel", rel);

    var joined = this.state.couponRows.concat(
      <div key={rel} className="course-price-coupon-content">
        <Row>
            <Col>
              <input
                id="couponCode"
                type="text"
                className="course-price-coupon-element"
                placeholder="Specify coupon code"
                className="form-control"
              />
            </Col>

            <Col>
                <input
                  id="discountedCouponPrice"
                  type="text"
                  className="course-price-coupon-element"
                  placeholder="Discounted price"
                  className="form-control"
                />
            </Col>

            <Col>
              <input
                id="noOfCoupons"
                type="text"
                className="course-price-coupon-element"
                placeholder="No of coupons"
                className="form-control"
              />
            </Col>

            <Col>
              <div className="course-price-coupon-element">
                <DatePickerComponent
                  value={new Date()}
                  datePickerId="startDate"
                  inputId="startDateInput"
                  className="form-control"
                />
              </div>
            </Col>

            <Col>
              <div className="course-price-coupon-element">
                <DatePickerComponent
                  value={new Date()}
                  datePickerId="endDate"
                  inputId="endDateInput"
                  className="form-control"
                />
              </div>
            </Col>
        </Row>

      </div>
    );
    this.setState({ couponRows: joined });
  };

  changeCurrency = (e, values) => {
    this.setState({ currency: values });
  };


  render() {
        const{
          fieldValues,
          handleActualPrice,
          handleDiscountedPrice
        }=this.props
    return (
      <CoursePriceTopForm>
      <div className="schedule-title">Pricing</div>
      <form className="course-price-topForm">
        <div className="form-group" ref="currency-ref">
          <label htmlFor="coursePrice" className="course-price-title-label mb15">Specify the price of the course</label>
          <Row>
            <Col sm={2} xs={12}>
              <div className="course-price-element">
                <ComboBox
                  id="currency"
                  name="currency"
                  optionsList={currencyList}
                  label="Currency"
                  className="form-control"
                  onChange={this.changeCurrency}
                  defaultValue={this.state.currency}
                />
              </div>
            </Col>
            <Col sm={3} xs={12}>
              <input
                id="actualPrice"
                name="actualPrice"
                type="text"
                className="course-price-element form-control"
                placeholder="Actual price"
                defaultValue={fieldValues.actualPrice}
                onChange={handleActualPrice}
              />
            </Col>
            <Col sm={3} xs={12}>
              <input
                id="discountedPrice"
                name="discountedPrice"
                type="text"
                className="course-price-element form-control"
                placeholder="Discounted price"
                defaultValue={fieldValues.discountedPrice}
                onChange={handleDiscountedPrice}
              />
            </Col>
          </Row>
        </div>
        <div className="form-group" ref="coupon-list">
          <div className="add-more-coupons-flex">
              <label htmlFor="userSocialProfile" className="course-price-title-label">Coupon code for additional discount</label>
              <IconButton
                color="primary"
                aria-label="add a row"
                className="add-more-coupons-icon"
                onClick={this.handleAddClick}
                rel={this.state.rel}
              >
                <AddCircleIcon />
              </IconButton>
          </div>
          {this.state.couponRows}
        </div>
      </form>
      </CoursePriceTopForm>
    );
  }
}

export default CoursePricing;
