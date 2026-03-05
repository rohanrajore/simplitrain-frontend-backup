import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoGallery from './PhotoGallery';
import { StarRating } from './CustomControls';
import {
	faShieldAlt,
	faWifi,
	faWheelchair,
	faChair,
	faParking,
	faMapMarker,
	faHeart as solidHeart
} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {Link} from "react-scroll";
import { Col, Container, Row } from 'react-bootstrap';
import {OnsiteListItemStyle} from './Onsite-venue.style';

function OnsiteListItem({ data, onSelected, fieldValues }) {
	const [showMore, setShowMore] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false)
	const o = data;
  const venueSelected= !fieldValues.onsiteDetails?"":fieldValues.onsiteDetails.venue_id
  console.log(!fieldValues.onsiteDetails)
	const handleShowMore = () => {
		setShowMore(more => !more)
	}


	return (
		<OnsiteListItemStyle>
		<div className="onsite-list-item" style={{border: venueSelected===o.venue_id?"2px solid green": ""}}  >

			<Row style={{width:'100%'}}>
				<Col xs={12} sm={12} lg={4}>
					<PhotoGallery photos={o.photos} name={o.name} />
				</Col>
				<Col xs={12} sm={12} lg={6}>
					<div className='itemRow'>
						<h5>{o.name}</h5>
						<Link to="venuePag"
							data-title={o.name}
							spy={true}
							smooth={true}
							offset={100}
							onClick={onSelected}>
								<p>
									<StarRating count={o.stars} />
								</p>
						</Link>
					</div>
					<p><FontAwesomeIcon icon={faMapMarker} /> {o.address}</p>
					<div className="amenities">
						<p>
							<span><FontAwesomeIcon icon={faChair} /> 23</span>
							<span><FontAwesomeIcon icon={faWheelchair} /> Accesibility</span>
							<span><FontAwesomeIcon icon={faWifi} /> Wifi</span>
						</p>
						<p>
							<span><FontAwesomeIcon icon={faShieldAlt} /> Security</span>
							<span><FontAwesomeIcon icon={faParking} /> Parking</span>
							<span>
							<Link to="venuePag"
								    data-title={o.name}
									  spy={true}
										smooth={true}
										offset={-1115}
										onClick={onSelected}
										className="show-more">+ 5 more</Link>
							</span>
						</p>
						{
							showMore && (
								<React.Fragment>
									<p>
										<span>Amenity 1</span>
										<span>Amenity 2</span>
										<span>Amenity 3</span>
									</p>
									<p>
										<span>Amenity 4</span>
										<span>Amenity 5</span>
									</p>
								</React.Fragment>
							)
						}
					</div>
				</Col>
				<Col xs={12} sm={12} lg={2}>
					<div className='priceRightBox'>
						<FontAwesomeIcon icon={isFavorite? solidHeart: faHeart}
												size="2x"
												className="heart-relativeIcon"
												onClick={()=>setIsFavorite(!isFavorite)}/>
											
						{venueSelected===o.venue_id &&<div className="selected-relativeText">SELECTED</div>}
						<div className="info">
							<div className="pricing">
								<span>$180</span>
								<button data-title={o.name} onClick={onSelected}>Details</button>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
		</OnsiteListItemStyle>
	)
}

export default OnsiteListItem;
