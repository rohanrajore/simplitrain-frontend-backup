import React from "react";
import {
  selectIsSignedIn,
  selectIsLearner,
  selectIsInstructor,
  selectUserID,
} from "../../redux/user/user.selectors";
import { becomeInstructorStart } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { FormInputButton } from "../../components/form-input/form-input.styles";
import "../../containers/become-instructor/become-instructor.styles.scss";

const LearnerHomePage = (props) => {
  const handleBecomeAnInstructor = (event) => {
    console.log(`userID is ${props.userID}`);
    props.becomeInstructor(props.userID);
  };

  return (
    <div>
      <h1>Learner Dashboard</h1>
      {!props.isInstructor ? (
        <div className={"instructor-wrapper"}>
        <FormInputButton onClick={handleBecomeAnInstructor}>
          Become an Instructor
        </FormInputButton>
      </div>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  becomeInstructor: (userID) => dispatch(becomeInstructorStart(userID)),
});

const mapStateToProps = createStructuredSelector({
  isSignedIn: selectIsSignedIn,
  isLearner: selectIsLearner,
  isInstructor: selectIsInstructor,
  userID: selectUserID,
});

export default connect(mapStateToProps, mapDispatchToProps)(LearnerHomePage);
