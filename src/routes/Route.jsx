import React from "react";
import PropTypes from "prop-types";
import {Redirect, Route} from "react-router-dom";
import {selectIsInstructor, selectIsLearner, selectIsSignedIn} from "../redux/user/user.selectors";

import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

const RouteWrapper = ({
                          component: Component, publicRoute, learner, instructor,
                          isLearner, isInstructor, isSignedIn,
                          ...rest
                      }) => {

    /**
     * Redirect user to SignIn page if he tries to access a private route
     * without authentication.
     */

    if (!publicRoute && !isSignedIn) {
        console.log("Redirecting to signin page as the user is not signed in")
        return <Redirect
            to={{
            pathname: "/",
            loginComponent:true
          }}
        />;
    }

    if (instructor && !isInstructor) {
        return <Redirect to="/"/>;
    }


    /**
     * Redirect user to Main page if he tries to access a non private route
     * (SignIn or SignUp) after being authenticated.
     */
    /*
        if (isPublic && isSignedIn) {
            return <Redirect to="/learner"/>;
        }
    */

    /**
     * If not included on both previous cases, redirect user to the desired route.
     */
    return <Route {...rest} component={Component}/>;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

RouteWrapper.defaultProps = {
    isPublic: false,
    isLearner: false,
    isInstructor: false
};

const mapStateToProps = createStructuredSelector({
    isSignedIn: selectIsSignedIn,
    isLearner: selectIsLearner,
    isInstructor: selectIsInstructor
});

export default connect(
    mapStateToProps,
    null
)(RouteWrapper);
