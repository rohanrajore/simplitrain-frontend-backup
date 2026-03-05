import React from 'react';
import ScheduleRow from './ScheduleRow';
import {CheckboxInput,ComboCategories} from '../../FormInputs';
import "./scheduling.css";
const weekDays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];


function Scheduling({
	formData,
	updateFormData
}) {
  const ctx = formData.venueSchedule;
  console.log(formData)
	const timeOptions = [{"id":"0","name":"00:00 AM"},{"id":"1","name":"00:30 AM"}]
  const handleUpdateData = (evt) => {
    const name = evt.currentTarget.name;
    const val = {
      isSelected: evt.currentTarget.checked,
    };
    updateFormData('venueSchedule', name, val);
  }

  const handleScheduleRow = (evt) => {
    let propname = "";
    let edit = {
      'isSelected': false,
      'startTime': '',
      'endTime': ''
    };

    let parEl = evt.currentTarget.closest('.schedule-row');
    let name = parEl.querySelector('.form-check').value;

    let startStr = name + 'Start';
    let endStr = name + 'End';

    edit.startTime = '' + convertTime12to24(parEl.querySelector('select[name="' + startStr + '"]').value);
    edit.endTime = '' + convertTime12to24(parEl.querySelector('select[name="' + endStr + '"]').value);
    edit.isSelected = parEl.querySelector('.form-check').checked;
    propname = name;

    // combine objects
    const data = { ...ctx[propname], ...edit };
    updateFormData('venueSchedule', propname, data);
  }

  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');

    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  }

  return (
    <div className="section-scheduling">
			<h4>
        Please select the duration you want to rent for &nbsp;
      </h4>

			<div className="scheduling-container">
		      <div className="scheduling-left" >
							<h6>Available Days</h6>
							<div className="schedule-row">
								 <CheckboxInput
									 name="weekdaysSchedule"
									 text="Monday-Friday"
									 checked={ctx.weekdaysSchedule.isSelected}
									 onChange={handleUpdateData}
										/>
							</div>
							<div className="schedule-row">
								<CheckboxInput
									name="saturdaySchedule"
									text="Saturday"
									checked={ctx.saturdaySchedule.isSelected}
									onChange={handleUpdateData}
								/>
							</div>
							<div className="schedule-row">
								<CheckboxInput
									name="sundaySchedule"
									text="Sunday"
									checked={ctx.sundaySchedule.isSelected}
									onChange={handleUpdateData}
								/>
							</div>
				</div>

				<div>
						<h6>Available Time</h6>
						<div className="venue-scheduling-time">
							<ComboCategories
								name="startTime"
								options={timeOptions}
								value={timeOptions[0]}
								onChange={handleUpdateData}
								/>
							<div style={{width:"50px"}}></div>
							<ComboCategories
									name="endTime"
									options={timeOptions}
									value={timeOptions[0]}
									onChange={handleUpdateData}
								/>
						</div>

				</div>
			</div>
    </div>
  );
}

export default Scheduling;
