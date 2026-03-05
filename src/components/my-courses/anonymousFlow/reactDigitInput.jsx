//import {reactCodeInput} from 'CodeInputField.scss';
import ReactCodeInput from "react-code-input";
import React,{useState} from 'react';

const ReactInputDigit = props => {

  const options = {
//  className: reactCodeInput,
  inputStyle: {
    fontFamily: 'monospace',
    margin:  '4px',
    marginTop: '10px',
    marginBottom: '15px',
    MozAppearance: 'textfield',
    width: '35px',
    borderRadius: '3px',
    fontSize: '16px',
    height: '35px',
    padding: '11px',
    color: 'black',
    border: '1px solid lightskyblue'
  },
  inputStyleInvalid: {
    fontFamily: 'monospace',
    margin:  '4px',
    marginTop: '10px',
    marginBottom: '15px',
    MozAppearance: 'textfield',
    width: '35px',
    borderRadius: '3px',
    fontSize: '16px',
    height: '35px',
    padding: '11px',
    backgroundColor: 'black',
    color: 'red',
    border: '1px solid red'
  }
}

  const handleChange = e =>{
     props.handleOtpInputValue(e)
  }


  return(
  <React.Fragment>
      <div style={{marginTop:"40px", textAlign:'center', color:'#4F4F4F', fontSize:16}}><b>Enter OTP</b></div>
      <ReactCodeInput
                      type='text'
                      fields={6}
                      value={props.otpInputValue}
                      onChange={handleChange}
                      {...options}/>
  </React.Fragment>
)};

export default ReactInputDigit;
