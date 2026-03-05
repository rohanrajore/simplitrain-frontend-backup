import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
// import './category.css';
import styled from 'styled-components';
import { Dropdown, Menu } from 'semantic-ui-react';
import {
  selectIsSignedIn,
  selectIsInstructor,
} from "../../../../redux/user/user.selectors";
import {useSelector, useDispatch} from 'react-redux';
import {setCategory,setSearch,setSubCategory} from '../../../../redux/browse-courses/browse-courses-actions.js';
import response from '../JSONdetails.js';
import { themeColors, mediaQueries, fonts } from '../../../../theme';
import useMatchBreakpoints from '../../../../hooks/useMatchBreakpoints.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';
import { LinkButton } from '../../../header/header.styles.jsx';


export const CategoryButton = styled(Menu)`

    ${!mediaQueries.md}{
    background: transparent !important;
    box-shadow: none !important;
    border: 0 !important;
    margin-bottom:0px !important;
    .parentDrop{
      border:0;
      background: transparent !important;
      svg{
        font-size:24px;
      }
      .dropdown.icon{
        display:none !important;
      }
    }  
    .parentDrop::before {
        border: 0;
        display: none;
    }
  }
  
  ${mediaQueries.md}{
    margin-bottom:0px !important;
    border:none !importantd
    box-shadow:none !important;
    height:36px !important;
    min-height:36px !important;
    background:${themeColors.primary} !important;
    .parentDrop{
      .text{
        display:block !important;
      }
      .dropdown.icon{
        display:flex !important;
      }
    } 
  }
  & *{
    font-size:14px;
  }
  .ui.pointing.dropdown>.menu:after {
    top: -.25em;
    right: 5%;
    left: auto;
    margin: 0 0 0 -.25em;
  }
  .ui.dropdown .menu{
    left: -120%;
    width: 240px;
    min-width:100% !important;
    border:0px !important;
  }
  .menu.dropdown-menu{
    padding: 0px !important;
    position: fixed !important;
    height: calc(100% - 50px) !important;
    width: 100% !important;
    min-width: 100% !important;
    overflow-y: auto;
    left: 0 !important;
    top: 50px !important;
    z-index: 10000 !important;
    ${mediaQueries.md}{
      overflow-y: revert;
      position: absolute !important;
      height: auto !important;
      width: 240px !important;
      min-width: revert !important;
      left: -120% !important;
    }
    & > div{
      position: relative !important;
      height: 40px !important;
      .dropdown-category{
        position: absolute !important;
        width: 100% !important;
        height: 100% !important;
        height: 40px !important;
        left: 0 !important;
        display: flex;
        box-sizing: border-box !important;
        justify-content: space-between;
        top: 0 !important;
        padding: 12px 20px !important;
        box-sizing: border-box !important;
      }

    }
    & .mobile-buttons{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 10px;
      height: auto !important;
      .login-signup{
        flex-direction: row;
        display: flex;
        justify-content: space-between;
      }
      .bookings-button{
        padding: 20px 10px 16px 10px;
        border-bottom: 1px solid #EDEDED;
      }
      button{
        width:100%;
        background: #E5F3FB;
        height:46px;
        border-radius:0px;
        border:0;
        margin: 0 8px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #2D9CDB;
      }
    }
    & .profileDropDown-user{
      height: auto !important;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px;
      img{
        width: 50px;
        border-radius: 100px;
        margin-right: 10px;
      }
      .profileDropDown-userInfo{
        h4{
          margin:0;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.02em;
          color: #303030;
        }
        p{
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.02em;
          color: #4F4F4F;
        }
      }
    }
  }


  .ui.simple.dropdown:hover>.menu{
    width: 100% !important;
    left: 0px !important;
    right: auto !important;
    margin: 0 !important;
    border-radius: 0 !important;
    ${mediaQueries.md}{
      top: 0px !important;
      margin: 0 !important;
      border-radius: 0 !important;
      left: 100% !important;
      /* left: auto; */
      margin-left: 0px !important;
    }
  }
`;

const Category = () => {

  const dispatch =useDispatch()
  const history = useHistory()
  const [isOpen,setIsOpen] = useState(false);
  const isSignedIn = useSelector(selectIsSignedIn);
  const user = useSelector((state) => state.user.currentUser);
  const [isOpenSubDropdown, setIsOpenSubDropdown] = useState(false)
  const { isLg, isXl } = useMatchBreakpoints();
  const isMobie = !isLg && !isXl;
  const subCatClickHandler = e =>{
    dispatch(setSearch(""))
    let subCategory={"id":e.target.getAttribute("subCatID"),
                  "name":e.target.getAttribute("subName")}
    dispatch(setSubCategory(subCategory))
    setIsOpen(false)
    if(window.location.pathname!=="/course-search") history.push("/course-search")
  }

  const catClickHandler= (e,catID,catName) =>{
    let subName = e.target.getAttribute("subName")
    console.log(subName)
    if(!subName){
        dispatch(setSearch(""))
        let category={"id":catID,
                      "name":catName}
                      console.log(category)
        dispatch(setCategory(category))
        setIsOpen(false)
        if(window.location.pathname!=="/course-search") history.push("/course-search")
    }
  }

  const handleBrowseAll = () =>{
    history.push("/course-search/browse-all")
    setIsOpen(false)
  }

  const handleManuallyDropdown = (e) =>{
    if(e !==undefined){
      e.preventDefault()
    }
    setIsOpen(true);
      document.addEventListener('click', closeCatDropdown)
  }

  const closeCatDropdown = (e) =>{
       setIsOpen(false)
       document.removeEventListener('click', closeCatDropdown)
  }
  
  return(
    <CategoryButton id="categoryMenu">
      <Dropdown id="iconStyle"
        text={isMobie?<FontAwesomeIcon icon={faBars} />:'Categories'}  
        style={{fontSize:'16px',color:themeColors.white, padding: '0 10px'}}
        className='link item parentDrop'
        onClick={!isOpen ? handleManuallyDropdown : () => {}}
        open={isOpen}
        closeOnBlur
      >
        
        <Dropdown.Menu className="dropdown-menu">
          {
            isMobie?
              isSignedIn?
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
              :
              <div className="mobile-buttons">
                <div className='login-signup'>
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
                >
                  My Bookings
                </LinkButton>
              </div>
            :null
          }
          
          {/* <Dropdown.Header>Categories</Dropdown.Header> */}
          {response.categories.map(category=>(
            <Dropdown.Item
              key={category.categoryID}
              onClick={(e)=>{ catClickHandler(e,category.categoryID,category.categoryName)}}
            >
              {/* This false will prevent category to be clicked, it will only work on hover*/}
              <Dropdown
                text={category.categoryName}
                // catID={category.categoryID}
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
      </Dropdown>
    </CategoryButton>
)}

export default Category;
