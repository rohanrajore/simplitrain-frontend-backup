import React, {useState, useEffect} from 'react';
import PricingRow from './PricingRow';
import CouponRow from './CouponRow';

const opts = [
  {
    id: "pricePerHour",
    name: "Per Hour",
    opts: [
      { id: "pricePerHalfDay", name: "Per Half Day" },
      { id: "pricePerDay", name: "Per Day" }
    ]
  },
  {
    id: "pricePerHalfDay",
    name: "Per Half Day" ,
    opts: [
      { id: "pricePerDay", name: "Per Day" },
      { id: "pricePerHour", name: "Per Hour" }
    ]
  },
  {
    id: "pricePerDay",
    name: "Per Day",
    opts: [
      { id: "pricePerHour", name: "Per Hour" },
      { id: "pricePerHalfDay", name: "Per Half Day" }
    ]
  },
]

function Pricing({
	formData,
	updateFormData
}) {
  const {venue, coupons} = formData.venuePricing;
  const [showPricingRow, setShowPricingRow] = useState([true, false, false]);
  const [priceOpts1, setPriceOpts1] = useState(opts);
  const [priceOpts2, setPriceOpts2] = useState(opts[0].opts);
  const [priceOpts3, setPriceOpts3] = useState([opts[0].opts[1]]);


  const handleUpdateDataVenue = (evt) => {
    const parEl = evt.currentTarget.parentElement.parentElement;
    var venuePricingNodeList = parEl.querySelectorAll(".venue-pricing");
    const copy = [...venue];

    venuePricingNodeList.forEach((node) => {
      if (node.style.display !== 'none')
      {
        let val = node.querySelector('input').value;
        let selectVal = node.querySelector('select').value;
        let idx = copy.findIndex((obj => obj.rentalPriceType === selectVal));
        let floatVal = parseFloat(parseFloat(val).toFixed(2));
        copy[idx]['rentalPriceQty'] = floatVal;
        updateFormData('venuePricing', selectVal, floatVal);
      }
    });

    updateFormData('venuePricing', 'venue', copy);
  }

  const handleUpdateDataCoupon = (evt) => {
    const [name, index] = evt.currentTarget.name.split('_');
    const copy = [...coupons];
    copy[parseInt(index)][name] = evt.currentTarget.value;
    updateFormData('venuePricing', 'coupons', copy);
  }

  const handleAddVenue = () => {
    setShowPricingRow(rows => {
      const copy = [...rows];
      const index = copy.findIndex(row => !row);
      if (index !== -1) {
        copy[index] = true;
      }
      return copy;
    })
  }

  const handleRemoveVenue = (evt) => {
    const parEl = evt.currentTarget.parentElement;
    const copy = [...venue];
    const selectVal = parEl.querySelector('select').value;
    const idx = copy.findIndex(obj => obj.rentalPriceType === selectVal);
    copy[idx]['rentalPriceQty'] = 0.00;
    updateFormData('venuePricing', selectVal, 0.00);
    updateFormData('venuePricing', 'venue', copy);

    setShowPricingRow(rows => {
      const copy = [...rows];
      if (copy[2])
        copy[2] = false;
      else if (copy[1])
        copy[1] = false;
      return copy;
    })
  }

  const handleAddCoupon = () => {
    const item = {
      discountedPrice: "",
      couponCode: "",
      couponQty: "",
      couponValidFrom: "",
      couponValidUntil: ""
    }
    const copy = [...coupons, item];
    updateFormData('venuePricing', 'coupons', copy);
  }

  return (
    <div className="section-pricing">
			<h4>Enter your rental details</h4>

      <h4>
        Venue Pricing
        <button className="btn-add" onClick={handleAddVenue}>+</button>
      </h4>
       <PricingRow
        index={0}
        data={venue[0]}
        display={showPricingRow[0]}
        options={priceOpts1}
        onChange={handleUpdateDataVenue}
        onRemove={handleRemoveVenue}
      />
       <PricingRow
        index={1}
        data={venue[1]}
        display={showPricingRow[1]}
        options={priceOpts2}
        onChange={handleUpdateDataVenue}
        onRemove={handleRemoveVenue}
      />
       <PricingRow
        index={2}
        data={venue[2]}
        display={showPricingRow[2]}
        options={priceOpts3}
        onChange={handleUpdateDataVenue}
        onRemove={handleRemoveVenue}
      />

      <h4>
        Coupon codes for additional discount
        <button className="btn-add" onClick={handleAddCoupon}>+</button>
      </h4>
      {
        coupons.map((row, i) => <CouponRow key={i} index={i} data={row} onChange={handleUpdateDataCoupon} />)
      }
    </div>
  );
}

export default Pricing;
