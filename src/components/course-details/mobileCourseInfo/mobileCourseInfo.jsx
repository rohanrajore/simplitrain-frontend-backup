import React,{useState} from 'react';
import './mobileCourseInfo.css';
import {Link} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar, faClock, faUserCircle, faCommentAlt,
        faQuestionCircle, faHeart} from "@fortawesome/free-regular-svg-icons";
import {faMapMarkerAlt, faGripVertical, faShareAlt, faCheck} from "@fortawesome/free-solid-svg-icons";
import SchedulePopup from "../../../common/schedulePopup/schedulePopup.jsx";
import {useSelector, useDispatch} from "react-redux";
import {addToCart, addToWishlist} from '../../../redux/cart/cart-actions.js';
import addItemToCart from "../courseCard/addToCart";
import { store } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import addItemToWishlist from "../courseCard/addToWishlist.js";

const MobileCourseInfo = props => {

        const info=props.info;
        const details=props.details
        const courseCard=props.info.courseCard;
        let rating= parseFloat(info.rating.value)

        const [showFullTime,setShowFullTime] = useState(false)
        const [scheduledTime, setScheduledTime] = useState(info.scheduleTime.slice(0,1))
        const [couponSelected,setCouponSelected] = useState({"id":"",
                                                             "name":"",
                                                             "discount":""})

        const dispatch = useDispatch()
        const user = useSelector(state => state.user.currentUser)

        const cart = useSelector(state => state.cart.cartArray)
         // If isAdded length is 1 then it means this course is already in cart
        const isAdded = cart.filter(cartItem => cartItem.cartItemCard.id===props.id)

        const handleShowFullTime = () =>{
                setShowFullTime(!showFullTime)
            }

            const handleAddCart = async () =>{
               const response = await addItemToCart(info.courseId,
                                  localStorage.getItem("anonymousUserID"),
                                  user===null?"":user.id,
                                  couponSelected.id,
                                  couponSelected.name)
               const status = await response.actionResult
               const msg = await response.message

                // show notification to user
                store.addNotification({
                  title: status.toUpperCase(),
                  message: msg,
                  type: status==="FAILURE"?"danger":"success",
                  container: "top-right",
                  animationIn: ["animated", "fadeIn"],
                  animationOut: ["animated", "fadeOut"],
                  dismiss: {
                    duration: 4000
                  },
                })
                if(status==="SUCCESS"){
                  if (user === null || user.id === null) {
                      localStorage.setItem("anonymousUserID",response.cart.anonymousUserID)
                    }
                    let cart= response.cart.cartItemList
                    let tax = response.cart.tax
                    let totalAmount = response.cart.totalAmount
                    let totalDiscount = response.cart.totalDiscount
                    let grandTotalAmount = response.cart.grandTotalAmount

                    let obj = { "cartArray": cart,
                                "tax": tax,
                                "totalAmount": totalAmount,
                                "grandTotalAmount": grandTotalAmount,
                                "totalDiscount": totalDiscount}
                    dispatch(addToCart(obj))
                }
            }

      const handleAddToWishlist = async () =>{
        const response = await addItemToWishlist(props.id,user.id)
        const status = await response.actionResult
        const msg = await response.message

        // show notification to user
        store.addNotification({
          title: status.toUpperCase(),
          message: msg,
          type: status==="FAILURE"?"danger":"success",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 4000
          },
        })
        if(status==="SUCCESS"){
            let wishlist = response.wishlist.wishListItemList
            let obj = { "wishlistArray": wishlist }
            dispatch(addToWishlist(obj))
      }
    }

  return(
  <div className="mobile-info-container">

    <div className="mobile-info-content">
    <div className="info-buttons">
    {info.venue==="ONLINE"? <button className="info-btn-1">Live Online </button>
                          :<button className="info-btn-2">Classroom </button> }
      {/*<button className="info-btn-3">Rec. Video </button>*/}
    </div>

    <div className="info-title">
      {info.title}
    </div>

    <div className="info-subtitle">
      {info.subTitle}
    </div>

    <div className="info-schedule">
          <div className="info-schedule-first">
              <FontAwesomeIcon className="fas-icon" icon={faCalendar}/>
              {info.scheduleDate}
          </div>

          <div className="info-schedule-time">
             {scheduledTime.map(time=>(
                <div style={{marginBottom:'7px'}} key={time.id}>
                       <FontAwesomeIcon className="fas-icon" icon={faClock} />
                       {time.time}
                </div> ))}
          </div>

          <div style={{marginLeft:'25px'}} className="info-scroll-link"
                onClick={handleShowFullTime}>
              { !showFullTime? "More Details...":"Less Details"}
          </div>

          {showFullTime && <SchedulePopup scheduleTime={info.scheduleTime}
                                          startDate={info.startDate}
                                          endDate={info.endDate}
                                          includeWeekend={info.includeWeekend}
                                          handleShowFullTime={handleShowFullTime}/>}
    </div>

    <div className="info-location">
        <FontAwesomeIcon className="fas-icon" icon={faMapMarkerAlt}/>
        {info.location}
    </div>

    <div className="info-schedule">
          <div className="info-schedule-first">
              <FontAwesomeIcon className="fas-icon" icon={faUserCircle}/>
              <LinkScroll to="course-instructor" className="info-scroll-link" offset={-50}
                spy={true} smooth={true} duration={250}>  {info.createdBy.name} </LinkScroll>
          </div>
          <div>
              <FontAwesomeIcon className="fas-icon" icon={faCommentAlt} />
              {info.language}
          </div>
    </div>

    <div className="info-schedule">
          <div className="info-schedule-first">
              <FontAwesomeIcon className="fas-icon" icon={faGripVertical}/>
              {info.seatsLeft}
          </div>
          <div className="info-rating-answer">
              <div className="info-ratings">
                  <FontAwesomeIcon icon={rating<0.5? ['far', 'star']: rating>=0.5&& rating<1?'star-half-alt' : 'star'} style={{color:"#e5a689"}}/>
                  <FontAwesomeIcon icon={rating<1.5? ['far', 'star']: rating>=1.5&& rating<2?'star-half-alt' : 'star'} style={{color:"#e5a689"}}/>
                  <FontAwesomeIcon icon={rating<2.5? ['far', 'star']: rating>=2.5&& rating<3?'star-half-alt' : 'star'} style={{color:"#e5a689"}}/>
                  <FontAwesomeIcon icon={rating<3.5? ['far', 'star']: rating>=3.5&& rating<4?'star-half-alt' : 'star'} style={{color:"#e5a689"}}/>
                  <FontAwesomeIcon icon={rating<4.5? ['far', 'star']: rating>=4.5&& rating<5?'star-half-alt' : 'star'} style={{color:"#e5a689"}}/>
                  <LinkScroll to="courseinfo-feedback" className="info-scroll-link" offset={-50}
                    spy={true} smooth={true} duration={250}>  {" " + info.rating.numberOfRates} Ratings </LinkScroll>

              </div>
              <div>
                  <FontAwesomeIcon className="fas-icon" icon={faQuestionCircle} />
                  <LinkScroll to="course-q&a" className="info-scroll-link" offset={-50}
                    spy={true} smooth={true} duration={250}>  {info.answers} answered questions </LinkScroll>

              </div>
          </div>
    </div>

    <div className="card-price">
        <div className="card-price-tags">
                    {/* IF THERE IS DISCOUNT THEN SHOW ALL DETAILS, OTHERWISE SHOW ONLY REAL PRICE */}
              <div style={{fontWeight:"bold",fontSize:"30px",color:'black'}}>
                        <FontAwesomeIcon icon='rupee-sign'/>
                          { couponSelected.id==="" && details.price.isDiscount==="yes"? details.price.discountedValue:
                            couponSelected.id!=="" && details.price.isDiscount==="yes"? details.price.discountedValue - couponSelected.discount:
                            couponSelected.id!=="" && details.price.isDiscount!=="yes"? details.price.value - couponSelected.discount
                                                  :   details.price.value
                             }
              </div>
                    {/* IF THERE IS DISCOUNT THEN THESE FIELDS WOULD BE DISPLAYED, OTHERWISE IT WONT SHOW */}
              <div style={{textDecoration:"line-through",fontSize:"18px",color:'black'}}> {details.price.isDiscount==="yes"? details.price.value: ""}</div>
                {user!==null && <div className="heartIcon-red" onClick={handleAddToWishlist}>
                                <FontAwesomeIcon icon={['far','heart']} className="heartIcon" size='2x'/>
                              </div>}
              {/*<FontAwesomeIcon style={{color:'#45a6de'}} icon={faShareAlt} size='2x'/>*/}
        </div>

        <div className="card-price-promotion">
          <p style={{fontSize:"16px",fontStyle:'italic'}}>
            {couponSelected.id==="" && details.price.isDiscount==="yes"?("Save INR " + details.price.discount) :
             couponSelected.id!=="" && details.price.isDiscount==="yes"?("Save INR " + (parseInt(details.price.discount) + parseInt(couponSelected.discount))) :
             couponSelected.id!=="" && details.price.isDiscount!=="yes"?("Save INR " + couponSelected.discount) :
              ""}
          </p>
        </div>
    </div>

    {isAdded.length<1 && <button className="card-buttons card-button1"
            onClick={handleAddCart}>Add to Cart
    </button>}

    {isAdded.length===1 && <div className="card-buttons insideCart"
                                style={{width:"100%"}}>
                                    <FontAwesomeIcon icon={faCheck}/>
                                    Added to Cart
                           </div>
    }

    <Link to='/cart' className="card-buttons card-button2 btnStrech">Buy Now</Link>



    </div>
  </div>
);}

export default MobileCourseInfo;
