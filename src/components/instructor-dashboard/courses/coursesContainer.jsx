import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
//import "./coursesContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "./pagination/pagination.jsx";
import fetchCourses from "./fetchCourses.js";
import FullPageLoader from "../../../common/fullpage-loader/FullPageLoader";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Select from 'react-select';
import { CoursesStyleContainer } from "../courses/coursesContainer.style";

const CoursesContainer = (props) => {

  const coursesOptions =[{"key":"001","value":"10","label":"10 Courses"},
                             {"key":"002","value":"20","label":"20 Courses"},
                             {"key":"003","value":"50","label":"50 Courses"}]

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("")
  const [tempSearch, setTempSearch] = useState("")
  const [coursesPerPage, setCoursesPerPage] = useState(coursesOptions[0]);
  const [fetchedCourses, setFetchedCourses] = useState([]);

  const history = useHistory("");

  const updateSearch = (e) => setSearch(e.target.value);

  const updateCoursesPerPage = (value) => {
    if (value < 1) setCoursesPerPage(1);
    else if (value > 20) setCoursesPerPage(20);
    else setCoursesPerPage(value);
  };

  useLayoutEffect(() => {
    async function fetchData() {
      const responseAllCourses = await fetchCourses(props.currentUser.id);
      console.log(responseAllCourses)
      await setFetchedCourses(responseAllCourses);
      setLoading(false);
      props.coursePathHandler();
    }
    setLoading(true);
    fetchData();
  }, [1]);

  const handleKeyDown = e =>{
     if (e.key === 'Enter') {
     setSearch(tempSearch)
      }
  }

  const customStyles = {
  dropdownIndicator: () => ({
    cursor:"pointer",
  }),
  option: (provided, state) => ({
    ...provided,
    cursor:"pointer"
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    cursor:"pointer"
  }),
}

  return (
    <CoursesStyleContainer>
    <div className="courses-container">

      <div className="insDash-myCourses-title" style={{position:'relative'}}>My Courses
        <div
          className="button"
          onClick={() => history.push("/instructor/create-course")}
          style={{position:'absolute',right:'0px',top:'-25px'}}
        >
          New Course
        </div>
      </div>

      <div className="search-container">

        <div>
          <input type="text"
                 placeholder="Search for Courses"
                 value={tempSearch}
                 onChange={(e)=>setTempSearch(e.target.value)}
                 onKeyDown={handleKeyDown}/>

          <div className="myCourses-searchIcon" onClick={()=>setSearch(tempSearch)} >
            <FontAwesomeIcon icon="search"/>
          </div>
        </div>

        <Select
              className="select-location"
              styles={customStyles}
              options={coursesOptions}
              defaultValue={coursesOptions[0]}
              value={coursesPerPage}
              onChange={updateCoursesPerPage}
                />

      </div>

      <div className="content">
        {fetchedCourses !== null && fetchedCourses.length > 0 ? (
          <Pagination
            updateCourseName={props.updateCourseName}
            updateCourseID={props.updateCourseID}
            courses={fetchedCourses}
            search={search}
            coursesPerPage={coursesPerPage.value}
            activeTab={props.activeTab}
            setActiveTab={props.setActiveTab}
          />
        ) : (
          <div className="no-content">
            You do not have any courses currently in your dashboard. You can
            start with creating a{" "}
            <a
              href="javascript:void(0)"
              onClick={(e) => {
                e.preventDefault();
                history.push("/instructor/create-course");
              }}
            >
              New Course
            </a>{" "}
            .
          </div>
        )}
      </div>
      <FullPageLoader loading={loading} />
    </div>
    </CoursesStyleContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(CoursesContainer);
