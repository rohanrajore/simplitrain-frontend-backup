import React,{useState} from 'react';
import "./venueList.css";
import VenueCard from "./venueCard/venueCard.jsx";
import venueJSON from "./venueJSON.js";
import FiltersBar from "./filtersBar/filtersBar.jsx";
import AllFilters from "./allFilters/allFilters.jsx";
import Select from 'react-select';
import {customStyles, sortOptions} from "./options.js";


const VenueList = props => {

  const [isMyVenues, setIsMyVenues] = useState(false)
  const [sort, setSort] = useState(sortOptions[0])
  const [allFilters, setAllFilters] = useState(false)

  const handleSort = value =>setSort(value)

  return(
  <div className="secondStep-venueList">
    <div className="stepper-stepTitle">
      {isMyVenues?"My Venues List":"Venues List"}
      {isMyVenues && <div className="register-venueList">Register My Venue</div>}
      <div className="switch-venueList"
           onClick={()=>setIsMyVenues(!isMyVenues)}>
         {isMyVenues?"All Venues":"My Venues"}
      </div>
    </div>

    {allFilters && <AllFilters setAllFilters={setAllFilters}/>}

    {!isMyVenues && <FiltersBar   allFilters={allFilters}
                                  setAllFilters={setAllFilters}/>}

    {!isMyVenues &&
      <div className="results-sort">
          <div>
            1-10 of over 1000 results
          </div>
          <div>
            <label>Sort By:</label>
            <Select
                    className="select-location"
                    styles={customStyles}
                    options={sortOptions}
                    defaultValue={sortOptions[0]}
                    value={sort}
                    onChange={handleSort}
              />
          </div>

      </div>
    }

    {venueJSON.map(venue=>(
      <VenueCard venueInfo={venue}
                 setScreen={props.setScreen}/>
    ))}
  </div>
)}

export default VenueList;
