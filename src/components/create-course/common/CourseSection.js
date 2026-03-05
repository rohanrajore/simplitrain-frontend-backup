
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import InputCollection from './InputCollection';

function CourseSection({ name, placeholderTitle, placeholderDesc, value, onChange, onRemove, children, maxLen = 60 }) {
	const { id, title, desc } = value;
	const remaining = maxLen - title.length;
  const checkLimit = (evt) => {
    const text = evt.currentTarget.value;
    text.length > maxLen ? onChange(text.slice(0, maxLen), id, 'title') : onChange(text, id, 'title');
	}
	const handleDescription = (evt) => {
		const text = evt.currentTarget.value;
		onChange(text, id, 'desc');
	}
	return (
		<div className="course-section">
			<div className="input-limit">
				<input
					type="text"
					name={`${name}_title`}
					className="form-control aliceblue"
					placeholder={placeholderTitle}
					value={title}
					onChange={checkLimit}
				/>
				<div className="controls">
					<span>{remaining}</span>
					<button className="remove" onClick={e => onRemove(id)}>
						<FontAwesomeIcon icon={faTrash} />
					</button>
					{ children }
				</div>
			</div>
			<textarea
				rows="3"
				name={`${name}_desc`}
				className="aliceblue"
				placeholder={placeholderDesc}
				value={desc}
				onChange={handleDescription}
			/>
			<div className="topics">
				<InputCollection
					title="Topics in the section"
					placeholder="Example: Python Essentials"
					name={`${name}_topic`}
					editCourseDetails={value}
					inputArray="val"
				/>
			</div>
		</div>
	)
}

export default CourseSection;
