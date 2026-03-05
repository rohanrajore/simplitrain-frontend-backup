import React from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';

const NavigationBlocker = props => {
  if (props.navigationBlocked) {
    window.onbeforeunload = () => true
  } else {
    window.onbeforeunload = null
  }
  return (
    <Prompt
      when={props.navigationBlocked}
      message="You havn't saved any content. Do you still want to leave page?"
    />
  )
}

NavigationBlocker.propTypes = {
  navigationBlocked: PropTypes.bool.isRequired,
}
export default NavigationBlocker;
