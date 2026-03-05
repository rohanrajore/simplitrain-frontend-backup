import React from 'react';

const ErrorComponent = props => (
  <div className="text-danger">
    <small>{props.title}</small>
  </div>
);

export default ErrorComponent;
