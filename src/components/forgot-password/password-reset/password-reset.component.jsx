import {connect} from "react-redux";
import React, {useState, Suspense} from 'react';
import {useHistory} from 'react-router-dom';
import {resetPasswordStart} from "../../../redux/signup/signup.actions";
import FullPageLoader from '../../../common/fullpage-loader/FullPageLoader';
import {
    FormInputButton,
    FormInputWrapper,
    ErrorMessage,
    SignupWrapper,
    SignupWrapperContainer,
    FormInput
} from "../../form-input/form-input.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { LoginSignupContainer, LoginSignupModal } from "../../../containers/auth-page/auth.styles";
import {createStructuredSelector} from "reselect";
import {selectResetPassword, selectResetPasswordError} from "../../../redux/signup/signup.selectors";
import loginLeft from "../../../assets/login-left.svg";
import logo from "../../../assets/logo.png";
//import './password-reset.styles.scss';

const PasswordResetComponent = (props) => {
   
    const SuccessPasswordReset = () => {
        return (<SignupWrapperContainer className={"password-reset-wrapper"} style={{minHeight:'600px'}}><SignupWrapper>
            <h2>Password is reset successfully please login</h2>
        </SignupWrapper></SignupWrapperContainer>)
    }

    const FailurePasswordReset = ({resetPassword, resetPasswordError}) => {
        const [password, setPassword] = useState("");
        const history= useHistory()
        const [confirmPassword, setConfirmPassword] = useState("");
        const [errorMessage, setErrorMessage] = useState("");
        const [showPassword,setShowPassword] = useState(false)
        const [showConfirmPassword, setShowConfirmPassword] = useState(false)

        const handleShowPassword = () => setShowPassword(!showPassword)
        const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword)
        const handleSubmitResetPassword = () => {
            const queryString = window.location.search;
            console.log(queryString);
            const params = new URLSearchParams(queryString);
            let code = params.get("code");
            console.log(`code is ${code} password is ${password}`);
            if (password === confirmPassword) {
                resetPassword(code, password);
            } else {
                setErrorMessage("Passwords do not match");
            }
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
                    <SignupWrapperContainer>
            <SignupWrapper style={{ width: '100%' }}>
                <h2>Reset password</h2>
                <FormInput>
                    <FormInputWrapper>
                        <i className={"fas fa-lock"}/>
                        <input id={"password"} name="password" value={password}
                            type={showPassword?'text':'password'}
                            onChange={event => {
                                setPassword(event.target.value);
                            }}
                            placeholder={"Password"}/>
                        <div onClick={handleShowPassword}> {showPassword?"Hide":"Show"}</div>
                    </FormInputWrapper>
                </FormInput>
                <FormInput>
                <FormInputWrapper>
                    <i className={"fas fa-lock"}/>
                    <input id={"confirmPassword"} name="confirmPassword" value={confirmPassword}
                           type={showConfirmPassword?'text':'password'}
                           onChange={event => {
                               setConfirmPassword(event.target.value);
                           }}
                           placeholder={"Confirm Password"}/>
                    <div onClick={handleShowConfirmPassword}> {showConfirmPassword?"Hide":"Show"}</div>
                </FormInputWrapper>
                </FormInput>
                <FormInput>
                <FormInputWrapper style={{ height: "auto" }}>
                    <ul style={{ margin: 0, padding: 0, paddingLeft: 20 }}>
                          <li style={{color:password.length>=6?'green':'red'}}>Minimum 6 characters</li>
                          <li style={{color:password.length<=20?'green':'red'}}>Maximum 20 characters</li>
                          <li style={{color:/\d/.test(password)?'green':'red'}}>At least 1 number</li>
                          <li style={{color:/[@#$%]+/.test(password)?'green':'red'}}>At least 1 special character: @#$%</li>
                          <li style={{color:password.toUpperCase() != password?'green':'red'}}>At least 1 lowercase character</li>
                          <li style={{color:password.toLowerCase() != password?'green':'red'}}>At least 1 uppercase character</li>
                    </ul>
                </FormInputWrapper>
                </FormInput>
                <FormInputButton type="submit" value="Submit"
                                 onClick={handleSubmitResetPassword}>Submit</FormInputButton>
                {errorMessage && <ErrorMessage resetPasswordError large>{errorMessage}</ErrorMessage>}
                {resetPasswordError && <ErrorMessage large center>{resetPasswordError.message}</ErrorMessage>}

            </SignupWrapper></SignupWrapperContainer>
                    </div> 
                  </div>
                </LoginSignupContainer>
              </LoginSignupModal>
            </Suspense>
          </React.Fragment>
        
        );
    }

    if (props.isPassswordReset) {
        return <SuccessPasswordReset />
    } else {
        return <FailurePasswordReset  {...props} />
    }
};

const mapStateToProps = createStructuredSelector({
    isPassswordReset: selectResetPassword,
    resetPasswordError: selectResetPasswordError
});


const mapDispatchToProps = dispatch => ({
    resetPassword: (code, password) => dispatch(resetPasswordStart(code, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordResetComponent);
