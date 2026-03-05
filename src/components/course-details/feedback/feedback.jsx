import React from 'react';
// import './feedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FeedbackContainer } from './feedback.style';
import { faMapMarkerAlt, faStar as solidStar, faStarHalfAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-regular-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';

const Feedback = props => {

    const info=props.info

  return(
    <FeedbackContainer id="courseinfo-feedback" className="mb-100">

        {/* <h5 class="onsiteItem-header5">Venue Ratings & Reviews</h5> */}

        {!props.onsiteVenue &&<div className="feedback-title">Course Ratings </div>}

        <div className="feedback-content">
        {/* { info.value===0? <div className="trending-noCourses" style={{marginLeft:0}}>This course hasn't been rated</div>
          : */}
          <React.Fragment>

          <Row style={{width:'100%'}}>
            <Col xs={12} sm={3}>
                <div className="feedback-value">
                    <div className="rating-point">{(info.value).toFixed(1)}</div>
                    <div className="star-point">
                      <FontAwesomeIcon icon={info.value<0.5? faStar: info.value>=0.5&& info.value<1?faStarHalfAlt : solidStar} size='1x'/>
                      <FontAwesomeIcon icon={info.value<1.5? faStar: info.value>=1.5&& info.value<2?faStarHalfAlt : solidStar} size='1x'/>
                      <FontAwesomeIcon icon={info.value<2.5? faStar: info.value>=2.5&& info.value<3?faStarHalfAlt : solidStar} size='1x'/>
                      <FontAwesomeIcon icon={info.value<3.5? faStar: info.value>=3.5&& info.value<4?faStarHalfAlt : solidStar} size='1x'/>
                      <FontAwesomeIcon icon={info.value<4.5? faStar: info.value>=4.5&& info.value<5?faStarHalfAlt : solidStar} size='1x'/>
                    </div>
                    {!props.onsiteVenue && <div className="point-text">Course Rating</div>}
                    {props.onsiteVenue && <div className="point-text">Venue Rating</div>}
                </div>
            </Col>
            <Col xs={12} sm={9}>


            <div className="feedback-percent-container">
                    <div className="feedback-percent">
                          <div className="feedback-bar"> <div className={`feedback-bar-progress success` } style={{width:`${info.fiveStar?info.fiveStar:0}`}}></div></div>
                          <div className="feedback-rating">
                            <FontAwesomeIcon icon={solidStar} size='1x'/>
                            <FontAwesomeIcon icon={solidStar} size='1x'/>
                            <FontAwesomeIcon icon={solidStar} size='1x'/>
                            <FontAwesomeIcon icon={solidStar} size='1x'/>
                            <FontAwesomeIcon icon={solidStar} size='1x'/>
                            {
                              info.fiveStar?<span>{info.fiveStar}</span>:null
                            }
                          </div>
                    </div>

                    <div className="feedback-percent">
                          <div className="feedback-bar"> <div className={`feedback-bar-progress success`} style={{width:`${info.fourStar?info.fourStar:0}`}}></div></div>
                          <div className="feedback-rating">
                            <FontAwesomeIcon icon={solidStar}   size='1x'/>
                            <FontAwesomeIcon icon={solidStar}   size='1x'/>
                            <FontAwesomeIcon icon={solidStar}   size='1x'/>
                            <FontAwesomeIcon icon={solidStar}   size='1x'/>
                            <FontAwesomeIcon icon={faStar}   size='1x'/>
                            {
                              info.fourStar?<span>{info.fourStar}</span>:null
                            }
                          </div>
                    </div>

                    <div className="feedback-percent">
                          <div className="feedback-bar"> <div className={`feedback-bar-progress success`} style={{width:`${info.threeStar?info.threeStar:0}`}}></div></div>
                          <div className="feedback-rating">
                            <FontAwesomeIcon icon={solidStar} size='1x'/>
                            <FontAwesomeIcon icon={solidStar} size='1x'/>
                            <FontAwesomeIcon icon={solidStar} size='1x'/>
                            <FontAwesomeIcon icon={faStar} size='1x'/>
                            <FontAwesomeIcon icon={faStar} size='1x'/>
                            {
                              info.threeStar?<span>{info.threeStar}</span>:null
                            }
                          </div>
                    </div>

                    <div className="feedback-percent">
                          <div className="feedback-bar"> <div className={`feedback-bar-progress warning`} style={{width:`${info.twoStar?info.twoStar:0}`}}></div></div>
                          <div className="feedback-rating">
                            <FontAwesomeIcon icon={solidStar}  size='1x'/>
                            <FontAwesomeIcon icon={solidStar}  size='1x'/>
                            <FontAwesomeIcon icon={faStar}  size='1x'/>
                            <FontAwesomeIcon icon={faStar}  size='1x'/>
                            <FontAwesomeIcon icon={faStar}  size='1x'/>
                            {
                              info.twoStar?<span>{info.twoStar}</span>:null
                            }
                          </div>
                    </div>

                    <div className="feedback-percent">
                          <div className="feedback-bar"> <div className={`feedback-bar-progress danger`} style={{width:`${info.oneStar?info.oneStar:0}`}}></div></div>
                          <div className="feedback-rating">
                            <FontAwesomeIcon icon={solidStar}  size='1x'/>
                            <FontAwesomeIcon icon={faStar}  size='1x'/>
                            <FontAwesomeIcon icon={faStar}  size='1x'/>
                            <FontAwesomeIcon icon={faStar}  size='1x'/>
                            <FontAwesomeIcon icon={faStar}  size='1x'/>
                            {
                              info.oneStar?<span>{info.oneStar}</span>:null
                            }
                            
                          </div>
                    </div>
              </div>


            </Col>
        </Row>

            </React.Fragment>
            {/* } */}
        </div>
  </FeedbackContainer>
);}

export default Feedback;
