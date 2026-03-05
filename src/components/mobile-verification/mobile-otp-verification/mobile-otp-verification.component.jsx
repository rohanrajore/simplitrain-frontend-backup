import React, {useEffect, useState, Suspense} from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
// import "./mobile-otp-verification.styles.scss";
import {
    FormInputButton,
    FormInputWrapper,
    SignupWrapper,
    ErrorMessage,
    SignupWrapperContainer
} from "../../form-input/form-input.styles";
import FullPageLoader from '../../../common/fullpage-loader/FullPageLoader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import {selectMobileNumber, selectSignupType, selectSignupUserID} from "../../../redux/signup/signup.selectors";
import {
    selectMobileOtpSent,
    selectMobileOtpSentTime,
    selectMobileOtpVerificationError,
    selectMobileVerificationError
} from "../../../redux/signup/mobile-verification/mobile-verification.selectors"
import {
    mobileOtpSendStart,
    mobileVerifyOTP,
    resetMobileNumber
} from "../../../redux/signup/mobile-verification/mobile-verification.actions";
import {Helmet} from "react-helmet";
import {useHistory} from "react-router-dom";
import { LoginSignupContainer, LoginSignupModal } from "../../../containers/auth-page/auth.styles";
import loginLeft from "../../../assets/login-left.svg";
import logo from "../../../assets/logo.png";


const MobileOTPVerificationComponent = ({
                                            mobileNumber, signupUserID, loginType, resetMobileNumber, verifyMobileOTP,
                                            mobileOtpVerificationError, mobileVerificationError, mobileOtpSendStart,
                                            mobileOtpSent, mobileOtpSentTime
                                        }) => {
    const [otp, setOtp] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (!signupUserID || !mobileNumber || !loginType) {
            console.log(`signupUserID: ${signupUserID}, mobileNumber: ${mobileNumber}, loginType: ${loginType}`);
            setErrorMessage("Technical error redirecting to login");
        }
    }, [mobileNumber, signupUserID, loginType]);

    function handleResetMobile() {
        resetMobileNumber();
        history.push("/signup/verify-mobile");
    }

    function handleSendMobileOTP() {
        console.log(`otp is ${otp}, userID is ${signupUserID}, loginType is ${loginType}`);
        verifyMobileOTP(otp, signupUserID, loginType);
    }

    function resendOTP() {
        console.log("resending otp");
        mobileOtpSendStart(signupUserID, mobileNumber, "+91");
    }

    return (
        <React.Fragment>
        <Suspense fallback={<FullPageLoader loading={true} />}>
          <LoginSignupModal>
            {/*This div is backdrop for login component. So wherever you click outside of login component its this div, and it will close login component */}
            <div className="loginSignup-backdrop" onClick={()=> history.push('/')}></div>
            <LoginSignupContainer>
              {/* <button onClick={()=> history.push('/')} className="close-modal-button">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                />
              </button> */}
              <div className="login-leftContent">
                <img src={logo} onClick={()=> history.push('/')} className="auth-logo" />
                <img src={loginLeft} className="left-content-image" />
                <div className="login-content">
                  <h4 className="loginContent-header-tittle">Benefits of SimpliTrain Account</h4>
                  <div className="loginContent-itemContainer">
                    <div className="loginContent-item">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "20px", color: "#4F4F4F" }}
                      />
                      Fast & Secure Payments
                    </div>
                    <div className="loginContent-item">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "20px", color: "#4F4F4F" }}
                      />
                      Notifications & Reminders for Registered Trainings
                    </div>
                    <div className="loginContent-item">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "20px", color: "#4F4F4F" }}
                      />
                      Track History and your learning path
                    </div>
                    <div className="loginContent-item">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "20px", color: "#4F4F4F" }}
                      />
                      Become an Instructor & share your knowledge with the world
                    </div>
                    <div className="loginContent-item">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ marginRight: "20px", color: "#4F4F4F" }}
                      />
                      Amazing deals on trainings near your location
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="login-rightContent">
                <div className="login-content">
                <SignupWrapperContainer style={{minHeight:'600px'}}>
            <Helmet>
                <title>Enter OTP to verify mobile</title>
                {/*TODO description for robots*/}
                <meta name="description" content="Verify your mobile"/>
            </Helmet>
            <SignupWrapper className={'mobileVerificationWrapper'}>

                <div className={"mobileVerificationMessage"}>Sent an OTP to {mobileNumber}
                    <a href={"#"}
                       onClick={handleResetMobile}>(Change)</a> 
                       {/* {(mobileOtpSent ? " on " + mobileOtpSentTime : null)} */}
                </div>

                <FormInputWrapper style={{ width: '100%', marginBottom: 20 }}>
                    <i className={"fas fa-lock"}/>
                    <input id={"mobileOTP"} name="mobileOTP" autocomplete="off" type={"password"} value={otp} onChange={event => {
                        setOtp(event.target.value);
                    }} placeholder={"OTP"}/>
                    {errorMessage && <ErrorMessage large center>{errorMessage}</ErrorMessage>}
                </FormInputWrapper>

                <FormInputButton type="button" onClick={handleSendMobileOTP}>Submit</FormInputButton>

                <div className={"resendOTPText"}>Didn't receive the OTP? Check for the network! or <a
                   href={"#"} onClick={resendOTP}>resend</a> the OTP
                </div>

                {/* <div className={"faqText"}>Facing trouble? Please refer <a href={"#"}>FAQs</a></div> */}
                {mobileOtpVerificationError &&
                <ErrorMessage large center>{mobileOtpVerificationError.message}</ErrorMessage>}
                {mobileVerificationError && <ErrorMessage large center>{mobileVerificationError.message}</ErrorMessage>}
                

            </SignupWrapper>
        </SignupWrapperContainer>
                </div> 
              </div>
            </LoginSignupContainer>
          </LoginSignupModal>
        </Suspense>
      </React.Fragment>
        
    )
}


const mapStateToProps = createStructuredSelector({
    mobileNumber: selectMobileNumber,
    signupUserID: selectSignupUserID,
    loginType: selectSignupType,
    mobileOtpVerificationError: selectMobileOtpVerificationError,
    mobileVerificationError: selectMobileVerificationError,
    mobileOtpSent: selectMobileOtpSent,
    mobileOtpSentTime: selectMobileOtpSentTime
});

const mapDispatchToProps = dispatch => ({
    resetMobileNumber: () => dispatch(resetMobileNumber()),
    verifyMobileOTP: (mobileOTP, userId, loginType) => dispatch(mobileVerifyOTP(mobileOTP, userId, loginType)),
    mobileOtpSendStart: (userID, mobile, countryCode) => dispatch(mobileOtpSendStart(userID, mobile, countryCode))
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileOTPVerificationComponent);
