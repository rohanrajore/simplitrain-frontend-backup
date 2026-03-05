import React, { Component } from "react";
import DatePicker from "react-date-picker";

class DatePickerComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      dateVal: this.props.value || new Date(),
    };
  }

  onChange = (value) => {
    this.setState({
      dateVal: value,
    });
  };

  render() {
    return (
      <div className="st-date-picker">
        <input
          type="text"
          style={{ display: "none" }}
          ref="st-date-picker-value"
          value={this.state.dateVal}
          className="st-date-picker-input"
          id={this.props.inputId}
        />
        <DatePicker
          calendarAriaLabel="Toggle calendar"
          clearAriaLabel="Clear value"
          dayAriaLabel="Day"
          monthAriaLabel="Month"
          nativeInputAriaLabel="Date"
          onChange={this.onChange}
          value={this.state.dateVal}
          yearAriaLabel="Year"
          id={this.props.datePickerId}
          minDate={new Date()}
          format="dd MMM yyyy"
          ref={this.myRef}
        />
      </div>
    );
  }
}

export default DatePickerComponent;
