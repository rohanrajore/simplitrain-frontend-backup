import React,{useState} from 'react';
import { ReportPopupContainer } from './reportPopup.Style';
import {useSelector} from "react-redux";
import submitReport from "./submitReport.js";
import { store } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
// import './reportPopup.css';

const ReportPopup = props => {

    const [issueType,setIssueType] = useState("spam")
    const [issueDetails, setIssueDetails] = useState("")
    const [successSubmit,setSuccesSubmit] = useState(false)

    const userID= useSelector(state => state.user.currentUser?.id)

    const handleIssueType= e => setIssueType(e.target.value)
    const handleIssueDetails = e => setIssueDetails(e.target.value)
    const handleSuccessSubmit = () =>{
          props.handleShowReport(false)
          setSuccesSubmit(false)
    }

    const handleSubmit = async () =>{
      const response = await submitReport(props.reviewID, userID, issueType, issueDetails)
      if(response.actionResult==="SUCCESS"){
        setSuccesSubmit(true)
      }
      else{
        store.addNotification({
          title: response.actionResult==="SUCCESS"?`SUCCESS`: `ERROR`,
          message: response.message,
          type: response.actionResult==="SUCCESS"?"success":"danger",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 4000
          },
        })
      }  
    }

  return(
    <ReportPopupContainer>
      <div className="report-popup-backdrop"></div>
      {!successSubmit && <div className="report-popup-container">
        <div className="report-popup-title">
          Report Abuse
        </div>

        <div className="report-popup-subtitle">
          Flagged content is reviewed by SimpliTrain Staff to determine wheter it violates
          Terms of Service Guidelines
        </div>

        <div className="report-popup-input">
          <label>Issue Type</label>
          <select className="form-control" value={issueType} onChange={handleIssueType} name="issues" id="issues">
            <option value="content">Inappropriate Course Content</option>
            <option value="behavior">Inappropriate Behavior</option>
            <option value="policy">Simplitrain Policy Violation</option>
            <option value="spam">Spammy Content</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="report-popup-input">
          <label>Issue details</label>
          <textarea className="form-control" value={issueDetails} onChange={handleIssueDetails} cols="50" rows="10"/>
        </div>

        <div className="report-popup-btns">
          <button className="button report-popup-btn" onClick={()=>props.handleShowReport(false)}>Cancel</button>
          <button className="button" onClick={handleSubmit}>Submit</button>
        </div>
      </div> }

    {successSubmit &&  <div className="report-popup-container" style={{bottom:"0px"}}>
        <div className="report-popup-title">
          Report Abuse
        </div>

        <div className="report-popup-subtitle">
          Flagged content is reviewed by SimpliTrain Staff to determine wheter it violates
          Terms of Service Guidelines
        </div>

        <div className="report-popup-btns">
          <button className="button" onClick={handleSuccessSubmit}>OK</button>
        </div>
      </div>}
    </ReportPopupContainer>
);}

export default ReportPopup;
