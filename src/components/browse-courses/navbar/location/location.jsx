import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
 import './location.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, Input } from 'semantic-ui-react'
import response from '../JSONdetails.js';
import {useSelector, useDispatch} from 'react-redux';
import Select from 'react-select';
import {
  setLocation,
} from "../../../../redux/browse-courses/browse-courses-actions.js";

const Location = props => {
  const dispatch= useDispatch()
  const location = useSelector(state=> state.browseCourses.location)
  const history= useHistory()
  const [options,setOptions] =useState([{"key":"001","value":"all","label":"All locations","latitude":"","longitude":""},
                                         props.myLocationDetails])

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

  const handleClickLocation = value =>{
        if(value.value==="getLocation"){
             // If this is true, then we already got user location, so we wont call same API again
            if(props.isMyLocation){
              let obj={latitude:props.myLocationDetails.latitude,
                       longitude:props.myLocationDetails.longitude,
                       city:{key:"0011",
                             label:props.myLocationDetails.city.label,
                             value:props.myLocationDetails.city.value}
                       }
              dispatch(setLocation(obj))
            }
            else{
              getLocation()
            }
        }
        else{
        let location = {latitude:value.latitude,longitude:value.longitude,city:value}
        dispatch(setLocation(location))
      }
  }

  function getLocation() {
    console.log("called")
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  // This is callback for success navigator.geolocatio
  async function showPosition(position){
        //This is reverse geocoding API that gives us city name based on lat and long...
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}
               &result_type=locality&key=AIzaSyBkfAKJiMMAmrx5UGVqXjL1aYGWrWO0gDk`
      const apiResponse = await fetch(url,{
        method: 'GET'
       });
      const result= await apiResponse.json();

      let myCityName;    // Here we filter results we got from reverse geocoding api to get city name
      for(let i= 0; i< result.results.length; i++){
        let newResult = result.results[i].address_components.filter(address=>
                        address.types.includes('locality'))
        if(newResult.length > 0){
          myCityName=newResult[0].long_name
          break;
        }
      }
        let object;
        props.handleIsMyLocation(true)
        props.handleMyLocationDetails({"key":"0011","value":myCityName,"label":myCityName,"latitude":position.coords.latitude,"longitude":position.coords.longitude})
        // Here we check is our location city already in city list dropdown, if true it will return new array with one object containing that city from dropdown
        let isLocationMatch = response.location.filter(city=>myCityName===city.value)

        if(isLocationMatch.length > 0){
           object={latitude:isLocationMatch[0].latitude,longitude:isLocationMatch[0].longitude, city:{key:isLocationMatch[0].key,
                                                                                                      label:isLocationMatch[0].label,
                                                                                                      value:isLocationMatch[0].value}}
            dispatch(setLocation(object))
            setOptions([{"key":"001","value":"all","label":"All locations","latitude":"","longitude":""}])
        }
        else{
           object={latitude:position.coords.latitude,longitude:position.coords.longitude, city:{key:"0011",
                                                                                                label:myCityName,
                                                                                                value:myCityName}}
          dispatch(setLocation(object))
          setOptions([{"key":"001","value":"all","label":"All locations","latitude":"","longitude":""},
                      {"key":"0011","value":myCityName,"label":myCityName,"latitude":position.coords.latitude,"longitude":position.coords.longitude}])
        }

  }

  useEffect(()=>{
    handleClickLocation(props.myLocationDetails)
  },[1])

  return(
                      <Select
                          id="responsiveLocation"
                          className="select-location"
                          styles={customStyles}
                          options={options.concat(response.location)}
                          defaultValue={options[0]}
                          value={location.city}
                          onChange={handleClickLocation}
                          search
                          isDisabled={props.venueType==="ONSITE"?false:true}
                            />
);}

export default Location;
