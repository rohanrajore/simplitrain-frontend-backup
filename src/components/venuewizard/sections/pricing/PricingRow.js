import React from 'react';
import { SimpleSelectInput, SimpleTextInput } from '../../FormInputs';

const rentalOptions = [
  { id: "perHour", name: "Per Hour" },
  { id: "perHalfDay", name: "Per Half Day" },
  { id: "perDay", name: "Per Day" },
]

function PricingRow({index, data, options = rentalOptions, display = false, onChange, onRemove}) {
  return (
    <div 
      className="venue-pricing" 
      style={{display: `${display ? 'block' : 'none'}`}}
    >
      <label>Enter Rental Price</label>
      <SimpleTextInput 
        name={`rentalPriceQty_${index}`} 
        placeholder="INR"
        value={data.rentalPriceQty}
        onChange={onChange} 
      />
      <SimpleSelectInput 
        name={`rentalPriceType_${index}`} 
        options={options} 
        value={data.rentalPriceType}
        onChange={onChange} 
      />
      {
        index !== 0 && <button className="btn-remove" onClick={onRemove}>X</button>
      }   
    </div>
  )
}

export default PricingRow;