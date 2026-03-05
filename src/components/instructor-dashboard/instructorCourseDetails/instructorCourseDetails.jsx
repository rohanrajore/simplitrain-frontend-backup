import React,{useState} from 'react';
//import './instructorCourseDetails.css';
import InstDashCredsItem from "./instDashCredsItem.jsx";
import {Link} from 'react-router-dom';

const InstructorCourseDetails = props => {

  const details=props.courseDetails

  return(
      <div className="instCourseDetails-content">
            <div className="instCourseDetails-contentWraper">
                <div>Course</div>
                <div className="instCourseDetails-creds">
                    <div className="instCourseDetails-credsPart">
                      <InstDashCredsItem name="Title" text={details.title} isBold={true} />
                      <InstDashCredsItem name="Subtitle" text={details.subTitle} />
                      <InstDashCredsItem name="Description" text={details.description} />
                      <InstDashCredsItem name="Language" text={details.language} />
                    </div>

                    <div className="instCourseDetails-credsPart">
                      <InstDashCredsItem name="Level" text={details.level} />
                      <InstDashCredsItem name="Category" text={details.category.name} />
                      <InstDashCredsItem name="Sub-Category" text={details.subCategory.name} />
                      <InstDashCredsItem name="Primary Topics" text={details.tags} />
                    </div>
                </div>
            </div>

            <div className="instCourseDetails-imageVideo">
                <div className="instCourseDetails-contentWraper">
                    <div>Image</div>
                    <div className="instCourseDetails-img">
                        <img src={details.courseImageUrl}/>
                    </div>
                  </div>

                <div className="instCourseDetails-contentWraper">
                    <div>Video</div>
                    <div className="instCourseDetails-img">
                      <iframe src={details.courseVideo} frameBorder="0"
                          allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture" title="Course video">
                      </iframe>
                    </div>
                </div>
            </div>


            <div className="instCourseDetails-contentWraper">
                <div>Target Your Students</div>
                <div className="instCourseDetails-listWrap">
                    <div className="instCourseDetails-list">
                      <ul> <span>What will students learn in this course?</span>
                          {details.highlights.map(item=>(
                              <li>{item}</li>
                          ))}
                      </ul>
                    </div>

                    <div className="instCourseDetails-list">
                      <ul> <span>Pre-requisites</span>
                          {details.requirements.map(item=>(
                              <li>{item}</li>
                          ))}
                      </ul>
                    </div>

                    <div className="instCourseDetails-list">
                       <span>Target Audience</span>
                       <div>
                         {details.targetAudience.map(item=>(
                             <p>{item}</p>
                         ))}
                       </div>
                    </div>
                </div>
            </div>

            <div className="instCourseDetails-contentWraper">
                <div>Course Curriculum</div>
                <div className="instCourseDetails-curriculumWrap">
                  <div>
                    {details.courseSections.map(section=>(
                      <div className="instCourseDetails-curriculumItem" key={section.title}>
                        <div className="instCourseDetails-curriculumPart">
                            <div>Title</div>
                            <div>{section.title}</div>
                        </div>
                        <div className="instCourseDetails-curriculumPart">
                            <div>Description</div>
                            <div>{section.description}</div>
                        </div>
                        <div className="instCourseDetails-curriculumPart">
                            <div>Topics</div>
                            <div className="instCourseDetails-curriculumTopic">
                              {section.courseTopics.map(topic=>(
                                   <p>{topic}</p>
                              ))}
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>           
                </div>

            </div>

            <div className="instCourseDetails-contentWraper">
                <div>Course Messages</div>
                <div className="instCourseDetails-curriculumWrap instCourseDetails-msgs">
                  <div className="instCourseDetails-curriculumPart">
                      <div>Welcome Message</div>
                      <div>{details.welcomeMessage}</div>
                  </div>
                  <div className="instCourseDetails-curriculumPart">
                      <div>Congratulatory Message</div>
                      <div>{details.congratulatoryMessage}</div>
                  </div>
                </div>
            </div>
      </div>
)}

export default InstructorCourseDetails;
