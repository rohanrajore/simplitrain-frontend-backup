import React, {useState, useEffect} from 'react';
import { Slider, MenuItem, Select } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleDown,
	faFilter,
	faSearch,
	faCrosshairs
} from '@fortawesome/free-solid-svg-icons';
import OnSiteDetail from './OnSiteDetail';
import OnSiteList from './OnSiteList';
import ReactSelect from 'react-select';
import { Col, Container, Row } from 'react-bootstrap';
import {OnsiteIndexStyle} from './Onsite-venue.style';

function CheckboxInput({ name, text, checked = false, onChange = () => {} }) {
	return (
		<div className="input-checkbox" key={name}>
			<input type="checkbox" id={name} name={name} className="form-checkbox" value={text} checked={checked} onChange={onChange} />
			<label htmlFor={name} className="checkbox-label">{text}</label>
		</div>
	)
}

function OnsiteVenue(props) {
	const baseItem = {
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
	};
	const listItems = [
		{ venue_id:"123", name: "Winbledon Conference Room", ...baseItem },
		{ venue_id:"223", name: "Time Square Conference Room", ...baseItem },
		{ venue_id:"441", name: "Sydney Conference Room", ...baseItem },
		{ venue_id:"527", name: "France Conference Room", ...baseItem },
		{ venue_id:"3678", name: "Colorado Conference Room", ...baseItem },
		{ venue_id:"44064", name: "Hawai Conference Room", ...baseItem }
	];
	const [showFilters, setShowFilters] = useState(false);
	const [showDetails, setShowDetails] = useState(false);
	const [currentSite, setCurrentSite] = useState(null);
	const [dataFiltered, setDataFiltered] = useState([]);
	const [searchFilter, setSearchFilter] = useState("");

	useEffect(() => {
		const filtered = listItems.filter(item => item.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1);
		setDataFiltered(filtered);
	}, [searchFilter])

	const [checkboxFilters, setCheckboxFilters] = useState([
		{name: "5 Star Hotels", checked: false},
		{name: "4 Star Hotels", checked: false},
		{name: "Co-Working Spaces", checked: false},
		{name: "Commercial Complex", checked: false},
		{name: "Apartments", checked: false},
		{name: "Avaliability", checked: false},
		{name: "Accesibility", checked: false},
		{name: "Parking", checked: false},
		{name: "Security", checked: false},
		{name: "WiFi", checked: false},
		{name: "Projector", checked: false}
	]);

	const changeCheckboxFilter = (e) => {
		const {value, checked} = e.currentTarget;
		handleCheckboxFilter(value, checked);
	}
	const handleCheckboxFilter = (name, checked) => {
		setCheckboxFilters(items => {
			const copy = [...items];
			const index = copy.findIndex(o => o.name === name);
			copy[index].checked = checked;
			return copy;
		})
	}

	const handleShowDetails = (evt) => {
		evt.preventDefault();
		const name = evt.currentTarget.getAttribute('data-title');
		const current = listItems.find(o => o.name === name);
		setCurrentSite(current);
		setShowDetails(true);
	}

	const handleHideDetails = (evt) => {
		evt.preventDefault();
		setShowDetails(false);
	}

	const [sliderValue, setSliderValue] = useState([10, 90]);
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
	};

	const [participants, setParticipants] = useState(30);
  const handleParticipantsChange = (event) => {
    setParticipants(event.target.value);
	};

	const [filterSort, setFilterSort] = useState("Featured");
  const handleFilterSort = (event) => {
    setFilterSort(event.target.value);
	};

	const locationCustomStyles = {
  dropdownIndicator: () => ({
    cursor:"pointer",
  }),
  option: (provided, state) => ({
    ...provided,
    cursor:"pointer"
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    cursor:"pointer"
  }),
}

const options=[{"key":"001","value":"all","label":"All locations"},{"key":"1","value":"London","label":"London"},{"key":"2","value":"New York","label":"New York"},{"key":"3","value":"Washington","label":"Washington"},{"key":"4","value":"Belgrade","label":"Belgrade"},{"key":"5","value":"Rome","label":"Rome"},{"key":"6","value":"Madrid","label":"Madrid"},
						{"key":"7","value":"Copenhagen","label":"Copenhagen"},{"key":"8","value":"Dublin","label":"Dublin"},{"key":"9","value":"Paris","label":"Paris"},{"key":"11","value":"Oslo","label":"Oslo"},{"key":"14","value":"Berlin","label":"Berlin"}]

	// scroll trick
	const [fixedContainer, setFixedContainer] = useState(false);
	useEffect(() => {
		const el = window.document.querySelector('.wizard-section:nth-child(2)');
		el.addEventListener('scroll', function (e) {
			var distanceY = e.currentTarget.scrollTop;
			var maxScroll = 60;
			if (distanceY > maxScroll)
				setFixedContainer(true);
			else
				setFixedContainer(false);
		});

		return el.removeEventListener('scroll', () => {});
	}, []);

	return (
		<OnsiteIndexStyle>
		<div className={`onsite-venue ${fixedContainer && !showDetails ? 'scrolled' : ''}`}>
			{
				showDetails ?
				(
					<OnSiteDetail data={currentSite}
						            onHide={handleHideDetails}
						            setShowDetails={setShowDetails}
												handleSelection={props.manualyHandleFieldValue}
												fieldValues={props.fieldValues} />
				) :
				(
					<React.Fragment>
						<div className="filters-container">

							<div className="onsite-filters">

								<div className="filters-header">

									<ReactSelect
											className="select-location"
											styles={locationCustomStyles}
											options={options}
											defaultValue={options[0]}
											search
												/>

									<div className="filters-searchInput">
											<FontAwesomeIcon icon={faSearch}
												 							 className="search-filter"
																			 style={{color:"grey",marginLeft:"5px"}} />
											<input
												type="text"
												name="search-onsite"
												placeholder="Search for a Venue by Area"
												value={searchFilter}
												onChange={e => setSearchFilter(e.currentTarget.value)}
											/>

										<div className="filters-locateMe">
											<FontAwesomeIcon icon={faCrosshairs}
												 							 className="search-filter"
																			 style={{margin:"0 5px"}} />
																		 Locate me
										</div>
								 </div>

									<button type="button" onClick={() => setShowFilters(s => !s)}>
												<FontAwesomeIcon icon={faFilter} />
												<span>All filters</span>
												<FontAwesomeIcon icon={faAngleDown} />
									</button>

								</div>

								<section className={`${showFilters ? 'open' : ''}`}>
									<div className="w100">

										<div className="table-row">
											<h5>Venue Type</h5>
											{
												checkboxFilters.filter((o,i) => i < 5).map(filter => (
													<CheckboxInput
														name={`chk${filter.name}`}
														text={filter.name}
														checked={filter.checked}
														onChange={changeCheckboxFilter}
													/>
												))
											}
										</div>
										<div className="table-row">
											<h5>Amenities</h5>
											{
												checkboxFilters.filter((o,i) => i > 4).map(filter => (
													<CheckboxInput
														name={`chk${filter.name}`}
														text={filter.name}
														checked={filter.checked}
														onChange={changeCheckboxFilter}
													/>
												))
											}
										</div>
									</div>

									<div className="w50">
										<h5>Price Range</h5>
										<Slider
											value={sliderValue}
											onChange={handleSliderChange}
											valueLabelDisplay="auto"
											aria-labelledby="range-slider"
											getAriaValueText={v => v}
										/>
									</div>

									<div className="w50-btnContainer">
										<button className="onsiteFirstBtn">Reset</button>
										<button className="onsiteSecondBtn">Search</button>
									</div>

								</section>
							</div>


						<div className="active-filters">
							<Row>
								<Col xs={12} sm={6}>
									<label className="title">Filters</label>
									<Select
										labelId="select-participants"
										id="select-participants"
										value={participants}
										onChange={handleParticipantsChange}
									>
										<MenuItem value={10}>{'<10'}</MenuItem>
										<MenuItem value={20}>10-20</MenuItem>
										<MenuItem value={30}>20-30</MenuItem>
										<MenuItem value={40}>30-40</MenuItem>
									</Select>
									{
										checkboxFilters.filter(o => o.checked).map(filter => (
											<div className="tag">
												<span>{filter.name}</span>
												<button type="button" onClick={e => handleCheckboxFilter(filter.name, false)}>X</button>
											</div>
										))
									}
								</Col>
								<Col xs={12} sm={6} className='text-right'>
									<Select
										labelId="select-sort"
										id="select-sort"
										value={filterSort}
										onChange={handleFilterSort}
									>
										<MenuItem value="Featured">Featured</MenuItem>
										<MenuItem value="Time">Time</MenuItem>
										<MenuItem value="Popular">Popular</MenuItem>
									</Select>
								</Col>
							</Row>
						</div>

						</div>
						<OnSiteList data={dataFiltered}
							          showDetails={handleShowDetails}
												fieldValues={props.fieldValues} />
					</React.Fragment>
				)
			}
		</div>
		</OnsiteIndexStyle>
	)
}

export default OnsiteVenue;
