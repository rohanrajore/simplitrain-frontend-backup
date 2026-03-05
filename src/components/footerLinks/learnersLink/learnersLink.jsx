import React,{useEffect} from 'react';
import {useLocation, Link, NavLink} from "react-router-dom";
import {useHistory} from 'react-router-dom';
import "./learnersLink.css";
import LearnersItem from "./learnersItem.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faChalkboardTeacher, faShareAlt, faTrophy, faCogs, faSearch, faBookReader, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import LearnersStory from "./learnersStory.jsx";
import Collapsible from 'react-collapsible';
import details from "./JSON.js";

const LearnersLink = (props) => {
  const history= useHistory()
  const { pathname } = useLocation()
  useEffect(()=>(
    window.scroll({top:0, behavior:'smooth'})
  ),[pathname])

  return(
  <div className="learnersLink-container">
      <div className="learnersLink-mainImg">
          <div>Start your learning journey!</div>
          <div>Simplitrain offers you wide variety of courses from leading instructors. Start your learning journey NOW!</div>
          <div onClick={()=> history.push('/course-search/browse-all')}>Browse Courses</div>
      </div>

      {/* <div className="learnersLink-learners">
          <div className="learnersLink-title">Join our ever growing Learners Community</div>
          <div>
              {details.learners.map((learner,i)=>(
                <LearnersItem key={i}
                              img={learner.img}
                              text={learner.text}/>
              ))}
              <div className="learnersLink-learnersLastItem">
                  <div>What's your Skill?</div>
                  <Link to="/instructor/onboarding">Get Onboarded</Link>
              </div>
          </div>
      </div> */}

      <div className="learnersLink-learners learnersLink-joinUs">
          <div className="learnersLink-title">Why Register for courses?</div>
          <div>
            <div className="learnersLink-joinUsItem" >
                <FontAwesomeIcon icon={faChalkboardTeacher}/>
                <div>{'Live Instructor led learning'}</div>
                <div>{'Live Trainings gives you an opportunity to interact with the instructor and get your questions answered in real time!'}</div>
            </div>
            <div className="learnersLink-joinUsItem" >
                <FontAwesomeIcon icon={faTrophy}/>
                <div>{'World Class Instructors'}</div>
                <div>{'Our instructors come with a strong industry experience and are experts in their fields'}</div>
            </div>
            <div className="learnersLink-joinUsItem" >
                <FontAwesomeIcon icon={faCogs}/>
                <div>{'Seamless experience'}</div>
                <div>{'We have made Simplitrain platform in a way that it is easy and intuitive to use. All done to provide our learners with a smooth experience.'}</div>
            </div>
          </div>
      </div>

      <div className="learnersLink-howWorks">
          <div className="learnersLink-title">How to register?</div>
          <div>
              <div className="learnersLink-howItem">
                  <FontAwesomeIcon icon={faSearch}/>
                  <div>1. Search/ Browse Courses</div>
                  {/* <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed quam ac a</div> */}
              </div>
              <div className="learnersLink-howItem">
                  <FontAwesomeIcon icon={faBookReader}/>
                  <div>2. Read through the descriptions</div>
                  {/* <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed quam ac a</div> */}
              </div>
              <div className="learnersLink-howItem">
                  <FontAwesomeIcon icon={faShoppingCart}/>
                  <div>3. Add to Cart & Register</div>
                  {/* <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed quam ac a</div> */}
              </div>

          </div>
      </div>

      {/* <div className="learnersLink-stories">
          <div className="learnersLink-title">Instructor Stories</div>
          <div>
            {details.instructorStories.map((story,i)=>(
              <LearnersStory key={i}
                             text={story.text}
                             img={story.img}
                             side={story.side}/>
            ))}
          </div>
      </div> */}

      <div className="learnersLink-QA">
        <div className="learnersLink-title">Q&A</div>
        <div>
        <Collapsible tabIndex={0}
                             key={'q1'}
                             trigger={'Can I speak with the instructor before I register?'}
                             triggerTagName="div"
                             openedClassName="learnersLink-collapsibleOpen">
                  <div className="learnersLink-collapsible-content">
                  <p>{'We have an option for you to message the instructor with in the portal.'}</p>
                  </div>
                </Collapsible>
                <Collapsible tabIndex={0}
                             key={'q2'}
                             trigger={'What are your payment options?'}
                             triggerTagName="div"
                             openedClassName="learnersLink-collapsibleOpen">
                  <div className="learnersLink-collapsible-content">
                  <p>{'Our payment service provider is RazorPay and all options from RazorPay are available to you.'}</p>
                  </div>
                </Collapsible>
                <Collapsible tabIndex={0}
                             key={'q3'}
                             trigger={'What are your refund options?'}
                             triggerTagName="div"
                             openedClassName="learnersLink-collapsibleOpen">
                  <div className="learnersLink-collapsible-content">
                      <p>For Online programs; If you cancel up to 48 hours before the course begins, you are eligible to receive the full amount back minus the transaction charges from the payment gateway provider</p>
                      <p>For Classroom  programs; if there are no venue cancellation charges then a similar refund policy applies. If the Venue provider has cancellation charges then the same will apply to you.</p>
                  </div>
                </Collapsible>
                <Collapsible tabIndex={0}
                             key={'q4'}
                             trigger={'How secure is my data?'}
                             triggerTagName="div"
                             openedClassName="learnersLink-collapsibleOpen">
                  <div className="learnersLink-collapsible-content">
                      <p>We only collect your email address and phone number to enable us to mail you receipt, reminders and venue directions. All other financial data entered at the time of payment is handled by Razor Pay. For more details, please read our privacy policy <NavLink to='/policies/privacy-and-cookie-policy'>here.</NavLink></p>
                  </div>
                </Collapsible>
                <Collapsible tabIndex={0}
                             key={'q5'}
                             trigger={'Why should I register?'}
                             triggerTagName="div"
                             openedClassName="learnersLink-collapsibleOpen">
                  <div className="learnersLink-collapsible-content">
                  <p>{'When you register, you can keep a track of all your learning history and login and check your course details.'}</p>
                  </div>
                </Collapsible>
                <Collapsible tabIndex={0}
                             key={'q6'}
                             trigger={'Can I reschedule the course I have registered for?'}
                             triggerTagName="div"
                             openedClassName="learnersLink-collapsibleOpen">
                  <div className="learnersLink-collapsible-content">
                      <p>{'You can cancel and re-register the next course offered by the instructor.'}</p>
                  </div>
                </Collapsible>
        </div>
      </div>

      <div className="learnersLink-getStarted">
        <div>Start learning today!</div>
        <div onClick={()=> history.push('/course-search/browse-all')}>Browse Courses</div>
      </div>
  </div>
)};

export default LearnersLink;
