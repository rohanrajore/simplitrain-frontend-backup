import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
//import "./viewBookings.css"
import ReactInputDigit from "./reactDigitInput.jsx";
import sendOTP from "./API/sendOTP.js";
import verifyOTP from "./API/verifyOTP.js"
import { store } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import { useDispatch } from "react-redux";
import { setRetrievedCourses} from "../../../redux/myCourses/myCourses-actions.js"
import LoaderGif from '../../../styles/images/loading_spinner.gif';
import { Col, Container, Row } from 'react-bootstrap';
import {ViewBookingStyle, PageTitleRow} from '../anonymousFlow/viewBookings.style';

const ViewBookings = props => {

  const [radioSelected, setRadioSelected] = useState("email")
  const [errMail, setErrMail] = useState("* Email required")
  const [errPhone, setErrPhone] = useState("* Phone required")
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [email, setEmail] = useState("")
  const [countryCode, setCountryCode] = useState("91")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [otpID, setOtpID] = useState()
  const [otpInputValue, setOtpInputValue] = useState()
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const history = useHistory()
  const handleEmail = e =>{ setEmail(e.target.value)
                            let errMsg = e.target.value===""?"* Email required":
                                                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)? "* Please enter valid email":""
                             setErrMail(errMsg)}

  const handleCountryCode = e =>setCountryCode(e.target.value)
  const handlePhoneNumber= e =>{setPhoneNumber(e.target.value)
                                let errMsg =  e.target.value===""?"* Phone required":
                                              isNaN(e.target.value)?"* Phone must contain only numbers":
                                              e.target.value.length!==10?"* Phone length must be 10 digits": ""
                                setErrPhone(errMsg)}

  const handleOtpInputValue = arg => setOtpInputValue(arg)

  const handleSendOtp = async () =>{
          await  setLoading(true)
             try{
                const response = await sendOTP(email,countryCode,phoneNumber,radioSelected)
                if(response.actionResult==="SUCCESS"){
                  setIsOtpSent(true)
                  setOtpID(response.otpID)
                }
                else{
                  store.addNotification({
                    title: `FAILURE`,
                    message: `Something wrong happened, please try again`,
                    type: "danger",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                      duration: 4000
                    },
                  })
                }
            }catch (e) {
              store.addNotification({
                title: `FAILURE`,
                message: `Something wrong happened, please try again`,
                type: "danger",
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 4000
                },
              })
            }
            setLoading(false)
  }

  const handleVerifyOTP = async () =>{
    await  setLoading(true)
    try {
        const response = await verifyOTP(otpInputValue, otpID)
        if(response.actionResult==="SUCCESS"){
           let obj={"courses":response.courseCardWrapper.courseCardList,
                    "anonymous":response.courseCardWrapper.anonymousUserID}
           dispatch(setRetrievedCourses(obj))
           history.push("/my-courses")
           store.addNotification({
             title: `SUCCESS`,
             message: `Courses retrieved successfully`,
             type: "success",
             container: "top-right",
             animationIn: ["animated", "fadeIn"],
             animationOut: ["animated", "fadeOut"],
             dismiss: {
               duration: 4000
             },
           })
        }
        else{
          store.addNotification({
            title: `FAILURE`,
            message: `Wrong OTP code. Please try again`,
            type: "danger",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 4000
            },
          })
        }
        console.log(response)
    }catch (e) {
      store.addNotification({
        title: `FAILURE`,
        message: `Wrong OTP code. Please try again`,
        type: "danger",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 4000
        },
      })
    }
    setLoading(false)
  }

  return(

  <ViewBookingStyle>

    <PageTitleRow>
        <div className="pageTitle page-section">
          <Container>
              <h4>View Bookings</h4>
          </Container>
        </div>
      </PageTitleRow>
    <div className="page-section">
    <Container>
      <div className="viewBookings-container">
          <div className="viewBookings-content">
              <div className="titleText">View Bookings</div>
              <div className="subText">( As a Guest User )</div>

              {!isOtpSent && !loading && <div className="viewBookings-radioBtns">
                <div onClick={()=>setRadioSelected("email")}>
                  <input type="radio"
                          id="email"
                          name="viewBookingType"
                          value="email"
                          checked={radioSelected==="email"}/>
                        <label htmlFor="email" className="vB-black">Email</label>
                </div>

                <div onClick={()=>setRadioSelected("phone")}>
                  <input type="radio"
                          id="phone"
                          name="viewBookingType"
                          value="phone"
                          checked={radioSelected==="phone"}/>
                        <label htmlFor="phone" className="vB-black">Phone Number</label>
                </div>
              </div>}

              { loading && <div style={{textAlign:'center'}}><img  src={LoaderGif} alt='' width="100px" /></div>}

              {!isOtpSent && radioSelected==="email" && !loading &&
                    <div className="viewBookings-email viewBookingsAbsolute">
                      <input type="text"
                              placeholder="Email Address"
                              value={email}
                              onChange={handleEmail}/>
                            {errMail.length>0 && <div className="viewBookingsAbsoluteItem">{errMail}</div>}
                    </div>  }

              {!isOtpSent && radioSelected==="phone" && !loading &&
                <div className="viewBookings-phone viewBookingsAbsolute">
                  <div className="phoneBooking-input">
                  <select name="number" id="number" value={countryCode} onChange={handleCountryCode}>
                    <option value="91">+91</option>
                    <option value="1">+1</option>
                    <option value="86">+86</option>
                    <option value="81">+81</option>
                    <option value="49">+49</option>
                    <option value="39">+39</option>
                    <option value="1">+1</option>
                    <option value="82">+82</option>
                    <option value="43">+43</option>
                    <option value="62">+62</option>
                    <option value="966">+966</option>
                    <option value="41">+41</option>
                  </select>

                  <input type="text"
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumber}/>
                  </div>

                      {errPhone.length>0 && <div className="viewBookingsAbsoluteItem">{errPhone}</div>}
                </div>

              }

              {isOtpSent && !loading && <ReactInputDigit otpInputValue={otpInputValue}
                                            handleOtpInputValue={handleOtpInputValue}/>}

              {!loading && <div style={{opacity:(radioSelected==="email" && errMail==="") ||
                                  (radioSelected==="phone" && errPhone==="")?"":"0.4"}}
                  className="qa-ask-submit viewBookings-btn"
                  onClick={ (radioSelected==="email" && errMail==="") ||
                            (radioSelected==="phone" && errPhone==="")?
                            isOtpSent?handleVerifyOTP
                                      :handleSendOtp
                              :()=>{}    }>
                  {isOtpSent?"Proceed":"Send OTP"}
              </div>}

              <div className="viewBookings-info">
                  <div className="vB-black"> <b>Hint:</b></div>
                  <div><b className="vB-black">(a) Registered User:</b> You can view your courses by clicking
                    on My Courses inside icon dropdown
                  </div>
                  <div><b className="vB-black">(b) Guest User:</b> You can view your courses by entering your
                    email or phone number, and then providing OTP code here.
                  </div>
              </div>
          </div>
      </div>
      </Container>
    </div>
  </ViewBookingStyle>

)};

export default ViewBookings;
