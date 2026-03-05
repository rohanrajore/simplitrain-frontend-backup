import React,{useState} from 'react';
import "./thirdStep.css";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const customStyles = {
dropdownIndicator: () => ({
  cursor:"pointer",
}),
option: (provided, state) => ({
  ...provided,
  cursor:"pointer"
}),
valueContainer: (provided, state) => ({
  ...provided,
  cursor:"pointer"
}),
}

// Those are options currency select can be
const currencyOptions =[{"key":"001","value":"INR","label":"INR"},
                           {"key":"002","value":"USD","label":"USD"},
                           {"key":"003","value":"EUR","label":"EUR"}]
// This is default coupon object when clicking on addCoupon
const defaultCoupon = {"id":Math.random().toString(36).substr(2, 9),
                       "code":"",
                       "discountedPrice":"",
                       "noOfCoupons":"",
                       "startDate": new Date(),
                       "endDate": new Date()}

const ThirdStep = props => {

  const [currency,setCurrency] = useState(currencyOptions[0])
  const [actualPrice, setActualPrice] = useState()
  const [discountedPrice, setDiscountedPrice] = useState()
  const [couponsArray, setCouponsArray] = useState([defaultCoupon])

  const updateCurrency = value => setCurrency(value)
  const updateCouponInput = (id,name,value) =>{
     let newCouponsArray = [...couponsArray]
     for(let i=0; i< newCouponsArray.length; i++){
        if(id===newCouponsArray[i].id){
          newCouponsArray[i][name]=value
          //This case handles if startDate is bigger than endDate, we put immediately endDate to that value also
          if(newCouponsArray[i]["startDate"]>newCouponsArray[i]["endDate"]){
            newCouponsArray[i].endDate=newCouponsArray[i].startDate
          }
          // This breaks our for loop because our field is updated, and no need to loop through other coupons...
          break;
        }
     }
     setCouponsArray(newCouponsArray)
  }

  const addNewCoupon = () =>{
    let newCouponsArray = [...couponsArray]
    newCouponsArray.push({"id":Math.random().toString(36).substr(2, 9),
                           "code":"",
                           "discountedPrice":"",
                           "noOfCoupons":"",
                           "startDate": new Date(),
                           "endDate": new Date()})
    setCouponsArray(newCouponsArray)
  }

  const deleteCoupon = id =>{
    let newCouponsArray =[...couponsArray]
    setCouponsArray(newCouponsArray.filter(coupon=>coupon.id!==id))
  }

  return(
  <div className="stepper-stepContainer">
      <div className="stepper-stepTitle">Pricing</div>
      <div className="onsite-thirdStep">
          <div>
              <div className="third-title">Specify the price of the Course</div>
              <div className="third-price">
                <Select
                      className="select-location"
                      styles={customStyles}
                      options={currencyOptions}
                      defaultValue={currencyOptions[0]}
                      value={currency}
                      onChange={updateCurrency}
                  />
                <input type="text"
                       className="third-input"
                       placeholder="Actual Price"
                       value={actualPrice}
                       onChange={(e)=>setActualPrice(e.target.value)}/>
                <input type="text"
                       className="third-input"
                       placeholder="Discounted Price"
                       value={discountedPrice}
                       onChange={(e)=>setDiscountedPrice(e.target.value)}/>
              </div>
          </div>

          <div>
              <div className="third-title">
                  Corporate discount code
                  <FontAwesomeIcon icon={faPlusCircle}
                                   onClick={addNewCoupon}
                                   />
              </div>
              {couponsArray.map(coupon=>(
                <div className="third-couponContainer" key={coupon.id}>
                  <input type="text"
                         className="third-input"
                         placeholder="Specify Coupon code"
                         value={coupon.code}
                         onChange={(e)=>updateCouponInput(coupon.id,"code",e.target.value)}
                         />
                  <input type="text"
                         className="third-input"
                         placeholder="Discounted Price"
                         value={coupon.discountedPrice}
                         onChange={(e)=>updateCouponInput(coupon.id,"discountedPrice",e.target.value)}
                         />
                  <input type="text"
                         className="third-input"
                         placeholder="No of Coupons"
                         value={coupon.noOfCoupons}
                         onChange={(e)=>updateCouponInput(coupon.id,"noOfCoupons",e.target.value)}
                         />
                  <DatePicker
                              className="third-datePicker"
                              id="startDate"
                              minDate={new Date()}
                              selected={coupon.startDate}
                              onChange={(date)=>updateCouponInput(coupon.id,"startDate",date)}
                              dateFormat="EEE, dd MMM yy"/>
                  <DatePicker
                              className="third-datePicker"
                              id="startDate"
                              minDate={coupon.startDate}
                              selected={coupon.endDate}
                              onChange={(date)=>updateCouponInput(coupon.id,"endDate",date)}
                              dateFormat="EEE, dd MMM yy"/>
                  <div onClick={()=>deleteCoupon(coupon.id)}>
                      Delete
                  </div>
                </div>
              ))}
          </div>
      </div>
      <div className="onsite-firstStep-btn thirdStepBtn"
           onClick={props.handleNextStep}>Next
      </div>
  </div>
)}

export default ThirdStep;
