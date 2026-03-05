import React, { useState, useEffect } from "react";
//import "./pagination.css";
import ReactPaginate from "react-paginate";
import Course from "../course/course.jsx";
import { PaginationContainer } from "../pagination/pagination.style";

const Pagination = (props) => {
  // This will be all courses responded from API
  const [allCourses, setAllCourses] = useState([]);
  // From this array we will perform pagination, it will contain either all courses, all filtered courses with search
  const [coursesArray, setCoursesArray] = useState([]);
  // This will be courses on one page of our pagination
  const [currentCourses, setCurrentCourses] = useState([]);
  const [count, setCount] = useState(
    props.courses !== undefined
      ? props.courses.length / props.coursesPerPage
      : 1
  );

  useEffect(() => {
    setAllCourses(props.courses);
    if (props.search.length >= 2) {
      const timer = setTimeout(() => filterCourses(props.search), 1000);
      return () => clearTimeout(timer);
    } else {
      setCoursesArray(props.courses);
      setCurrentCourses(
        props.courses !== undefined
          ? props.courses.slice(0, props.coursesPerPage)
          : []
      );
      setCount(
        props.courses !== undefined
          ? props.courses.length / props.coursesPerPage
          : 1
      );
    }
  }, [props.coursesPerPage, props.search, props.courses]);

  const filterCourses = (search) => {
    let array = [];
    for (let i = 0; i < allCourses.length; i++) {
      if (allCourses[i].title.toLowerCase().includes(search.toLowerCase())) {
        array.push(allCourses[i]);
      }
    }
    setCoursesArray(array);
    setCurrentCourses(array.slice(0, props.coursesPerPage));
    setCount(array.length / props.coursesPerPage);
  };

  const handlePageClick = (e) => {
    let array = coursesArray.slice(
      e.selected * props.coursesPerPage,
      (e.selected + 1) * props.coursesPerPage
    );
    setCurrentCourses(array);
  };

  return (
    <PaginationContainer>
      <div id="react-paginate" className="no-margin-left">
        {currentCourses.map((course) => (
          <Course
            key={course.id}
            courseId={course.id}
            title={course.title}
            created={course.created}
            lastModified={course.lastModified}
            classScheduled={course.classScheduled}
            classes={course.classes}
            studentsEnrolled={course.studentsEnrolled}
            rating={course.rating}
            numberOfRates={course.numberOfRates}
            img={course.img}
            updateCourseName={props.updateCourseName}
            updateCourseID={props.updateCourseID}
            activeTab={props.activeTab}
            setActiveTab={props.setActiveTab}
          />
        ))}

      { count>1? <ReactPaginate
          previousLabel={"prev"}
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
          containerClassName={`pagination-container`}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        /> :""}

      </div>
    </PaginationContainer>
  );
};

export default Pagination;
