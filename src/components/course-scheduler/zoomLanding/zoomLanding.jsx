import React,{useEffect,useState} from 'react';
import {Redirect} from 'react-router-dom';

const ZoomLanding = props => {



  useEffect(() =>(
        props.getAccessTokenAPI
  ), [1])

  const batchId=localStorage.getItem("currentCourseBatchID")
  
  return(

  <div>
    {         localStorage.getItem("zoomAuth")==="SUCCESS"?
                    localStorage.getItem("isEdit")==="true"?
                          <Redirect to={`/edit-scheduled-course/${batchId}/venue/online/zoom-details`} />
                          :<Redirect to="/schedule-course/venue/online/zoom-details" />

              : localStorage.getItem("isEdit")==="true"?
                 <Redirect to={`/edit-scheduled-course/${batchId}/venue/online/zoom-login`} />
                 :<Redirect to="/schedule-course/venue/online/zoom-login" />
       }
  </div>
);}

export default ZoomLanding;
