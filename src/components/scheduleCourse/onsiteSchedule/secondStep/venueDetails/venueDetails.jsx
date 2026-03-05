import React,{useState} from 'react';
import "./venueDetails.css";
import MainCard from "./mainCard/mainCard.jsx";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Amenities from "./amenities/amenities.jsx";
import PaymentDetails from "./paymentDetails/paymentDetails.jsx";
import Feedback from "../../../../course-details/feedback/feedback.jsx";
import Review from "../../../../course-details/review/review.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity, faRoute, faParking } from "@fortawesome/free-solid-svg-icons";
import detailsJSON from "./detailsJSON";
import {reviewJSON1,reviewJSON2,reviewJSON3} from "./detailsJSON";

let photos = detailsJSON.mainCard.images

const VenueDetails = props => {

  const [photoIndex, setPhotoIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [aboutReadMore, setAboutReadMore] = useState(false)
  const [hostReadMore, setHostReadMore] = useState(false)
  const [cancelationReadMore, setCancelationReadMore] = useState(false)
  const [otherRulesReadMore, setOtherRulesReadMore] = useState(false)

  return(
  <div className="secondStep-venueDetails">
    <PaymentDetails setScreen={props.setScreen}
                    handleNextStep={props.handleNextStep}/>

    <MainCard setPhotoIndex={setPhotoIndex}
              setIsGalleryOpen={setIsGalleryOpen}/>

    {isGalleryOpen &&
      <Lightbox
        mainSrc={photos[photoIndex]}
        nextSrc={photos[(photoIndex + 1) % photos.length]}
        prevSrc={photos[(photoIndex + photos.length - 1) % photos.length]}
        onCloseRequest={() => setIsGalleryOpen(false)}
        onMovePrevRequest={() => setPhotoIndex(i => (i + photos.length - 1) % photos.length)}
        onMoveNextRequest={() => setPhotoIndex(i => (i + 1) % photos.length)}
        />
    }

    <div className="venueDetails-about">
        <div className="venueDetails-title">About Venue</div>
        <div className="venueDetails-aboutText">
          {aboutReadMore?detailsJSON.description
                   :detailsJSON.description.slice(0,300)}
          {detailsJSON.description.length>300 &&
            <span onClick={()=>setAboutReadMore(!aboutReadMore)}>
              {!aboutReadMore?"read more":"read less"}
            </span>
          }
        </div>
    </div>

    <Amenities amenities={detailsJSON.amenities}/>

    <div className="venueDetails-host">
        <div className="venueDetails-title">Your Host</div>
        <div className="venueDetails-hostImage">
          <div>
              <img src={detailsJSON.host.image}/>
              <div>{detailsJSON.host.name}</div>
          </div>

          <div className="venueDetails-aboutText">
            {hostReadMore?detailsJSON.host.description
                     :detailsJSON.host.description.slice(0,300)}
            {detailsJSON.host.description.length>300 &&
              <span onClick={()=>setHostReadMore(!hostReadMore)}>
                {!hostReadMore?"read more":"read less"}
              </span>
            }
          </div>

        </div>
    </div>

    <div>
        <div className="venueDetails-title">Property Surroundings</div>
        <div className="venueDetails-properties">
            <div className="venueDetails-property">
                <div>
                    <FontAwesomeIcon icon={faCity}/>
                </div>
                <div>Neighbourhood/What's Nearby?</div>
                <div>{detailsJSON.surroundings.neighbourhood}</div>
            </div>

            <div className="venueDetails-property">
                <div>
                    <FontAwesomeIcon icon={faRoute}/>
                </div>
                <div>Getting Around</div>
                <div>{detailsJSON.surroundings.gettingAround}</div>
            </div>

            <div className="venueDetails-property">
                <div>
                    <FontAwesomeIcon icon={faCity}/>
                </div>
                <div>Parking Directions</div>
                <div>{detailsJSON.surroundings.parking}</div>
            </div>

        </div>
    </div>

    <div>
        <div className="venueDetails-title">Got a Question?</div>
    </div>

    <div className="venueDetails-feedbackReview">
        <div className="venueDetails-title">Venue Ratings & Reviews</div>
        <Feedback info={detailsJSON.feedback}
                  onsiteVenue={true}/>
        <Review info={reviewJSON1}/>
        <Review info={reviewJSON2}/>
        <Review info={reviewJSON3}/>
    </div>

    <div>
        <div className="venueDetails-title">House Rules</div>
        <div className="venueDetails-houseRules">
            <div>
              <div>Check In Time:</div>
              <div>{detailsJSON.houseRules.checkInTime}</div>
            </div>

            <div>
              <div>Check Out Time:</div>
              <div>{detailsJSON.houseRules.checkOutTime}</div>
            </div>

            <div>
              <div>Cancelation Policy:</div>
              <ol>
                {(cancelationReadMore?detailsJSON.houseRules.cancelationPolicy
                                    :detailsJSON.houseRules.cancelationPolicy.slice(0,2)
                  ).map(item=>(
                  <li key={item}>{item}</li>
                ))}
                <span onClick={()=>setCancelationReadMore(!cancelationReadMore)}>
                  {cancelationReadMore?"Show less":"View all"}
                </span>
              </ol>
            </div>

            <div>
              <div>Other House Rules:</div>
              <ol>
                {(otherRulesReadMore?detailsJSON.houseRules.otherRules
                                    :detailsJSON.houseRules.otherRules.slice(0,2)
                  ).map(item=>(
                  <li key={item}>{item}</li>
                ))}
                <span onClick={()=>setOtherRulesReadMore(!otherRulesReadMore)}>
                  {otherRulesReadMore?"Show less":"View all"}
                </span>
              </ol>
            </div>
        </div>
    </div>

  </div>
)}

export default VenueDetails;
