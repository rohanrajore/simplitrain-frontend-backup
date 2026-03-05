import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const AmenityItem = props => {

  const [openPopup, setOpenPopup] = useState(false)
  let item=props.item

  return(
  <div className="venueDetails-amenityItem" key={item.id}>
    {item.name}
    {item.label!=="" &&
      <div labeled={item.label}
           onMouseEnter={()=>setOpenPopup(true)}
           onMouseLeave={()=>setOpenPopup(false)}>
        {item.label==="free"?"Free":"Additional Charge"}
        {openPopup &&
          <div className="amenity-popup">
              <FontAwesomeIcon className="svgChevron"
                               icon={faPlay}
                               rotation={90} />

              <div className="amenity-popup-title">
                {item.info.name}
                <div className="amenity-popup-price"
                     price={item.label}>
                  <FontAwesomeIcon icon="rupee-sign" />
                  {item.info.pricePerUnit===""?"Free":item.info.pricePerUnit}
                </div>
              </div>

              <div className="amenity-popup-description">Description</div>
              <div className="amenity-popup-text">
                {item.info.description}
              </div>
          </div>
        }
      </div>
    }
  </div>
)}

export default AmenityItem;
