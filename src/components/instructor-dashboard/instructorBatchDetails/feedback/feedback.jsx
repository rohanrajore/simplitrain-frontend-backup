import React from 'react';
//import "./feedback.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Collapsible from 'react-collapsible';
import {InstructorBatchDetails} from "../feedback/feedback.style";

const InstructorFeedback = props => (
  <InstructorBatchDetails>
  <div className="instructorBatch-details">
    <div className="tabTitle">
        <div className="instructorBatch-details-head">Feedback</div>
        <FontAwesomeIcon className="instructorBatch-details-close"
                         icon={faTimes}
                         onClick={()=>props.handleActiveTab(0)}/>
    </div>

    <div className="instructorBatch-feedback-content">
        {/* This feature is paused for now, probably wont be needed anymore
        <div>
            <div className="instructorBatch-feedback-day activeDay">Day 1 | 8.5</div>
            <div className="instructorBatch-feedback-day">Day 2 | 8.5</div>
            <div className="instructorBatch-feedback-day">Day 3 | 8.5</div>
            <div className="instructorBatch-feedback-day">Day 4 | 8.5</div>
            <div className="instructorBatch-feedback-day">Day 5 | 8.5</div>
            <div className="instructorBatch-feedback-day">Day 6 | 8.5</div>
        </div>*/}

        <div>
            {props.batchDetails.map(learner=>(
              <Collapsible tabIndex={0} trigger={learner.name} key={learner.id}>
                <div className="instructorBatch-collapsible-content">
                    {learner.questions.slice(0,10).map(question=>(
                      <div className="instructorBatch-collapsible-item" key={question.questionID}>
                          <div>Technical knowledge of the Instructor</div>
                          <div rating={question.feedbackValue<4?"low":question.feedbackValue<8?"middle":"high"}>
                              {question.feedbackValue} / 10
                          </div>
                      </div>
                    ))}

                      <div className="instructorBatch-collapsible-comment">
                          <div>Comments for the Course </div>
                          <div>{learner.questions[10].feedbackValueText}</div>
                      </div>

                      <div className="instructorBatch-collapsible-comment">
                          <div>Comments for the Instructor </div>
                          <div>{learner.questions[11].feedbackValueText}</div>
                      </div>

                      <div className="instructorBatch-collapsible-comment">
                          <div>Comments for the Simplitrain </div>
                          <div>{learner.questions[12].feedbackValueText}</div>
                      </div>

                </div>
              </Collapsible>
            ))}
        </div>
    </div>
  </div>
  </InstructorBatchDetails>
);

export default InstructorFeedback;
