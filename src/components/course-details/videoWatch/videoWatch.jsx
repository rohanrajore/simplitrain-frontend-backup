import React from 'react';
import './videoWatch.css'

const VideoWatch = props => {

      // This funciton will stop playing video if we click on close button while video is still played
  const stopVideos = function () {
  	const videos = document.querySelectorAll('iframe, video');
  	Array.prototype.forEach.call(videos, function (video) {
  		if (video.tagName.toLowerCase() === 'video') {
  			video.pause();
  		} else {
  			const src = video.src;
  			video.src = src;
  		}
  	})
  }
         // This will occur when we click on close button
  const clickHandler= e =>{
      // This will close video watch everywhere outside its div
      if(e.target===e.currentTarget){
    // This will stop video playing
    stopVideos()
    // This will close our component
    props.handler(e)
  }
}

  return(             // If video is watched it will show component, otherwise it would set it to display: none
  <div className="watch-container" style={{display: props.isWatched===true?" ":"none"}} onClick={clickHandler}>

        <div className="watch-content">

          <div className="watch-preview">
            <p style={{color:"#a9c2c2",fontSize:"18px"}}> Course preview: </p>
            <button className="watch-button" onClick={clickHandler}>Close</button>
          </div>
                      {/* We will use info-title class from courseInfo.css*/}
          <div className="watch-title" style={{width:"90%"}}>{props.info.courseInfo.title}</div>

          <iframe className="watch-video" src={props.info.courseCard.videoUrl} frameBorder="0"
         allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture" title="Course video">
           </iframe>

        </div>
  </div>
);}

export default VideoWatch;
