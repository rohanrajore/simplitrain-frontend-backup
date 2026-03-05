import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Dropdown } from "semantic-ui-react";
import {
  selectIsSignedIn,
  selectIsInstructor,
} from "../../../redux/user/user.selectors";
import { connect, useSelector } from "react-redux";
import { auth } from "../../../firebase/firebase.util";
import { logout } from "../../../redux/user/user.actions";
import {
  setCategory,
  setSearch,
  setSubCategory,
} from "../../../redux/browse-courses/browse-courses-actions.js";
import response from "../../browse-courses/navbar/JSONdetails.js";
import { themeColors, mediaQueries, fonts } from "../../../theme";
import useMatchBreakpoints from "../../../hooks/useMatchBreakpoints.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRight,
  faBars,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button, ListGroup } from "react-bootstrap";
import { LinkButton } from "../header.styles.jsx";

export const MenuButton = styled.div`
  .menu-icon {
    background: transparent !important;
    border: 0;
    svg {
      width: 21px;
      height: 21px;
    }
  }
`;

export const MenuDropDown = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: calc(100% - 43px);
  box-sizing: border-box;
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #00000080;
    z-index: -1;
  }
  .menu-bar {
    width: 280px;
    height: 100%;
    background: #fff;
    overflow: auto;
    padding: 10px 0;
    box-sizing: border-box;
  }
  &.active {
    display: block;
  }
  & .mobile-buttons {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
    height: auto !important;
    .login-signup {
      flex-direction: row;
      display: flex;
      justify-content: space-between;
    }
    .bookings-button {
      padding: 20px 10px 16px 10px;
      border-bottom: 1px solid #ededed;
    }
    button {
      width: 100%;
      background: #e5f3fb;
      height: 46px;
      border-radius: 0px;
      border: 0;
      margin: 0 8px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #2d9cdb;
    }
  }
  & .profileDropDown-user {
    height: auto !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    img {
      width: 50px;
      border-radius: 100px;
      margin-right: 10px;
    }
    .profileDropDown-userInfo {
      h4 {
        margin: 0;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: #303030;
      }
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.02em;
        color: #4f4f4f;
      }
    }
  }
`;
export const MenuList = styled.div`
  .divider {
    height: 2px;
    width: 100%;
    border-bottom: 1px solid #dedede;
    margin: 8px 16px;
    width: calc(100% - 32px);
  }
  .menus {
    border: 0;
    .list-group-item {
      display: flex;
      border: 0;
      justify-content: space-between;
      align-items: center;
      a {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: #303030;
      }
      button {
        background: transparent;
        border: 0;
        svg {
          color: #4f4f4f;
        }
      }
      &.title {
        a {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          color: #041016;
        }
      }
      &.head {
        background: #efefef;
        a {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 16px;
          color: #303030;
          svg {
            margin-right: 10px;
          }
        }
      }
      &.logout {
        a {
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.02em;
          color: #eb5757;
        }
      }
    }
  }
`;
export const MenuFooter = styled.div`
  padding: 20px;
  margin-top: 12px;
  a {
    background: #2d9cdb;
    border-radius: 4px;
    color: #fff;
    border: 0;
    padding: 12px 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
`;

const MenuComponent = ({
  logout,
  setSearch,
  setSubCategory,
  setCategory,
  ...props
}) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [mainMenu, setMainMenu] = useState(true);
  const [subManu, setSubManu] = useState(true);
  const [subCategories, setSubCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const isSignedIn = useSelector(selectIsSignedIn);
  const user = useSelector((state) => state.user.currentUser);
  const { isLg, isXl } = useMatchBreakpoints();
  const isMobie = !isLg && !isXl;
  const subCatClickHandler = (e) => {
    // dispatch(setSearch(""));
    setSearch("");
    let subCategory = {
      id: e.target.getAttribute("subCatID"),
      name: e.target.getAttribute("subName"),
    };
    // dispatch(setSubCategory(subCategory));
    setSubCategory(subCategory);
    setIsOpen(false);
    setMainMenu(true);
    setSubManu(true);
    if (window.location.pathname !== "/course-search")
      history.push("/course-search");
  };

  const catClickHandler = (e, catID, catName) => {
    let subName = e.target.getAttribute("subName");
    console.log(subName);
    if (!subName) {
      setSearch("");
      let category = { id: catID, name: catName };
      console.log(category);
      // dispatch(setCategory(category));
      setCategory(category);
      setIsOpen(false);
      if (window.location.pathname !== "/course-search")
        history.push("/course-search");
    }
    setMainMenu(true);
    setSubManu(true);
  };

  const handleBrowseAll = () => {
    history.push("/course-search/browse-all");
    setIsOpen(false);
  };

  const handleManuallyDropdown = (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    setIsOpen(true);
    document.addEventListener("click", closeCatDropdown);
  };

  const loginAction = () => {
    setIsOpen(false);
    history.push("/auth/login");
  };

  const signAction = () => {
    setIsOpen(false);
    history.push("/auth/signup");
  };
  const openCategory = () => {
    setMainMenu(false);
    setSubManu(false);
  };

  const gotoLink = (path) => {
    setIsOpen(false);
    history.push(path);
  };

  const closeCatDropdown = (e) => {
    setIsOpen(false);
    document.removeEventListener("click", closeCatDropdown);
  };

  return (
    <MenuButton>
      <Button onClick={() => setIsOpen(!isOpen)} className="menu-icon">
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <MenuDropDown className={isOpen ? "active" : null}>
        <div onClick={() => setIsOpen(!isOpen)} className="overlay"></div>
        <div className="menu-bar">
          {isSignedIn ? (
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
          ) : (
            <div className="mobile-buttons">
              <div className="login-signup">
                <Button variant={"primary"} onClick={() => loginAction()}>
                  Sign In
                </Button>
                <Button
                  variant={"outline-primary"}
                  onClick={() => signAction()}
                >
                  Register
                </Button>
              </div>
              <LinkButton
                className="bookings-button"
                onClick={() => closeCatDropdown()}
                to="/view-bookings"
              >
                My Bookings
              </LinkButton>
            </div>
          )}
          <MenuList>
            {mainMenu ? (
              isSignedIn ? (
                <ListGroup className="menus">
                  <ListGroup.Item onClick={() => gotoLink("/my-courses")}>
                    <a>My Courses</a>
                  </ListGroup.Item>
                  {/* <ListGroup.Item onClick={()=> gotoLink('/my-courses')}><a>Notifications</a></ListGroup.Item> */}

                  <ListGroup.Item onClick={() => gotoLink("/cart")}>
                    <a>My Cart</a>
                  </ListGroup.Item>
                  <ListGroup.Item onClick={() => gotoLink("/profile")}>
                    <a>Profile</a>
                  </ListGroup.Item>
                  <ListGroup.Item onClick={() => gotoLink("/wishlist")}>
                    <a>Wishlist</a>
                  </ListGroup.Item>
                  <ListGroup.Item onClick={() => gotoLink("/purchase-history")}>
                    <a>Puchase History</a>
                  </ListGroup.Item>
                  <div className="divider" />
                  <ListGroup.Item onClick={() => openCategory()}>
                    <a>
                      <b>Course Categories</b>
                    </a>
                    <button>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </ListGroup.Item>
                  {/* <ListGroup.Item>
                    <a>Help & Support</a>
                  </ListGroup.Item> */}
                  <div className="divider" />
                  <ListGroup.Item onClick={() => gotoLink("/settings")}>
                    <a>Settings</a>
                  </ListGroup.Item>
                  <ListGroup.Item
                    onClick={() => {
                      auth.signOut();
                      localStorage.setItem("anonymousUserID", "");
                      logout();
                      closeCatDropdown();
                      // window.location.reload();
                    }}
                    className="logout"
                  >
                    <a>Logout</a>
                  </ListGroup.Item>
                  {/* {subCategories.map(category=>(
                    <ListGroup.Item><a>{ category.name }</a><button><FontAwesomeIcon icon={faChevronRight} /></button></ListGroup.Item>
                  ))}
                  <ListGroup.Item><a>Help & Support</a></ListGroup.Item> */}
                </ListGroup>
              ) : (
                <ListGroup className="menus">
                  <ListGroup.Item className="title">
                    <a>Course Categories</a>
                  </ListGroup.Item>
                  {response.categories.map((category) => (
                    <ListGroup.Item>
                      <a
                        onClick={(e) =>
                          catClickHandler(
                            e,
                            category.categoryID,
                            category.categoryName
                          )
                        }
                      >
                        {category.categoryName}
                      </a>
                      <button
                        onClick={() => {
                          setMainMenu(false);
                          setSubManu(true);
                          setCategories(category.categoryName);
                          setSubCategories(category.subCategories);
                        }}
                      >
                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                    </ListGroup.Item>
                  ))}
                  {/* <ListGroup.Item>
                    <a>Help & Support</a>
                  </ListGroup.Item> */}
                </ListGroup>
              )
            ) : (
              <ListGroup className="menus">
                {subManu ? (
                  <>
                    <ListGroup.Item
                      className="head"
                      onClick={() => {
                        if (isSignedIn) {
                          setSubManu(false);
                        } else {
                          setMainMenu(true);
                        }
                      }}
                    >
                      <a>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        {categories}
                      </a>
                    </ListGroup.Item>
                    {subCategories.map((category) => (
                      <ListGroup.Item
                        key={category.id}
                        onClick={(e) => subCatClickHandler(e)}
                      >
                        <a>{category.name}</a>
                      </ListGroup.Item>
                    ))}
                  </>
                ) : (
                  <>
                    <ListGroup.Item
                      onClick={() => {
                        setMainMenu(true);
                      }}
                      className="head"
                    >
                      <a>
                        <FontAwesomeIcon icon={faChevronLeft} /> Categories
                      </a>
                    </ListGroup.Item>
                    {response.categories.map((category) => (
                      <ListGroup.Item key={category.categoryID}>
                        <a
                          onClick={(e) =>
                            catClickHandler(
                              e,
                              category.categoryID,
                              category.categoryName
                            )
                          }
                        >
                          {category.categoryName}
                        </a>
                        <button
                          onClick={() => {
                            setSubManu(true);
                            setCategories(category.categoryName);
                            setSubCategories(category.subCategories);
                          }}
                        >
                          <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                      </ListGroup.Item>
                    ))}
                  </>
                )}

                {/* <ListGroup.Item>
                  <a>Help & Support</a>
                </ListGroup.Item> */}
              </ListGroup>
            )}
          </MenuList>
          <MenuFooter>
            <LinkButton
              onClick={() => closeCatDropdown()}
              to="/become-an-instructor"
            >
              Become an Instructor
            </LinkButton>
          </MenuFooter>
        </div>
      </MenuDropDown>
      {/* <Dropdown id="iconStyle"
        text={isMobie?<FontAwesomeIcon icon={faBars} />:'Categories'}  
        style={{fontSize:'16px',color:themeColors.white, padding: '0 10px'}}
        className='link item parentDrop'
        onClick={!isOpen ? handleManuallyDropdown : () => {}}
        open={isOpen}
        closeOnBlur
      >
        
        <Dropdown.Menu className="dropdown-menu">
          
          
          {response.categories.map(category=>(
            <Dropdown.Item
              key={category.categoryID}
              onClick={(e)=>{ catClickHandler(e,category.categoryID,category.categoryName)}}
            >
              <Dropdown
                text={category.categoryName}
                className="simple dropdown-category"
                open={false}
                closeOnBlur
                closeOnChange
                style={{padding:'0'}}
                onClick={(e)=>{ catClickHandler(e,category.categoryID,category.categoryName)}}
                >

                <Dropdown.Menu  className="dropodown-subMenu">
                  {category.subCategories.map(subCategory=>(
                    //
                  <Dropdown.Item onClick={subCatClickHandler}
                                  key={subCategory.id}
                                  subName={subCategory.name}
                                  subcatid={subCategory.id} >{subCategory.name}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
          ))}
          <Dropdown.Item style={{textAlign:'center'}} onClick={handleBrowseAll}>
            <span style={{color:'#008cb6'}}> Browse All </span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
    </MenuButton>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  setSearch: (msg) => dispatch(setSearch(msg)),
  setSubCategory: (subcat) => dispatch(setSubCategory(subcat)),
  setCategory: (cat) => dispatch(setCategory(cat)),
});

export default connect(null, mapDispatchToProps)(MenuComponent);
