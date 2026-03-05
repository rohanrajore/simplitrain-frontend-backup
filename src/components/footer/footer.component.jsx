import React from "react";
import logo from "../../assets/logo.png";
// import './footer.styles.scss';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsSignedIn } from "../../redux/user/user.selectors";
import { Col, Container, Row } from "react-bootstrap";
import {
  FooterContainer,
  FooterEnd,
  FooterTop,
  LinksList,
} from "./footer.style";

const Footer = () => {
  const isSignedIn = useSelector(selectIsSignedIn);

  return (
    <FooterContainer>
      <FooterTop>
        <Row>
          <Col sm={3} md={2}>
            <img
              src={logo}
              className="logo"
              alt={"Logo"}
              className="footer-logo"
            />
          </Col>
          <Col sm={9} md={10}>
            <Row>
              <Col sm={6} md={3}>
                <LinksList>
                  <h2>SIMPLITRAIN</h2>
                  <Link className="pl-0" to="/about">About</Link>
                  <Link to="/leadership">Leadership</Link>
                  {/* <Link to="/Careers">Careers</Link> */}
                  {/* <Link to="/Certificates">Certificates</Link> */}
                </LinksList>
              </Col>
              <Col sm={6} md={3}>
                <LinksList>
                  <h2>COMMUNITY</h2>
                  <Link className="pl-0" to="/learners">Learners</Link>
                  <Link>Instructors</Link>
                  <Link>Venue providers</Link>
                  {/* <Link to="/companies">Companies</Link> */}
                  {/* <Link to="/investors">Investors</Link> */}
                </LinksList>
              </Col>
              <Col sm={6} md={3}>
                <LinksList>
                  <h2>CONNECT</h2>

                  {/* <Link to="/Blog">Blog</Link> */}
                  <a className="pl-0" href="https://www.linkedin.com/company/simplitrain/" target="_blank">Linkedin</a>
                  {/* <Link to="/Youtube">Youtube</Link> */}
                  <a href="https://www.facebook.com/simplitrain/" target="_blank">Facebook</a>
                  <a href="https://twitter.com/SimpliTrain" target="_blank">Twitter</a>
                  <a href="https://www.instagram.com/simplitrain/" target="_blank">Instagram</a>
                </LinksList>
              </Col>
              <Col sm={6} md={3}>
                <LinksList>
                  <h2>SUPPORT</h2>
                  <a className="pl-0" href="mailto:info@simplitrain.in" target="_blank">info@simplitrain.in</a>
                  {/* <Link to="/HelpSupport">Help & Support</Link>
                  <Link to="/LearningonSimpliTrain">
                    Learning on SimpliTrain
                  </Link>
                  <Link to="/TrainingonSimpliTrain">
                    Training on SimpliTrain
                  </Link>
                  {!isSignedIn && (
                    <Link to="/view-bookings">View Course Bookings</Link>
                  )} */}
                </LinksList>
              </Col>
            </Row>
          </Col>
        </Row>
      </FooterTop>
      <FooterEnd>
        <Row>
          <Col md={2}></Col>
          <Col md={10}>
            <Row>
              <Col className="footer-left" sm={6}>
                <span>Copyright 2019-2022</span>
                <span>SimpliTrain LLP</span>
              </Col>
              <Col className="footer-right" sm={6}>
                <Link to="/policies/terms-of-use">Terms of Use</Link>
                <Link to="/policies/privacy-and-cookie-policy">
                  Privacy and Cookie Policy
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </FooterEnd>
    </FooterContainer>
  );
};

export default Footer;
