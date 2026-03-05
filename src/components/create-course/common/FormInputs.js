import React from 'react';

export function ValidationMessage({ from, errors }) {
	const err = errors.find(v => v[0] === from);
	return err ? <label className="input-label error-label">{err[1]}</label> : null;
}

export function TextInput({ name,disableTag, label, placeholder, value, errors = [], onChange, onKeyUp }) {
	return (
		<div className="input-container">
			<input
				type="text"
				name={name}
				value={value}
				className="form-control"
				placeholder={placeholder}
				onChange={onChange}
				onKeyUp={onKeyUp}
				disabled={name==="addTag" && disableTag===true}
			/>
			<label className="input-label">{label}</label>
			<ValidationMessage from={name} errors={errors} />
		</div>
	)
}

export function SimpleTextInput({ name, placeholder, value, errors = [], onChange = () => {} }) {
	return (
		<input
			type="text"
			name={name}
			className="form-control"
			placeholder={placeholder}
			defaultValue={value}
			onChange={onChange}
		/>
	)
}

export function TextareaInput({ name, label, placeholder, value, errors = [], onChange = () => {} }) {
	return (
		<div className="input-container">
			<textarea
				type="text"
				rows="3"
				name={name}
				defaultValue={value}
				className="form-control"
				placeholder={placeholder}
				onChange={onChange}
			/>
			<label className="input-label">{label}</label>
			<ValidationMessage from={name} errors={errors} />
		</div>
	)
}

export function ComboCategories({name, options, value, onChange = () => {} }) {
  return (
    <select className="form-control" name={name} value={value} onChange={onChange}>
    {
      options.map(opt => <option key={opt.id} value={opt.id}>{opt.name}</option>)
    }
    </select>
  )
}

export function SelectInput({ name, label, options, value, errors = [], onChange = () => {} }) {
	return (
		<div className="input-container">
			<label>{label}</label>
			<select name={name} defaultValue={value} className="form-control">
				{
					options.map(opt => <option key={opt} value={opt}>{opt}</option>)
				}
			</select>
			<ValidationMessage from={name} errors={errors} />
		</div>
	)
}

export function SimpleSelectInput({name, options, value, onChange = () => {} }) {
  return (
    <select className="form-control" name={name} value={value} onChange={onChange}>
    {
      options.map(opt => <option key={opt.id} value={opt.id}>{opt.name}</option>)
    }
    </select>
  )
}

export function CheckboxInput({ name, text, index = "", checked = false, onChange = () => {} }) {
	const eid = `${name}${index}`;
	return (
		<div className="input-checkbox">
			<input type="checkbox" id={eid} name={name} className="form-checkbox" value={name} onChange={onChange} checked={checked} />
			<label htmlFor={eid} className="checkbox-label">{text}</label>
		</div>
	)
}
