import { connect } from "react-redux";
import React, { useEffect } from "react";
import "../../social-media/linkedin-signin/linkedin-signin.style.scss";
import { linkedinSignInStart } from "../../../redux/user/user.actions";

const LinkedInCallback = ({ linkedinSignInStart }) => {
  useEffect(() => {
    const queryString = window.location.search;
    console.log(queryString);
    const params = new URLSearchParams(queryString);
    const code = params.get("code");
    console.log(code);
    const state = params.get("state");
    console.log(state);
    const error = params.get("error");
    console.log(error);
    const becomeInstructor = params.get("becomeInstructor");
    console.log(becomeInstructor);

    linkedinSignInStart(code, becomeInstructor);
  }, [linkedinSignInStart]);

  return <div></div>;
};

const mapDispatchToProps = (dispatch) => ({
  linkedinSignInStart: (code, becomeInstructor) =>
    dispatch(linkedinSignInStart(code, becomeInstructor)),
});

export default connect(null, mapDispatchToProps)(LinkedInCallback);
