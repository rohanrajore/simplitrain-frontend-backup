import React from 'react';

export function ValidationMessage({ from, errors }) {
	const err = errors.find(v => v[0] === from);
	return err ? <label className="input-label error-label">{err[1]}</label> : null;
}

export function TextInput({ name, label, placeholder, value, isDisabled, errors = [], onChange = () => {} }) {
	return (
		<div className="input-container" style={{flexDirection:"column"}}>
			<label >{label}</label>
			<input
				type="text"
				name={name}
				value={value}
				className="form-control"
				placeholder={placeholder}
				onChange={onChange}
				disabled={isDisabled}
			/>
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
			<label>{label}</label>
			<textarea
				type="text"
				rows="3"
				name={name}
				defaultValue={value}
				className="form-control"
				placeholder={placeholder}
				onChange={onChange}
			/>
			<ValidationMessage from={name} errors={errors} />
		</div>
	)
}

export function ComboCategories({name, options, value, onChange = () => {} }) {
  return (
    <select className="form-control" name={name} value={value} onChange={onChange}>
    {
      options.map(opt => <option key={opt.id} value={JSON.stringify(opt)}>{opt.name}</option>)
    }
    </select>
  )
}

export function SelectInput({ name, label, options, value, errors = [], onChange = () => {} }) {
	return (
		<div className="input-container">
			<label>{label}</label>
			<select name={name} className="form-control">
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
		<div style={{width: "auto",display:"flex",alignItems:"center"}}>
			<input type="checkbox"
				     className="form-check"
						 style={{width:"20px"}} id={eid} name={name} value={name} onChange={onChange} checked={checked} />
					 <label htmlFor={eid} style={{marginLeft:"20px",marginBottom:"0"}}>{text}</label>
		</div>
	)
}

export function validateSection(formData, currentStep, onSuccess, onFail) {
	// try to validate current step
	const key = Object.keys(formData)[currentStep]; // like key = 'location'
	const ctx = formData[key];
	let message = "";
	let isValidated = false;

	if (key === 'location' || key === 'details') {
		const emptyFields = Object.keys(ctx).filter(k => ctx[k] === "");
		isValidated = emptyFields.length === 0; // check if all fields are filled
		message = !isValidated ? `Fill all fields please (${emptyFields.join(', ')})` : "";
	}
	else if (key === 'pricing' && window.location.pathname!=="/instructor/private-venue-wizard") {
		isValidated = ctx.venue[0].rentalPriceQty !== "";
		message = !isValidated ? "Fill at least one rental price please" : "";
	}
	else if (key === 'amenities' || key === 'scheduling') {
		const fields = Object.keys(ctx).filter(k => ctx[k].checked === true && k !== 'different');
		isValidated = fields.length > 0;
		message = !isValidated ? "Select at least one option please" : "";
	}
	else if (key === 'guestRules') {
		if (ctx.uploaded.length > 0 || ctx.guidelines !== "") {
			if (ctx.acceptTerms.checked) {
				isValidated = true;
			}
			else {
				message = "Accept Terms & Conditions please";
			}
		}
		else {
			message = "Add guidelines or upload a document please";
		}
	}
	else {
		isValidated = true;
	}

	if (isValidated)
		onSuccess();
	else
		onFail(message);
}
