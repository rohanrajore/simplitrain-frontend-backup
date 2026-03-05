import React,{useState} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepIcon from '@material-ui/core/StepIcon';
import StepConnector from '@material-ui/core/StepConnector';
import {  withStyles } from '@material-ui/core/styles';
import "./stepper.css";
import {StepConectorModified,
        StepperModified,
        StepIconModified,
        StepLabelModified} from "./modifiedClasses.js";

const StepperComponent = props => {

 return (
  <div className="stepperComponent-container">
    <div className="stepperComponent-title">Schedule Course</div>
    <StepperModified orientation="vertical" activeStep={props.activeStep} connector={<StepConectorModified />}>
        <Step key="1">
          <StepLabelModified StepIconComponent={StepIconModified}>Schedule</StepLabelModified>
        </Step>

        <Step key="2">
          <StepLabelModified StepIconComponent={StepIconModified}>Choose Venue</StepLabelModified>
        </Step>

        <Step key="3">
          <StepLabelModified StepIconComponent={StepIconModified}>Pricing & Promotions</StepLabelModified>
        </Step>

        <Step key="4">
          <StepLabelModified StepIconComponent={StepIconModified}>Send for Review</StepLabelModified>
        </Step>
    </StepperModified>
  </div>
);}

export default StepperComponent;
