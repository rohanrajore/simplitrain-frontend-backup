import {connect} from "react-redux";
import React, {useEffect} from 'react';
import {emailVerificationStart} from "../../../redux/signup/email-verification/email-verification.actions";
import {createStructuredSelector} from "reselect";
import {selectEmailVerificationError} from "../../../redux/signup/email-verification/email-verification.selectors";
import "./email-verification.styles.scss"
import {SignupWrapper, ErrorMessage, SignupWrapperContainer} from "../../form-input/form-input.styles";

const EmailVerificationComponent = ({emailVerificationStart, emailVerificationError}) => {
    useEffect(() => {
        const queryString = window.location.search;
        console.log(queryString);
        const params = new URLSearchParams(queryString);
        const code = params.get("code");
        console.log(code);
        emailVerificationStart(code);
    }, [emailVerificationStart]);

    return (
        <SignupWrapperContainer>
            <SignupWrapper className={'email-verification-wrapper'}>
                <h2>Verifying email</h2>
                {emailVerificationError && <ErrorMessage large center>{emailVerificationError.message}</ErrorMessage>}
            </SignupWrapper>
        </SignupWrapperContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    emailVerificationError: selectEmailVerificationError
});

const mapDispatchToProps = dispatch => ({
    emailVerificationStart: (code) => dispatch(emailVerificationStart(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailVerificationComponent);
