import React,{useState} from 'react';
// import './allFilters.css';
import {useSelector, useDispatch} from 'react-redux';
import {setTrainingStartDate, setLevels,setDuration, setPriceRange,
  setAvgCustomerReview,setCourseDate,setDistance,setLocation, setLanguage,
  setVenueType} from '../../../redux/browse-courses/browse-courses-actions.js';
import RangeSlider from '../left-filters/rangeSlider/rangeSlider.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDown, faAngleUp, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AverageCustomerReview from '../left-filters/avgCustomerReview/avgCustomerReview.jsx';
import { AllFilterPopupContainer } from './allFilters.Style';
import moment from 'moment';

const AllFilters = props => {

  // These are local state, any change will be stored in local, and if we click on apply, then it will be moved to our global states,
  // if cancel is clicked then nothing will be changed in our global state
  const [levelState,setLevelState] = useState(useSelector( state => state.browseCourses.levels))
  const [durationState,setDurationState] = useState(useSelector( state => state.browseCourses.duration))
  const [trainingStartDateState,setTrainingStartDateState] = useState(useSelector( state => state.browseCourses.trainingStartDate))
  const [priceRangeState,setPriceRangeState] = useState(useSelector(state => state.browseCourses.rangePrice))
  const [avgCustomerReviewState,setAvgCustomerReviewState] = useState(useSelector(state => state.browseCourses.avgCustomerReview))
  const [startDateState, setStartDateState] = useState(useSelector(state=>state.browseCourses.courseDate[0]))
  const [endDateState, setEndDateState] = useState(useSelector(state=>state.browseCourses.courseDate[1]))
  const [distanceState, setDistanceState] = useState(useSelector(state=>state.browseCourses.distance))
  const [languageState, setLanguageState] = useState(useSelector(state=>state.browseCourses.language))
  const [venueTypeState, setVenueTypeState] = useState(useSelector(state=>state.browseCourses.venueType))
  const locationState = useSelector(state=>state.browseCourses.location)

  const [accordianStatus, setAccordianStatus] = useState('');

  const handleSetPriceRange = value => setPriceRangeState(value)
  const handleSetAvgCustomerReview= value => setAvgCustomerReviewState(value)
  const startDateHandler = e => {
    setStartDateState(e.target.value)
    // If we already picked end date, this will prevent case that endDate will be lower than startDate
    if(moment(e.target.value)> moment(endDateState)){
      setEndDateState(e.target.value)
    }
  }
  const endDateHandler = e => setEndDateState(e.target.value)
  const distanceHandler = e => setDistanceState(e.target.value)
  const languageHandler = e => setLanguageState(e.target.value)
  console.log(startDateState)

  const dispatch =useDispatch()

  const applyClickHandler= e =>{
            dispatch(setLevels(levelState))
            dispatch(setDuration(durationState))
            dispatch(setPriceRange(priceRangeState))
            dispatch(setAvgCustomerReview(avgCustomerReviewState))
            dispatch(setLanguage(languageState))

            // This will handle traininStartDate / course date conflict
            if(startDateState !== "" && endDateState !== "") {
              dispatch(setTrainingStartDate(""))
              dispatch(setCourseDate(startDateState,endDateState))
            }
            else{
                dispatch(setTrainingStartDate(trainingStartDateState))
                dispatch(setCourseDate("",""))
            }

            // This will handle venueType /location conflict
            dispatch(setVenueType(venueTypeState))
            if(venueTypeState!=="ONSITE"){
              let obj={latitude:"",longitude:"",city:{key:"001",
                                                       label:"All locations",
                                                       value:"all"}}
              dispatch(setLocation(obj))
            }


            dispatch(setDistance(distanceState))
            props.closeAllFilters()
  }

  const openAccordian = (status) =>{
    if(status == accordianStatus){
      setAccordianStatus('');
    }else{
      setAccordianStatus(status);
    }

  }

  // These are functions to get user location
/*  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {

        let object={latitude:position.coords.latitude,longitude:position.coords.longitude, city:""}
        alert("Your coordinates are: latitude: "+ position.coords.latitude + " longitude: " + position.coords.longitude)
        dispatch(setLocation(object))
  } */


  return (
    <AllFilterPopupContainer>
      <div
        className="allfilter-popup-backdrop"
        onClick={props.closeAllFilters}>
      </div>
  <div className="all-filters-container">
          <div className="all-filters-group">

            {/*TRAINING MODE*/}
               <div className={`all-filters-item ${accordianStatus == 'Training Mode'?'active':null}`}>
                 <div className="all-filters-item-title" onClick={()=> openAccordian('Training Mode')} >Training Mode <span>{ accordianStatus == 'Training Mode' ? <FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} /> }</span></div>

                 <div className="all-filters-part-item">
                   <input type="radio" name='venueTypeAF' id="onlineVenueAF" value="ONLINE"
                   checked={venueTypeState==='ONLINE'} onChange={() =>setVenueTypeState("ONLINE")}/>
                 <label for="onlineVenueAF"> Online </label>
                 </div>

                 <div className="all-filters-part-item">
                   <input type="radio" name='venueTypeAF' id="onsiteVenueAF" value="ONSITE"
                   checked={venueTypeState==='ONSITE'} onChange={() =>setVenueTypeState("ONSITE")}/>
                 <label for="onsiteVenueAF"> Classroom</label>
                 </div>
               </div>



               {/*TRAINING START DATE*/}
                  <div className={`all-filters-item ${accordianStatus == 'Training Start Date'?'active':null}`}>
                    <div className="all-filters-item-title" onClick={()=> openAccordian('Training Start Date')}>Training Start Date <span>{ accordianStatus == 'Training Start Date' ? <FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} /> }</span></div>
                    <div className="all-filters-part-item">
                      <input type="radio" name='trainingStartDateAF' id="thisWeekAF"  value="THIS_WEEK"
                         checked={trainingStartDateState==="THIS_WEEK"} onChange={() =>setTrainingStartDateState("THIS_WEEK")} />
                       <label htmlFor="thisWeekAF"> This Week</label>
                    </div>

                    <div className="all-filters-part-item">
                      <input type="radio" name='trainingStartDateAF' id="nextWeekAF" value="NEXT_WEEK"
                         checked={trainingStartDateState==="NEXT_WEEK"} onChange={() =>setTrainingStartDateState("NEXT_WEEK")}/>
                       <label htmlFor="nextWeekAF"> Next Week</label>
                    </div>

                    <div className="all-filters-part-item">
                      <input type="radio" name='trainingStartDateAF' id="thisMonthAF" value="THIS_MONTH"
                         checked={trainingStartDateState==='THIS_MONTH'} onChange={() =>setTrainingStartDateState("THIS_MONTH")}/>
                       <label htmlFor="thisMonthAF"> This Month</label>
                    </div>

                    <div className="all-filters-part-item">
                      <input type="radio" name='trainingStartDateAF' id="next3MonthsAF"  value="NEXT_THREE_MONTHS"
                         checked={trainingStartDateState==='NEXT_THREE_MONTHS'} onChange={() =>setTrainingStartDateState("NEXT_THREE_MONTHS")}/>
                       <label htmlFor="next3MonthsAF"> Next 3 Months</label>
                    </div>

                    <div className="all-filters-part-item">
                      <input type="radio" name='trainingStartDateAF' id="allTimeAF"  value="ALL_TIME"
                         checked={trainingStartDateState==='ALL_TIME'} onChange={() =>setTrainingStartDateState("ALL_TIME")}/>
                       <label htmlFor="allTimeAF"> All Time</label>
                    </div>
                  </div>



                  {/*PRICE*/}
                  <div className={`all-filters-item ${accordianStatus == 'Price'?'active':null}`}>
                        <div className="all-filters-item-title" onClick={()=> openAccordian('Price')}>Price <span>{ accordianStatus == 'Price' ? <FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} /> }</span></div>
                        <div id="priceResponsive" className="all-filters-part-item" style={{width:'80%',marginTop:'20%'}}>
                            <RangeSlider allFiltersOpen={props.allFiltersOpen}
                                         handleSetPriceRange={handleSetPriceRange}
                                         priceRangeState={priceRangeState}
                                         maxPrice={props.maxPrice}/>
                        </div>
                  </div>



                  {/*RATINGS*/}
                  <div className={`all-filters-item ${accordianStatus == 'Ratings'?'active':null}`}>
                          <div className="all-filters-item-title" onClick={()=> openAccordian('Ratings')}>Ratings <span>{ accordianStatus == 'Ratings' ? <FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} /> }</span></div>
                          <div className="all-filters-item-review">
                              <AverageCustomerReview allFiltersOpen={props.allFiltersOpen}
                                                     avgCustomerReviewState={avgCustomerReviewState}
                                                     handleSetAvgCustomerReview={handleSetAvgCustomerReview}
                              avgCustomerReviewState={avgCustomerReviewState}/>
                          </div>
                  </div>




             {/*LEVEL*/}
                <div className={`all-filters-item ${accordianStatus == 'Level'?'active':null}`}>
                  <div className="all-filters-item-title" onClick={()=> openAccordian('Level')}>Level <span>{ accordianStatus == 'Level' ? <FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} /> }</span></div>
                  <div className="all-filters-part-item">
                    <input type="radio" name='levelsAF' id="allLevelsAF"  value="ALL"
                      checked={levelState==='ALL'} onChange={() =>setLevelState("ALL")}/>
                    <label for="allLevelsAF"> All levels</label>
                  </div>

                  <div className="all-filters-part-item">
                    <input type="radio" name='levelsAF' id="beginnerAF" value="BEGINNER"
                    checked={levelState==='BEGINNER'} onChange={() =>setLevelState("BEGINNER")}/>
                  <label for="beginnerAF"> Beginner</label>
                  </div>

                  <div className="all-filters-part-item">
                    <input type="radio" name='levelsAF' id="intermediateAF" value="INTERMEDIATE"
                    checked={levelState==='INTERMEDIATE'} onChange={() =>setLevelState("INTERMEDIATE")}/>
                  <label for="intermediateAF"> Intermediate</label>
                  </div>

                  <div className="all-filters-part-item">
                    <input type="radio" name='levelsAF' id="advancedAF"  value="ADVANCED"
                    checked={levelState==='ADVANCED'} onChange={() =>setLevelState("ADVANCED")}/>
                  <label for="advancedAF"> Advanced</label>
                  </div>
                </div>






              {/* DISTANCE*
                <div className={`all-filters-item ${accordianStatus == 'Training Mode'?'active':null}`}>
                      <div className="all-filters-item-title">Distance</div>
                      <div id="distanceResponsive" className="filter-container-modified">
                          <label>Within</label>
                          <select className="form-control" id="distance" value={distanceState} onChange={distanceHandler} >
                              <option value="25" disabled={locationState.latitude !== "" && locationState.longitude !== ""?false: true}>25km</option>
                              <option value="50" disabled={locationState.latitude !== "" && locationState.longitude !== ""?false: true}>50km</option>
                              <option value="100" disabled={locationState.latitude !== "" && locationState.longitude !== ""?false: true}>100km</option>
                              <option value="250" disabled={locationState.latitude !== "" && locationState.longitude !== ""?false: true}>250km</option>
                          </select>
                      </div>
                      <div className="all-filters-part-item">

                      </div>
                </div>
                /}






                {/*DURATION*/}
                <div className={`all-filters-item ${accordianStatus == 'Duration'?'active':null}`}>
                  <div className="all-filters-item-title" onClick={()=> openAccordian('Duration')}>Duration <span>{ accordianStatus == 'Duration' ? <FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} /> }</span></div>
                  <div className="all-filters-part-item">
                    <input type="radio" name='duration' id="0-4"  value={[0,240]}
                      checked={durationState[0]===0 && durationState[1]===240} onChange={() => setDurationState([0,240])}/>
                    <label for="0-4"> 0-4 hours</label>
                  </div>

                  <div className="all-filters-part-item">
                    <input type="radio" name='duration' id="4-8" value={[240,480]}
                      checked={durationState[0]===240 && durationState[1]===480} onChange={() => setDurationState([240,480])}/>
                    <label for="4-8"> 4-8 hours</label>
                  </div>

                  <div className="all-filters-part-item">
                    <input type="radio" name='duration' id="8-16" value={[480,960]}
                      checked={durationState[0]===480 && durationState[1]===960} onChange={() => setDurationState([480,960])}/>
                    <label for="8-16"> 8-16 hours</label>
                  </div>

                  <div className="all-filters-part-item">
                    <input type="radio" name='duration' id="16-40"  value={[960,2400]}
                      checked={durationState[0]===960 && durationState[1]===2400} onChange={() => setDurationState([960,2400])}/>
                    <label for="16-40"> 16-40 hours</label>
                  </div>

                  <div className="all-filters-part-item">
                    <input type="radio" name='duration' id=">40"  value={[2400,100000]}
                      checked={durationState[0]===2400 && durationState[1]===100000} onChange={() => setDurationState([2400,100000])}/>
                    <label for=">40"> +40 hours</label>
                  </div>

                  <div className="all-filters-part-item">
                    <input type="radio" name='duration' id="0-100000"  value={[0,100000]}
                      checked={durationState[0]===0 && durationState[1]===100000} onChange={() => setDurationState([0,100000])}/>
                    <label for="0-100000">All Time</label>
                  </div>
                </div>






                   {/*COURSE LANGUAGE*/}
                      <div className={`all-filters-item ${accordianStatus == 'Course Language'?'active':null}`}>
                        <div className="all-filters-item-title" onClick={()=> openAccordian('Course Language')}>Course Language <span>{ accordianStatus == 'Course Language' ? <FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} /> }</span></div>
                        <div className="all-filters-part-item">
                          <input type="radio" name='languageAF' id="englishAF"  value="ENGLISH"
                             checked={languageState==="ENGLISH"} onChange={() =>setLanguageState("ENGLISH")} />
                           <label htmlFor="englishAF"> English</label>
                        </div>

                        <div className="all-filters-part-item">
                          <input type="radio" name='languageAF' id="kannadaAF"  value="KANNADA"
                             checked={languageState==="KANNADA"} onChange={() =>setLanguageState("KANNADA")} />
                           <label htmlFor="kannadaAF"> Kannada</label>
                        </div>

                        <div className="all-filters-part-item">
                          <input type="radio" name='languageAF' id="teluguAF"  value="TELUGU"
                             checked={languageState==="TELUGU"} onChange={() =>setLanguageState("TELUGU")} />
                           <label htmlFor="teluguAF"> Telugu</label>
                        </div>

                        <div className="all-filters-part-item">
                          <input type="radio" name='languageAF' id="tamilAF"  value="TAMIL"
                             checked={languageState==="TAMIL"} onChange={() =>setLanguageState("TAMIL")} />
                           <label htmlFor="tamilAF"> Tamil</label>
                        </div>

                        <div className="all-filters-part-item">
                          <input type="radio" name='languageAF' id="malayalamAF"  value="MALAYALAM"
                             checked={languageState==="MALAYALAM"} onChange={() =>setLanguageState("MALAYALAM")} />
                           <label htmlFor="malayalamAF"> Malayalam</label>
                        </div>

                        <div className="all-filters-part-item">
                          <input type="radio" name='languageAF' id="hindiAF"  value="HINDI"
                             checked={languageState==="HINDI"} onChange={() =>setLanguageState("HINDI")} />
                           <label htmlFor="hindiAF"> Hindi</label>
                        </div>

                        <div className="all-filters-part-item">
                          <input type="radio" name='languageAF' id="allLanguagesAF"  value="ALL"
                             checked={languageState==="ALL"} onChange={() =>setLanguageState("ALL")} />
                           <label htmlFor="allLanguagesAF"> All Languages</label>
                        </div>
                      </div>



                {/*COURSE DATE*/}
                <div className={`all-filters-item ${accordianStatus == 'Course Date'?'active':null}`}>
                      <div className="all-filters-item-title" onClick={()=> openAccordian('Course Date')}>Course Date <span>{ accordianStatus == 'Course Date' ? <FontAwesomeIcon icon={faChevronUp} />:<FontAwesomeIcon icon={faChevronDown} /> }</span></div>
                      <div className="all-filters-part-date">
                          <label for="betweenDate">between:</label>
                          <input className="form-control" min={moment(new Date()).format("YYYY-MM-DD")} type="date" id="betweenDate" name="betweenDate" value={startDateState} onChange={startDateHandler}/>
                      </div>

                      <div className="all-filters-part-date">
                          <label for="endDate">and:</label>
                          <input className="form-control" min={startDateState} type="date" id="andDate" name="endDate" value={endDateState} onChange={endDateHandler}/>
                      </div>
                </div>
          </div>

          <div className="all-filters-buttons">
                  <div className="all-filters-btn afFirst" onClick={(props.closeAllFilters)}> Cancel</div>
                  <div className="all-filters-btn afSecond" onClick={applyClickHandler}> Apply</div>
          </div>
  </div>
  </AllFilterPopupContainer>
);}

export default AllFilters;
