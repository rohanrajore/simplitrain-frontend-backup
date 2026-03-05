import React,{useState} from 'react';
import "./allFilters.css";
import {venueTypeOptions,amenitiesOptions,
        customStyles,seatingTypeOptions,
        noOfParticipantsOptions} from "../options.js";
import Select from 'react-select';
import Slider from '@material-ui/core/Slider';

const AllFilters = props => {

  const [venueType,setVenueType] = useState([...venueTypeOptions])
  const [amenities,setAmenities] = useState([...amenitiesOptions])
  const [seatingType, setSeatingType] = useState([seatingTypeOptions[0]])
  const [noOfParticipants, setNoOfParticipants] = useState([noOfParticipantsOptions[0]])
  const [priceRange, setPriceRange] = useState([0,10000])

  const handleSeatingType = value => setSeatingType(value)
  const handleNoOfParticipants = value => setNoOfParticipants(value)
  const handlePriceRange = (event, newValue) => setPriceRange(newValue)
  const handleClose = event =>{
    props.setAllFilters(false)
  }

  return(
  <div className="secondStep-allFilters" onClick={handleClose}>
      <div className="allFilters-content">
          <div className="stepper-stepTitle">All Filters</div>

          <div className="allFilters-filters">
              <div className="allFilters-item">
                <div className="allFilters-filterName">Venue Type</div>
                {venueType.map(item=>(
                  <div className="allFilters-checkbox" key={item.value}>
                    <input id={item.value}
                           type="checkbox"
                           checked={item.checked}>
                    </input>
                    <label htmlFor={item.value}>{item.label}</label>
                  </div>
                ))}
              </div>

              <div className="allFilters-item">
                <div className="allFilters-filterName">Amenities</div>
                {amenities.map(item=>(
                  <div className="allFilters-checkbox" key={item.value}>
                    <input id={item.value}
                           type="checkbox"
                           checked={item.checked}>
                    </input>
                    <label htmlFor={item.value}>{item.label}</label>
                  </div>
                ))}
              </div>

              <div className="allFilters-item">
                <div className="allFilters-filterName">Seating Type</div>
                <Select
                        className="select-location"
                        styles={customStyles}
                        options={seatingTypeOptions}
                        defaultValue={seatingTypeOptions[0]}
                        value={seatingType}
                        onChange={handleSeatingType}
                  />

                <div className="allFilters-filterName">No. of Participants</div>
                <Select
                          className="select-location"
                          styles={customStyles}
                          options={noOfParticipantsOptions}
                          defaultValue={noOfParticipantsOptions[0]}
                          value={noOfParticipants}
                          onChange={handleNoOfParticipants}
                 />
              </div>

              <div className="allFilters-item">
                <div className="allFilters-filterName">Price Range</div>
                <Slider
                    min={0}
                    max={15000}
                    step={100}
                    value={priceRange}
                    onChange={handlePriceRange}
                    valueLabelDisplay="on"
                 />
              </div>
          </div>

          <div className="allFilters-btns">
              <div>Cancel</div>
              <div>Apply</div>
          </div>
      </div>
  </div>
)}

export default AllFilters;
