import React,{useState, useEffect} from 'react';
//import "./socialMedia.css";
import ComboBox from "../../../common/combobox/combo-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlusCircle, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import ErrorComponent from "../errComponent/errorComponent.jsx";
import { Col, Container, Row } from 'react-bootstrap';
import {ProfileSocialMediaContainer} from "../../profile/socialMedia/socialMedia.style";

var urlList = [
  { id: "customURL", name: "Custom"},
  { id: "behanceURL", name: "Behance" },
  { id: "dribbleURL", name: "Dribble" },
  { id: "vimeoURL", name: "Vimeo" },
  { id: "flikrURL", name: "Flikr" },
  { id: "pinterestURL", name: "Pinterest" },
  { id: "yahooURL", name: "Yahoo" },
  { id: "redditURL", name: "Reddit" },
  { id: "soundcloudURL", name: "Soundcloud" },
  { id: "tumblrURL", name: "Tumblr" },
  { id: "githubURL", name: "Github" },
  { id: "instagramURL", name: "Instagram" },
]

const urlValidationRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;


const SocialMedia = props => {

  const moreLinksArray=props.socialMediaMoreLinks
  console.log(moreLinksArray)
  // This useEffect is when we fetch socialMediaMoreLinks from API, to remove options from urlLIST
  // that we already have in socialMediaMoreLinks array..
  useEffect(()=>{
      for(let i=0;i<moreLinksArray.length;i++){
        urlList = urlList.filter(url => url.id!==moreLinksArray[i].id)
      }
      props.handleSocialMediaMoreLinks(moreLinksArray)
  },[moreLinksArray,1])

  const handleAddLink = ()=>{
      let linksArray= moreLinksArray
      let newLink = {"id":urlList[0].id,
                     "name":urlList[0].name,
                     "value":""}
      // Here when adding new link we remove that option from urlList so it cant be selected in other select components
      urlList= urlList.filter(url => url.id!==newLink.id)

      props.handleSocialMediaMoreLinks(linksArray.concat(newLink))
  }

  const handleRemoveLink =(e)=>{
      let linksArray= moreLinksArray
      let linkIndex = linksArray.findIndex(link =>link.id===e.target.id)

      // Here we put deleted option in urlList so it can be selected in other select components
      urlList.push({"id":linksArray[linkIndex].id,
                    "name":linksArray[linkIndex].name})

      let filteredArray =linksArray.filter(link=>link.id!==e.target.id)
      props.handleSocialMediaMoreLinks(filteredArray)
  }

  const handleInputField = e =>{
      let linksArray = [...moreLinksArray]
      let linkIndex = linksArray.findIndex(link=> link.id===e.target.name)
      linksArray[linkIndex].value= e.target.value
      props.handleSocialMediaMoreLinks(linksArray)
  }

  const handleCustomName = e =>{
     let linksArray = [...moreLinksArray]
     let linkIndex = linksArray.findIndex(link=> link.id==="customURL")
     linksArray[linkIndex].name= e.target.value
     props.handleSocialMediaMoreLinks(linksArray)
  }

  const handleComboBoxChange = (currentLink,e) =>{
     let newOptionIndex = e.target.getAttribute("data-option-index")
     let linksArray = [...moreLinksArray]
     let currentLinkIndex = linksArray.findIndex(link => link.id===currentLink.id)

    // Here when changing option we put that option in urlList so it can be selected by some other select
     urlList.push({"id":moreLinksArray[currentLinkIndex].id,
                                 "name":moreLinksArray[currentLinkIndex].name})

     linksArray[currentLinkIndex] =      {...linksArray[currentLinkIndex],
                                          "id":urlList[newOptionIndex].id,
                                          "name":urlList[newOptionIndex].name}
    // Here when changing option we remove option that we clicked from urlList so it cant be selected by some other select
     urlList= urlList.filter(url => url.id!==urlList[newOptionIndex].id)

     props.handleSocialMediaMoreLinks(linksArray)
  }

  return(
  <ProfileSocialMediaContainer>
  <div className="userProfile-section-title" id="profileSocialMedia">
      <div className="userProfile-section-title">Social Media Links</div>

        <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="pf-website">Website</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Url"
                  id="pf-website"
                  name="website"
                  value={props.socialMedia.website}
                  onChange={props.handleField}
                />
              </div>

              {props.socialMedia.website.length>0 &&
               !urlValidationRegex.test(props.socialMedia.website) &&
               <ErrorComponent title="This field should contain valid URL"/>}

            </div>

             <div className="form-group col-md-6">
               <label htmlFor="pf-blog">Blog</label>
               <div style={{ display: "flex", alignItems: "center" }}>
                 <input
                   type="text"
                   className="form-control"
                   placeholder="Url"
                   id="pf-blog"
                   name="blog"
                   value={props.socialMedia.blog}
                   onChange={props.handleField}
                 />
               </div>

               {props.socialMedia.blog.length>0 &&
                !urlValidationRegex.test(props.socialMedia.blog) &&
                <ErrorComponent title="This field should contain valid URL"/>}

            </div>
        </div>

        <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="pf-youtube">Youtube</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Youtube URL"
                  id="pf-youtube"
                  name="youtube"
                  value={props.socialMedia.youtube}
                  onChange={props.handleField}
                />
              </div>

              {props.socialMedia.youtube.length>0 &&
               !urlValidationRegex.test(props.socialMedia.youtube) &&
               <ErrorComponent title="This field should contain valid URL"/>}

            </div>

             <div className="form-group col-md-6">
               <label htmlFor="pf-facebook">Facebook</label>
               <div style={{ display: "flex", alignItems: "center" }}>
                 <input
                   type="text"
                   className="form-control"
                   placeholder="Facebook URL"
                   id="pf-facebook"
                   name="facebook"
                   value={props.socialMedia.facebook}
                   onChange={props.handleField}
                 />
               </div>

               {props.socialMedia.facebook.length>0 &&
                !urlValidationRegex.test(props.socialMedia.facebook) &&
                <ErrorComponent title="This field should contain valid URL"/>}
            </div>
        </div>

        <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="pf-linkedIn">Linkedln</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Linkedln URL"
                  id="pf-linkedIn"
                  name="linkedIn"
                  value={props.socialMedia.linkedIn}
                  onChange={props.handleField}
                />
              </div>

              {props.socialMedia.linkedIn.length>0 &&
               !urlValidationRegex.test(props.socialMedia.linkedIn) &&
               <ErrorComponent title="This field should contain valid URL"/>}

            </div>

             <div className="form-group col-md-6">
               <label htmlFor="pf-twitter">Twitter</label>
               <div style={{ display: "flex", alignItems: "center" }}>
                 <input
                   type="text"
                   className="form-control"
                   placeholder="Twitter URL"
                   id="pf-twitter"
                   name="twitter"
                   value={props.socialMedia.twitter}
                   onChange={props.handleField}
                 />
               </div>

               {props.socialMedia.twitter.length>0 &&
                !urlValidationRegex.test(props.socialMedia.twitter) &&
                <ErrorComponent title="This field should contain valid URL"/>}

            </div>
        </div>

        <div className="form-row">
           <div className="form-group col-md-12 moreLinks">
             <label>More Links</label>
             <FontAwesomeIcon icon={faPlusCircle}
                              className="profileMedia-moreIcon"
                              onClick={urlList.length>0?handleAddLink:()=>{}}
                              style={{color:urlList.length<1?"grey":""}}/>
           </div>
        </div>

        {moreLinksArray.map(link=>(
          <div className="form-row marginBottom25" key={link.id}>
            <div>
              <div className="profile-socialMedia-select">
                <ComboBox
                  optionsList={urlList}
                  isFreeSolo={false}
                  defaultValue={{ name: link.name }}
                  isClearable={true}
                  onChange={e=>handleComboBoxChange(link,e)}
                />
              </div>
            </div>

            {link.id==="customURL" &&  <div className="col-sm-4">
                                          <div style={{ display: "flex", alignItems: "center" }}>
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Custom Name"
                                              value={link.name}
                                              name={link.id}
                                              onChange={handleCustomName}
                                            />
                                          </div>

                                          {
                                           link.name.length< 5 &&
                                           <ErrorComponent title="This field should be at least 5 char long"/>}

                                        </div>
             }

            <div className={link.id==="customURL"?"col-sm-4":"col-sm-8"}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Url"
                  value={link.value}
                  name={link.id}
                  onChange={handleInputField}
                />
              </div>

              {
               !urlValidationRegex.test(link.value) &&
               <ErrorComponent title="This field should contain valid URL"/>}

            </div>

            <FontAwesomeIcon icon={faTrashAlt}
                             className="profileMedia-removeIcon"
                             onClick={handleRemoveLink}
                             id={link.id}
                             />
        </div>))}
  </div>
</ProfileSocialMediaContainer>
);}

export default SocialMedia;
