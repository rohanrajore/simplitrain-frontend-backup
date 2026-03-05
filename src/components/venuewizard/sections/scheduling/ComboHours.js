import React from 'react';

const hours = [
  "12:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
];

function ComboHours({name, value, onChange}) {
  const hoursAM = hours.map(h => `${h} AM`);
  const hoursPM = hours.map(h => `${h} PM`);
  return (
    <select className="combo-hour" name={name} value={value} onChange={onChange}>
    {
      [...hoursAM, ...hoursPM].map(opt => <option key={opt} value={opt}>{opt}</option>)
    }
    </select>
  )
}

export default ComboHours;