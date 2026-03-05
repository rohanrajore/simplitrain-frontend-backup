import React,{useState} from 'react';
// import './studentsReview.css';
import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import { StudentsReviewContainer, StudentsReviewTitle, StudentsReviewSliderItem } from '../home.style';
import { Col, Container, Row } from 'react-bootstrap';


const StudentsReview = props => {

  const reviews=[
    {"id":"2","author":"Rohan Rajore","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXKI9RF1UHEfMoKfWDTl5LVrbNdpbAo-DAjw&usqp=CAU","text":"Vivamus eu nisi purus. Phasellus ornare efficitur elit vel dignissim. Nunc viverra convallis lectus et pharetra. Donec pellentesque elit sit amet porta consequat. Aliquam auctor vestibulum massa, accumsan fermentum justo vulputate ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus, velit in sagittis pretium, urna urna scelerisque lorem, in maximus purus odio eget mauris.","designation":"Lead Senior Developer"},
    {"id":"3","author":"Rohan Rajore","img":"https://wedesignthemes.com/html/role/images/post-images/profile-img4.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel lectus diam. Suspendisse dictum tellus a arcu convallis, quis pulvinar tortor accumsan. Nulla viverra congue mollis. Fusce tincidunt sapien eu eros vestibulum, ut consectetur elit gravida. Donec placerat tempus pulvinar.","designation":"Best Web Developer"},
    {"id":"5","author":"Rohan Rajore","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel lectus diam. Suspendisse dictum tellus a arcu convallis, quis pulvinar tortor accumsan. Nulla viverra congue mollis. Fusce tincidunt sapien eu eros vestibulum, ut consectetur elit gravida. Donec placerat tempus pulvinar.","designation":"Economy leader"},
    {"id":"6","author":"Rohan Rajore","img":"https://wedesignthemes.com/html/role/images/post-images/profile-img4.jpg","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel lectus diam. Suspendisse dictum tellus a arcu convallis, quis pulvinar tortor accumsan. Nulla viverra congue mollis. Fusce tincidunt sapien eu eros vestibulum, ut consectetur elit gravida. Donec placerat tempus pulvinar.","designation":"Master Ing Crafting"}
  ]

  const style = {
    textAlign: "center",
    height:"250px",
    fontSize: "30px",
    display: "flex",
    alignItems:"center",
    width:"100%"
  }

  return(
        <StudentsReviewContainer className="page-section">
          <Container>
            <StudentsReviewTitle>Our Students are saying</StudentsReviewTitle>
            <Slide pauseOnHover={false} duration={4000} transitionDuration={200}>
              {reviews.map(review=>(
                <StudentsReviewSliderItem key={review.id}>
                  <Row>
                    <Col sm={4}>
                      <img className="studentsReview-img" src={review.img}/>
                      <div className="studentsReview-author">{review.author}</div>
                      <div className="studentsReview-designation">{review.designation}</div>
                    </Col>
                    <Col sm={8}>
                      <div className="studentsReview-text">
                        <FontAwesomeIcon icon={faQuoteLeft} className="studentsReview-iconLeft" />
                        {review.text}
                        <FontAwesomeIcon icon={faQuoteRight} className="studentsReview-iconRight" />
                      </div>
                    </Col>
                  </Row>
                </StudentsReviewSliderItem>
              ))}
            </Slide>
          </Container>
        </StudentsReviewContainer>
);}

export default StudentsReview;
