import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './landingVenueWizard.css';

const LandingVenueWizard = props => {

    const [ownerChecked, setOwnerChecked] = useState("first")
    const [rentChecked, setRentChecked] = useState("first")

  return(
  <div className="landing-venue-wizard-container">
    <header>
      <div className="landing-venue-header-title">
        <h2>List Your Venue</h2>
        <h4>And share your space</h4>
      </div>
    </header>

    <section className="landing-venue-wizard-section">
        <div className="landing-venue-title">
            <h2>Before you start with the registration</h2>
            <h4>Please select the most appropriate option below</h4>
        </div>

        <div className="landing-venue-radio">
          <div className="landing-venue-radio-one" onClick={()=> setOwnerChecked("first")}>
             <input type="radio" name="venue-wizard-owner" checked={ownerChecked==="first"}/>
             <label>I own the place</label>
          </div>
          <div className="landing-venue-radio-one" onClick={()=> setOwnerChecked("second")}>
            <input type="radio" name="venue-wizard-owner" checked={ownerChecked==="second"}/>
            <label>I have rented the Place</label>
          </div>
        </div>


       {ownerChecked ==="first" && <React.Fragment>
              <div className="landing-venue-title" style={{marginTop:0}}>
                  <h4>Want to rent it to other instructors?</h4>
              </div>

              <div className="landing-venue-radio">
                <div className="landing-venue-radio-one" onClick={()=> setRentChecked("first")}>
                   <input type="radio" name="venue-wizard-rent" checked={rentChecked==="first"}/>
                   <label>I would like to offer it to other instructors</label>
                </div>
                <div className="landing-venue-radio-one" onClick={()=> setRentChecked("second")}>
                  <input type="radio" name="venue-wizard-rent" checked={rentChecked==="second"}/>
                  <label>I do not want to list this place for other instructors</label>
                </div>
              </div>
        </React.Fragment>}

        <div className="landing-venue-buttons">
          <div  className="landing-venue-btn landing-venue-btn-first">Cancel</div>
          <Link className="landing-venue-btn landing-venue-btn-second"
                to={(rentChecked==="first" && ownerChecked==="first")?
                                    "/instructor/public-venue-wizard":
                                    "/instructor/private-venue-wizard"}>Next
          </Link>
        </div>
    </section>

    <footer>
    </footer>
  </div>
);}

export default LandingVenueWizard;
