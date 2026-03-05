import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar as solidStar, faStarHalfAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-regular-svg-icons';
import "./mainCard.css";
import detailsJSON from "../detailsJSON";

let details = detailsJSON.mainCard

const MainCard = props => {

  const [images,setImages] = useState(details.images)
  const slicedImages = images.slice(1,5)

  const handleImgClick = index =>{
    props.setPhotoIndex(index)
    props.setIsGalleryOpen(true)
  }

  return (
  <div className="venueDetails-main">
      <div className="venueDetails-titleDiv">
          <div>{details.title}</div>
          <div>{details.type}</div>
          <div>
            {details.rating}/5
            <FontAwesomeIcon icon={details.rating<0.5? faStar: details.rating>=0.5&& details.rating<1?faStarHalfAlt : solidStar}/>
            <FontAwesomeIcon icon={details.rating<1.5? faStar: details.rating>=1.5&& details.rating<2?faStarHalfAlt : solidStar}/>
            <FontAwesomeIcon icon={details.rating<2.5? faStar: details.rating>=2.5&& details.rating<3?faStarHalfAlt : solidStar}/>
            <FontAwesomeIcon icon={details.rating<3.5? faStar: details.rating>=3.5&& details.rating<4?faStarHalfAlt : solidStar}/>
            <FontAwesomeIcon icon={details.rating<4.5? faStar: details.rating>=4.5&& details.rating<5?faStarHalfAlt : solidStar}/>
          </div>
      </div>

      <div className="venueDetails-locationDiv">
          <div>
              <FontAwesomeIcon icon={faMapMarkerAlt}/>
              {details.location}
          </div>
          <a href={`https://www.google.com/maps/search/?api=1&query=${details.latitude},${details.longitude}`}
             target="_blank">Open in maps
          </a>
          <div>{details.numberOfReviews} Reviews</div>
      </div>

      <div className="venueDetails-images">
          <img src={images[0]} onClick={()=>handleImgClick(0)}/>
          <div>
            {slicedImages.map((image, i)=>(
              <img src={image} key={image} onClick={()=>handleImgClick(i+1)}/>
            ))}

            <div className="venueDetails-moreImg">
              <img src={images[5]} onClick={()=>handleImgClick(5)}/>
              <div className="venueDetails-roundMore">
                <FontAwesomeIcon icon={faChevronRight}/>
              </div>
              <div>{images.length-5} more</div>
            </div>
          </div>
      </div>
  </div>
)}

export default MainCard;
