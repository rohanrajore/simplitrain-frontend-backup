import React,{useState, useEffect} from 'react';
// import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faAngleDown, faAngleUp, faTimes, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import Category from './category/category.jsx';

import {useSelector, useDispatch} from 'react-redux';
import {setTrainingStartDate,setSearch,setSort,setCategory,
        setCourseDate,setLanguage,setPageSize,setPagination,
        setDuration, setDistance, setLocation, setVenueType} from '../../../redux/browse-courses/browse-courses-actions.js';
import Select from 'react-select';
import { NavContainer } from './navbar.style.jsx';
import { Col, Row, Button } from 'react-bootstrap';
import moment from 'moment';

const Navbar = props => {

      const search = useSelector(state => state.browseCourses.search)
      const category = useSelector(state => state.browseCourses.category)
      const subCategory = useSelector(state => state.browseCourses.subCategory)
      const pageSize = useSelector(state => state.browseCourses.pageSize)
      const pageNumber =useSelector(state => state.browseCourses.pagination.pageNumber)
      const totalElements = useSelector(state => state.browseCourses.pagination.totalElements)
      const coursesArray= useSelector(state=>state.browseCourses.pagination.currentCourses)
      const sort = useSelector(state => state.browseCourses.sort)
      const language = useSelector(state => state.browseCourses.language)
      const pagination = useSelector(state =>state.browseCourses.pagination)
      const duration = useSelector(state =>state.browseCourses.duration)
      const distance = useSelector(state =>state.browseCourses.distance)
      const courseDate = useSelector(state =>state.browseCourses.courseDate)
      const venueType = useSelector(state =>state.browseCourses.venueType)

      const dispatch =useDispatch()

      const [tempSort,setTempSort] = useState()

      const [sortOptions,setSortOptions] = useState([{"key":"002","value":"RATINGS","label":"Ratings: high to low"},
                          {"key":"003","value":"DISTANCE","label":"Distance"},
                          {"key":"004","value":"PRICE","label":"Price: low to high"},
                          {"key":"005","value":"START_DATE","label":"Course Date"},
                          {"key":"006","value":"DURATION","label":"Course Duration"},])

      const handleClickSort = clickedItem =>{
         dispatch(setSort(clickedItem.value))
      }

      const handlePageSize = e =>{
        let copy =pagination
        copy["pageNumber"]= 0
        dispatch(setPageSize(e.target.value))
        dispatch(setPagination(copy))
      }

      const handleClickSearch = e =>{
        dispatch(setCategory(""))
        dispatch(setSearch(e.target.value))
      }

      const handleDuration = () =>{
        dispatch(setDuration([0,100000]))
      }
      const handleDistance = () =>{
        dispatch(setDistance(""))
      }
      const handleCourseDate = () =>{
        dispatch(setCourseDate("",""))
        dispatch(setTrainingStartDate("ALL_TIME"))
      }
      const handleLanguage = e =>{
          dispatch(setLanguage("ALL"))
      }
      const handleVenueType = () =>{
          dispatch(setVenueType("ALL"))
          let obj={latitude:"",longitude:"",city:{key:"001",
                                                   label:"All locations",
                                                   value:"all"}}
          dispatch(setLocation(obj))
      }


      const customStyles = {
      dropdownIndicator: () => ({
        cursor:"pointer",
      }),
      option: (provided, state) => ({
        ...provided,
        cursor:"pointer",
      }),
      valueContainer: (provided, state) => ({
        ...provided,
        cursor:"pointer",
        width:"150px"
      }),
      menu: (provided, state) => ({
        ...provided,
        cursor:"pointer",
        width:"175px",
        top:30,
        left:'5px',
      }),
    }


    useEffect(()=>{
      if(venueType==="ONLINE"){
         setSortOptions([{"key":"002","value":"RATINGS","label":"Ratings: high to low"},
                             {"key":"004","value":"PRICE","label":"Price: low to high"},
                             {"key":"005","value":"START_DATE","label":"Course Date"},
                             {"key":"006","value":"DURATION","label":"Course Duration"},])
          dispatch(setSort("RATINGS"))                   
      }
      else{
        setSortOptions([{"key":"002","value":"RATINGS","label":"Ratings: high to low"},
                            {"key":"003","value":"DISTANCE","label":"Distance"},
                            {"key":"004","value":"PRICE","label":"Price: low to high"},
                            {"key":"005","value":"START_DATE","label":"Course Date"},
                            {"key":"006","value":"DURATION","label":"Course Duration"},])
      }
    },[venueType])

  return(
  <NavContainer>
    <Row>
      <Col md={12} sm={12} className="search-navbar-left">
        { !props.loading && <div className="text-results">
            {coursesArray.length>0?pageNumber*pageSize+1:0} - {(pageNumber+1)*pageSize>totalElements?
              totalElements:
            (pageNumber+1)*pageSize} of {totalElements} results
            <span style={{color:'#018cb0'}}>
              {(search==="" && !category.name && !subCategory.name )?""
              :(search==="" && !subCategory.name)? ` in "${category.name}"`
              :(search==="" && !category.name)? ` in "${subCategory.name}"`
              : ` for "${search}"`}
            </span>
        </div>}
        <div className="mobile-filterIcon"
        onClick={props.openMobileFilters}
        >
          <FontAwesomeIcon icon={faSlidersH} />
        </div>
      </Col>
      <Col md={12} sm={12}>
        <Row className="search-navbar-right">
          <Col sm={12} md={6} className="appliedFilters desktop">
              
            {(duration[0]!==0 || duration[1]!==100000)
                            &&<div className="appliedFilter-item">
                                <div>Duration: <p>{duration[0]} - {duration[1]} Minutes</p></div>
                                <span onClick={handleDuration}><FontAwesomeIcon icon={faTimes} /></span>
                            </div>
            }
            {/*distance!=="" &&<div className="appliedFilter-item">
                                <div>Distance: <p>{distance} Km</p></div>
                                <span onClick={handleDistance}><FontAwesomeIcon icon={faTimes} /></span>
                            </div>
            */}
            {courseDate[0]!=="" &&<div className="appliedFilter-item">
                                  <div>Course Date: <p>{moment(courseDate[0]).format("MMM Do YYYY")} - {moment(courseDate[1]).format("MMM Do YYYY")}</p></div>
                                  <span onClick={handleCourseDate}><FontAwesomeIcon icon={faTimes} /></span>
                              </div>
            }
            {language!=="ALL" &&<div className="appliedFilter-item">
                                  <div>Language: <p>{language}</p></div>
                                  <span onClick={handleLanguage}><FontAwesomeIcon icon={faTimes} /></span>
                              </div>
            }
            {/*venueType!=="ALL" &&<div className="appliedFilter-item">
                                    <div>Venue Type: <p>{venueType}</p></div>
                                    <span onClick={handleVenueType} > <FontAwesomeIcon icon={faTimes} /> </span>
                                </div>
            */}

          </Col>
          <Col sm={12} md={6} className="appliedFilters mobile">
              
            {(duration[0]!==0 || duration[1]!==100000)
                            &&<div className="appliedFilter-item">
                                <div><p>{duration[0]} - {duration[1]} Minutes</p></div>
                                <span onClick={handleDuration}><FontAwesomeIcon icon={faTimes} /></span>
                            </div>
            }
            {/*distance!=="" &&<div className="appliedFilter-item">
                                <div>Distance: <p>{distance} Km</p></div>
                                <span onClick={handleDistance}><FontAwesomeIcon icon={faTimes} /></span>
                            </div>
            */}
            {courseDate[0]!=="" &&<div className="appliedFilter-item">
                                  <div><p>{moment(courseDate[0]).format("MMM Do YYYY")} - {moment(courseDate[1]).format("MMM Do YYYY")}</p></div>
                                  <span onClick={handleCourseDate}><FontAwesomeIcon icon={faTimes} /></span>
                              </div>
            }
            {language!=="ALL" &&<div className="appliedFilter-item">
                                  <div><p>{language}</p></div>
                                  <span onClick={handleLanguage}><FontAwesomeIcon icon={faTimes} /></span>
                              </div>
            }
            {/*venueType!=="ALL" &&<div className="appliedFilter-item">
                                    <div>Venue Type: <p>{venueType}</p></div>
                                    <span onClick={handleVenueType} > <FontAwesomeIcon icon={faTimes} /> </span>
                                </div>
            */}

          </Col>
          <Col md={6} sm={12} className="allFilters-btn-row">

          <Button className="clearfilter" onClick={props.clearFilter}>Clear all filters</Button>
            <Button id="filterWithMargin" className="allFilters-box" onClick={props.openAllFilters} >
              <FontAwesomeIcon icon={faFilter} />
              All filters
            </Button>


            <div className="select-location-button">
              <label>Sort By:</label>
              <Select
                className="select-location"
                styles={customStyles}
                options={sortOptions}
                defaultValue={sortOptions[0]}
                value={sortOptions.filter(item => item.value===sort)}
                onChange={handleClickSort}
              />
            </div>
          </Col>

        </Row>
      </Col>
    </Row>
  </NavContainer>
);}

export default Navbar;
