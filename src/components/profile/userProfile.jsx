import React,{useState,useEffect} from 'react';
import {useHistory} from "react-router-dom";
//import "./userProfile.css";
import LeftPanel from "./leftPanel/leftPanel.jsx";
import ProfileForm from "./profileForm/profileForm.jsx";
import LearningGoals from "./learningGoals/learningGoals.jsx";
import SocialMedia from "./socialMedia/socialMedia.jsx";
import IntroductoryVideo from "./introductoryVideo/introductoryVideo.jsx";
import NationalID from "./nationalID/nationalID.jsx";
import BankDetails from "./bankDetails/bankDetails.jsx";
import TaxDetails from "./taxDetails/taxDetails.jsx";
import fetchProfileDetails from "./fetchProfileDetails.js";
import submitProfileDetails from "./submitProfileDetails.js";
import {useSelector, useDispatch} from "react-redux";
import {updateProfile} from './../../redux/user/user.actions.js';
import { store } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {UserProfileContainer, PageTitleRow} from "../profile/userProfile.style";
import HomeIcon from '../../assets/home.png';
import { selectIsInstructor } from "./../../redux/user/user.selectors";

const UserProfile = props => {

  const [profileFields,setProfileFields] = useState({"profileImg":"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png",
                                                     "profileImgId":"",
                                                     "firstName":"",
                                                     "lastName":"",
                                                     "email":"",
                                                     "phoneNumber":"",
                                                     "countryCode":"",
                                                     "address1":"",
                                                     "designation":"",
                                                     "bio":"",
                                                     "learningGoals":[],
                                                     "socialMedia":{"website":"",
                                                                    "blog":"",
                                                                    "youtube":"",
                                                                    "facebook":"",
                                                                    "linkedIn":"",
                                                                    "twitter":""},
                                                     "socialMediaMoreLinks":[{}],
                                                     "introVideoUrl":"",
                                                     "nationalIdImg":"",
                                                     "nationalIdPdf":"",
                                                     "nationalId":"",
                                                     "bankName":"",
                                                     "IFSC":"",
                                                     "accName":"",
                                                     "accNumber":"",
                                                     "gst":""})

  const history=useHistory()

  const dispatch = useDispatch()

  const handleField = (e) =>{
        let fields = {...profileFields}
        fields[e.target.name]= e.target.value
        setProfileFields(fields)
  }

  const handleSMField = (e) =>{
        let fields = {...profileFields}
        fields.socialMedia[e.target.name]= e.target.value
        setProfileFields(fields)
  }

  const handleSocialMediaMoreLinks = newArray =>{
        setProfileFields({...profileFields,
                          socialMediaMoreLinks:newArray})
  }

  const user= useSelector(state => state.user.currentUser.id)
  const currentUser = useSelector(state=> state.user.currentUser)
  const isInstructor = useSelector(selectIsInstructor)

  const handleUpdateBtn = async () =>{ console.log(profileFields)

          var errorsArray = document.getElementsByClassName("text-danger")
          let errLabels = []
          for (let i =0; i<errorsArray.length; i++){
              errLabels.push(errorsArray[i].parentNode.childNodes[0].outerText===""?"More Links"
                            :errorsArray[i].parentNode.childNodes[0].outerText)
            }

          if(errLabels.length===0){
                  const response = await submitProfileDetails(user,profileFields)
                  if(response.actionResult==="SUCCESS"){
                    // This means that API is success and that user new details updated in DB.
                  //   We are just updating them here in redux state also
                    let newUserDetails = {...currentUser,
                                            "firstName":response.userProfileDetails.firstName,
                                            "lastName":response.userProfileDetails.lastName,
                                            "profileImg":response.userProfileDetails.profileImg}

                    dispatch(updateProfile(newUserDetails))
                  }
                  store.addNotification({
                    title: response.actionResult==="SUCCESS"?`SUCCESS`: `ERROR`,
                    message: response.actionResult==="SUCCESS"?`Your profile has been updated successfully.`:
                                                                "Something wrong happened, please try again later.",
                    type: response.actionResult==="SUCCESS"?"success":"danger",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],

                    dismiss: {
                      duration: 4000
                    },
                  })
           }
          else{
            store.addNotification({
              title: "Please correct those fields ",
              message: errLabels.toString(),
              type: "danger",
              container: "top-right",
              animationIn: ["animated", "fadeIn"],
              animationOut: ["animated", "fadeOut"],
              dismiss: {
                duration: 4000
              },
            })
          }
    }

  useEffect(()=>{
      async function fetch(){
          const response = await fetchProfileDetails(user)
          const details = await response.userProfileDetails
          setProfileFields({...details
                            })
      }
      fetch()
  },[1])

  return (

  <UserProfileContainer>

  <PageTitleRow>
    <div className="pageTitle page-section">
      <Container>
          <h4>Profile</h4>
          {/* <Breadcrumb>
          <Breadcrumb.Item href="#"><img src={HomeIcon}/> Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Profile</Breadcrumb.Item>
        </Breadcrumb> */}
      </Container>
    </div>
  </PageTitleRow>
    <div className="page-section">
  <Container>
  <div className="userProfile-container">
    <Row>
      <Col sm="12" md="3">
        <LeftPanel/>
      </Col>
      <Col sm="12" md="9">
      <div className="userProfile-content">
          <ProfileForm profileFields={profileFields}
                       setProfileFields={setProfileFields}
                       handleField={handleField}/>

          <LearningGoals profileFields={profileFields}
                         setProfileFields={setProfileFields}/>

          {isInstructor && <SocialMedia socialMedia={profileFields.socialMedia}
                                                    socialMediaMoreLinks={profileFields.socialMediaMoreLinks}
                                                    handleSocialMediaMoreLinks={handleSocialMediaMoreLinks}
                                                    handleField={handleSMField}/>
          }

          {isInstructor && <IntroductoryVideo introVideoUrl={profileFields.introVideoUrl}
                                                          handleField={handleField}/>
          }

          {isInstructor && <NationalID profileFields={profileFields}
                                                   setProfileFields={setProfileFields}/>
          }

          {isInstructor && <BankDetails profileFields={profileFields}
                                                    handleField={handleField}/>
          }

          {isInstructor && <TaxDetails  profileFields={profileFields}
                                                    handleField={handleField}/>
          }

          <div className="btnRow">
            <div className="qa-ask-submit userProfile-btn"
               onClick={handleUpdateBtn}>Save Changes</div>
          </div>
      </div>
      </Col>
    </Row>
  </div>
  </Container>
  </div>
  </UserProfileContainer>
);}

export default UserProfile;
