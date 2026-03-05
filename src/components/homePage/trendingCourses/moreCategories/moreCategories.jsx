import React from 'react';
// import "./moreCategories.css";
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";

const MoreCategories = props => {
  const { overflowCategories, handleOverflowCategoriesFirst } = props;
  const clickHandler= e =>{
      props.categoryHandler(e)
      props.closeMoreCat(false)


      let newCategories = props.categories
      let replacedIndex = props.categories.findIndex(cat => cat.id===e.target.id)
      //let activeIndex = props.categories.findIndex(cat => cat.id===props.activeCategory)

        // Replace 2 elements in array
       const  tmp = newCategories[0]
            newCategories[0] = newCategories[replacedIndex]
            newCategories[replacedIndex] = tmp

      props.setCategories(newCategories)
  }

  return(
    // <Dropdown drop={'down'}>
    //   <Dropdown.Toggle variant="transparent" onClick={handleOverflowCategoriesFirst} id="dropdown-basic">
    //     <FontAwesomeIcon icon={faEllipsisV} className="category-moreIcon" />
    //   </Dropdown.Toggle>
    //   <Dropdown.Menu>
    //   {overflowCategories.map((category, index)=>(
    //     // index >= noOfItems?
    //       <Dropdown.Item key={category.id} id={category.id} onClick={clickHandler}>{category.name}</Dropdown.Item>
    //     // :null
    //   ))}
    //   </Dropdown.Menu>
    // </Dropdown>
  <div className="moreCategories-container" onClick={()=>props.closeMoreCat(false)}>
    {props.overflowCategories.map(category=>(
        <div key={category.id} id={category.id} className="trending-category"
             style={{borderBottom: props.activeCategory===category.id?'5px solid #4183c4':"none"}}
             onClick={clickHandler}>{category.name}</div>
    ))}
  </div>
);}

export default MoreCategories;
