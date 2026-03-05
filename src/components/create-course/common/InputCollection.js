import React, {useState, useEffect} from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LimitedTextInput from './LimitedTextInput';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function InputWrap({ item, info, index }) {
	const { name, placeholder, maxLen, handleUpdate, removeItem, addItem } = info;
  return (
    <Draggable draggableId={item.id} index={index}>
      {provided => (
				<div
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <LimitedTextInput
						name={`${name}_${item.id}`}
						placeholder={placeholder}
						value={item}
						maxLen={maxLen}
						onChange={handleUpdate}
            onRemove={removeItem}
            onPressEnter={addItem}
					>
						<div className="handle" {...provided.dragHandleProps}>
              <FontAwesomeIcon icon={faBars} />
            </div>
					</LimitedTextInput>
        </div>
      )}
    </Draggable>
  );
}

const InputList = React.memo(function InputList({ items, info }) {
	return items.map((item, i) => (
		<InputWrap item={item} info={info} index={i} key={item.id} />
	))
})

function newItem() {
	return { id: `${Date.now()}`, val: "" }
}

function InputCollection({ title, name, placeholder, maxLen = 60, ...props }) {

  function handleInputSelection(array){
      let newArray=[]
      for(let i=0;i<array.length;i++){
        let obj={"id":`${i}`,"val":array[i]}
        newArray.push(obj)
      }
      return newArray
  }

  useEffect(()=>{
    setItems(props.editCourseDetails!=undefined?handleInputSelection(props.editCourseDetails[props.inputArray]):[newItem()])
    },[props.editCourseDetails])
  const [items, setItems] = useState([newItem()]);

  const addItem = () => {
    setItems(items => [...items, newItem()]);
  }
  const removeItem = (id) => {
    if (items.length <= 1)
      return;

    setItems(items => items.filter(item => item.id !== id));
  }
  const handleUpdate = (val, id) => {
    setItems(items => {
			const copy = [...items];
			const index = copy.findIndex(el => el.id == id);
      copy[index]['val'] = val;
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
							<InputList items={items} info={{ name, placeholder, maxLen, handleUpdate, removeItem, addItem }}/>
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
    </div>
  )
}

export default InputCollection;
