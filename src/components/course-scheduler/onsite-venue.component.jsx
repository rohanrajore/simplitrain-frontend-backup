import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faShieldAlt,
	faWifi,
	faWheelchair,
	faChair,
	faParking,
	faMapMarker,
	faAngleLeft,
	faAngleRight
} from '@fortawesome/free-solid-svg-icons';

function Paginate(){
  const [currentPage, setCurrentPage] = useState(1);
  let maxPages = 10;
  let items = [];
  let leftSide = currentPage - 2;
	if(leftSide <= 0 )
		leftSide=1;

	let rightSide = currentPage + 2;
	if(rightSide>maxPages)
		rightSide = maxPages;

	for (let number = leftSide ; number <= rightSide; number++) {
    items.push(
      <div key={number} className={(number === currentPage ? 'round-effect active' : 'round-effect')} onClick={()=>{ setCurrentPage(number)}}>
        {number}
      </div>,
    );
  }

	const nextPage = () => {
		if(currentPage<maxPages){
			setCurrentPage(currentPage+1)
		}
	}

	const prevPage = () => {
		if(currentPage>1){
			setCurrentPage(currentPage-1)
		}
	}

  return (
    <div className="paginate-container">
      <div className="paginate-ctn">
        <div className="round-effect" onClick={prevPage}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</div>
        {items}
        <div className="round-effect" onClick={nextPage}>
					<FontAwesomeIcon icon={faAngleRight} />
				</div>
      </div>
			<div> {currentPage} of {maxPages} </div>
    </div>
  );
}


function CheckboxInput({ name, text, checked = false, onChange = () => {} }) {
	const eid = `${name}`;
	return (
		<div className="input-checkbox">
			<input type="checkbox" id={eid} name={name} className="form-checkbox" value={name} />
			<label htmlFor={eid} className="checkbox-label">{text}</label>
		</div>
	)
}

const StarRating = ({count}) => {
	const arr = Array.from({length: count}, (v, i) => i);
	return (
		<small className="text-muted">{arr.map(s => '⭐').join('')}</small>
	)
}

function OnsiteListItem({ data }) {
	const o = {
		name: `Demo ${data} Conference Room`,
		address: "1600 Amphitheatre Parkway, Mountain View, California, United States.",
		stars: 5,
		price: 11999,
		amenities: [
			"seats",
			"accesibility",
			"wifi",
			"security",
			"parking",
			"drinks",
			"food"
		],
		photos: [
			"https://picsum.photos/seed/foo/200",
			"https://picsum.photos/seed/bar/200",
			"https://picsum.photos/seed/dor/200",
			"https://picsum.photos/seed/moz/200",
			"https://picsum.photos/seed/got/200"
		]
	}
	return (
		<div className="onsite-list-item">
			<div className="photos">
				<img src={o.photos[data]} alt={o.name} />
				<div className="thumbs">
					<img src={o.photos[data]} alt={o.name} />
					<img src={o.photos[data]} alt={o.name} />
					<img src={o.photos[data]} alt={o.name} />
				</div>
			</div>
			<div>
				<h5>{o.name}</h5>
				<p>
					<StarRating count={o.stars} />
				</p>
				<p><FontAwesomeIcon icon={faMapMarker} /> {o.address}</p>
				<div className="info">
					<div className="amenities">
						<p>
							<span><FontAwesomeIcon icon={faChair} /> 23</span>
							<span><FontAwesomeIcon icon={faWheelchair} /> Accesibility</span>
							<span><FontAwesomeIcon icon={faWifi} /> Wifi</span>
						</p>
						<p>
							<span><FontAwesomeIcon icon={faShieldAlt} /> Security</span>
							<span><FontAwesomeIcon icon={faParking} /> Parking</span>
							<span>+ 7 more</span>
						</p>
					</div>
					<div className="pricing">
						<span>$180</span>
						<button>Details</button>
					</div>
				</div>
			</div>
		</div>
	)
}

function OnsiteVenue() {
	const listItems = [0,1,2];
	const [showFilters, setShowFilters] = useState(false);
	return (
		<div className="onsite-venue">
			<div className="onsite-filters">
				<div className="filters-header">
					<input type="text" name="search-onsite" placeholder="Search for a Venue by Area" />
					<button type="button" onClick={() => setShowFilters(s => !s)}>All Filters</button>
				</div>
				<section className={`${showFilters ? 'open' : ''}`}>
					<div className="w50">
						<h5>Amenities</h5>
						<div className="table-row">
							<CheckboxInput
								name="chk-avaliability"
								text="Avaliability"
								checked={false}
								onChange={() => {}}
							/>
							<CheckboxInput
								name="chk-accesibility"
								text="Accesibility"
								checked={false}
								onChange={() => {}}
							/>
							<CheckboxInput
								name="chk-parking"
								text="Parking"
								checked={false}
								onChange={() => {}}
							/>
						</div>
						<div className="table-row">
							<CheckboxInput
								name="chk-security"
								text="Security"
								checked={false}
								onChange={() => {}}
							/>
							<CheckboxInput
								name="chk-wifi"
								text="WiFi"
								checked={false}
								onChange={() => {}}
							/>
							<CheckboxInput
								name="chk-favorites"
								text="Favorites"
								checked={false}
								onChange={() => {}}
							/>
						</div>
					</div>
					<div className="w50">
						<h5>Price Range</h5>
						<input type="range" min="10" max="100" step="5" />
					</div>
					<div>
						<button>Search</button>
						<button>Reset</button>
					</div>
				</section>
			</div>
			<div className="onsite-list">
				{
					listItems.map(item => <OnsiteListItem key={item} data={item} />)
				}
			</div>
			<Paginate />
		</div>
	)
}

export default OnsiteVenue;
