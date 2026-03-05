import React, { Component } from 'react';

export default class Success extends Component {
  render() {
    const { msg } = this.props;
    return (
      <div className="step step6">
        <div className="row">
          <form id="Form" className="form-horizontal">
            <div className="form-group">
              <label className="col-md-12 control-label">
                    <div>
                      <h1>{ msg }</h1>
                    </div>
              </label>
              </div>
          </form>
        </div>
      </div>
    )
  }
}