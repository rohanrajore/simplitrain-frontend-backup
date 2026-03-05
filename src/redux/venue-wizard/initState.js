const initState = {
	"venueLocation": {
		country: "",
		addressLine: "",
		city: "",
		state: "",
		zipcode: "",
		"latitude": null,
        "longitude": null
	},
	"venueCategory": {
		id: '',
		name: ''
	},
	"venueSubCategory": {
		id: '',
		name: '',
		venueCategory: {}
	},
	"venueName": "",
    "maximumNumberOfParticipants": 0,
    "venueAreaInSqFeet": 0,
    "venueSummary": "",
	"venuePricing": {
		"currency": "INR",
        "pricePerHour": 0.0,
        "pricePerDay": 0.0,
        "pricePerHalfDay": 0.0,
		venue: [
			{ rentalPriceQty: 0.0, rentalPriceType: "pricePerHour" },
			{ rentalPriceQty: 0.0, rentalPriceType: "pricePerHalfDay" },
			{ rentalPriceQty: 0.0, rentalPriceType: "pricePerDay" }
		],
		coupons: [
			{
				discountedPrice: "",
				couponCode: "",
				couponQty: "",
				couponValidFrom: "",
				couponValidUntil: ""
			}
		]
	},
	"standardAmenities": [],
	"customAmenities": [],
	"custom": [],
	"photoGallery": [],
	"venueSchedule": {
		different: { isSelected: false },
		saturdaySchedule: { isSelected: false },
		sundaySchedule: { isSelected: false },
		mondaySchedule: { isSelected: false },
		tuesdaySchedule: { isSelected: false },
		wednesdaySchedule: { isSelected: false },
		thursdaySchedule: { isSelected: false },
		fridaySchedule: { isSelected: false },
		weekdaysSchedule: { isSelected: false }
	},
	"availability": {
		empty: []
	},
	"guestGuidelinesAndRules": "",
    "guestGuidelinesAndRulesPdfFile": {},
    "isApprovalRequired": false,
    "termsAndConditionsAccepted": false
}

export default initState;