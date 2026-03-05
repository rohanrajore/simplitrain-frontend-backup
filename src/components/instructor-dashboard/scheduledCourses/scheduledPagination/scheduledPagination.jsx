import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./scheduledPagination.css";
import ReactPaginate from "react-paginate";
import ScheduledCourse from "../scheduledCourse/scheduledCourse.jsx";
import getScheduledCourses from "../getScheduledCourses.js";
// MOST CSS IS USED FROM pagination.css WHICH IS HELD IN courses/pagination folder.
const ScheduledPagination = (props) => {
  const [scheduledCourses, setScheduledCourses] = useState([]);
  const [count, setCount] = useState();

  useEffect(() => {
    async function setup() {
      let courses = await getScheduledCourses(
        props.search,
        props.sort,
        props.filter,
        props.coursesPerPage,
        props.offset,
        props.courseID,
        props.currentUser
      );
      let numberOfPages =
        courses.courseBatchBriefDetailsForDashboardList !== undefined
          ? await courses.courseBatchBriefDetailsForDashboardList.totalPages
          : 0;
      setScheduledCourses(
        courses.courseBatchBriefDetailsForDashboardList !== undefined
          ? courses.courseBatchBriefDetailsForDashboardList.content
          : []
      );
      setCount(numberOfPages);
    }
    setup();
  }, [
    props.offset,
    props.search,
    props.filter,
    props.sort,
    props.courseID,
    props.coursesPerPage,
  ]);

  const handlePageClick = (e) => {
    props.updateOffset(e.selected * props.coursesPerPage);
    //console.log(e.selected*props.coursesPerPage)
  };
  return (
    <div id="react-paginate">
      {scheduledCourses.map((scheduled) => (
        <ScheduledCourse
          key={scheduled.courseBatchID}
          id={scheduled.courseBatchID}
          img={scheduled.thumbnailImageURL}
          title={scheduled.title}
          status={scheduled.courseBatchProgressStatus}
          enrollments={scheduled.enrollmentCount}
          feedback={scheduled.feedback}
          schedule={scheduled.courseBatchProgress}
          location={scheduled.address}
          startDate={scheduled.startDate}
          endDate={scheduled.endDate}
          durationInDays={scheduled.courseDurationInDays}
          price={scheduled.price}
        />
      ))}

      {count > 1 ? (
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={count}
          onPageChange={handlePageClick}
          pageClassName={"pagination-li"}
          pageLinkClassName={"pagination-link"}
          previousLinkClassName={"pagination-link"}
          nextLinkClassName={"pagination-link"}
          activeLinkClassName={"pagination-active"}
          containerClassName={"pagination-container"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          forcePage={props.rerender === true ? 0 : ""}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(ScheduledPagination);
