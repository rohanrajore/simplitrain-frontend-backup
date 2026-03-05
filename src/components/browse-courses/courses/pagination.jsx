import React,{useLayoutEffect,useState} from 'react';
import ReactPaginate from 'react-paginate';
//import './pagination.css';
import Course from './course/course.jsx';
import WeekScheduler from './weekScheduler/weekScheduler.jsx';
import EmptySearch from '../../../assets/empty-search.png';
import {useSelector, useDispatch} from 'react-redux';
import {setPagination,setTrainingStartDate, setLevels,setDuration, setPriceRange,
  setAvgCustomerReview,setCourseDate,setDistance,setLocation,setSearch,setCategory,
  setPageSize,resetFilters} from '../../../redux/browse-courses/browse-courses-actions.js';
import fetchCourses from "./fetchCourses.js";
import LoaderGif from '../../../styles/images/loading_spinner.gif';
import { BrowseCoursesPaginate } from './pagination.style';

const Pagination = props => {
      const numberOfPages = useSelector(state=>state.browseCourses.pagination.numberOfPages)
      const coursesArray= useSelector(state=>state.browseCourses.pagination.currentCourses)
      const totalElements= useSelector(state =>state.browseCourses.pagination.totalElements)
      const trainingStartDate= useSelector(state=>state.browseCourses.trainingStartDate)
      const levels= useSelector(state=>state.browseCourses.levels)
      const duration= useSelector(state=>state.browseCourses.duration)
      const rangePrice= useSelector(state=>state.browseCourses.rangePrice)
      const avgCustomerReview= useSelector(state=>state.browseCourses.avgCustomerReview)
      const courseDate= useSelector(state=>state.browseCourses.courseDate)
      const distance= useSelector(state=>state.browseCourses.distance)
      const location= useSelector(state=>state.browseCourses.location)
      const search= useSelector(state=>state.browseCourses.search)
      const category= useSelector(state=>state.browseCourses.category)
      const subCategory= useSelector(state=>state.browseCourses.subCategory)
      const sort = useSelector(state => state.browseCourses.sort)
      const language = useSelector(state => state.browseCourses.language)
      const pageSize = useSelector(state => state.browseCourses.pageSize)
      const pageNumber =useSelector(state => state.browseCourses.pagination.pageNumber)
      const venueType = useSelector(state => state.browseCourses.venueType)

      const dispatch = useDispatch()
      // API CALL
      const getCourses = async  function(){
              const response = await fetchCourses(category.id,subCategory.id,search,pageNumber,pageSize,trainingStartDate,rangePrice,levels,
                      language,avgCustomerReview,duration,courseDate,sort,location,venueType, distance)
              console.log(response)
              let pagination= await {currentCourses:response.courses!==undefined?response.courses.content:[],
                                    pageNumber: pageNumber,
                                    numberOfPages:response.courses!==undefined?response.courses.totalPages:0,
                                    totalElements:response.courses!==undefined?response.courses.totalElements:""}
               await dispatch(setPagination(pagination))
      }

      const handlePageClick= e =>{
           let pageNum = e.selected
           let pagination ={
             "currentCourses":coursesArray,
             "pageNumber":pageNum,
             "numberOfPages":numberOfPages,
             "totalElements":totalElements
           }
           dispatch(setPagination(pagination))
      }

      const handleResetFilters= () =>{
        dispatch(resetFilters())
      }

      useLayoutEffect(()=>{
          window.scrollTo(0, 0);
         async function setup(){
          await  props.handleLoading(true)
          await getCourses()
          await props.handleLoading(false)
        }
         setup()
      },[pageSize,pageNumber,trainingStartDate,levels,duration,rangePrice,
      avgCustomerReview,courseDate,distance,location,search,category,subCategory,language,sort,venueType])


  return(
  <BrowseCoursesPaginate>
    {/*<WeekScheduler/>*/}
    {
      props.loading===true?
        <div className="trending-loading">
          <img className="loadingImgCenter" src={LoaderGif} alt='' width="100px" />
        </div>
      :coursesArray.length<1?
        <div className="trending-noCourses">
          <img src={ EmptySearch } style={{ marginRight:15 }} />
          <div>
            <h5>No results found.
            <span className="browse-courses-resetFilter" onClick={handleResetFilters}> Reset all Filters</span></h5>
            <p>Try checking your spelling or use a more generic term</p>
          </div>
        </div>
      :coursesArray.map(course=>(
          <Course key={course.id}
            id={course.id}
            courseId={course.id}
            img={course.img}
            title={course.title}
            author={course.author}
            date={course.date}
            time={course.time}
            location={course.location}
            price={course.price}
            oldPrice={course.actualPrice}
            rating={course.rating}
            reviews={course.reviews}
            authorID={course.authorID}
            scheduleTime={course.scheduleTime}
            startDate={course.startDate}
            endDate={course.endDate}
            distance={course.distance}
            ignoreWeekend={course.ignoreWeekend}/>
        ))
    }
    {
      numberOfPages>1 && <ReactPaginate
        previousLabel={<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.38672 8.00004C3.39292 8.19072 3.4705 8.37972 3.61991 8.5254L10.0253 14.772C10.3362 15.076 10.8412 15.076 11.1529 14.772C11.4647 14.4689 11.4647 13.9764 11.1529 13.6724L5.33635 8.00001L11.1529 2.32764C11.4647 2.02362 11.4647 1.53114 11.1529 1.22802C10.8412 0.923993 10.3362 0.923993 10.0253 1.22802L3.61994 7.47462C3.47053 7.62033 3.39295 7.8093 3.38672 8.00001L3.38672 8.00004Z" fill="#4F4F4F"/>
        </svg>
        }
        nextLabel={<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3828 8C13.3766 7.80932 13.299 7.62035 13.1496 7.47461L6.74419 1.22802C6.43337 0.923993 5.92837 0.923993 5.61661 1.22802C5.30488 1.53114 5.30488 2.02364 5.61661 2.32764L11.4332 8L5.61661 13.6724C5.30488 13.9764 5.30488 14.4689 5.61661 14.772C5.92837 15.076 6.43334 15.076 6.74419 14.772L13.1496 8.52539C13.299 8.37968 13.3766 8.19068 13.3828 8Z" fill="#4F4F4F"/>
        </svg>
        }
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={numberOfPages}
        onPageChange={handlePageClick}
        pageClassName={'pagination-li'}
        pageLinkClassName={'pagination-link'}
        previousLinkClassName={'pagination-link'}
        nextLinkClassName={'pagination-link'}
        activeLinkClassName={'pagination-active'}
        containerClassName={'pagination-container'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        forcePage={pageNumber === 0 ? 0 : pageNumber}
      />
    }
  </BrowseCoursesPaginate>
  );
}

export default Pagination;
