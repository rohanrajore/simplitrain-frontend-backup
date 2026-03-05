import React from 'react';
//import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import {HeaderContainer} from "../header/header.style";

const Header = props => (
<HeaderContainer>
  <div className="header-container page-section">
      <Container>
            <div className="header-content">
                  <div className="header-title">Instructor Dashboard</div>
                  <div className="header-path">
                        <Link className="header-link-color" to="/"> <FontAwesomeIcon icon='home' style={{marginRight:'5px'}}/> </Link>
                        <Link className="header-link-color" to="/instructor-dashboard"> Dashboard </Link>
                        <FontAwesomeIcon icon='chevron-right' style={{margin:'0 5px'}}/>
                        <Link className="header-link-color" to="/instructor-dashboard/courses"> Instructor Dashboard </Link>
                        {props.path}
                  </div>
            </div>

            <div className="toggle">
                  <FontAwesomeIcon icon='bars' size='2x' style={{margin:'0 10px'}} onClick={props.handleSideDrawer}/>
            </div>
      </Container>
  </div>
  </HeaderContainer>
);

export default Header;
