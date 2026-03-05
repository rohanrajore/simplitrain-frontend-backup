import React from 'react';
import ComboHours from './ComboHours';
import {CheckboxInput} from '../../FormInputs';

function ScheduleRow({day, text, value, onChange}) {
  return (
    <div className="schedule-row" style={{display:"flex"}}>
      <CheckboxInput name={`${day}Schedule`} text={text} checked={value.isSelected} onChange={onChange} />
      <ComboHours name={`${day}ScheduleStart`} value={value.start} onChange={onChange} />
      <ComboHours name={`${day}ScheduleEnd`} value={value.end} onChange={onChange}/>
    </div>
  )
}

export default ScheduleRow;
