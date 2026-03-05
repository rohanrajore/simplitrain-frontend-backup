import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState,useEffect} from 'react';
// import './pagination.css';
import ReactPaginate from 'react-paginate';
import Review from '../review/review.jsx';
import { ReactPaginateReview } from './pagination.style';

const ReviewsContainer = props => {


  const [reviews,setReviews] = useState([])
  const [index,setIndex] = useState(2)
  const [currentReviews,setCurrentReviews] =useState([])

  useEffect(()=>{
    setReviews(props.info)
    setCurrentReviews(props.info.slice(0,3))
  },[])

  const handleLoadMore= e=>{
        let array= reviews.slice(0,index * 3)
        setCurrentReviews(array)
        setIndex(index+1)
  }


  return(
  <ReactPaginateReview id="react-paginate-review" className='mb-100'>
        {!props.onsiteVenue && <h5 className="review-title">Reviews </h5>}
        {props.onsiteVenue && <h5 className="review-title" style={{marginLeft:0, marginRight:"auto"}}>Venue Reviews</h5>}
          {currentReviews.length<1? <div className="trending-noCourses" style={{marginLeft:0}}>This course doesn't have reviews</div>
            :currentReviews.map(review=>(

              <Review info={review} key={review.id}/>
          ))}

          {(index<= Math.ceil(reviews.length/3)) && <div   className="review-loadMoreBtn"
                                               onClick={handleLoadMore}>Load More</div>}
  </ReactPaginateReview>
);}

export default ReviewsContainer;
