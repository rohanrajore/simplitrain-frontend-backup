import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsSignedIn,
  selectIsInstructor,
} from "../../redux/user/user.selectors";
import { Container, Button } from "react-bootstrap";
import {
  setCategory,
  setSearch,
  setCourseDate,
  setLocation,
  setSearchFieldInput,
  setTimelineLocation,
  setTrainingStartDate,
  setVenueType,
} from "../../redux/browse-courses/browse-courses-actions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSlidersH,
  faChevronDown,
  faCaretUp,
  faSearch,
  faTimes,
  faBars,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import userdemo from "../../assets/userdemo.svg";
import CartIcon from "../../assets/cart.svg";
import HeartIcon from "../../assets/heart.svg";
// import "./header.css";
import {
  HeaderContainer,
  MobileContainer,
  LogoContainer,
  MenuContainer,
  CategoryContainer,
  SearchFilterContainer,
  CategorySearch,
  LinkButton,
  HeaderTop,
  TopRight,
  HeaderBottom,
} from "./header.styles";
import Category from "../browse-courses/navbar/category/category.jsx";
import MenuComponent from "./menu/menu";
import Location from "../browse-courses/navbar/location/location.jsx";
import ProfileIcons from "./profileIcons/profileIcons.jsx";
import HeaderDropdown from "./dropdown/headerDropdown.jsx";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import CartDropdown from "./cart-dropdown/cartDropdown.jsx";
import Select from "react-select";
import { useMatchBreakpoints } from "../../hooks";
import fetchCartCourses from "./cart-dropdown/fetchCartCourses.js";
import { addToCart } from "../../redux/cart/cart-actions.js";


const Header = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLg, isXl } = useMatchBreakpoints();
  const isMobie = !isLg && !isXl;
  const searchFieldInput = useSelector(
    (state) => state.browseCourses.searchFieldInput
  );
  const [showWishlist, setShowWishlist] = useState(false);
  const search = useSelector((state) => state.browseCourses.search);
  const trainingStartDate = useSelector(
    (state) => state.browseCourses.trainingStartDate
  );
  const cartArray = useSelector((state) => state.cart.cartArray);
  const wishlistArray = useSelector((state) => state.cart.wishlistArray);
  const isSignedIn = useSelector(selectIsSignedIn);
  const isInstructor = useSelector(selectIsInstructor);
  const location = useSelector((state) => state.browseCourses.location);
  const user = useSelector((state) => state.user.currentUser);
  const venueType = useSelector((state) => state.browseCourses.venueType);

  const timeFilterOptions = [
    { key: "001", value: "THIS_WEEK", label: "This Week" },
    { key: "002", value: "NEXT_WEEK", label: "Next Week" },
    { key: "003", value: "THIS_MONTH", label: "This Month" },
    { key: "004", value: "NEXT_THREE_MONTHS", label: "Next 3 Months" },
    { key: "005", value: "ALL_TIME", label: "All Time" },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [tempTimeFilter, setTempTimeFilter] = useState(timeFilterOptions[4]);
  const [tempLocation, setTempLocation] = useState({
    latitude: "",
    longitude: "",
    city: { key: "001", label: "All locations", value: "all" },
  });
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
  const handleTempLocation = (arg) => setTempLocation(arg);
  const handleMyAccBtns = (path) => {
    console.log("path", path);
    props.handleLogin(path);
    setShowAccount(false);
  };

  const customStyles = {
    dropdownIndicator: () => ({
      cursor: "pointer",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      cursor: "pointer",
    }),
  };
  console.log(location);
  console.log(tempLocation);

  const handleShowCart = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setShowCart(true);
    document.addEventListener("click", closeCart);
  };

  const handleShowWishlist = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setShowWishlist(true);
    document.addEventListener("click", closeWishlist);
  };

  const closeWishlist = (e) => {
    let cartCourseRemove = document.getElementById("cartCourse-remove");
    let cartDropdown = document.getElementById("cartDropdown");
    if (e.target === cartDropdown || e.target === cartCourseRemove) {
    } else {
      setShowWishlist(false);
      document.removeEventListener("click", closeWishlist);
    }
  };

  const handleShowDropdown = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setShowDropdown(true);
    document.addEventListener("click", closeDropdown);
  };

  const handleShowAccount = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setShowAccount(true);
    document.addEventListener("click", closeAccount);
  };

  const filtersHandler = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setShowFilters(true);
    document.addEventListener("click", closeOutsideFilters);
  };

  const closeDropdown = (e) => {
    let profileDropDown = document.getElementById("profileDropDown");
    let profileMsgContainer = document.getElementById("profileMsgContainer");

    if (e.target !== (profileDropDown || profileMsgContainer)) {
      setShowDropdown(false);
      document.removeEventListener("click", closeDropdown);
    }
  };

  const closeAccount = (e) => {
    let myAccountDropdown = document.getElementById("myAccount-dropdown");
    let myAccountBox = document.getElementById("myAccount-box");
    if (e.target !== (myAccountDropdown || myAccountBox)) {
      setShowAccount(false);
      document.removeEventListener("click", closeAccount);
    }
  };

  const closeCart = (e) => {
    let cartCourseRemove = document.getElementById("cartCourse-remove");
    let cartDropdown = document.getElementById("cartDropdown");
    if (e.target === cartDropdown || e.target === cartCourseRemove) {
    } else {
      setShowCart(false);
      document.removeEventListener("click", closeCart);
    }
  };
  // This is called if user clicks outside of filters box, it will be closed...
  const closeOutsideFilters = (e) => {
    let headerFilterBox = document.getElementById("header-filter-box");
    let headerFilterOption1 = document.getElementById("responsiveLocation");
    let isResponsiveLocation = e.srcElement.closest("#responsiveLocation")?.id;
    let selectID = e.srcElement.id;
    if (
      e.target === headerFilterBox ||
      isResponsiveLocation === "responsiveLocation" ||
      selectID.includes("react-select")
    ) {
    } else {
      setShowFilters(false);
      document.removeEventListener("click", closeOutsideFilters);
    }
  };

  const handleClickSearch = () => {
    dispatch(setCategory(""));
    dispatch(setSearch(searchFieldInput));
    if (window.location.pathname !== "/course-search")
      history.push("/course-search");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClickSearch();
    }
  };

  const handleSearch = (e) => dispatch(setSearchFieldInput(e.target.value));

  const handleClickFilter = (value) => {
    // This will trigger if we click on close btn in search bar timelineFilter
    if (value === "close") {
      dispatch(setTrainingStartDate("ALL_TIME"));
      setTempTimeFilter(timeFilterOptions[4]);
    }
    //This is case when we choose between options before clicking on filter btn
    else {
      setTempTimeFilter(value);
    }
  };
  // This is called when clicked on X btn in search box filter
  const handleCloseLocation = () => {
    let obj = {
      latitude: "",
      longitude: "",
      city: { key: "001", label: "All locations", value: "all" },
    };
    setTempLocation(obj);
    dispatch(setLocation(obj));
    dispatch(setVenueType("ALL"));
    if (window.location.pathname !== "/course-search")
      history.push("/course-search");
  };

  const handleFilterDropdown = () => {
    // This will set venueType to ONSITE if location is selected..
    let tempVenue;
    if (tempLocation.city.value !== "all") {
      tempVenue = "ONSITE";
    } else {
      tempVenue = "ALL";
    }
    let obj = {
      trainingStart: tempTimeFilter.value,
      location: tempLocation,
      venueType: tempVenue,
    };
    dispatch(setTimelineLocation(obj));
    setShowFilters(false);
    if (window.location.pathname !== "/course-search")
      history.push("/course-search");
  };

  const handleCancelFilterDropdown = () => {
    setShowFilters(false);
    // Handle option value in timeFilter select
    let index = timeFilterOptions.findIndex(
      (elem) => elem.value === trainingStartDate
    );
    setTempTimeFilter(timeFilterOptions[index]);

    //Handle option value in location filter
    setTempLocation(location);
  };

  useEffect(() => {
    async function fetch() {
      // If this clause is true, then user got loged out, so we dont have either user or anonymousID then we dont call fetchCart API
      if (!user && localStorage.getItem("anonymousUserID") === "") {
      } else {
        let response = await fetchCartCourses(
          user === null ? "" : user.id,
          localStorage.getItem("anonymousUserID")
        );
        // Cart flow
        let cart = [];
        let tax = 0;
        let totalAmount = 0;
        let grandTotalAmount = 0;
        let totalDiscount = 0;
        if(response){
          cart = response.cartItemList;
          tax = response.tax;
          totalAmount = response.totalAmount;
          grandTotalAmount = response.grandTotalAmount;
          totalDiscount = response.totalDiscount;
        }

        let obj = {
          cartArray: cart,
          tax: tax,
          totalAmount: totalAmount,
          grandTotalAmount: grandTotalAmount,
          totalDiscount: totalDiscount,
        };

        if (obj.cartArray === undefined) {
          let defaultObj = {
            cartArray: [],
            tax: 0.0,
            totalAmount: 0.0,
            grandTotalAmount: 0.0,
            totalDiscount: 0.0,
          };
          dispatch(addToCart(defaultObj));
        } else {
          dispatch(addToCart(obj));
        }
      }
    }
    fetch();
  }, [1]);

  return (
    <HeaderContainer>
      {isMobie ? (
        <MobileContainer>
          <HeaderTop>
            <LogoContainer>
              <MenuComponent />
              {/* <FontAwesomeIcon icon={faBars} /> */}
              <LinkButton to="/">
                <img src={logo} className="logo" alt={"Logo"} />
              </LinkButton>
            </LogoContainer>
            <TopRight>
              {isSignedIn ?
                <Button
                  onClick={!showCart ? handleShowWishlist : () => {}}
                  variant="link"
                >
                  <img className="shoppingCart mobile" src={HeartIcon} />
                  {/* <FontAwesomeIcon icon={faShoppingCart} size="1x" /> */}
                  {wishlistArray.length > 0 ? <span>{wishlistArray.length}</span> : null}
                </Button> 
                :null
              }
              {showWishlist && <CartDropdown name="wishlist" />}
              <Button
                onClick={!showCart ? handleShowCart : () => {}}
                variant="link"
              >
                <img className="shoppingCart mobile" src={CartIcon} />
                {/* <FontAwesomeIcon icon={faShoppingCart} size="1x" /> */}
                {cartArray.length > 0 ? <span>{cartArray.length}</span> : null}
              </Button>
              {showCart && <CartDropdown name="cart" />}
                {/* {isSignedIn ? (
                  <div className="header-dropdown-container">
                    <ProfileIcons
                      showDropdown={showDropdown}
                      handleShowDropdown={handleShowDropdown}
                    />
                    <HeaderDropdown
                      showDropdown={showDropdown}
                      handleShowDropdown={handleShowDropdown}
                    />
                  </div>
                ) :(
                  <>
                    <Button
                      onClick={!showCart ? handleShowCart : () => {}}
                      variant="link"
                    >
                      <img className="shoppingCart mobile" src={CartIcon} />
                      {cartArray.length > 0 ? <span>{cartArray.length}</span> : null}
                    </Button>
                    <Button
                      onClick={!showAccount ? handleShowAccount : () => {}}
                      variant="link"
                    >
                      <img
                        className="img-profile"
                        alt="profile"
                        src={"https://i.pinimg.com/474x/8c/70/8b/8c708b478e0e71f7599b75b9cc108ddf.jpg"}
                      />
                    </Button>

                      {showAccount && (
                        <div className="myAccount-dropdown" id="myAccount-dropdown">
                          <FontAwesomeIcon
                            className="icon-handPoint"
                            icon={faCaretUp}
                            size="2x"
                          />

                          <img src={userdemo} />

                          <div className="myAcc-dropdown-btns">
                            <Button
                              variant={"primary"}
                              onClick={() => history.push("/auth/login")}
                            >
                              Sign In
                            </Button>
                            <Button
                              variant={"outline-primary"}
                              onClick={() => history.push("/auth/signup")}
                            >
                              Register
                            </Button>
                          </div>

                          <LinkButton
                            className="bookings-button"
                            to="/view-bookings"
                            onClick={() => setShowAccount(false)}
                          >
                            My Bookings
                          </LinkButton>
                        </div>
                      )}
                  </>
                )} */}
            </TopRight>
          </HeaderTop>
          <HeaderBottom>
            <div className="mobile-content">
              <input
                type="text"
                placeholder="Search courses, training and more..."
                value={searchFieldInput}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
              />
              <div className="mobile-inputGroup">
                {/* {location.city.value !== "all" && (
                  <div className="header-search-filterBox">
                    {location.city.value}
                    <span
                      onClick={handleCloseLocation}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </div>
                )}

                {trainingStartDate !== "ALL_TIME" && (
                  <div className="header-search-filterBox">
                    {trainingStartDate}
                    <span
                      onClick={() => handleClickFilter("close")}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </div>
                )} */}
                <div className="header-search-btn" onClick={handleClickSearch}>
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </div>
            {/* <div
              className="mobile-filterIcon"
              style={{ color: showFilters ? "#4183c4" : "" }}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FontAwesomeIcon icon={faSlidersH} />
            </div> */}
          </HeaderBottom>
        </MobileContainer>
      ) : (
        <>
          <LogoContainer>
            {/* <Button className="mobile-menu-button" variant="link"> <FontAwesomeIcon icon={faBars}/></Button> */}
            <LinkButton to="/">
              <img src={logo} className="logo" alt={"Logo"} />
            </LinkButton>
          </LogoContainer>

          <CategorySearch>
            <Category />
            <CategoryContainer>
              <div
                className={`header-search-content ${
                  showFilters ? "filteropen" : null
                } `}
              >
                <input
                  type="text"
                  placeholder="Search courses, training and more..."
                  value={searchFieldInput}
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                />
              {/*<div className="header-search-inputGroup">
                  {location.city.value !== "all" && (
                    <div className="header-search-filterBox">
                      {location.city.value}
                      <span
                        onClick={handleCloseLocation}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                    </div>
                  )}

                  {trainingStartDate !== "ALL_TIME" && (
                    <div className="header-search-filterBox">
                      {trainingStartDate}
                      <span
                        onClick={() => handleClickFilter("close")}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                    </div>
                  )}

                  <div
                    className="header-search-filterIcon"
                    onClick={!showFilters ? filtersHandler : () => {}}
                  >
                    <FontAwesomeIcon icon={faSlidersH} />
                  </div>
                </div>*/}
                {/*showFilters && (
                  <SearchFilterContainer
                    className="dropdown"
                    id="header-filter-box"
                  >
                    <div className="search-filter-options">
                      <Location
                        tempLocation={tempLocation}
                        handleTempLocation={handleTempLocation}
                        isMyLocation={isMyLocation}
                        handleIsMyLocation={handleIsMyLocation}
                        myLocationDetails={myLocationDetails}
                        handleMyLocationDetails={handleMyLocationDetails}
                      />

                      <Select
                        id="responsiveLocation"
                        className="select-location"
                        styles={customStyles}
                        options={timeFilterOptions}
                        defaultValue={timeFilterOptions[4]}
                        value={tempTimeFilter}
                        onChange={handleClickFilter}
                      />
                    </div>

                    <div className="search-filter-actions">
                      <Button
                        variant="link"
                        className="header-filter-btn"
                        onClick={handleCancelFilterDropdown}
                      >
                        Cancel
                      </Button>

                      <Button
                        variant="primary"
                        className="header-filter-btn reverseBtn"
                        onClick={handleFilterDropdown}
                      >
                        Filter
                      </Button>
                    </div>
                  </SearchFilterContainer>
                )*/}
              </div>
              <div className="header-search-btn" onClick={handleClickSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </CategoryContainer>
          </CategorySearch>

          <MenuContainer>
            {isSignedIn ? (
              <div className="header-dropdown-container">
                <ProfileIcons
                  showDropdown={showDropdown}
                  handleShowDropdown={handleShowDropdown}
                />
                <HeaderDropdown
                  showDropdown={showDropdown}
                  handleShowDropdown={handleShowDropdown}
                />
              </div>
            ) : (
              <>
                <LinkButton to="/become-an-instructor" className="becomeInst">
                  Become an Instructor
                </LinkButton>

                <div
                  className="icon-notification"
                  style={{ position: "relative" }}
                >
                  <div
                    className="cartIcon"
                    onClick={!showCart ? handleShowCart : () => {}}
                  >
                    <NotificationBadge
                      className="badge-notification"
                      count={cartArray.length}
                      effect={Effect.SCALE}
                    />
                    <img className="shoppingCart" src={CartIcon} />
                    {/* <FontAwesomeIcon className="shoppingCart" icon={faShoppingCart} size="1x" /> */}
                  </div>
                  {showCart && <CartDropdown name="cart" />}
                </div>

                <div className="myAcc-relative">
                  <div
                    className="myAccount-box"
                    id="myAccount-box"
                    onClick={!showAccount ? handleShowAccount : () => {}}
                  >
                    <div>My Account</div>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                  {showAccount && (
                    <div className="myAccount-dropdown" id="myAccount-dropdown">
                      <FontAwesomeIcon
                        className="icon-handPoint"
                        icon={faCaretUp}
                        size="2x"
                      />

                      <img src={userdemo} />

                      <div className="myAcc-dropdown-btns">
                        <Button
                          variant={"primary"}
                          onClick={() => history.push("/auth/login")}
                        >
                          Sign In
                        </Button>
                        <Button
                          variant={"outline-primary"}
                          onClick={() => history.push("/auth/signup")}
                        >
                          Register
                        </Button>
                      </div>

                      <LinkButton
                        className="bookings-button"
                        to="/view-bookings"
                        onClick={() => setShowAccount(false)}
                      >
                        My Bookings
                      </LinkButton>
                    </div>
                  )}
                </div>
              </>
            )}
          </MenuContainer>
        </>
      )}
    </HeaderContainer>
  );
};
export default Header;
