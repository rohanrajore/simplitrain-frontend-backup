import React from 'react';
import "./venueCard.css";
import PhotoGallery from "./photoGallery/photoGallery.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as solidHeart }  from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const VenueCard = props => (
  <div className="secondStep-venueCard" key={props.venueInfo.id}>
      <PhotoGallery photos={props.venueInfo.images}/>
      <div>
          <div>
              <div className="venueCard-title">{props.venueInfo.title}</div>
              <div className="venueCard-ratings">
                        <FontAwesomeIcon icon={props.venueInfo.rating<0.5? ['far', 'star']: props.venueInfo.rating>=0.5&& props.venueInfo.rating<1?'star-half-alt' : 'star'}/>
                        <FontAwesomeIcon icon={props.venueInfo.rating<1.5? ['far', 'star']: props.venueInfo.rating>=1.5&& props.venueInfo.rating<2?'star-half-alt' : 'star'}/>
                        <FontAwesomeIcon icon={props.venueInfo.rating<2.5? ['far', 'star']: props.venueInfo.rating>=2.5&& props.venueInfo.rating<3?'star-half-alt' : 'star'}/>
                        <FontAwesomeIcon icon={props.venueInfo.rating<3.5? ['far', 'star']: props.venueInfo.rating>=3.5&& props.venueInfo.rating<4?'star-half-alt' : 'star'}/>
                        <FontAwesomeIcon icon={props.venueInfo.rating<4.5? ['far', 'star']: props.venueInfo.rating>=4.5&& props.venueInfo.rating<5?'star-half-alt' : 'star'}/>
                        ({props.venueInfo.numberOfRates})
              </div>
          </div>
          <div className="venueCard-distance">{props.venueInfo.distance} km away</div>
          <div className="venueCard-location">
              <FontAwesomeIcon icon="map-marker-alt"/>
              <div>{props.venueInfo.location}</div>
              <a href={`https://www.google.com/maps/search/?api=1&query=${props.venueInfo.latitude},${props.venueInfo.longitude}`}
                 target="_blank">
                <img src="https://cdn.iconscout.com/icon/free/png-256/google-map-461800.png"/>
              </a>
          </div>
          <div className="venueCard-amenities">
              {props.venueInfo.amenities.map(item=>(
                <div key={item.id}>{item.name}</div>
              ))}
              <div>+{props.venueInfo.numberOfAmenities} more</div>
          </div>
      </div>
      <div className="venuePrices">
        <div>
          <div>
            <FontAwesomeIcon icon="rupee-sign"/>
            {props.venueInfo.price}
          </div>
          <FontAwesomeIcon icon={props.venueInfo.isFavorite?solidHeart:faHeart}/>
        </div>
        <div>+ 135,99 taxes and charges</div>
        <div>5 Days</div>
        <div onClick={()=>props.setScreen("details")}>Details</div>
      </div>
  </div>
);

export default VenueCard;
