import React, { useState } from "react";

import VenueWizard from "./VenueWizard";
import Amenities from "./sections/amenities";
import Availability from "./sections/availability";
import Details from "./sections/details";
import GuestRules from "./sections/guest";
import Location from "./sections/location";
import Photos from "./sections/photos";
import Pricing from "./sections/pricing";
import Scheduling from "./sections/scheduling";
import PreviewPage from "./previewPage/previewPage.jsx";
import "./assets/venuewizard.css";
import "./assets/form.css";
import FullPageLoader from "../../common/fullpage-loader/FullPageLoader";
import { useHistory } from "react-router-dom";
import Axios from "axios";

function VenueWizardContainer({
  formData,
  currentUser,
  updateFormData,
  updateFormDataMulti,
  handleSaveData,
}) {
  const dataProps = {
    formData,
    currentUser,
    updateFormData,
    updateFormDataMulti,
  };

  const [loading, setLoading] = useState(false);
  const history = useHistory();
  // handle Data Submit
  const handleSubmit = () => {
    setLoading(true);
    let url = process.env.REACT_APP_API_URL + "/venues";
    formData["type"] = "public";
    formData["venuePricing"]["coupons"] = formData["venuePricing"][
      "coupons"
    ].map((coupon) => {
      coupon.couponValidFrom = Date.parse(coupon.couponValidFrom);
      coupon.couponValidUntil = Date.parse(coupon.couponValidUntil);
    });
    Axios.post(url, formData).then((postRes) => {
      setLoading(false);
      if (postRes.data.actionResult === "SUCCESS") {
        history.push("/instructor-dashboard/courses");
      }
    });
  };

  const [previewPage, setPreviewPage] = useState(false);
  const handlePreviewPage = () => setPreviewPage(!previewPage);

  return (
    <React.Fragment>
      <div className="venuewizard-container">
        <header>
          <div>
            <h2>List Your Venue</h2>
            <h5>And share your space</h5>
          </div>
        </header>
        {previewPage === false ? (
          <div className="venuewizard-placeholder">
            <VenueWizard
              title="List Venue"
              startAt={0}
              formData={formData}
              onSaveAndExit={handleSaveData}
              handlePreviewPage={handlePreviewPage}
            >
              <Location title="Location" {...dataProps} />
              <Details title="Details" {...dataProps} />
              <Pricing title="Pricing" {...dataProps} />
              <Amenities title="Amenities" {...dataProps} />
              <Photos title="Photos" {...dataProps} />
              <Scheduling title="Scheduling" {...dataProps} />
              <Availability title="Availability" {...dataProps} />
              <GuestRules
                title="Guest Rules and T&C"
                onSubmit={handleSubmit}
                {...dataProps}
              />
            </VenueWizard>
          </div>
        ) : (
          <PreviewPage
            handlePreviewPage={handlePreviewPage}
            formData={formData}
          />
        )}
        <footer></footer>
      </div>
      <FullPageLoader loading={loading} />
    </React.Fragment>
  );
}

export default VenueWizardContainer;
