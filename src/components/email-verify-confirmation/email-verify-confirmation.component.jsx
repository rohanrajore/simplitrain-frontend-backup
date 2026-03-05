import React, {useEffect, useState, Suspense} from "react";
import {connect, useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {selectSignupUserEmail, selectSignupUserID} from "../../redux/signup/signup.selectors";
import FullPageLoader from '../../common/fullpage-loader/FullPageLoader';
import { LoginSignupContainer, LoginSignupModal } from "../../containers/auth-page/auth.styles";
// import "./email-verify-confirmation.styles.scss";
// import './email-verify-confirmation.styles.scss';
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
import {emailLinkSendStart} from "../../redux/signup/email-verification/email-verification.actions";
import {
    selectEmailLinkSendError,
    selectEmailLinkSent,
    selectEmailLinkSentTime
} from "../../redux/signup/email-verification/email-verification.selectors";
import {
    emailLinkDisableErr,
} from "../../redux/signup/email-verification/email-verification.actions";
import {Helmet} from "react-helmet";
import loginLeft from "../../assets/login-left.svg";
import logo from "../../assets/logo.png";

const EmailVerifyLinkSentConfirmationComponent = ({signupUserEmail, signupUserID, emailLinkSent, emailLinkSentTime, emailLinkSendError, emailLinkSendStart, ...props}) => {
    const [errorMessage, setErrorMessage] = useState("");
    const history= useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        if (!signupUserEmail || !signupUserID) {
            console.log(`signupUserEmail: ${signupUserEmail}, signupUserID: ${signupUserID}`);
            setErrorMessage("Technical error. Redirecting to login.");
            setTimeout(() => {
                                  setErrorMessage("")
                             }, 5000)
        }
        if (emailLinkSendError) {
            setErrorMessage(emailLinkSendError.message);
            setTimeout(() => {
                                  setErrorMessage("")
                             }, 5000)
        }
        else{
          setErrorMessage("")
        }
    }, [signupUserEmail, signupUserID, emailLinkSendError]);

    useEffect(()=>{
      setErrorMessage("")
      dispatch(emailLinkDisableErr())
    },[])

    function handleResendEmail() {
        console.log("Inside handleResendEmail");
        emailLinkSendStart(signupUserID);
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
                        Become Instructor & share your knowledge with the world
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
                    <SignupWrapperContainer>
                        <Helmet>
                            <title>Link for verifying email has been sent </title>
                            {/*TODO description for robots*/}
                            <meta name="description" content="Verification link for email has been sent"/>
                        </Helmet>
                        <SignupWrapper className={'emailOtpSentWrapper'}>
                            <h2>Account activation key sent!</h2>
                            <p className="emailLinkSentWrapper">{(emailLinkSent ? "A mail was sent again at " + emailLinkSentTime : null)}</p>
                            <div><p className={"emailMessage"}>
                                We have sent account activation email to {signupUserEmail}.<br />Please click the link to activate the account.</p></div>
                            <div><p>Didn't receive the email yet?<br />Please check your spam folder; or <a href={"#"} onClick={handleResendEmail}>resend</a> the email!</p>
                            </div>

                            {errorMessage && <ErrorMessage large center>{errorMessage}</ErrorMessage>}

                            {/* <div className={"faqText"}>Facing trouble? Please refer <a href={"#"}>FAQs</a></div> */}
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
    signupUserEmail: selectSignupUserEmail,
    signupUserID: selectSignupUserID,
    emailLinkSent: selectEmailLinkSent,
    emailLinkSentTime: selectEmailLinkSentTime,
    emailLinkSendError: selectEmailLinkSendError
});

const mapDispatchToProps = dispatch => ({
    emailLinkSendStart: (userID) => dispatch(emailLinkSendStart(userID))
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailVerifyLinkSentConfirmationComponent);
