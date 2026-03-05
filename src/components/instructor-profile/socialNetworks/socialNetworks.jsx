import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faInstagram, faLinkedinIn,
        faYoutube, faTwitter, faBehanceSquare, faDribbbleSquare, faVimeo,
        faFlickr, faPinterest, faYahoo, faReddit, faSoundcloud,
        faTumblrSquare, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faGlobe} from "@fortawesome/free-solid-svg-icons";

const SocialNetworks = props => (
  <div className="instructor-socialNetwork">
        { props.instructorDetails.socialMediaCard.facebookURL !==("" || null) &&
          <a href={props.instructorDetails.socialMediaCard.facebookURL} target="_blank">
            <FontAwesomeIcon className="instructor-icons instructor-social-icons" icon={faFacebookSquare}/>
          </a>
         }

         { props.instructorDetails.socialMediaCard.instagramURL !==("" || null) &&
           <a href={props.instructorDetails.socialMediaCard.instagramURL} target="_blank">
             <FontAwesomeIcon style={{color:'purple'}} className="instructor-icons instructor-social-icons" icon={faInstagram}/>
           </a>
          }

          { props.instructorDetails.socialMediaCard.linkedinURL !==("" || null) &&
            <a href={props.instructorDetails.socialMediaCard.linkedinURL} target="_blank">
              <FontAwesomeIcon className="instructor-icons instructor-social-icons" icon={faLinkedinIn}/>
            </a>
           }

           { props.instructorDetails.socialMediaCard.youtubeURL !==("" || null) &&
             <a href={props.instructorDetails.socialMediaCard.youtubeURL} target="_blank">
               <FontAwesomeIcon style={{color:'red'}} className="instructor-icons instructor-social-icons" icon={faYoutube} />
             </a>
            }

        {/* This is personal website, we dont have it in JSON at the moment
          <FontAwesomeIcon style={{color:'grey'}} className="instructor-icons instructor-social-icons" icon={faGlobe} /> */}

          { props.instructorDetails.socialMediaCard.twitterURLL !==("" || null) &&
            <a href={props.instructorDetails.socialMediaCard.twitterURL} target="_blank">
              <FontAwesomeIcon style={{color:'#03d7fc'}} className="instructor-icons instructor-social-icons" icon={faTwitter} />
            </a>
           }

           { props.instructorDetails.socialMediaCard.dribbleURL !==("" || null) &&
             <a href={props.instructorDetails.socialMediaCard.dribbleURL} target="_blank">
               <FontAwesomeIcon style={{color:'pink'}} className="instructor-icons instructor-social-icons" icon={faDribbbleSquare} />
             </a>
            }

            { props.instructorDetails.socialMediaCard.behanceURL !==("" || null) &&
              <a href={props.instructorDetails.socialMediaCard.behanceURL} target="_blank">
                <FontAwesomeIcon style={{color:'#03d7fc'}} className="instructor-icons instructor-social-icons" icon={faBehanceSquare} />
              </a>
             }

             { props.instructorDetails.socialMediaCard.vimeoURL !==("" || null) &&
               <a href={props.instructorDetails.socialMediaCard.vimeoURL} target="_blank">
                 <FontAwesomeIcon style={{color:'black'}} className="instructor-icons instructor-social-icons" icon={faVimeo} />
               </a>
              }

              { props.instructorDetails.socialMediaCard.flikrURL !==("" || null) &&
                <a href={props.instructorDetails.socialMediaCard.flikrURL} target="_blank">
                  <FontAwesomeIcon  className="instructor-icons instructor-social-icons" icon={faFlickr} />
                </a>
               }

               { props.instructorDetails.socialMediaCard.pinterestURL !==("" || null) &&
                 <a href={props.instructorDetails.socialMediaCard.pinterestURL} target="_blank">
                   <FontAwesomeIcon style={{color:'red'}}  className="instructor-icons instructor-social-icons" icon={faPinterest} />
                 </a>
                }

                { props.instructorDetails.socialMediaCard.yahooURL !==("" || null) &&
                  <a href={props.instructorDetails.socialMediaCard.yahooURL} target="_blank">
                    <FontAwesomeIcon style={{color:'purple'}}   className="instructor-icons instructor-social-icons" icon={faYahoo} />
                  </a>
                 }

                 { props.instructorDetails.socialMediaCard.redditURL !==("" || null) &&
                   <a href={props.instructorDetails.socialMediaCard.redditURL} target="_blank">
                     <FontAwesomeIcon style={{color:'#e65535'}}   className="instructor-icons instructor-social-icons" icon={faReddit} />
                   </a>
                  }

                  { props.instructorDetails.socialMediaCard.soundcloudURL !==("" || null) &&
                    <a href={props.instructorDetails.socialMediaCard.soundcloudURL} target="_blank">
                      <FontAwesomeIcon style={{color:'#e65535'}}   className="instructor-icons instructor-social-icons" icon={faSoundcloud} />
                    </a>
                   }

                   { props.instructorDetails.socialMediaCard.tumblrURL !==("" || null) &&
                     <a href={props.instructorDetails.socialMediaCard.tumblrURL} target="_blank">
                       <FontAwesomeIcon style={{color:'grey'}}   className="instructor-icons instructor-social-icons" icon={faTumblrSquare} />
                     </a>
                    }

                    { props.instructorDetails.socialMediaCard.githubURL !==("" || null) &&
                      <a href={props.instructorDetails.socialMediaCard.githubURL} target="_blank">
                        <FontAwesomeIcon style={{color:'black'}}   className="instructor-icons instructor-social-icons" icon={faGithub} />
                      </a>
                     }

  </div>
);

export default SocialNetworks;
