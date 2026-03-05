import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './browseCourses.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {faCircle, faDotCircle} from "@fortawesome/free-regular-svg-icons";
import {useSelector, useDispatch} from 'react-redux';
import {faHome, faBars, faLaptop, faCalendar,faShareAlt, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../../components/browse-courses/navbar/navbar.jsx';
import LeftFilters from '../../components/browse-courses/left-filters/leftFilters.jsx';
import AllFilters from '../../components/browse-courses/allFilters/allFilters.jsx';
import Pagination from '../../components/browse-courses/courses/pagination.jsx';
import {resetFilters, setPriceRange, setSort} from '../../redux/browse-courses/browse-courses-actions.js';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowseCoursesContainer, BrowseCoursesContent } from './browseCourses.styles.jsx';
import fetchMaxPrice from "./fetchMaxPrice.js";
library.add(faHome, faBars, faLaptop, faCalendar, faShareAlt, faShoppingCart)

function BrowseCourses() {
    const dispatch = useDispatch()
    const [allFiltersOpen,setAllFiltersOpen] = useState(false)
    const [activeSortBy,setActiveSortBy] = useState('')
    const [mobieFiltersOpen,setMobileFiltersOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [activeFilterTab, setActiveFilterTab] = useState('Refine by')
    const [maxPrice,setMaxPrice] = useState(0)
    const openAllFilters = e => setAllFiltersOpen(true)
    const openMobileFilters = e => {
      setMobileFiltersOpen(true);
    }
    const closeAllFilters = e => setAllFiltersOpen(false)
    const closeMobileFilters = e => setMobileFiltersOpen(false)
    const handleLoading = value => setLoading(value)

    const clearFilter = () =>{
      dispatch(resetFilters())
    }

    const handleClickSort = clickedItem =>{
      setActiveSortBy(clickedItem.value);
      dispatch(setSort(clickedItem.value));
    }
    
    const [sortOptions,setSortOptions] = useState([{"key":"002","value":"RATINGS","label":"Ratings: high to low"},
    {"key":"003","value":"DISTANCE","label":"Distance"},
    {"key":"004","value":"PRICE","label":"Price: low to high"},
    {"key":"005","value":"START_DATE","label":"Course Date"},
    {"key":"006","value":"DURATION","label":"Course Duration"},])

useEffect(()=>{
  async function fetch(){
   let response = await fetchMaxPrice()
   if(response.actionResult==="SUCCESS"){
     let maxPrice = response.maxPrice
     setMaxPrice(maxPrice)
     dispatch(setPriceRange([0,maxPrice]))
   }
 }
 fetch()
},[1])

  return (
      <BrowseCoursesContainer className="page-section">
        <Container>
          <Navbar openAllFilters={openAllFilters}  openMobileFilters={openMobileFilters} clearFilter={clearFilter} loading={loading}/>

          {allFiltersOpen===true? <AllFilters allFiltersOpen={allFiltersOpen}
                                              maxPrice={maxPrice}
                                              closeAllFilters={closeAllFilters}/>: ""}
          {
            mobieFiltersOpen?
              <div className='mobile-filter'>
                <div className='mobile-filter-head'>
                  <h3>Filter</h3>
                  <small className='close-icon' onClick={(e) => closeMobileFilters()}>
                    <FontAwesomeIcon icon={faTimes} />
                </small>
                </div>
                <div className='mobile-filter-body'>
                  <div className='button-groups'>
                    <button onClick={()=> setActiveFilterTab('Refine by')} className={ activeFilterTab == 'Refine by' ? 'active' : '' }>Refine by</button>
                    <button onClick={()=> setActiveFilterTab('Sort by')} className={ activeFilterTab == 'Sort by' ? 'active' : '' }>Sort by</button>
                  </div>
                  {
                    activeFilterTab == 'Sort by'?
                      <div className='mobile-filter-sort-by'>
                        {
                          sortOptions.map((item)=>(
                            <div onClick={()=>handleClickSort(item)} key={item.key}>
                              <h3>{item.label}</h3>
                              <span className={item.value == activeSortBy?'active':null}>
                                {
                                  item.value == activeSortBy?
                                  <FontAwesomeIcon icon={faDotCircle} />
                                  :<FontAwesomeIcon icon={faCircle} />
                                }
                              </span>
                            </div>
                          ))
                        }
                      
                      </div>
                    :<div className='mobile-filter-refine-by'>
                      <AllFilters 
                        allFiltersOpen={true}
                        maxPrice={maxPrice}
                        closeAllFilters={closeMobileFilters}
                      />
                    </div>
                    
                  }

                </div>
                {/* <div className='mobile-filter-footer'>
                    <button className='clear' onClick={()=>clearFilter()}>Clear All</button>
                    <button className='done'>Done</button>
                </div> */}
              </div>
            :null
          }

          <BrowseCoursesContent>
            <Row>
              <Col lg={3}>
                <LeftFilters maxPrice={maxPrice}/>
              </Col>
              <Col lg={9}>
                <Pagination loading={loading} handleLoading={handleLoading}/>
              </Col>
            </Row>
          </BrowseCoursesContent>
            <Switch>

            </Switch>
        </Container>
      </BrowseCoursesContainer>
  );
}

export default BrowseCourses;
