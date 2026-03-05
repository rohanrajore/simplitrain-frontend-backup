import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import "./investors.css";
import Collapsible from 'react-collapsible';
import details from "../learnersLink/JSON.js";
import {useLocation} from "react-router-dom";

const Investors = props => {
  const history= useHistory()
  const { pathname } = useLocation()
  useEffect(()=>(
    window.scroll({top:0, behavior:'smooth'})
  ),[pathname])

  return(
  <div className="footerLink-investors">
    <div className="investors-mainImg">
        <div>Lorem ipsum dolor</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Proin nulla auctor amet commodo suspendisse.
        </div>
        <div onClick={()=> history.push('/auth/signup') }>Become a Learner</div>
    </div>

    <div className="investors-field">
        <div>Corporate Overview</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Lorem malesuada montes, nec mauris tincidunt ullamcorper at
             in. Condimentum sed ultricies sit tellus. Nisl morbi a accumsan
             sed luctus. Euismod viverra vitae pellentesque tristique amet odio ultricies
            parturient sed.</div>
    </div>

    <div className="investors-field investors-fieldSecond">
        <div>Vision</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Lorem malesuada montes, nec mauris tincidunt ullamcorper at
             in. Condimentum sed ultricies sit tellus. Nisl morbi a accumsan
             sed luctus. Euismod viverra vitae pellentesque tristique amet odio ultricies
            parturient sed.</div>
    </div>

    <div className="investors-field">
        <div>Why Invest</div>
        <div className="investors-boxes">
            <div>
                <div>83%</div>
                <div>Share of Revenue from Digital Products and Services.</div>
            </div>
            <div>
                <div>7%</div>
                <div>Revenue Growth from Digital Products and Services.</div>
            </div>
            <div>
                <div>22%</div>
                <div>Adjust EBITA Margin</div>
            </div>
            <div>
                <div>9%</div>
                <div>Full Year FCF/Revenue.</div>
            </div>
        </div>
    </div>

    <div className="investors-QA">
      <div className="investors-QAtitle">Q&A</div>
      <div>
            {details.QA.map((quesAns,i)=>(
              <Collapsible tabIndex={0}
                           key={i}
                           trigger={quesAns.question}
                           triggerTagName="div"
                           openedClassName="investors-collapsibleOpen">
                <div className="investors-collapsible-content">
                    {quesAns.answer}
                </div>
              </Collapsible>
            ))}
      </div>
    </div>

    <div className="investors-end">
        <div>We’d love to hear from you</div>
        <div>Request a Meeting</div>
    </div>

  </div>
);}

export default Investors;
