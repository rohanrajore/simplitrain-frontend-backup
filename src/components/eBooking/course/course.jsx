import React,{useState} from 'react';
import QRCode from "react-qr-code";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { Col, Row } from 'react-bootstrap';
import { faCalendar, faEnvelope, faFile, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import Calendar from '../../../assets/calendar.svg';
import PDF from '../../../assets/pdf.svg';
import downloadPdfCourse from "./downloadPdfCourse.js";
import sendEmailReceipt from "./sendEmailReceipt.js";
import { store } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import LoaderGif from '../../../styles/images/loading_spinner.gif';

const EbookingCourse = props =>{

  const [loading, setLoading] = useState(false)

  const handlePdfDownload = async () =>{
    let response = await downloadPdfCourse(props.bookingReferenceId,props.id)
  }

  const handleEmailReceipt = async () =>{
    setLoading(true)
    let response = await sendEmailReceipt(props.bookingReferenceId, props.id)
    const status = await response.actionResult
    const msg = await response.message
    setLoading(false)

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
  }

return(
  <Row className="eBooking-course-details-container" isLoading={loading?"true":"false"}>
      
      <Col md={8} style={{paddingLeft:8, paddingRight:8}}>
                        <div className="eBooking-course">
                            <img className="eBooking-course-img" alt="course" src={props.img}/>
                            <div className="eBooking-course-details">
                                <div className="eBooking-course-title">{props.title}</div>
                                <div className="eBooking-course-authorMessage">
                                    <div> <i>by {props.author}</i></div>
                                    {/* <div className="eBooking-course-message"><FontAwesomeIcon icon={faEnvelope} /> Message Instructor</div> */}
                                </div>
                                <div className="eBooking-course-date"><img src={Calendar} style={{marginRight:10}} /> {props.date}</div>
                                <div className="eBooking-course-price"><FontAwesomeIcon icon={faRupeeSign} /> {props.price}</div>
                            </div>
                            {/* Hiding the QR code */}
                            {/* <div className="eBooking-QR isDesktop" style={{justifyContent:props.myCourses?"":"flex-end"}}>
                                    {props.myCourses && <div className="eBooking-course-status">Status: <span> {props.courseProgress}</span></div>}
                                    <QRCode value="This is dummy value" size={70} /> 
                            </div> */}
                        </div>
                    </Col>
       
      <Col md={4} style={{paddingLeft:8, paddingRight:8}}>
                        <div className="eBooking-info">
                            <div className="eBooking-infoItem">
                              <div>Booking Reference</div>
                              <div> <b>{props.bookingReferenceId}</b></div>
                            </div>

                            <div className="eBooking-infoItem">
                              <div>Booking Date</div>
                              <div> <b>{moment(props.bookingDateTime).format('dddd, Do MMM YYYY')}</b></div>
                            </div>

                            <div className="eBooking-infoItem">
                              <div>Booking Time</div>
                              <div> <b>{moment(props.bookingDateTime).format('hh:mm')}</b></div>
                            </div>
                            <div className="eBooking-anchors">
                                  <div onClick={handleEmailReceipt} > <FontAwesomeIcon icon={faEnvelope} /> Email Receipt {loading && <img className="loadingImgCenter" src={LoaderGif} alt='' width="30px" />}</div>
                                  <div onClick={handlePdfDownload} > <img src={PDF}  style={{marginRight:5}} /> Download PDF</div>
                                  {/* <a href="" > <FontAwesomeIcon icon={faWhatsappSquare}/> WhatsApp Receipt</a> */}
                            </div>
                            {/* <div className="eBooking-QR isMobile" style={{justifyContent:props.myCourses?"":"flex-end"}}>
                              {props.myCourses && <div className="eBooking-course-status">Status: <span> {props.courseProgress}</span></div>}
                              <QRCode value="This is dummy value" size={70} />
                            </div> */}
                          </div>
                      </Col>
        
  </Row>
);}

export default EbookingCourse;
