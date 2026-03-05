/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Component } from "react";

class ComboBox extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  onChange = (e, values) => {
    e.preventDefault();

    var inputEl = this.refs["combo-value"];
    if (values) {
      inputEl.value = values.name || "";
      inputEl.setAttribute("objSelected", JSON.stringify(values));

      if (this.props.onChange) {
        this.props.onChange(e, values);
      }
    }
  };

  render() {
    const val = (this.props.defaultValue || {}).name || "";
    return (
      <div className="st-combo-box">
        <input
          type="text"
          style={{ display: "none" }}
          ref="combo-value"
          value={val}
          className="combo-box-input"
        />
        <Autocomplete
          id={this.props.id}
          options={this.props.optionsList}
          freeSolo={this.props.isFreeSolo}
          disableClearable={this.props.isClearable}
          getOptionLabel={(option) => option.name}
          style={{ width: '100%'}}
          className="Autocomplete"
          renderInput={(params) => (
            <TextField
              {...params}
              // placeholder="select option"
              // label={this.props.label || ""}
              variant="outlined"
            />
          )}
          onChange={this.onChange}
          defaultValue={this.props.defaultValue}
          ref={this.myRef}
        />
      </div>
    );
  }
}

export default ComboBox;
