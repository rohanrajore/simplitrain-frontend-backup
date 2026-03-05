import React,{useState,useEffect} from 'react';
import InputCollection from './common/InputCollection';
import { Col, Container, Row } from 'react-bootstrap';
import {TargetStyle} from './assets/wizard.style';

function Target(props) {

  return (
    <TargetStyle>
    <div className="course-target">
      <Row>
      <Col xs={12} sm={12}>
        <InputCollection
          title="(Course Highlights) What will students learn in this course?"
          placeholder="Example: Python Esentials"
          name="highlights"
          editCourseDetails={props.editCourseDetails}
          inputArray="highlights"
        />
      </Col>
      
      <Col xs={12} sm={12}>
        <InputCollection
          title="Course Requirements / Pre-requisites"
          placeholder="Example: Some knowledge about computers"
          name="requirements"
          editCourseDetails={props.editCourseDetails}
          inputArray="requirements"
        />
      </Col>

      <Col xs={12} sm={12}>
        <InputCollection
          title="Target audience"
          placeholder="Example: Software engineers"
          name="audience"
          editCourseDetails={props.editCourseDetails}
          inputArray="targetAudience"
        />
      </Col>
      </Row>
    </div>
    </TargetStyle>
  )
}

export default Target;
