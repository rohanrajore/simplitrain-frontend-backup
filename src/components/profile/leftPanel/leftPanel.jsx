import React from 'react';
import {Link} from "react-scroll";
// import "./leftPanel.css";
import {LeftPanelContainer} from "../../profile/leftPanel/leftPanel.style";
import {useSelector} from "react-redux";

const LeftPanel = props => {

  const currentUser = useSelector(state=> state.user.currentUser)

  return(
  <LeftPanelContainer>
  <div className="userProfile-leftPanel">
    <ul>
       {/* <span>Profile</span> */}
          <li style={{marginTop:'20px'}}>
              <Link exact to="profileForm"
                       className="link" spy={true} smooth={true}
                       duration={250} offset={-45}
                       activeClass="profile-link-active" >Learner Profile</Link>
          </li>

          <li>
              <Link to="profileLearningGoals"
                       className="link" spy={true} smooth={true}
                       duration={250} offset={-45}
                       activeClass="profile-link-active">Learner Goals</Link>
          </li>

          {currentUser.isInstructor && <li>
                                           <Link to="profileSocialMedia"
                                                 className="link" spy={true} smooth={true}
                                                 duration={250} offset={-45}
                                                 activeClass="profile-link-active">Social Media Links</Link>
                                       </li>
          }

          {currentUser.isInstructor && <li>
                                            <Link to="profileIntroductory"
                                                  className="link" spy={true} smooth={true}
                                                  duration={250} offset={-45}
                                                  activeClass="profile-link-active">Intro Video</Link>
                                       </li>
          }

          {currentUser.isInstructor && <li>
                                             <Link to="profileNationalID"
                                                   className="link" spy={true} smooth={true}
                                                   duration={250} offset={-45}
                                                   activeClass="profile-link-active">National ID</Link>
                                       </li>
          }

          {currentUser.isInstructor && <li>
                                             <Link to="profileBank"
                                                   className="link" spy={true} smooth={true}
                                                   duration={250} offset={-75}
                                                   activeClass="profile-link-active">Bank Details</Link>
                                       </li>
        }

          {currentUser.isInstructor && <li>
                                             <Link to="profileTax"
                                                   className="link" spy={true} smooth={true}
                                                   duration={250} offset={-140}
                                                   activeClass="profile-link-active">Tax Details</Link>
                                       </li>
          }
    </ul>
  </div>
  </LeftPanelContainer>
);}

export default LeftPanel;
