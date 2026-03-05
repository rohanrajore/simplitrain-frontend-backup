import React, {useState} from "react";
import "./leftFilters.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import RangeSlider from "./rangeSlider/rangeSlider.jsx";
import AverageCustomerReview from "./avgCustomerReview/avgCustomerReview.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  setTrainingStartDate,
  setLevels,
  setCourseDate,
  setVenueType,
  setLocation,
} from "../../../redux/browse-courses/browse-courses-actions.js";
import { LeftFiltersContainer } from "./leftFilter.style";
import Location from "../navbar/location/location.jsx";

const LeftFilters = (props) => {
  const trainingStartDate = useSelector(
    (state) => state.browseCourses.trainingStartDate
  );
  const levels = useSelector((state) => state.browseCourses.levels);
  const venueType = useSelector((state) => state.browseCourses.venueType);
  const location = useSelector((state) => state.browseCourses.location);
  const dispatch = useDispatch();

  const [isMyLocation, setIsMyLocation] = useState(false);
  const [myLocationDetails, setMyLocationDetails] = useState({
    key: "0011",
    value: "getLocation",
    label: "Get My Location",
    latitude: "",
    longitude: "",
  });

  const handleMyLocationDetails = (arg) => setMyLocationDetails(arg);
  const handleIsMyLocation = (arg) => setIsMyLocation(arg);

  const trainingDateHandler = (e) => {
    dispatch(setTrainingStartDate(e.target.value));
    dispatch(setCourseDate("", ""));
  };

  const venueTypeHandler = (e) => {
    // This will handle venueType /location conflict
    dispatch(setVenueType(e.target.value));
    if (e.target.value !== "ONSITE") {
      let obj = {
        latitude: "",
        longitude: "",
        city: { key: "001", label: "All locations", value: "all" },
      };
      dispatch(setLocation(obj));
    }
  };

  return (
    <LeftFiltersContainer>
      {/*VENUE TYPE*/}
      <Accordion
        style={{ background: "#f5f5f580", color: "#818487" }}
        key="idVenueType"
        defaultExpanded={true}
      >
        <AccordionSummary
          expandIcon={
            <FontAwesomeIcon
              icon={faAngleUp}
              className="accordion-head"
              style={{ fontSize: "11px" }}
              size="1x"
            />
          }
          aria-controls="id"
          id="id"
        >
          <Typography className="accordion-title">
            {" "}
            <b>Training Mode</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>

          <Typography
            key="onlineVenue"
            component={"span"}
            className="typo-start-date"
          >
            <input
              type="radio"
              name="venueType"
              id="onlineVenue"
              value="ONLINE"
              checked={venueType === "ONLINE"}
              onChange={venueTypeHandler}
            />
            <label for="onlineVenue"> Online </label>
          </Typography>
          <Typography
            key="onsiteVenue"
            component={"span"}
            className="typo-start-date"
          >
            <input
              type="radio"
              name="venueType"
              id="onsiteVenue"
              value="ONSITE"
              checked={venueType === "ONSITE"}
              onChange={venueTypeHandler}
            />
            <label for="onsiteVenue"> Classroom</label>
          </Typography>

          <Typography
            key="onsiteVenue-location"
            component={"span"}
            className="typo-start-date"
          >
          <Location
            isMyLocation={isMyLocation}
            handleIsMyLocation={handleIsMyLocation}
            myLocationDetails={myLocationDetails}
            handleMyLocationDetails={handleMyLocationDetails}
            venueType={venueType}
          />
          </Typography>


        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{ background: "#f5f5f580", color: "#818487" }}
        key="idTrainingStart"
        className="noBottomBorder"
        defaultExpanded={true}
      >
        {/* Training start date*/}
        <AccordionSummary
          expandIcon={
            <FontAwesomeIcon
              icon={faAngleUp}
              style={{ fontSize: "11px" }}
              size="1x"
            />
          }
          aria-controls="id"
          className="accordion-head"
          id="id"
        >
          <Typography className="accordion-title">
            {" "}
            <b>Training start date</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            key="thisWeek"
            component={"span"}
            className="typo-start-date"
          >
            <input
              type="radio"
              name="trainingStartDate"
              id="thisWeek"
              value="THIS_WEEK"
              checked={trainingStartDate === "THIS_WEEK"}
              onChange={trainingDateHandler}
            />
            <label htmlFor="thisWeek"> This Week</label>
          </Typography>
          <Typography
            key="nextWeek"
            component={"span"}
            className="typo-start-date"
          >
            <input
              type="radio"
              name="trainingStartDate"
              id="nextWeek"
              value="NEXT_WEEK"
              checked={trainingStartDate === "NEXT_WEEK"}
              onChange={trainingDateHandler}
            />
            <label htmlFor="nextWeek"> Next Week</label>
          </Typography>
          <Typography
            key="thisMonth"
            component={"span"}
            className="typo-start-date"
          >
            <input
              type="radio"
              name="trainingStartDate"
              id="thisMonth"
              value="THIS_MONTH"
              checked={trainingStartDate === "THIS_MONTH"}
              onChange={trainingDateHandler}
            />
            <label htmlFor="thisMonth"> This Month</label>
          </Typography>
          <Typography
            key="next3Months"
            component={"span"}
            className="typo-start-date"
          >
            <input
              type="radio"
              name="trainingStartDate"
              id="next3Months"
              value="NEXT_THREE_MONTHS"
              checked={trainingStartDate === "NEXT_THREE_MONTHS"}
              onChange={trainingDateHandler}
            />
            <label htmlFor="next3Months"> Next 3 Months</label>
          </Typography>
          <Typography
            key="allTime"
            component={"span"}
            className="typo-start-date"
          >
            <input
              type="radio"
              name="trainingStartDate"
              id="allTime"
              value="ALL_TIME"
              checked={trainingStartDate === "ALL_TIME"}
              onChange={trainingDateHandler}
            />
            <label htmlFor="allTime"> All Time</label>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Price*/}
      <Accordion
        style={{ background: "#f5f5f580", color: "#818487" }}
        key="idPrice"
        defaultExpanded={true}
      >
        {/* Price Content */}
        <AccordionSummary
          expandIcon={
            <FontAwesomeIcon
              icon={faAngleUp}
              className="accordion-head"
              style={{ fontSize: "11px" }}
              size="1x"
            />
          }
          aria-controls="id"
          id="id"
        >
          <Typography className="accordion-title">
            {" "}
            <b>Price</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            key="rangeSlider"
            component={"span"}
            className="typo-start-date"
            style={{ marginTop: 30 }}
          >
            <RangeSlider maxPrice={props.maxPrice} />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        style={{ background: "#f5f5f580", color: "#818487" }}
        key="idLevels"
        defaultExpanded={true}
      >
        {/* Levels*/}
        <AccordionSummary
          expandIcon={
            <FontAwesomeIcon
              icon={faAngleUp}
              style={{ fontSize: "11px" }}
              size="1x"
            />
          }
          aria-controls="id"
          className="accordion-head"
          id="id"
        >
          <Typography className="accordion-title">
            {" "}
            <b>Levels</b>
          </Typography>
        </AccordionSummary>
        {/*Levels content*/}
        <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            key="allLevels"
            component={"span"}
            className="typo-start-date"
          >
            <input
              type="radio"
              name="levels"
              id="allLevels"
              value="ALL"
              checked={levels === "ALL"}
              onChange={() => dispatch(setLevels("ALL"))}
            />
            <label htmlFor="allLevels"> All levels</label>
          </Typography>
          <Typography
            key="Beginner"
            component={"span"}
            className="typo-start-date"
          >
            <input
              type="radio"
              name="levels"
              id="beginner"
              value="BEGINNER"
              checked={levels === "BEGINNER"}
              onChange={() => dispatch(setLevels("BEGINNER"))}
            />
            <label htmlFor="beginner"> Beginner</label>
          </Typography>
          <Typography
            key="Intermediate"
            component={"span"}
            className="typo-start-date"
          >
            <input
              type="radio"
              name="levels"
              id="intermediate"
              value="INTERMEDIATE"
              checked={levels === "INTERMEDIATE"}
              onChange={() => dispatch(setLevels("INTERMEDIATE"))}
            />
            <label htmlFor="intermediate"> Intermediate</label>
          </Typography>
          <Typography
            key="Advanced"
            component={"span"}
            className="typo-start-date"
          >
            <input
              type="radio"
              name="levels"
              id="advanced"
              value="ADVANCED"
              checked={levels === "ADVANCED"}
              onChange={() => dispatch(setLevels("ADVANCED"))}
            />
            <label htmlFor="advanced"> Advanced</label>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Average Customer Review*/}
      <Accordion
        style={{ background: "#f5f5f580", color: "#818487" }}
        key="idAvgCustomReview"
        defaultExpanded={true}
      >
        {/* Average Customer Review Content */}
        <AccordionSummary
          expandIcon={
            <FontAwesomeIcon
              icon={faAngleUp}
              style={{ fontSize: "11px" }}
              size="1x"
            />
          }
          aria-controls="id"
          className="accordion-head"
          id="id"
        >
          <Typography className="accordion-title">
            {" "}
            <b>Average Customer Review</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            key="avgCustomerReview"
            component={"span"}
            className="typo-start-date"
          >
            <AverageCustomerReview />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </LeftFiltersContainer>
  );
};

export default LeftFilters;
