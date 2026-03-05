import React, { useState } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { Row, Col } from "react-bootstrap";
// import './signup.styles.scss';
import { Link } from "react-router-dom";
import {
  FormInputButton,
  FormInputWrapper,
  ErrorMessage,
  input,
  MobileInputWrapper,
  FormInput,
} from "../form-input/form-input.styles";
import { emailSignUpStart } from "../../redux/signup/signup.actions";
import ReCAPTCHA from "react-google-recaptcha";
import { selectSignupError } from "../../redux/signup/signup.selectors";
import { createStructuredSelector } from "reselect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { SignupComponentWrapper } from "./signup.styles";

const SignupComponent = (props) => {
  console.log(`[SignupComponent] becomeInstructor: ${props.becomeInstructor}`);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passLength, setPassLength] = useState(true);
  const [passNumber, setPassNumber] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <SignupComponentWrapper>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          mobile: "",
          recaptcha: "",
        }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
          const { firstName, lastName, email, password, mobile } = values;
          props.emailSignUpStart(
            firstName,
            lastName,
            email,
            password,
            mobile,
            props.becomeInstructor
          );
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Required")
            .min(6, "Minimum 6 characters")
            .max(20, "Maximum 20 characters")
            .matches(/[@#$%!]+/, "Need at least one special character")
            .matches(/\d/, "Need at least 1 number")
            .matches(/[a-z]/, "Need at least 1 lowercase character")
            .matches(/[A-Z]/, "Need at least 1 uppercase character"),
          confirmPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
          mobile: Yup.string()
            .required("Required")
            .matches(/^[0-9]+$/, "Mobile number must be only digits")
            .max(10, "Must be max 10 digits"),
          // emailOTP: Yup.number().required("Required"),
          // mobileOTP: Yup.number().required("Required"),
          recaptcha:
            process.env.NODE_ENV === "production"
              ? Yup.string().required()
              : Yup.string(),
        })}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Row>
              <Col lg={6} style={{ paddingRight: 5 }}>
                <FormInput>
                  <FormInputWrapper>
                    <i className={"far fa-user-circle"} />
                    <input
                      id={"firstName"}
                      type={"text"}
                      autocomplete="off"
                      name={"firstName"}
                      {...formik.getFieldProps("firstName")}
                      placeholder="First Name"
                      required
                    />
                  </FormInputWrapper>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
                  ) : null}
                </FormInput>
              </Col>
              <Col lg={6} style={{ paddingLeft: 5 }}>
                <FormInput>
                  <FormInputWrapper>
                    <i className={"far fa-user-circle"} />
                    <input
                      id={"lastName"}
                      type={"text"}
                      name={"lastName"}
                      autocomplete="off"
                      {...formik.getFieldProps("lastName")}
                      placeholder={"Last Name"}
                      required
                    />
                  </FormInputWrapper>
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <ErrorMessage>{formik.errors.lastName}</ErrorMessage>
                  ) : null}
                </FormInput>
              </Col>
            </Row>

            <FormInput>
              <FormInputWrapper>
                <i className={"far fa-envelope fa-2x"} />
                <input
                  id={"email"}
                  type={"email"}
                  autocomplete="off"
                  name={"email"}
                  {...formik.getFieldProps("email")}
                  placeholder={"Email"}
                  required
                />
              </FormInputWrapper>
              {formik.touched.email && formik.errors.email ? (
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
              ) : null}
            </FormInput>

            <FormInput>
              <MobileInputWrapper>
                <div className="mobile-input-control countryCode">
                  {/*<i className={"fas fa-phone fa-2x"}/>*/}

                  <div className={"countryCode-wrapper"}>
                    <select
                      defaultValue={"91"}
                      name="countryCode"
                      id="countryCode"
                    >
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
                  <input
                    id={"mobile"}
                    type={"tel"}
                    size={10}
                    autocomplete="off"
                    pattern={"[0-9]{3,10}"}
                    name={"mobile"}
                    {...formik.getFieldProps("mobile")}
                    title="Number with max 10 decimals"
                    placeholder={"Mobile"}
                    maxLength={10}
                    required
                  />
                </div>
              </MobileInputWrapper>

              {formik.touched.mobile && formik.errors.mobile ? (
                <ErrorMessage>{formik.errors.mobile}</ErrorMessage>
              ) : null}
            </FormInput>
            <FormInput>
              <FormInputWrapper>
                <i className={"fas fa-lock"} />
                <input
                  id={"password"}
                  type={showPassword ? "text" : "password"}
                  name={"password"}
                  {...formik.getFieldProps("password")}
                  autoComplete={false}
                  placeholder={"Password"}
                  required
                />
                <div onClick={handleShowPassword}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </div>
              </FormInputWrapper>
            </FormInput>

            <FormInput>
              <FormInputWrapper>
                <i className={"fas fa-lock fa-2x"} />
                <input
                  id={"confirmPassword"}
                  autocomplete="off"
                  type={showConfirmPassword ? "text" : "password"}
                  name={"confirmPassword"}
                  {...formik.getFieldProps("confirmPassword")}
                  placeholder={"Confirm Password"}
                  required
                />
                <div onClick={handleShowConfirmPassword}>
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEye : faEyeSlash}
                  />
                </div>
              </FormInputWrapper>
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
              ) : null}
            </FormInput>
            <FormInput>
              <FormInputWrapper style={{ height: "auto" }}>
                <ul style={{ margin: 0, padding: 0, paddingLeft: 20 }}>
                  <li
                    style={{
                      color:
                        formik.values.password.length >= 6 ? "green" : "red",
                    }}
                  >
                    Minimum 6 characters
                  </li>
                  <li
                    style={{
                      color:
                        formik.values.password.length <= 20 ? "green" : "red",
                    }}
                  >
                    Maximum 20 characters
                  </li>
                  <li
                    style={{
                      color: /\d/.test(formik.values.password)
                        ? "green"
                        : "red",
                    }}
                  >
                    At least 1 number
                  </li>
                  <li
                    style={{
                      color: /[@#$%!]+/.test(formik.values.password)
                        ? "green"
                        : "red",
                    }}
                  >
                    At least 1 special character: @#$%!
                  </li>
                  <li
                    style={{
                      color:
                        formik.values.password.toUpperCase() !==
                        formik.values.password
                          ? "green"
                          : "red",
                    }}
                  >
                    At least 1 lowercase character
                  </li>
                  <li
                    style={{
                      color:
                        formik.values.password.toLowerCase() !==
                        formik.values.password
                          ? "green"
                          : "red",
                    }}
                  >
                    At least 1 uppercase character
                  </li>
                </ul>
              </FormInputWrapper>
            </FormInput>
            {process.env.NODE_ENV === "production" ? (
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={(value) => {
                  formik.setFieldValue("recaptcha", value);
                }}
              />
            ) : null}

            {formik.errors.recaptcha && formik.touched.recaptcha && (
              <ErrorMessage>{formik.errors.recaptcha}</ErrorMessage>
            )}

            {/* <div className={'signupEmailOptionsBox'}>
                            <input id={"rememberMe"} className="checkbox" type="checkbox"
                                   name="rememberMe" id=""/>
                            <label htmlFor={"personalizedEmail"}>Send me personalized emails and offer emails</label>
                        </div> */}

            <FormInputButton id={"signupButton"} type={"submit"}>
              Proceed
            </FormInputButton>

            <div className={"termsText"}>
              By creating this account, you agree to our{" "}
              <Link to="/policies/terms-of-use">Terms of Use</Link> &{" "}
              <Link to="/policies/privacy-and-cookie-policy">
                Privacy Policy
              </Link>
            </div>

            {props.error && props.error.message && (
              <ErrorMessage center large>
                {props.error.message}
              </ErrorMessage>
            )}
          </form>
        )}
      </Formik>
    </SignupComponentWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectSignupError,
});

const mapDispatchToProps = (dispatch) => ({
  emailSignUpStart: (
    firstName,
    lastName,
    email,
    password,
    mobile,
    becomeInstructor
  ) =>
    dispatch(
      emailSignUpStart(
        firstName,
        lastName,
        email,
        password,
        mobile,
        becomeInstructor
      )
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
