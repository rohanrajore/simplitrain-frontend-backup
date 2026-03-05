import React,{useState} from 'react';
import './previewPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PreviewPage = props => {

    const images=["https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2019/CA-Chris-Ogonek-Picture-Controls/Media/Chris-Ogonek-Picture-Controls-Vivid.jpg",
                  "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                  "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
                  "https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.jpg",
                  "https://cdn.guidingtech.com/imager/assets/2019/05/227363/crop-picture-shapes-online-fi_4d470f76dc99e18ad75087b1b8410ea9.jpg?1559046829",
                  "https://i.pinimg.com/originals/46/da/e5/46dae512e375bee2664a025507da8795.jpg"]

    const [currentImg, setCurrentImg] = useState(images[0])
    const [currentImgPosition,setCurrentImgPosition] = useState(0)
    const [readMore, setReadMore] = useState(false)

    const handleNextImg= () =>{
        if(currentImgPosition<images.length-1){
            setCurrentImg(images[currentImgPosition+1])
            setCurrentImgPosition(currentImgPosition+1)
        }
    }

    const handlePrevImg = () =>{
       if(currentImgPosition>0){
           setCurrentImg(images[currentImgPosition-1])
           setCurrentImgPosition(currentImgPosition-1)
       }
    }

    const handleReadMore = () =>{
      setReadMore(!readMore)
    }

    console.log(props.formData)
  return (
  <div className="previewPage-container">
          <div className="previewPage-buttons">
                <div className="previewPage-firstbtn" onClick={props.handlePreviewPage}>Close Preview</div>
                <div className="previewPage-secondbtn">Finish</div>
          </div>

          <div className="previewPage-pictures-container">
                <div className="previewPage-pictures-btn" onClick={handlePrevImg}>
                  <FontAwesomeIcon icon='chevron-left' size='2x'/>
                </div>
                <img className="previewPage-img" src={currentImg} alt=""/>
                <div className="previewPage-pictures-btn" onClick={handleNextImg}>
                  <FontAwesomeIcon icon='chevron-right' size='2x'/>
                </div>
          </div>

          <div className="previewPage-content">

                  <div className="previewPage-title-container">
                        <div className="previewPage-title">{props.formData.details.roomName}</div>
                        <div className="previewPage-ratings">
                          <span>4.8</span>
                          <FontAwesomeIcon icon='star' style={{color:"#e39e09"}} size='1x'/>
                          <FontAwesomeIcon icon='star' style={{color:"#e39e09"}} size='1x'/>
                          <FontAwesomeIcon icon='star' style={{color:"#e39e09"}} size='1x'/>
                          <FontAwesomeIcon icon='star' style={{color:"#e39e09"}} size='1x'/>
                          <FontAwesomeIcon icon='star' style={{color:"#e39e09"}} size='1x'/>
                        </div>
                        <div className="previewPage-rate"> 87% Satisfaction rate</div>
                        <div className="previewPage-location">
                          <FontAwesomeIcon icon='map-marker-alt' style={{marginRight:'5px'}} size='1x'/>
                        {props.formData.location.address +", "} {props.formData.location.city +", "} {props.formData.location.state +", "}
                        {props.formData.location.country +" - "} {props.formData.location.zipcode}
                        </div>
                        <div className="previewPage-maps">Open in Maps</div>
                  </div>
                  <div className="previewPage-about-container">
                        <div className="previewPage-about-title">About Venue</div>
                        <div className="previewPage-about-text" style={{height:readMore===false?'130px':"auto"}}>
                          {props.formData.details.detailSummary}
                        </div>
                        <div className="previewPage-about-read" onClick={handleReadMore}>{readMore===false?"read more":"read less"}</div>
                  </div>

                  <div className="previewPage-amenities-container">
                          <div className="previewPage-about-title">Amenities</div>
                          <div className="previewPage-amenities-content">
                            {props.formData.amenities.custom.map(amenity=>(
                              amenity.checked===true?
                                <div className="previewPage-amenities-item">
                                    <div className="previewPage-amenities-item-title">{amenity.amenityName}</div>
                                </div>: ""
                              ))}
                                <div className="previewPage-amenities-item" style={{display:props.formData.amenities.ac.checked===true?"":"none"}}>
                                    <div className="previewPage-amenities-item-title">A/C</div>
                                </div>

                                <div className="previewPage-amenities-item" style={{display:props.formData.amenities.audioVideo.checked===true?"":"none"}}>
                                    <div className="previewPage-amenities-item-title" >Audio Video System</div>
                                </div>

                                <div className="previewPage-amenities-item" style={{display:props.formData.amenities.cctv.checked===true?"":"none"}}>
                                    <div className="previewPage-amenities-item-title" >CCTV</div>
                                </div>

                                <div className="previewPage-amenities-item" style={{display:props.formData.amenities.electricPlug.checked===true?"":"none"}}>
                                    <div className="previewPage-amenities-item-title" >Electric Plug Points</div>
                                </div>

                                <div className="previewPage-amenities-item" style={{display:props.formData.amenities.elevator.checked===true?"":"none"}}>
                                    <div className="previewPage-amenities-item-title" >Elevator</div>
                                </div>

                                <div className="previewPage-amenities-item" style={{display:props.formData.amenities.fireSafety.checked===true?"":"none"}}>
                                    <div className="previewPage-amenities-item-title" >Fire Safety</div>
                                </div>

                                <div className="previewPage-amenities-item" style={{display:props.formData.amenities.toilet.checked===true?"":"none"}}>
                                    <div className="previewPage-amenities-item-title" >Toilet</div>
                                </div>

                                <div className="previewPage-amenities-item" style={{display:props.formData.amenities.internet.checked===true?"":"none"}}>
                                    <div className="previewPage-amenities-item-title" >Internet</div>
                                </div>

                          </div>
                  </div>
          </div>
 </div>
);}

export default PreviewPage;
