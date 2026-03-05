import { connect } from "react-redux";
import React, { useState } from "react";
import {
  FormInput,
  ErrorMessage,
  FormInputButton,
  FormInputWrapper,
} from "../form-input/form-input.styles";
// import "./login.styles.scss";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import * as Yup from "yup";
import {
  emailSignInStart,
  facebookSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";
import { selectError } from "../../redux/user/user.selectors";
import LinkedinLogin from "../social-media/linkedin-signin/linkedin-signin.component";
import { LoginContainer } from "./login.styles";
import { Helmet } from "react-helmet";
import LoginOr from "../../assets/login-or-dvider.svg";
import GoolgeIcon from "../../assets/google.svg";
import FacebookIcon from "../../assets/facebook.svg";
import LinkedinIcon from "../../assets/linkedin.svg";
import { useHistory } from "react-router-dom";

//TODO make the facebook, google, linkedin clientids as configurable params
const LoginComponent = (props) => {
  const history = useHistory("");
  const responseFacebook = (response) => {
    console.log(response);
    const accessToken = response.accessToken;
    console.log("accessToken: " + accessToken);
    props.facebookSignInStart(accessToken, props.becomeInstructor);
  };

  const facebookComponentClicked = () => {
    console.log("Facebook component is clicked");
  };

  const responseGoogle = (response) => {
    console.log(response);
    const idToken = response.tokenObj.id_token;
    console.log("idToken: " + idToken);
    props.googleSignInStart(idToken, props.becomeInstructor);
  };

  //TODO move to config properties
  function responseLinkedin() {
    console.log("LinkedIn button is clicked");
    let clientId = process.env.REACT_APP_LINKEDIN_CLIENTID;
    let redirectUri = process.env.REACT_APP_LINKEDIN_REDIRECT_URI;
    let state = "bRpChjbsgMf7DEh0xY0u";
    let scope = encodeURI(process.env.REACT_APP_LINKEDIN_SCOPE);
    let redirectUrlWithBecomeInstructorFlag = "";
    if (props.becomeInstructor) {
      redirectUrlWithBecomeInstructorFlag = encodeURIComponent(
        redirectUri + `?becomeInstructor=true`
      );
    } else {
      redirectUrlWithBecomeInstructorFlag = encodeURIComponent(
        redirectUri + `?becomeInstructor=false`
      );
    }
    let url = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrlWithBecomeInstructorFlag}&state=${state}&scope=${scope}`;
    console.log(
      `redirectUri: ${redirectUrlWithBecomeInstructorFlag}, url : ${url}`
    );
    window.location.href = url;
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      const { email, password } = values;
      props.emailSignInStart(email, password);
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [hideForgotPassword, setHideForgotPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <LoginContainer>
      <Helmet>
        <title>Forgot password</title>
        <meta name="description" content="Forgot password" />
      </Helmet>
      <div className={"buttonWrapper"}>
        <span className={"socialButtonsText"}>Login with</span>
        <GoogleLogin
          className={"googleBtn"}
          clientId={process.env.REACT_APP_GOOGLE_CLIENDID}
          buttonText=""
          icon={false}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        >
          <img src={GoolgeIcon} style={{ width: 24 }} />
        </GoogleLogin>
        {/* <FacebookLogin
          appId="522738155298566"
          autoLoad={false}
          size={"small"}
          fields="name,email,picture"
          textButton=""
          cssClass="facebookBtn"
          icon={<img src={FacebookIcon} style={{ width: 24 }} />}
          onClick={facebookComponentClicked}
          callback={responseFacebook}
        />
        <LinkedinLogin icon={<img src={LinkedinIcon} style={{ width: 24 }} />} className={"linkedInBtn"} onClick={responseLinkedin} /> */}
      </div>

      <div className={"orText"}>
        <img src={LoginOr} />
      </div>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <FormInput>
          <FormInputWrapper error={formik.errors.email ? true : false}>
            <i className={"fas fa-envelope"} />
            <input
              id={"email"}
              name="email"
              autoComplete={false}
              {...formik.getFieldProps("email")}
              placeholder={"Email"}
            />
          </FormInputWrapper>
          {formik.touched.email && formik.errors.email ? (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          ) : null}
        </FormInput>
        <FormInput>
          <FormInputWrapper error={formik.errors.password ? true : false}>
            <i className={"fas fa-lock"} />
            <input
              id={"password"}
              name="password"
              type={showPassword === true ? "text" : "password"}
              {...formik.getFieldProps("password")}
              placeholder={"Password"}
            />
            <div onClick={handleShowPassword}>
              {showPassword ? "Hide" : "Show"}
            </div>
          </FormInputWrapper>
          {formik.touched.password && formik.errors.password ? (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          ) : null}
        </FormInput>

        <div className={"loginOptionsBox"}>
          {/* <div className="rememberMe">
            <input id={"rememberMe"} type="checkbox" name="rememberMe" />
            <label htmlFor={"rememberMe"}>Remember Me</label>
          </div> */}
          <a
            className="forgot"
            href="#"
            onClick={() => props.handleShowForgotPassword("forgotpassword")}
          >
            Forgot Password
          </a>
        </div>
        <FormInputButton
          className={"emailLoginBtn"}
          type={"submit"}
          id={"loginButton"}
        >
          Login
        </FormInputButton>

        <div className="termsText">
          By logging in, you agree to our{" "}
          <Link to="/policies/terms-of-use">Terms of Use</Link> &{" "}
          <Link to="/policies/privacy-and-cookie-policy">Privacy Policy</Link>
        </div>

        {props.error && (
          <ErrorMessage center large>
            {props.error}
          </ErrorMessage>
        )}
      </form>
    </LoginContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
  googleSignInStart: (idToken, becomeInstructor) =>
    dispatch(googleSignInStart(idToken, becomeInstructor)),
  facebookSignInStart: (accessToken, becomeInstructor) =>
    dispatch(facebookSignInStart(accessToken, becomeInstructor)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
