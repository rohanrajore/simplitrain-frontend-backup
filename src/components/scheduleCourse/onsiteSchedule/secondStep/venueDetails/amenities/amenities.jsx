import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./amenities.css";
import AmenityItem from "./amenityItem.jsx";
import { faHeartbeat, faLaptop, faCoffee,
         faParking } from "@fortawesome/free-solid-svg-icons";

library.add(faHeartbeat, faLaptop, faCoffee,
         faParking)

const Amenities = props => (
  <div className="venueDetails-amenities">
      <div className="venueDetails-title">Amenities</div>
      <div className="venueDetails-amenitiesContent">

          {props.amenities.map(amenity=>(
            <div className="venueDetails-amenity" key={amenity.amenityGroup}>
              <div>
                  <FontAwesomeIcon icon={['fas', `${amenity.amenityIcon}`]} />
              </div>
              <div>{amenity.amenityGroup}</div>

              {amenity.amenities.map(item=>(
                  <AmenityItem item={item}/>
              ))}
            </div>
          ))}

      </div>
  </div>
);

export default Amenities;
