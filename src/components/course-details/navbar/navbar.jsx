import React from 'react';
// import './navbar.css';
import {Link} from 'react-scroll';
import { useMatchBreakpoints } from '../../../hooks';
import { CourseNavHeader } from './navbar.style';

 
const Navbar = props => {
  const { isLg, isXl } = useMatchBreakpoints();
  const isMobie = !isLg && !isXl;
  return (
    <CourseNavHeader className="info-content sticky-nav">
      <nav className="toolbar__navigation">
          {/*
        <div>
          <DrawerToggleButton click={props.drawerClickHandler}/>
        </div>
        */}

        <div className="toolbar__navigation-items">
          <ul>
              <li className="paddingZero">
                    <Link className="link paddingZero" to="course-info" spy={true} smooth={true}
                          activeClass="activeLink" duration={250} offset={isMobie?-100:-50}>Info</Link>
              </li>
              <li>
                    <Link className="link" to="course-highlights" spy={true} smooth={true}
                          activeClass="activeLink" duration={250} offset={isMobie?-80:-50}>Highlights</Link>
              </li>
              <li>
                    <Link className="link" to="course-content" spy={true} smooth={true}
                          activeClass="activeLink" duration={250} offset={isMobie?-80:-50}>Content</Link>
              </li>
              <li>
                    <Link className="link" to="course-description" spy={true} smooth={true}
                          activeClass="activeLink" duration={250} offset={isMobie?-80:-50}>Description</Link>
              </li>
              <li>
                    <Link className="link" to="course-q&a" spy={true} smooth={true}
                          activeClass="activeLink" duration={250} offset={isMobie?-80:-50}>Q&A</Link>
              </li>
              <li>
                    <Link className="link" to="course-instructor" spy={true} smooth={true}
                          activeClass="activeLink" duration={250} offset={isMobie?-80:-50}>Instructor</Link>
              </li>
              <li>
                    <Link className="link" to="course-reviews" spy={true} smooth={true}
                          activeClass="activeLink" duration={250} offset={isMobie?-80:-50}>Reviews</Link>
              </li>
          </ul>
        </div>

      </nav>
    </CourseNavHeader>
  )
}

export default Navbar;
