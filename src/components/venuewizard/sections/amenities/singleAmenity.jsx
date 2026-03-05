import React,{useState} from 'react';
import "./amenities.css";

const loremIpsum= `Donec bibendum elit sed lorem tempus, eget eleifend turpis tempor. Nulla facilisi. Praesent eget euismod nunc. Curabitur at fermentum arcu. Donec interdum viverra consequat. Nullam nec feugiat odio. Sed rutrum nibh nec sapien ultrices consectetur eu non purus. Sed suscipit sagittis neque ac consectetur. Etiam malesuada tortor vulputate dolor hendrerit, interdum interdum sapien volutpat. Proin bibendum eros ac risus euismod, sed volutpat ipsum faucibus. Aliquam tincidunt porta hendrerit. Duis quis enim lectus. Proin eu velit eleifend, malesuada lorem vel, pretium felis.`

const SingleAmenity = props => {

  const [wholeText,setWholeText] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  return(
  <div className="singleAmenity"
       style={{"height":wholeText?"auto":"",
               "border":isSelected?"2px solid green":""}}
       onClick={()=>setIsSelected(!isSelected)}>

        <div className="singleAmenity-titleContainer">
           <div className="singleAmenity-title">{props.name}</div>
           <div className="singleAmenity-additional"
                style={{color:props.isFree===("true" || true)? "green": "red"}}>

            {props.isFree===("true" || true)? "FREE" : "ADDITIONAL CHARGES"}
           </div>
        </div>

        <div className="singleAmenity-text">
            {wholeText? props.text: props.text.slice(0,150)}
            {props.text.length>150 && <span className="info-scroll-link"
                  style={{marginLeft:"5px"}}
                  onClick={()=>setWholeText(!wholeText)}>
              {wholeText? "less": "more..."}
            </span>}
        </div>

  </div>
);}

export default SingleAmenity;
