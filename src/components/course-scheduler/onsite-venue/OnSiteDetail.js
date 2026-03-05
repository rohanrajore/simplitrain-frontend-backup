import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMapMarkerAlt,
	faChevronLeft,
	faDesktop,
	faChair,
	faStar
} from '@fortawesome/free-solid-svg-icons';
import QuestAnswer from '../../course-details/questionsAnswers/questAnswer/QuestAnswer.jsx';
import Feedback from "../../course-details/feedback/feedback.jsx";
import ReviewsContainer from "../../course-details/pagination/pagination.jsx";
import VenueReviews from './VenueReviews';
import { StarRating, StarRatingActive, SimpleSelectInput, Accordeon } from './CustomControls';
import Lightbox from 'react-image-lightbox';
import response from "./onsiteItemJSON.js";
import { Col, Container, Row } from 'react-bootstrap';
import {OnSiteDetailStyle,VenuOrderStyle} from './Onsite-venue.style';

function VenueRatingItem({stars, percent}) {
	return (
		<div className="venue-ratings-item">
			<div className="rating-bar"><div style={{width:`${percent}%`}}></div></div>
			<StarRatingActive count={stars} />
			<div className="percent">{`${percent}%`}</div>
		</div>
	)
}


function Content({ data }) {

	const description = response.description
  const amenities = response.amenities
  const host = response.host
  const propertySurrounding = response.propertySurrounding
  const answeredQuestions = response["q&a"]
  const feedback = response.feedback
  const reviews = response.reviews
  const houseRules = response.houseRules
  const photos = response.photos

	const [moreDescription, setMoreDescription] = useState(false)
	const [moreHostDescription, setMoreHostDescription] = useState(false)
	const [quesAnsArray, setQuesAnsArray] = useState(answeredQuestions.slice(0,3))
	const [showMore,setShowMore] = useState(false)
	const [photoIndex, setPhotoIndex] = useState(0);
	const [photoGallery, setPhotoGallery] = useState(false);
	const more = photos.length - 4;

	const handleMoreQuesAns = () =>{
		 setQuesAnsArray(answeredQuestions)
		 setShowMore(!showMore)
	}

	return (
		<OnSiteDetailStyle>
		<div className="content">
			<div className="detail-title-container">
					<div className="detail-title-first">
							<div className="detail-title-first-top">
								<div className="detail-title-text">{data.name}</div>
								<div className="hotelRating">5 Star Hotel</div>
							</div>

							<p>
									<FontAwesomeIcon icon={faMapMarkerAlt} />
									<span>&nbsp;1600 Amphitheatre Parkway, Mountain View, California, United States.</span>
									<a href="#" className="ml-3">Open in Maps</a>
							</p>

					</div>

					<div className="detail-title-second">
								<div className="detail-title-second-reviews">
									<StarRating count={4.8}/>
									<div>109 reviews</div>
								</div>

								<div className="detail-title-second-rating">
                    4.8
								</div>
					</div>
			</div>

      <img onClick={()=>setPhotoGallery(true)}
					 src={photos[0]}
					 className="onsiteItem-mainImg"/>

				 <div className="onsiteItem-imgContainer">
					{photos.slice(1).map(photo=>(
						<img key={photo}
							   onClick={()=>setPhotoGallery(true)}
							   src={photo}
								 className="onsiteItem-imgThumbnail"/>
					))}
			</div>

			{photoGallery && (
				<Lightbox
					mainSrc={photos[photoIndex]}
					nextSrc={photos[(photoIndex + 1) % photos.length]}
					prevSrc={photos[(photoIndex + photos.length - 1) % photos.length]}
					onCloseRequest={() => setPhotoGallery(false)}
					onMovePrevRequest={() => setPhotoIndex(i => (i + photos.length - 1) % photos.length)}
					onMoveNextRequest={() => setPhotoIndex(i => (i + 1) % photos.length)}
				/>
      )}


			<div className="onsite-about">
				<h5 className="onsiteItem-header5">About Venue</h5>
					{moreDescription? description: description.slice(0,300)}
				 <span className="description-more" style={{width:"90px",marginLeft:"10px"}}
					 		onClick={() => setMoreDescription(!moreDescription)}>
					 				{moreDescription? "read less": "read more"}
				 </span>
			</div>

			<h5 className="onsiteItem-header5">Amenities</h5>
			<div className="onsite-amenities">
					{amenities.map(amenity=>(
							<ul key={amenity.name}>
								<li className="amenities-title">{amenity.name}</li>

								{amenity.items.map(listItem=>(
										<li key={listItem.name}>
												{listItem.name}
												{listItem.additional!=="" &&
												<span className="onsite-amenities-additional"
													    style={{background:listItem.additional==="free"?"#489684":"#EB5757"}}>
														{listItem.additional==="free"?"FREE": "Additional Charge"}
												</span>}
										</li>
								))}

							</ul>
					))}
			 </div>
			
			<div className='hostReview'>
				<h5 className="onsiteItem-header5">Your Host</h5>
				<div className="venue-host">
					<div className="venue-host-photo">
						<img src={host.img} alt="host-photo" />
						<div className='userName' style={{width:"100px"}}>{host.name}</div>
					</div>
					<div className='detailsText'>
						{moreHostDescription? host.description: host.description.slice(0,300)}
					<span className="description-more" style={{marginLeft:"10px"}}
								onClick={() => setMoreHostDescription(!moreHostDescription)}>
										{moreHostDescription? "read less": "read more"}
					</span>
					</div>
				</div>
			</div>


			<h5 className="onsiteItem-header5">Property Surroundings</h5>
      		<div className="property-surroundings">
				<ul>
					<li className="title">Neighbourhood/ What's Nearby?</li>
          			<li>{propertySurrounding.neighbourhood}</li>
				</ul>

				<ul>
					<li className="title">Getting Around</li>
          			<li>{propertySurrounding.gettingAround}</li>
				</ul>

				<ul>
					<li className="title">Parking Directions</li>
          			<li>{propertySurrounding.parkingDirections}</li>
				</ul>
			</div>

		<div className='customerQuestion'>
			<h5 className="onsiteItem-header5">Customer questions & answers </h5>
			{quesAnsArray.length<1? <div className="trending-noCourses" style={{marginLeft:0}}>There are no asked questions</div>
				:quesAnsArray.map(quesAns=>(
					<QuestAnswer helpful={quesAns.helpful} myThumbsUp={quesAns.myThumbsUp}
											 question={quesAns.question} answer={quesAns.answer}
											 key={quesAns.id} modified={quesAns.modified}/>
			))}
		</div>
		
		<div className='text-center mb-100'>
			{!showMore && answeredQuestions.length>3 &&  <div className="qa-seeMore" onClick={handleMoreQuesAns}>
					See more answered questions ({answeredQuestions.length-3})
										 </div>
			}
		</div>


			<Feedback info={feedback} onsiteVenue={true} />
			<ReviewsContainer info={reviews} onsiteVenue={true} />


			<h5 className="onsiteItem-header5">House Rules </h5>
			<div className="onsiteItemHouseRules">
					<div className="onsiteItemRule">
						<Row>
							<Col xs={12} sm={3}>
								<div className="houseRuleTitle">Checkin: </div>
							</Col>
							<Col xs={12} sm={9}>
								{houseRules.checkin}
							</Col>
						</Row>
					</div>
					<div className="onsiteItemRule">
						<Row>
							<Col xs={12} sm={3}>
								<div className="houseRuleTitle">Checkout: </div>
							</Col>
							<Col xs={12} sm={9}>
								{houseRules.checkout}
							</Col>
						</Row>
					</div>
					<div className="onsiteItemRule">
						<Row>
							<Col xs={12} sm={3}>
								<div className="houseRuleTitle">Cancelation Policy: </div>
							</Col>
							<Col xs={12} sm={9}>
								{houseRules.cancelationPolicy}
							</Col>
						</Row>
					</div>
					<div className="onsiteItemRule">
						<Row>
							<Col xs={12} sm={3}>
								<div className="houseRuleTitle">Other House Rules: </div>
							</Col>
							<Col xs={12} sm={9}>
								{houseRules.other}
							</Col>
						</Row>
					</div>
			</div>
		</div>
		</OnSiteDetailStyle>
	)
}

function Order({ data, setShowDetails, handleSelection }) {

	const coupons = [
		{ id: "0", name: "Select Offer Coupon" },
		{ id: "1", name: "Coupon 1" },
		{ id: "2", name: "Coupon 2" }
	];

	const handleReserveVenue = () =>{
      setShowDetails(false)
			handleSelection("onsiteDetails",{"venue_id":data.venue_id})
	}

	return (
	<VenuOrderStyle>
		<div className="venueOrder">
			<table>
				<tbody>
				<tr>
					<td>Base Price</td>
					<td className="text-right">10456</td>
				</tr>
				<tr>
					<td>Variable cost for Participants</td>
					<td className="text-right">1000</td>
				</tr>
				<tr>
					<td>GST @ 18%</td>
					<td className="text-right">1000</td>
				</tr>
				<tr className="border-top">
					<td>Sub Total</td>
					<td className="text-right">$12456</td>
				</tr>
				</tbody>
			</table>

			<button>+ Add Payable Sevices</button>
			<SimpleSelectInput name="venue-coupon" options={coupons} />
			<div className="qa-ask-submit"
				   style={{width:"100%"}}
					 onClick={handleReserveVenue}	>I'll Reserve</div>
		</div>
	</VenuOrderStyle>
	)
}

function OnSiteDetail({ data, onHide, setShowDetails, handleSelection }) {
	if (data === null)
		return null;

	return (
		<div className="onsite-detail">
			<div onClick={onHide} className="onsite-detail-bckBtn" >
				<FontAwesomeIcon icon={faChevronLeft} /> Back
			</div>

			<div className="onsiteDetailBody">
				<Row>
					<Col xs={12} sm={9}>
						<Content data={data} />
					</Col>
					<Col xs={12} sm={3}>
						<Order data={data}
					     setShowDetails={setShowDetails}
							 handleSelection={handleSelection}/>
					</Col>
				</Row>
			</div>

		</div>
	)
}

export default OnSiteDetail;
