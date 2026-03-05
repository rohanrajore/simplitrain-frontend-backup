import BrowseCoursesTypes from "./browse-courses-types.js";

export const setTrainingStartDate = (value) => ({
  type: BrowseCoursesTypes.TRAINING_START_DATE,
  payload: value
});

export const setPriceRange = (value) => ({
  type: BrowseCoursesTypes.RANGE_PRICE,
  payload: value
});

export const setLevels = (value) => ({
  type: BrowseCoursesTypes.LEVELS,
  payload: value
});

export const setAvgCustomerReview = (value) => ({
  type: BrowseCoursesTypes.AVERAGE_CUSTOMER_REVIEWS,
  payload: value
});

export const setDuration = (value) => ({
  type: BrowseCoursesTypes.DURATION,
  payload: value
});

export const setCategory = (value) => ({
  type: BrowseCoursesTypes.CATEGORY,
  payload: value
});

export const setSubCategory = (value) => ({
  type: BrowseCoursesTypes.SUBCATEGORY,
  payload: value
});

export const setSearchFieldInput = (value) => ({
  type: BrowseCoursesTypes.SEARCH_FIELD_INPUT,
  payload: value
});

export const setSearch = (value) => ({
  type: BrowseCoursesTypes.SEARCH,
  payload: value
});

export const setSort = (value) => ({
  type: BrowseCoursesTypes.SORT,
  payload: value
});

export const setCourseDate = (startDate, endDate) => ({
  type: BrowseCoursesTypes.COURSE_DATE,
  payload:[startDate, endDate]
});

export const setDistance = (value) => ({
  type: BrowseCoursesTypes.DISTANCE,
  payload: value
});

export const setLocation = (value) => ({
  type: BrowseCoursesTypes.LOCATION,
  payload: value
});

export const setLanguage = (value) => ({
  type: BrowseCoursesTypes.LANGUAGE,
  payload: value
});

export const setVenueType = (value) => ({
  type: BrowseCoursesTypes.VENUE_TYPE,
  payload: value
});

export const setPagination = (value) => ({
  type: BrowseCoursesTypes.PAGINATION,
  payload: value
});

export const setTimelineLocation = (value) => ({
  type: BrowseCoursesTypes.SET_TIMELINE_LOCATION,
  payload: value
});

export const setPageSize = (value) => ({
  type: BrowseCoursesTypes.PAGE_SIZE,
  payload: value
});

export const resetFilters = (value) => ({
  type: BrowseCoursesTypes.RESET_FILTERS
});
