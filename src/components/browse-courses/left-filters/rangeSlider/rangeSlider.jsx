import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {useSelector, useDispatch} from 'react-redux';
import {setPriceRange} from '../../../../redux/browse-courses/browse-courses-actions.js';
import { RangeSliderCard } from '../leftFilter.style.jsx';

const RangeSlider = props => {
  const afOpen = props.allFiltersOpen
  const rangePrice = useSelector(state => state.browseCourses.rangePrice);
  const dispatch =useDispatch()

 // Here we manage if all filters are open, then Price Range will be stored in local state, and if clicked on apply, then it will store it in global store.
 // Otherwise price range in global store wont be changed.
  const handleAFClosedChange = (event, newValue) => {
    dispatch(setPriceRange(newValue))
  };
  const handleAFOpenChange = (event, newValue) =>{
    props.handleSetPriceRange(newValue)
  }

  return(
    <RangeSliderCard>
      <Slider
        min={0}
        max={props.maxPrice}
        step={100}
        color="#2D9CDB"
        value={afOpen===true? props.priceRangeState: rangePrice}
        onChange={afOpen===true? handleAFOpenChange: handleAFClosedChange}
        valueLabelDisplay="on"
      />
    </RangeSliderCard>
);}

export default RangeSlider;
