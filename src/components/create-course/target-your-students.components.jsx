import React, { useState } from "react";

const TargetYourStudentsComponent = (props) => {
  const [nextEnabled, setNextEnabled] = useState(true);

  const skipCreateCourse = () => {
    console.log(`Inside skipCreateCourse`);
    props.submitCreateCourse("SAVE");
  };

  const previousStep = (e) => {
    console.log(`Inside previousStep`);
    props.previousStep();
  };

  const nextStep = (e) => {
    console.log(`Inside nextStep`);
    props.nextStep();
  };

  return (
    <div>
      <div className="form-footer pull-right">
        <button className="btn -default pull-left" onClick={previousStep}>
          Previous
        </button>

        <button className="btn -primary btn-skip" onClick={skipCreateCourse}>
          Skip Create Course
        </button>

        <button
          className="btn -primary"
          onClick={nextStep}
          disabled={!nextEnabled}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TargetYourStudentsComponent;
