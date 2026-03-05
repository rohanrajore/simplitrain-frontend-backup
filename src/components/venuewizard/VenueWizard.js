import React, { useState } from 'react';
import { validateSection } from './FormInputs';


function VenueWizard({ title, children, formData ,onSaveAndExit, handlePreviewPage, startAt = 0 }) {
	const [stepValidated, setStepValidated] = useState(children.map(child => false));
	const [currentStep, setCurrentStep] = useState(startAt);
	const [validationError, setValidationError] = useState("");

	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(step => step - 1);
			setValidationError("");
		}
	}

	const nextStep = () => {
		const stepsLength = stepValidated.length;
		if (currentStep < stepsLength - 1) { // check if index is in range
			validateSection(
				formData,
				currentStep,
				() => { // onSuccess
					setCurrentStep(step => step + 1);
					setValidationError("")
				},
				(msg) => setValidationError(msg)	// onFail
			)
		}
		else {
			console.log(`form end`);
		}
	}

	return (
		<section className="venuewizard">
			<div className="venuewizard-steps">
				<h3>{title}</h3>
				<ul>
					{ children.map((child, i) =>
						<li
							key={child.type.name}
							className={`${i < currentStep ? 'done' : ''} ${i === currentStep ? 'current' : ''}`}
							onClick={() => setCurrentStep(i)}
						>
							<span>{child.props.title || child.type.name}</span>
						</li>)
					}
				</ul>
			</div>
			<div className="venuewizard-sections">
				 <div className="venuewizard-sections-content">
					{React.Children.map(children || null, (child, i) => (
						<div
							key={i}
							className={`venuewizard-section ${i === currentStep ? 'active' : '' }`}
						>
							<h2 className="venuewizard-section-title">
								{child.props.title || child.type.name}
							</h2>
							{validationError !== "" && <small className="error">{validationError}</small>}
							<child.type {...child.props} showValidationError={setValidationError} />
						</div>
					))}
				 </div>
				<div className="venuewizard-controls">
					<button className="btn" onClick={() => prevStep()}>Back</button>
					<div>
						<button className="btn" onClick={handlePreviewPage}>Preview</button>
						<button className="btn" onClick={onSaveAndExit}>Save and Exit</button>
						<button className="btn blue" onClick={() => nextStep()}>Next</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default VenueWizard;
