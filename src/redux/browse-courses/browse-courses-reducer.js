import BrowseCoursesTypes from "./browse-courses-types.js";

const INITIAL_STATE = {
  trainingStartDate: "ALL_TIME",
  rangePrice: [0,15000],
  levels: "ALL",
  avgCustomerReview: "ZERO",
  duration:[0,100000],
  category:"",
  subCategory:"",
  searchFieldInput:"",
  search:"",
  sort:"RATINGS",
  courseDate:["",""],
  distance:"",
  location:{latitude:"",longitude:"",city:{key:"001",
                                           label:"All locations",
                                           value:"all"}},
  language: "ALL",
  venueType: "ONSITE",
  pageSize: 10,
  pagination:{currentCourses:[],pageNumber:0,numberOfPages:0,totalElements:""}
};

const browseCoursesReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BrowseCoursesTypes.TRAINING_START_DATE:
     return {
        ...state,
        trainingStartDate: action.payload
      };

    case BrowseCoursesTypes.RANGE_PRICE:
    return {
      ...state,
      rangePrice: action.payload
    };

    case BrowseCoursesTypes.LEVELS:
    return {
      ...state,
      levels: action.payload
    };

    case BrowseCoursesTypes.AVERAGE_CUSTOMER_REVIEWS:
    return {
      ...state,
      avgCustomerReview: action.payload
    };

    case BrowseCoursesTypes.DURATION:
    return {
      ...state,
      duration: action.payload
    };

    case BrowseCoursesTypes.CATEGORY:
    return {
      ...state,
      category: action.payload,
      subCategory: ""
    };

    case BrowseCoursesTypes.SUBCATEGORY:
    return {
      ...state,
      subCategory: action.payload,
      category: ""
    };

    case BrowseCoursesTypes.SEARCH_FIELD_INPUT:
    return {
      ...state,
      searchFieldInput: action.payload
    };

    case BrowseCoursesTypes.SEARCH:
    return {
      ...state,
      search: action.payload
    };

    case BrowseCoursesTypes.SORT:
    return {
      ...state,
      sort: action.payload
    };

    case BrowseCoursesTypes.COURSE_DATE:
    return {
      ...state,
      courseDate: action.payload
    };

    case BrowseCoursesTypes.DISTANCE:
    return {
      ...state,
      distance: action.payload
    };

    case BrowseCoursesTypes.LOCATION:
    return {
      ...state,
      location: action.payload
    };

    case BrowseCoursesTypes.PAGINATION:
    return {
      ...state,
      pagination: action.payload
    };

    case BrowseCoursesTypes.PAGE_SIZE:
    return {
      ...state,
      pageSize: action.payload
    };

    case BrowseCoursesTypes.LANGUAGE:
    return {
      ...state,
      language: action.payload
    };

    case BrowseCoursesTypes.VENUE_TYPE:
    return {
      ...state,
      venueType: action.payload
    };

    case BrowseCoursesTypes.RESET_FILTERS:
    return {
      trainingStartDate: "ALL_TIME",
      rangePrice: [0,15000],
      levels: "ALL",
      avgCustomerReview: "ZERO",
      duration:[0,100000],
      category:"",
      subCategory:"",
      searchFieldInput:"",
      search:"",
      sort:"RATINGS",
      courseDate:["",""],
      distance:"",
      location:{latitude:"",longitude:"",city:{key:"001",
                                               label:"All locations",
                                               value:"all"}},
      language: "ALL",
      venueType: "ONSITE",
      pageSize: 10,
      pagination:{currentCourses:[],pageNumber:0,numberOfPages:0,totalElements:""}
    };

    case BrowseCoursesTypes.SET_TIMELINE_LOCATION:
    return {
      ...state,
      trainingStartDate: action.payload.trainingStart,
      location: action.payload.location,
      venueType: action.payload.venueType,
      courseDate:["",""]
    };

    default:
      return state;
  }
};
export default browseCoursesReducers;
