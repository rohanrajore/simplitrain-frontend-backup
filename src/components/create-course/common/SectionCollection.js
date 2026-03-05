import React, {useState,useEffect} from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CourseSection from './CourseSection';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function SectionWrap({ item, info, index }) {
	const { name, placeholderTitle, placeholderDesc, maxLen, handleUpdate, removeItem } = info;
  return (
    <Draggable draggableId={item.id} index={index}>
      {provided => (
				<div
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <CourseSection
						name={`${name}_${item.id}`}
						placeholderTitle={placeholderTitle}
						placeholderDesc={placeholderDesc}
						value={item}
						maxLen={maxLen}
						onChange={handleUpdate}
						onRemove={removeItem}
					>
						<div className="handle" {...provided.dragHandleProps}>
              <FontAwesomeIcon icon={faBars} />
            </div>
					</CourseSection>
        </div>
      )}
    </Draggable>
  );
}

const SectionList = React.memo(function SectionList({ items, info }) {
	return items.map((item, i) => (
		<SectionWrap item={item} info={info} index={i} key={item.id} />
	))
})

function newItem() {
	return {
		id: `${Date.now()}`,
		val: [""],
		title: "",
		desc: ""
	}
}

function SectionCollection({ title,editCourseDetails, name, placeholderTitle, placeholderDesc, maxLen = 60 }) {

  function handleSectionCollection(array){
      let newArray=[]
      for(let i=0;i<array.length;i++){
        let obj={"id":`${i}`,"val":array[i].courseTopics,"title":array[i].title,"desc":array[i].description}
        newArray.push(obj)
      }
      return newArray
  }



  useEffect(()=>{
    setItems(editCourseDetails!=undefined?handleSectionCollection(editCourseDetails.courseSections):[newItem()])
    },[editCourseDetails])
  const [items, setItems] = useState([newItem()]);

  const addItem = () => {
    setItems(items => [...items, newItem()]);
  }
  const removeItem = (id) => {
    if (items.length <= 1)
      return;

    setItems(items => items.filter(item => item.id !== id));
  }
  const handleUpdate = (val, id, prop) => {
    setItems(items => {
			const copy = [...items];
			const index = copy.findIndex(el => el.id == id);
      copy[index][prop] = val;
      return copy;
    })
	}
	const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reordered_items = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(reordered_items);
  }

  return (
    <div className="input-list">
      <h5>
        <span>{title}</span>
        <button className="btn-add" onClick={addItem}>+</button>
      </h5>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="list">
					{provided => (
						<div className="items-wrap" ref={provided.innerRef} {...provided.droppableProps}>
							<SectionList items={items} info={{ name, placeholderTitle, placeholderDesc, maxLen, handleUpdate, removeItem }}/>
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
    </div>
  )
}

export default SectionCollection;
