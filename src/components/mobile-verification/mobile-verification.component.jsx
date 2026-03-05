import React, {useEffect, useState, Suspense} from "react";
import {useHistory} from 'react-router-dom';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
// import "./mobile-verification.styles.scss";
import FullPageLoader from '../../common/fullpage-loader/FullPageLoader';
import {
    FormInputButton,
    input,
    MobileInputWrapper,
    SignupWrapper,
    ErrorMessage,
    SignupWrapperContainer
} from "../form-input/form-input.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import {selectSignupUserID} from "../../redux/signup/signup.selectors";
import {mobileOtpSendStart} from "../../redux/signup/mobile-verification/mobile-verification.actions";
import {Helmet} from "react-helmet";
import {selectMobileVerificationError} from "../../redux/signup/mobile-verification/mobile-verification.selectors";
import { LoginSignupContainer, LoginSignupModal } from "../../containers/auth-page/auth.styles";
import loginLeft from "../../assets/login-left.svg";
import logo from "../../assets/logo.png";

const MobileVerificationComponent = ({mobileOtpSendStart, signupUserID, mobileVerificationError}) => {
    const [mobile, setMobile] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const history= useHistory()
    useEffect(() => {
        if (!signupUserID) {
            console.log("signupUserID is missing");
            // history.push("/login");
            setErrorMessage("Technical error. Redirecting to login page");
        } else {
            console.log(`signupUserID is ${signupUserID}`);
        }
    }, [signupUserID]);

    function handleSendOtp() {
        console.log("Mobile number set is " + mobile);
        console.log("userID is " + signupUserID);
        mobileOtpSendStart(signupUserID, mobile, "+91");
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
                        <title>Verify your mobile</title>
                        {/*TODO description for robots*/}
                        <meta name="description" content="Verify your mobile"/>
                    </Helmet>
                    <SignupWrapper className={'mobileVerificationWrapper'}>
                        <div className={"mobileNumberMessage"}>Your SimpliTrain account will be associated with updated Mobile
                            Number!
                        </div>

                        <MobileInputWrapper style={{ width: '100%', marginBottom: 20 }}>
                            <div className="mobile-input-control countryCode">
                                {/*<i className={"fas fa-phone fa-2x"}/>*/}

                                <div className={"countryCode-wrapper"}>
                                    <select defaultValue={"91"} name="countryCode" id="countryCode">
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
                                </div>
                            </div>

                            <div className="mobile-input-control">
                                <input id={"mobile"} type={'tel'} size={10} pattern={"[0-9]{3,10}"}
                                    name={'mobile'} value={mobile} autocomplete="off" onChange={event => {
                                    setMobile(event.target.value);
                                }}
                                    title="Number with max 10 decimals"
                                    placeholder={"Mobile"} maxLength={10} required/></div>
                        </MobileInputWrapper>


                        <FormInputButton type="submit" value="Submit" onClick={handleSendOtp}>Send OTP</FormInputButton>

                        {/* <div className={"faqText"}>Facing trouble? Please refer <a href={"#"}>FAQs</a></div> */}

                        {mobileVerificationError && <ErrorMessage large center>{mobileVerificationError.message}</ErrorMessage>}
                        {errorMessage && <ErrorMessage large center>{errorMessage}</ErrorMessage>}
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
    signupUserID: selectSignupUserID,
    mobileVerificationError: selectMobileVerificationError
});

const mapDispatchToProps = dispatch => ({
    mobileOtpSendStart: (userID, mobile, countryCode) => dispatch(mobileOtpSendStart(userID, mobile, countryCode)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileVerificationComponent);
