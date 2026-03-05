import {connect} from "react-redux";
import React, {useState} from 'react';
import {forgotPasswordStart} from "../../redux/signup/signup.actions";
import {
    FormInput,
    FormInputButton,
    FormInputWrapper,
    SignupWrapper,
    ErrorMessage,
    SuccessMessage,
    SignupWrapperContainer
} from "../form-input/form-input.styles";
import ReCAPTCHA from "react-google-recaptcha";
import {createStructuredSelector} from "reselect";
import {selectForgotPasswordSentSuccess,
        selectSignupError, selectForgotPasswordLoading} from "../../redux/signup/signup.selectors";
import LoaderGif from './../../styles/images/loading_spinner.gif';

const ForgotPasswordComponent = ({forgotPasswordStart, forgotPasswordSentSuccess, signupError, forgotPasswordLoading}) => {
    const [email, setEmail] = useState("");
    const [recaptcha, setRecaptcha] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMsg, setSuccessMsg] = useState(false)

    const handleSubmitForgotPassword = () => {
        console.log(`email is ${email}, recaptcha is ${recaptcha}`);
        if (process.env.NODE_ENV !== 'production' || recaptcha) {
            if (email) {
                forgotPasswordStart(email);
                setErrorMessage("")
                setSuccessMsg(true)
            } else {
                setErrorMessage("Email is missing");
                setSuccessMsg(false)
                setTimeout(() => {
                                      setErrorMessage("")
                                 }, 5000)
            }
        } else {
            setErrorMessage("Recaptcha has not be verified");
            setSuccessMsg(false)
            setTimeout(() => {
                                  setErrorMessage("")
                             }, 5000)
        }
    }

    return (
        <SignupWrapperContainer>
           <img src={LoaderGif} alt='' style={{display:forgotPasswordLoading?"":"none"}} />
            {!successMsg && <SignupWrapper>


                <h2>Forgot Password?</h2>
                <p>Resetting the password is easy. Simply enter your registered email address!</p>

                {!forgotPasswordLoading &&
                  <React.Fragment>
                      <FormInput>
                          <FormInputWrapper>
                              <i className={"fas fa-envelope"}/>
                              <input id={"email"} name="email" type={"text"} value={email} onChange={event => {
                                  setEmail(event.target.value);
                              }}
                                  placeholder={"Email"}/>
                          </FormInputWrapper>
                      </FormInput>

                      {process.env.NODE_ENV === 'production' ? <ReCAPTCHA
                          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                          onChange={(value) => {
                              setRecaptcha(value)
                          }}
                      /> : null}



                             <FormInputButton type="submit" value="Submit"
                                              onClick={handleSubmitForgotPassword}>Submit</FormInputButton>
                   </React.Fragment>
                  }

                {errorMessage
                && (
                    <ErrorMessage style={{marginTop:'10px'}} large>{errorMessage}</ErrorMessage>
                )}

                {signupError && <ErrorMessage style={{marginTop:'10px'}} large>{signupError.message}</ErrorMessage>}

            </SignupWrapper>}

            {forgotPasswordSentSuccess && successMsg &&
             <SignupWrapper>
               {!forgotPasswordLoading &&
               <React.Fragment>
                 <h2>Password Recovery Email Sent!</h2>
                 <p>We have sent a reset password email to {email} <br/>
                    Please click the link to reset password.</p>
                 <p>Didn't receive the email yet? <br/>
                     Please check your spam folder; or <span className="signup-span"
                                                             onClick={handleSubmitForgotPassword}>resend</span> the email!</p>
                  {/*<p className="resetPassowrd-faq">Facing Trouble ? Please refer FAQs</p>*/}

                 {signupError && <ErrorMessage style={{marginTop:'10px'}} large>{signupError.message}</ErrorMessage>}
               </React.Fragment>
               }

             </SignupWrapper>
            }
          </SignupWrapperContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    forgotPasswordStart: (email) => dispatch(forgotPasswordStart(email))
});

const mapStateToProps = createStructuredSelector({
    signupError: selectSignupError,
    forgotPasswordSentSuccess: selectForgotPasswordSentSuccess,
    forgotPasswordLoading: selectForgotPasswordLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordComponent);
