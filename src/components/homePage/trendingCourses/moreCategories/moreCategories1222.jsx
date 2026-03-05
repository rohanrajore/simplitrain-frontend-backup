import React from 'react';
import "./moreCategories.css";

const MoreCategories = props => {

  const clickHandler= e =>{
      props.categoryHandler(e)
      props.closeMoreCat(false)
      props.setActiveCategory(e.target.id)

      let newCategories = props.categories
      let replacedIndex = props.categories.findIndex(cat => cat.id===e.target.id)
      let activeIndex = props.categories.findIndex(cat => cat.id===props.activeCategory)

        // Replace 2 elements in array
       const  tmp = newCategories[activeIndex]
            newCategories[activeIndex] = newCategories[replacedIndex]
            newCategories[replacedIndex] = tmp

      props.setCategories(newCategories)
  }

  return(
  <div className="moreCategories-container" onClick={()=>props.closeMoreCat(false)}>
    {props.overflowCategories.map(category=>(
        <div key={category.id} id={category.id} className="trending-category"
             style={{borderBottom: props.activeCategory===category.id?'5px solid #4183c4':"none"}}
             onClick={clickHandler}>{category.name}</div>
    ))}
  </div>
);}

export default MoreCategories;
