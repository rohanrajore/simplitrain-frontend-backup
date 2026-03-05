// Custom style for select component
const customStyles = {
dropdownIndicator: () => ({
  cursor:"pointer",
}),
option: (provided, state) => ({
  ...provided,
  cursor:"pointer"
}),
valueContainer: (provided, state) => ({
  ...provided,
  cursor:"pointer"
}),
}

// Those are options sort select can be
const sortOptions =[{"key":"001","value":"featured","label":"Featured"},
                           {"key":"002","value":"favorite","label":"Favorite"},
                           {"key":"003","value":"distance","label":"Distance"},
                           {"key":"004","value":"ratings","label":"Ratings"},
                           {"key":"005","value":"lowToHigh","label":"Price (low to high)"},
                           {"key":"006","value":"highToLow","label":"Price (high to low)"}]

// Those are options location select can be
const locationOptions =[{"key":"001","value":"Bengaluru","label":"Bengaluru"},
                        {"key":"002","value":"Mumbai","label":"Mumbai"},
                        {"key":"003","value":"Copenhagen","label":"Copenhagen"}]

// Those are venue Types checkbox options in All Filters
const venueTypeOptions = [{"checked":false,"value":"fiveStarHotel","label":"5 Star Hotel"},
                           {"checked":false,"value":"fourStarHotel","label":"4 Star Hotel"},
                           {"checked":false,"value":"coWorkingSpaces","label":"Co-Working Spaces"},
                           {"checked":false,"value":"commercialComplex","label":"Commercial Complex"},
                           {"checked":false,"value":"apartments","label":"Apartments"}]

// Those are amenities checkbox options in All Filters
const amenitiesOptions = [{"checked":false,"value":"availibility","label":"Availibility"},
                          {"checked":false,"value":"accessibility","label":"Accessibility"},
                          {"checked":false,"value":"parking","label":"Parking"},
                          {"checked":false,"value":"security","label":"Security"},
                          {"checked":false,"value":"wifi","label":"Wifi"},
                          {"checked":false,"value":"projector","label":"Projector"}]

// Those are seating Type options in All Filters
const seatingTypeOptions = [{"key":"001","value":"all","label":"All Types"},
                            {"key":"002","value":"theatre","label":"Theatre"},
                            {"key":"003","value":"uShape","label":"U-Shape"},
                            {"key":"004","value":"classroom","label":"Classroom"},
                            {"key":"005","value":"boardroom","label":"Boardroom"},
                            {"key":"006","value":"banquet","label":"Banquet"},
                            {"key":"007","value":"cabaret","label":"Cabaret"},
                            {"key":"008","value":"imperial","label":"Imperial"}]

// Those are no Of Participants options in all Filters
const noOfParticipantsOptions = [{"key":"001","value":"all","label":"All"},
                            {"key":"002","value":"<10","label":"<10"},
                            {"key":"003","value":"10-20","label":"10-20"},
                            {"key":"004","value":"20-30","label":"20-30"},
                            {"key":"005","value":"30-40","label":"30-40"}]

export {customStyles,sortOptions,locationOptions,
        venueTypeOptions,amenitiesOptions,seatingTypeOptions,
        noOfParticipantsOptions}
