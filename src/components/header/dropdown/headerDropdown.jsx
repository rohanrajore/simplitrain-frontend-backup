import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
// import "./headerDropdown.css";
import { connect, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../../firebase/firebase.util";
import { logout } from "../../../redux/user/user.actions";
import {
  selectIsInstructor,
  selectIsLearner,
  selectIsSignedIn,
  selectIsOnboarded,
} from "../../../redux/user/user.selectors";
import { LinkButton } from "../header.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";
import { HeaderDropdownMenu } from "./headerDropdown.styles";

const HeaderDropdown = ({
  logout,
  isSignedIn,
  isLearner,
  isInstructor,
  isOnboarded,
  ...props
}) => {
  const location = useLocation();
  const [msgCounter, setMsgCounter] = useState(7);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <HeaderDropdownMenu
      id="profileDropDown"
      className={`header-dropdown-menu ${
        props.showDropdown ? "show-anim" : "hide-anim"
      }`}
    >
      <FontAwesomeIcon className="icon-handPoint" icon={faCaretUp} size="2x" />

      <div className="profileDropDown-user">
        <img
          className="img-profile"
          alt="profile"
          src={
            user
              ? user.profileImg
                ? user.profileImg
                : "https://i.pinimg.com/474x/8c/70/8b/8c708b478e0e71f7599b75b9cc108ddf.jpg"
              : "https://i.pinimg.com/474x/8c/70/8b/8c708b478e0e71f7599b75b9cc108ddf.jpg"
          }
        />
        <div className="profileDropDown-userInfo">
          <h4>
            {user ? user.firstName : ""} {user ? user.lastName : ""}
          </h4>
          <p>{user ? user.email : ""}</p>
        </div>
      </div>
      {/*<div id="profileMsgContainer" className="msg-container">  This is messages link that we are hiding for now. Maybe it wont be used at all
               <LinkButton className="link-grey">Messages</LinkButton>
               <NotificationBadge className="msg-badge"
                                  count={msgCounter} effect={Effect.SCALE}/>
            </div>*/}
      {isSignedIn && (
        <LinkButton to="/my-courses" className="link-grey">
          My Courses
        </LinkButton>
      )}
      {isSignedIn && (
        <LinkButton to="/cart" className="link-grey">
          My Cart
        </LinkButton>
      )}
        {/*Currently we are hiding profile for learner, because backend problem*/}

      {isInstructor &&<LinkButton to="/profile" className="link-grey">
                        Profile
                      </LinkButton>}
      <LinkButton to="/wishlist" className="link-grey">
        Wishlist
      </LinkButton>
      <LinkButton to="/settings" className="link-grey">
        Settings
      </LinkButton>
      <LinkButton to="/purchase-history" className="link-grey">
        Purchase History
      </LinkButton>
      <hr className="hr-line" />
      {/* Hiding Help & Support until the pages are ready */}
      {/* <LinkButton className="link-grey">Help & Support</LinkButton> */}
      {isSignedIn && (
        <LinkButton
          className="link-red"
          onClick={() => {
            auth.signOut();
            localStorage.setItem("anonymousUserID", "");
            logout();
            props.handleShowDropdown();
          }}
          to="/"
        >
          {" "}
          Logout
        </LinkButton>
      )}

      {isLearner && isInstructor && isOnboarded ? (
        <>
          <LinkButton
            className="link-box"
            to={
              (location.pathname.includes("/instructor") && !location.pathname.includes("instructor-profile"))
                ? "/"
                : "/instructor-dashboard/courses"
            }
          >
            {(location.pathname.includes("/instructor") && !location.pathname.includes("instructor-profile"))
              ? "Switch to Learner mode"
              : "Switch to Instructor mode"}
          </LinkButton>

          {/*<LinkButton to="/instructor/landing-venue-wizard">Venues </LinkButton>*/}
        </>
      ) : isInstructor && isOnboarded ? (
        <>
          <LinkButton className="link-box" to="/instructor-dashboard/courses">
            To instructor{" "}
          </LinkButton>
          {/*<LinkButton to="/instructor/landing-venue-wizard">Venues </LinkButton>*/}
        </>
      ) : isLearner ? (
        <>
          <LinkButton className="link-box" to="/become-an-instructor">
            Become an instructor
          </LinkButton>
        </>
      ) : null}
    </HeaderDropdownMenu>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

const mapStateToProps = createStructuredSelector({
  isSignedIn: selectIsSignedIn,
  isLearner: selectIsLearner,
  isInstructor: selectIsInstructor,
  isOnboarded: selectIsOnboarded,
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDropdown);
