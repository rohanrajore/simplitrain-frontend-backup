import React, { useState, useRef, useEffect } from "react";
import { CheckboxInput, TextInput, TextareaInput, ComboCategories } from "../../FormInputs";
import FullPageLoader from "../../../../common/fullpage-loader/FullPageLoader";
import Axios from "axios";
import "./amenities.css";
import SingleAmenity from "./singleAmenity.jsx";

const defaultAmenities = [
  { name: "elevator", text: "Elevator" },
  { name: "ac", text: "A/C" },
  { name: "fireSafety", text: "Fire Safety" },
  { name: "cctv", text: "CCTV" },
  { name: "audioVideo", text: "Audio Video System" },
  { name: "electricPlug", text: "Electric Plug Points" },
  { name: "toilet", text: "Toilet" },
  { name: "internet", text: "Internet" },
];

const amenities = [{"category":"Health & Safety",
                    "amenities":[{"name":"Elevator","isFree":"true","quantity":"1","text":"loremIpsuuuuuuum","price":""},
                                 {"name":"AC","isFree":"true","quantity":"1","text":"loremIpsuuuuuuum","price":""}]},

                                 {"category":"Parking Services",
                                                     "amenities":[{"name":"Public Parking","isFree":"true","quantity":"10","text":"loremIpsuuuuuuum","price":""},
                                                                  {"name":"Private Parking","isFree":"false","quantity":"3","text":"loremIpsuuuuuuum","price":"100"}]},

                                 {"category":"Audio & Video Amenities",
                                                     "amenities":[{"name":"Audio & Video","isFree":"false","price":"135.00","quantity":"5","text":`Donec bibendum elit sed lorem tempus, eget eleifend turpis tempor. Nulla facilisi. Praesent eget euismod nunc. Curabitur at fermentum arcu. Donec interdum viverra consequat. Nullam nec feugiat odio. Sed rutrum nibh nec sapien ultrices consectetur eu non purus. Sed suscipit sagittis neque ac consectetur. Etiam malesuada tortor vulputate dolor hendrerit, interdum interdum sapien volutpat. Proin bibendum eros ac risus euismod, sed volutpat ipsum faucibus. Aliquam tincidunt porta hendrerit. Duis quis enim lectus.`},
                                                                  {"name":"Internet","isFree":"true","quantity":"1","text":"loremIpsuuuuuuum","price":""},
                                                                  {"name":"Projector","isFree":"true","quantity":"1","text":"loremIpsuuuuuuum","price":""}]},
                    ]

const amenityCategories = [{"id":"123","name":"Health & Safety"}, {"id":"264","name":"Audio & Video Amenities"}, {"id":"1223","name":"Parking Services"}]

function Amenities({ formData, currentUser, updateFormData }) {
  const ctx = formData;

  const formRef = useRef();
  const [showForm, setShowForm] = useState(false);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newAmenity, setNewAmenity] = useState({"name":"",
                                                "category":amenityCategories[0],
                                                "text":"",
                                                "quantity":"",
                                                "isFree":false,
                                                "price":""})


  const [amenitiesArray, setAmenitiesArray] = useState(amenities)

  const _customOptions = ctx.custom;
  const _standardOptions = ctx.standardAmenities;
  const _customAmenities = ctx.customAmenities;

  useEffect(() => {
    let catUrl =
      process.env.REACT_APP_API_URL + "/venues/meta/standard-amenities";
    Axios.get(catUrl).then((response) => {
      setOptions(response.data);
    });
  }, []);

  const handleShowForm = (show = true) => {
    setShowForm(show);
  };

  // updtate default Amenities
  const handleUpdateData = (evt) => {
    const name = evt.currentTarget.name;
    const checked = evt.currentTarget.checked;
    if (checked) {
      let copy = [];
      if (_standardOptions && _standardOptions.length) {
        copy = [..._standardOptions, { id: name }];
      } else {
        copy = [{ id: name }];
      }
      updateFormData("standardAmenities", null, copy);
    } else {
      if (_standardOptions && _standardOptions.length) {
        const copyArr = _standardOptions.filter((el) => el.id !== name);
        updateFormData("standardAmenities", null, copyArr);
      }
    }
  };

  // update custom Amenities
  const handleUpdateDataCustom = (evt) => {
    const name = evt.currentTarget.name;
    const checked = evt.currentTarget.checked;
    if (checked) {
      let copy = [];
      if (_customAmenities && _customAmenities.length) {
        copy = [..._customAmenities, { id: name }];
      } else {
        copy = [{ id: name }];
      }
      updateFormData("customAmenities", null, copy);
    } else {
      if (_customAmenities && _customAmenities.length) {
        const copyArr = _customAmenities.filter((el) => el.id !== name);
        updateFormData("customAmenities", null, copyArr);
      }
    }
  };

  // add custom Amenity
  const handleNewAmenity = () => {
      let amenArray = amenitiesArray

      let category = typeof newAmenity.category === 'object'? newAmenity.category.name: JSON.parse(newAmenity.category).name

      let newItem = {...newAmenity,"isFree":String(newAmenity.isFree)}
      for (let i=0; i < amenArray.length; i++){
        console.log(amenArray[i].category, category)
          if(amenArray[i].category===category){
            delete newItem.category
            amenArray[i].amenities.push(newItem)
            setAmenitiesArray(amenArray)
          }

          console.log(amenArray)
      }
      let newArray = amenArray.concat(newAmenity)
      setNewAmenity({"name":"",
                     "category":amenityCategories[0],
                     "text":"",
                     "quantity":"",
                     "isFree":false,
                     "price":""})

      setShowForm(false)
    /*let url = process.env.REACT_APP_API_URL + "/venues/meta/custom-amenities";
    setLoading(true);
    Axios.post(url, paramsObj).then((response) => {
      setLoading(false);
      if (response.data.actionResult === "SUCCESS") {
        const data = response.data.customAmenity;
        const newAmenity = {
          id: data.id,
          name: data.name,
          checked: false,
        };
        const copy = [...ctx.custom, newAmenity];
        updateFormData("custom", null, copy);
      }
    });*/
  };


  return (
    <React.Fragment>
      <h4 style={{marginTop:"0"}}>
        <span>Select available amenities or </span>&nbsp;
        <button onClick={() => handleShowForm(true)} className="btn p-0 m-0">
          +Add custom amenity
        </button>
      </h4>
      <div className="section-amenities">

        {showForm && (
          <div style={{marginBottom:"15px"}}>
            <div className="custom-amenity" ref={formRef}>
              <h4>Add Custom Amenity</h4>

              <ComboCategories
                  name="category"
                  options={amenityCategories}
                  onChange={e=>setNewAmenity({...newAmenity,"category":e.target.value})}
                />
              <TextInput
                name="name"
                label="Service/Amenity Name"
                placeholder="E.g. High Speed WiFi"
                value={newAmenity.name}
                onChange={e=>setNewAmenity({...newAmenity,"name":e.target.value})}
              />
              <TextareaInput
                name="description"
                label="Description"
                placeholder="E.g. Coffee/Tea/Filtered Water"
                value={newAmenity.text}
                onChange={e=>setNewAmenity({...newAmenity,"text":e.target.value})}
              />
              <TextInput
                style={{paddingTop:"0 !important"}}
                name="quantityAvailable"
                label="Quantity Available"
                placeholder="E.g. 2"
                value={newAmenity.quantity}
                onChange={e=>setNewAmenity({...newAmenity,"quantity":e.target.value})}
              />
            <div className="customAmenity-checkbox">
              <input type="checkbox"
                     name="customAmenity"
                     checked={newAmenity.isFree}
                     onChange={()=>setNewAmenity({...newAmenity,"isFree":!newAmenity.isFree,"price":""})}/>
              <label htmlFor="customAmenity">This amenity is free</label>
            </div>
              {newAmenity.isFree!==true && <div>
                <TextInput
                  name="name"
                  label="Price"
                  placeholder="INR"
                  value={newAmenity.price}
                  onChange={e=>setNewAmenity({...newAmenity,"price":e.target.value})}
                />
              </div>}


              <p className="text-right">
                <button
                  onClick={() => handleShowForm(false)}
                  className="btn btn-cancel"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleNewAmenity()}
                  className="btn btn-save"
                >
                  Save
                </button>
              </p>
            </div>
          </div>
        )}

        {amenitiesArray.map(amenityCat=>(
          <div className="section-amenity" ley={amenityCat.category}>
              <h3>{amenityCat.category}</h3>
              <div className="section-amenity-items">
                  {amenityCat.amenities.map(amenity=>(
                      <SingleAmenity key={amenity.name}
                                     name={amenity.name}
                                     isFree={amenity.isFree}
                                     quantity={amenity.quantity}
                                     text={amenity.text}/>
                  ))}
              </div>
          </div>
        ))}
        
      </div>
      <FullPageLoader loading={loading} />
    </React.Fragment>
  );
}

export default Amenities;
