import React, { useState, Suspense } from "react";
import {useHistory} from 'react-router-dom';
// import ForgotPasswordComponent from "../../components/forgot-password/forgot-password.component";
import FullPageLoader from '../../common/fullpage-loader/FullPageLoader';
import PasswordResetComponent from "../../components/forgot-password/password-reset/password-reset.component";
// import "./login-signup.css";
// import LoginComponent from "../../components/login/login.component";
// import SignUpComponent from "../../components/sign-up/signup.component";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { LoginSignupModal, LoginSignupContainer } from "./auth.styles";
import loginLeft from "../../assets/login-left.svg";
import logo from "../../assets/logo.png";

const ForgotPasswordComponent = React.lazy(() =>
  import("../../components/forgot-password/forgot-password.component")
);

const LoginComponent = React.lazy(() =>
  import("../../components/login/login.component")
);

const SignUpComponent = React.lazy(() =>
  import("../../components/sign-up/signup.component")
);


function LoginAndSignupPage (props) {
  const history= useHistory()
  const { type, instructor } = useParams();
  // const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const switchToLoginComponent = () => {
    // setIsLogin(true);
    setShowForgotPassword(false);
  };
  const switchToSignUpComponent = (path) => {
    // setIsLogin(false);
    // setShowForgotPassword(false);
    history.push(`/auth/${path}`);
  };
  const handleShowForgotPassword = () =>
    setShowForgotPassword(!showForgotPassword);

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
                {
                  type === 'login' || type === 'signup'?
                    <div className="loginContent-header">
                      <div
                        onClick={()=> switchToSignUpComponent('login')}
                        className={`sign-in-btn ${ type === 'login' ? 'active' : null}`}
                      >
                        Sign In to SimpliTrain
                      </div>
                      <div
                        onClick={()=> switchToSignUpComponent('signup')}
                        className={`sign-in-btn ${ type === 'signup' ? 'active' : null}`}
                      >
                        Sign Up
                      </div>
                    </div>
                  :null
                }
                <div className="loginContent-body">
                    {
                      type === 'login'?
                        <LoginComponent
                          becomeInstructor={instructor}
                          handleShowForgotPassword={switchToSignUpComponent}
                        />
                      :type === 'signup'?
                        <SignUpComponent
                          becomeInstructor={instructor}
                        />
                      :type === 'forgotpassword'?
                        <ForgotPasswordComponent />
                      :type === 'mobile-verify'?
                          null
                      :null
                    }
                </div>
              </div> 
            </div>
          </LoginSignupContainer>
        </LoginSignupModal>
      </Suspense>
    </React.Fragment>
  );
};


export default LoginAndSignupPage;
