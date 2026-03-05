import React,{useState,useEffect} from 'react';
// import './accordion.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-scroll';
import {faPlus,faMinus, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";
import { AccordionContainerStyle } from './accordion.style';

const AccordionContainer = props => {

    const [rerender,setRerender]= useState(false)
    const [expandAll,setExpandAll] = useState(false)
    const [statePanels,setStatePanels] = useState()
    const [showMore, setShowMore] = useState(false)
    const [accordionArray, setAccordionArray] = useState(props.info.content.slice(0,10))
    const handleShowMore= () =>{
        showMore===false? setAccordionArray(props.info.content)
                        : setAccordionArray(props.info.content.slice(0,10))
        setShowMore(!showMore)
      }

    // This will expand and collapse whole accordion when clicked on button
    const expandAllHandler= e=>{
      if(expandAll===false){
      for(let key in statePanels) {
       statePanels[key]=true;
      }
      setExpandAll(true)
      setRerender(!rerender)
    }
    else if(expandAll===true){
      for(let key in statePanels) {
       statePanels[key]=false;
      }
      setExpandAll(false)
      setRerender(!rerender)
    }
  }
    // When the component renders all panel states will be set to false, which means they are closed.
    useEffect(()=>{
      let obj={}
      for(let i=0;i<props.info.content.length;i++){
          obj[props.info.content[i].id]=false
      }
      setStatePanels(obj)
    },[])

    // This will set specific panel state to opposite state. If it was true, then set it to false, and vice versa
    const handleChange = (panel) => (event) => {
      let panels= statePanels
      let obj;
      panels[panel]=!panels[panel]
      setStatePanels(panels)
      setRerender(!rerender)
    };

  return(
  <AccordionContainerStyle>

    <div className="accordion-head">
        <div className="accordion-title">
          <h4>Course Content</h4> 
          <span className="accordion-topicNum">{props.info.content.length} Topics</span>
        </div>
        <div className="accordion-summary">
              {/* Here we modify if we want to expand/collapse accordion */}
            <p onClick={expandAllHandler} className="accordion-expand-all">
               {expandAll===false?"Expand ":"Collapse "} all sections
            </p>
        </div>
    </div>

    {accordionArray.map(item=>(
    <Accordion
      key={item.id}
      expanded={typeof statePanels!="undefined"? statePanels[`${item.id}`] : false}
      onChange={handleChange(item.id)}
    >

        {/* THIS IS ACCORDION TITLE*/}
        <AccordionSummary
          expandIcon={<FontAwesomeIcon icon={(typeof statePanels!="undefined" && statePanels[`${item.id}`])?faMinus:faPlus}/>}
          aria-controls={item.id}
          id={item.id}
        >
          <Typography>
            <b>{item.sectionTitle}</b>
            <p className="subtitle" style={{display:(typeof statePanels!="undefined" && statePanels[`${item.id}`])?"":"none"}}>
              {item.sectionSubtitle}
            </p>
          </Typography>

        </AccordionSummary>

        {/*This is accordion content*/}
        <AccordionDetails style={{display:"flex",flexDirection:"column"}}> 
          {item.lectures.map(lecture=>(
            <Typography key={lecture.name} component={'span'} className="accordion-typography">
              <div>
                <FontAwesomeIcon icon={faChevronCircleRight} size='1x' /> {lecture.name}
              </div>
            </Typography>
          ))}
        </AccordionDetails>
    </Accordion>

))}
  {props.info.content.length>10 && <Link className="description-more" to="course-content" spy={true} smooth={true} offset={-50}
    duration={1}onClick={handleShowMore}>{showMore===true?"Show less":"Show more"}</Link>}

  </AccordionContainerStyle>
);}

export default AccordionContainer;
