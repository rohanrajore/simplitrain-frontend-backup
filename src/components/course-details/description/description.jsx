import React,{useState} from 'react';
// import './description.css';
import {Link} from 'react-scroll';
import { DescriptionContainer } from './description.style';

const Description = props => {

  const [expanded,setExpanded] = useState(false)

  const expandHandler = e => setExpanded(!expanded)

    return(
  <DescriptionContainer>


        <div className="description-text">Description </div>

        <div className="description-expand">
            <div style={{padding:"0 10px"}}>{props.info}</div>
            {/* <div className="shade-bottom" style={{display:expanded===true?"none":""}}> </div> */}
        </div>

        {/* <Link className="description-more" to="course-description" spy={true} smooth={true} offset={-50}
          duration={1}onClick={expandHandler}>{expanded===true?"Show less":"Show more"}</Link> */}

  </DescriptionContainer>
);}

export default Description;
