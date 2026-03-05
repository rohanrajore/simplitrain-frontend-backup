import React from "react";
import {useHistory} from "react-router-dom";
// import './become-instructor.styles.scss';
import {FormInputButton} from "../../components/form-input/form-input.styles";
import { InstructorWrapper } from "./become-instructor.styles";

const BecomeInstructorPage = () => {
    let history = useHistory();

    return (
        <InstructorWrapper >
            {/*<FormInputButton onClick={() => {
                history.push("/auth/signup/true")
            }}>Become an Instructor</FormInputButton>*/}
        <div className="coming-soon-div">This feature is coming soon</div>    

        </InstructorWrapper>
    )
};

export default BecomeInstructorPage;
