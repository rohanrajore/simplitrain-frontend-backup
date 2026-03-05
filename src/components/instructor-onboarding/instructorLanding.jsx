import React, {Component} from "react";

class InstructorLanding extends Component {
    cancelOnBoarding = () => {
        this.props.history.push("/instructor-dasboard/courses");
    };

    startOnboarding = () => {
        this.props.history.push("/instructor/onboarding");
    };

    render() {
        return (
            <form>
                <div className="input-group mt-3">
                    <fieldset className="form-group border p-2 with-full-width">
                        <p>Landing page instructions</p>
                    </fieldset>
                </div>
                <div className="form-footer">
                    <button
                        className="btn -default pull-left"
                        onClick={this.cancelOnBoarding}
                    >
                        Cancel
                    </button>
                    <div className="pull-right">
                        <button
                            className="btn -primary"
                            onClick={this.startOnboarding}
                        >
                            Start
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default InstructorLanding;
