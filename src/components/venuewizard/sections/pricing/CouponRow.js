import React from 'react';
import { SimpleTextInput } from '../../FormInputs';

function CouponRow({index, data, onChange}) {
  return (
    <div className="coupon-codes">
      <SimpleTextInput 
        placeholder="Discounted Price" 
        name={`discountedPrice_${index}`} 
        value={data.discountedPrice}
        onChange={onChange}
      />
      <SimpleTextInput 
        placeholder="Specify Coupon Code"
        name={`couponCode_${index}`}
        value={data.couponCode}
        onChange={onChange}  
      />
      <SimpleTextInput 
        placeholder="No of Coupons"
        name={`couponQty_${index}`} 
        value={data.couponQty}
        onChange={onChange}
      />

      <input 
        type="date" 
        className="form-control" 
        placeholder="Valid From"
        name={`couponValidFrom_${index}`} 
        defaultValue={data.couponValidFrom}
        onChange={onChange} 
      />
      <input 
        type="date" 
        className="form-control" 
        placeholder="Valid Until" 
        name={`couponValidUntil_${index}`} 
        value={data.couponValidUntil}
        onChange={onChange} 
      />
    </div>
  )
}

export default CouponRow;