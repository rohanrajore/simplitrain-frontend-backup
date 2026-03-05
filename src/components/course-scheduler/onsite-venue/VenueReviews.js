import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';
import { StarRatingActive } from './CustomControls';
import { Col, Container, Row } from 'react-bootstrap';
import {VenueReviewsStyle} from './Onsite-venue.style';

function Review({ user, stars, text, tags }) {
	return (
		<VenueReviewsStyle>
		<div className="venue-review">
			<div className="venue-review-photo">
				<img src="https://picsum.photos/seed/bar/64" alt="review-photo" />
			</div>
			<div>
				<div>{user}</div>
				<div>5 days ago</div>
			</div>
			<div className="review-info">
				<StarRatingActive count={stars} />
				<p>{text}</p>
				<p>
					{
						tags.map((tag, i) => (<span key={i} className="review-tag">{tag}</span>))
					}
				</p>
				<p>
					Was the review helpful?
					<button type="button">Yes</button>
					<button type="button">No</button>
					<button type="button">Report</button>
				</p>
			</div>
		</div>
		</VenueReviewsStyle>
	)
}

const randomReviews = [1,2,3,4,5,6,7,8,9,10,11,12].map(i => ({
	user: `Jon Doe ${i}`,
	stars: i % 5,
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	tags: ["Helping Staff", "Nice Service", "Affrodable"]
}));

function VenueReviews({ _data, perPage = 5 }) {
	const data = randomReviews;
	const pages = Math.ceil(data.length/perPage);
	const [currentPage, setCurrentPage] = useState(1);
	const [dataFiltered, setDataFiltered] = useState([]);

	useEffect(() => {
		const d = data.filter((v, i) => i + 1 > (currentPage*perPage - perPage) && i + 1 <= (perPage*currentPage));
		setDataFiltered(d);
	}, [currentPage]);

	return (
		<React.Fragment>
			<div className="venue-reviews">
				{
					dataFiltered.map((rev, i) => (
						<Review key={i} {...rev} />
					))
				}
			</div>
			<Pagination
				pages={pages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</React.Fragment>
	)
}

export default VenueReviews
