import React from 'react';
import SectionCollection from './common/SectionCollection';
import {CurriculumStyle} from './assets/wizard.style';


function Curriculum(props) {
  return (
    <CurriculumStyle>
    <div className="course-curriculum">
      <SectionCollection
        title="Course Curriculum"
        placeholderTitle="Enter Course Section"
        placeholderDesc="What will students learn at the end of this section?"
        name="curriculum"
        editCourseDetails={props.editCourseDetails}
      />
    </div>
    </CurriculumStyle>
  )
}

export default Curriculum;
