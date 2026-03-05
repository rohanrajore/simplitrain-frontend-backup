
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function LimitedTextInput({ name, placeholder, value, maxLen = 60, onChange, onRemove, onPressEnter, children }) {
	const { id, val } = value;
	const remaining = maxLen - val.length;
  const checkLimit = (evt) => {
    const text = evt.currentTarget.value;
    text.length > maxLen ? onChange(text.slice(0, maxLen), id) : onChange(text, id);
	}
	const handleKeyUp = (e) => {
		if (e.key === 'Enter' || e.keyCode === 13) {
			onPressEnter();
		}
	}
	return (
		<div className="input-limit">
			<input
				type="text"
				name={name}
				className="form-control"
				placeholder={placeholder}
				value={val}
				autoFocus={true}
				onChange={checkLimit}
				onKeyUp={handleKeyUp}
			/>
      <div className="controls">
        <span>{remaining}</span>
        <button className="remove" onClick={e => onRemove(id)}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
        { children }
      </div>
		</div>
	)
}

export default LimitedTextInput;
