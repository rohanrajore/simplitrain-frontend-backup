import React,{useState} from 'react';
import "./filtersBar.css";
import Select from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCrosshairs,
         faFilter, faTimes} from '@fortawesome/free-solid-svg-icons';
import {customStyles,locationOptions} from "../options.js";


const FiltersBar = props => {

  const [location,setLocation] =useState(locationOptions[0])

  const handleLocation = value => setLocation(value)

  return(
  <div className="filtersBar-container">
      <div>
        <Select
              className="select-location"
              styles={customStyles}
              options={locationOptions}
              defaultValue={locationOptions[0]}
              value={location}
              onChange={handleLocation}
          />

        <div className="filtersBar-search">
          <FontAwesomeIcon icon={faSearch}/>
          <input type="text"
                 placeholder="Search for Venues"/>
          <div>
            <FontAwesomeIcon icon={faCrosshairs}/>
            Locate me
          </div>
        </div>

        <div className="filtersBar-allBtn"
             onClick={()=>props.setAllFilters(!props.allFilters)}>
            <FontAwesomeIcon icon={faFilter}/>
            All Filters
        </div>
      </div>

      <div className="filtersBar-aplied">
          <div>Filters</div>
          <div>
            <div className="filter-item" disabled>
              11 Sep 2021
            </div>
            <div className="filter-item">
              Wifi
              <FontAwesomeIcon icon={faTimes}/>
            </div>
            <div className="filter-item">
              Accessibility
              <FontAwesomeIcon icon={faTimes}/>
            </div>
            <div className="filter-item">
              No. of Participants 20-30
              <FontAwesomeIcon icon={faTimes}/>
            </div>
            <div className="filter-item">
              No. of Participants 20-30
              <FontAwesomeIcon icon={faTimes}/>
            </div>
            <div className="filter-item">
              No. of Participants 20-30
              <FontAwesomeIcon icon={faTimes}/>
            </div>
            <div className="filter-item">
              No. of Participants 20-30
              <FontAwesomeIcon icon={faTimes}/>
            </div>
          </div>
          <div>Clear all</div>
      </div>

  </div>
)}

export default FiltersBar;
