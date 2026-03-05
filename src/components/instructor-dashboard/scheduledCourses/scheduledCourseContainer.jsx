import React, { useEffect, useState } from "react";
import "./scheduledCourseContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScheduledPagination from "./scheduledPagination/scheduledPagination.jsx";

const ScheduledCourseContainer = (props) => {
  //const response= responseAllCourses
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("START_DATE_DESCENDING");
  const [offset, setOffset] = useState(0);
  const [coursesPerPage, setCoursesPerPage] = useState(10);
  const [courseName, setCourseName] = useState(props.courseName);
  // This will rerender PAGINATE component when we change something(filter, sort, search, pageSize), and will put it back to first page with new results from server
  const [rerender, setRerender] = useState(false);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    setRerender(false);
    setOffset(0);
  };
  const updateFilter = (e) => {
    setFilter(e.target.value);
    setRerender(false);
    setOffset(0);
  };
  const updateSort = (e) => {
    setSort(e.target.value);
    setRerender(false);
    setOffset(0);
  };
  const updateCourseName = () => {
    setCourseName("");
    setRerender(false);
    setOffset(0);
  };
  const updateOffset = (arg) => setOffset(arg);
  const updateRerender = () => setRerender(false);
  const updateCoursesPerPage = (e) => {
    setCoursesPerPage(e.target.value);
    setRerender(false);
    setOffset(0);
  };

  const handleCloseButton = (e) => {
    props.updateCourseName("");
    props.updateCourseID("")
    updateCourseName();
  };

  useEffect(() => {
    setRerender(true);
    props.schedulePathHandler();
  }, [search, filter, sort, coursesPerPage, courseName]);

  return (
    <div className="courses-container">
      <div className="scheduled-search-container">
        <div className="scheduled-search">
          <FontAwesomeIcon
            icon="search"
            style={{ color: "#018cb0", width: "10%" }}
          />
          <input
            type="text"
            placeholder="Search for Courses"
            onChange={updateSearch}
            value={search}
          />
        </div>
        <div className="scheduled-search">
          <FontAwesomeIcon
            icon="filter"
            style={{ color: "#018cb0", width: "10%" }}
          />
          <select id="filter" onChange={updateFilter}>
            <option value="all">All filters</option>
            <option value="upcoming">UPCOMING</option>
            <option value="in progress">IN PROGRESS</option>
            <option value="completed">COMPLETED</option>
          </select>
        </div>
        <div className="scheduled-search" onChange={updateSort}>
          <label>Sort by:</label>
          <select id="sort">
            <option value="START_DATE_DESCENDING">Date (Desc)</option>
            <option value="START_DATE_ASCENDING">Date (Asc)</option>
            <option value="TITLE_DESCENDING">Title (Desc)</option>
            <option value="TITLE_ASCENDING">Title (Asc)</option>
          </select>
        </div>
        <div className="scheduled-search" onChange={updateCoursesPerPage}>
          <label>Display courses:</label>
          <select id="sort">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>

        {props.courseName !== "" ? (
          <div className="scheduled-search" style={{ width: "auto" }}>
            <div value={courseName}>{props.courseName}</div>
            <div className="close" onClick={handleCloseButton}>
              {" "}
              <b>X</b>{" "}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="content">
        <ScheduledPagination
          coursesPerPage={coursesPerPage}
          search={search}
          filter={filter}
          courseName={props.courseName}
          courseID={props.courseID}
          sort={sort}
          offset={offset}
          updateOffset={updateOffset}
          rerender={rerender}
          updateRerender={updateRerender}
        />
      </div>
    </div>
  );
};

export default ScheduledCourseContainer;
