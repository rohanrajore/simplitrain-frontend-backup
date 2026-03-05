import React,{useState} from 'react';
import "./learningGoals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {ProfileLearningGoals} from "../../profile/learningGoals/learningGoals.style";

const LearningGoals = props => {

  const [tagName,setTagName] = useState("")

  const addTag =()=>{
      let tag={"id":Math.floor(Math.random() * 10000) + 1,"name":tagName}
      let tagArray = props.profileFields.learningGoals
      props.setProfileFields({...props.profileFields,"learningGoals":tagArray.concat(tag)})
      setTagName("")
  }
  const removeTag = e =>{
      console.log(e.target.id)
      let tagArray = props.profileFields.learningGoals
      let tagIndex = tagArray.findIndex(tag => tag.id==e.target.id)
      tagArray.splice(tagIndex,1)
      props.setProfileFields({...props.profileFields,"learningGoals":tagArray})
  }
  return(
  <ProfileLearningGoals>
  <div className="userProfile-section-container" id="profileLearningGoals">
      <div className="userProfile-section-title">Learning Goals</div>
      <p className="sectionSubTitle">Tell us your learning goals and we will send you the best courses that will help you reach your goal</p>

      <div className="form-group col-md-12 tagsFlexDisplay">
                <input type="text"
                       className="form-control"
                       placeholder="Add a skill you want to learn / master. Example (Machine Learning)"
                       value={tagName}
                       onChange={ e =>setTagName(e.target.value)}/>
                <div className="qaAskSubmit"
                     onClick={addTag}>Add</div>
      </div>

      <div className="learningGoals-tagContainer">
          {props.profileFields.learningGoals.map(tag=>(
            <div className="learningGoals-tag" key={tag.id}>
                <div className="tag-name">{tag.name}</div>
                <div className="tag-close"
                     id={tag.id}
                     onClick={removeTag}>
                    <FontAwesomeIcon className="disableClickEvents" icon={faTimes} />
                </div>
            </div>
          ))}
      </div>
  </div>
</ProfileLearningGoals>
);}

export default LearningGoals;
