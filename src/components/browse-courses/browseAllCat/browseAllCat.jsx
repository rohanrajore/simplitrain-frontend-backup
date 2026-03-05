import React,{useEffect,useState} from 'react';
//import "./browseAllCat.css";
import fetchAllCat from "./fetchAllCat";
import {useHistory} from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import {useSelector, useDispatch } from "react-redux";
import {setCategory,setSearch} from '../../../redux/browse-courses/browse-courses-actions.js';
import {BrowseAllCatContainer,PageTitleRow} from '../browseAllCat/browseAll.style';

const BrowseAllCat = props => {

  const [categories,setCategories] = useState([])

  const history= useHistory()
  const dispatch = useDispatch()

  const handleCtgClick = value =>{
       let ctg ={"id":value.categoryID,
                 "name":value.categoryTitle}
       dispatch(setCategory(ctg))
       dispatch(setSearch(""))
       history.push("/course-search")
  }

  const handleSearchAll = () =>{
     dispatch(setCategory(""))
     history.push("/course-search")
  }

  useEffect(()=>{
      const fetch = async () =>{
        let response = await fetchAllCat()
        setCategories(response.categoryList)
      }
      fetch()
  },[1])

  return(

  <BrowseAllCatContainer>

    <PageTitleRow>
      <div className="page-section pageTitle">
        <Container>
            <h4>All Categories</h4>
        </Container>
      </div>
    </PageTitleRow>
    <div className="page-section">
      <Container>
        <Row>
            
              {categories.map(item =>(
                <Col md={6} lg={4}>
                  <div className="browseAllCat-item" onClick={()=>handleCtgClick(item)}
                                                    key={item.categoryID}
                                                    id={item.categoryID}>
                        <img src={item.categoryImg}/>
                        <div className="browseAllCat-title">
                            <div className="categryTitle">{item.categoryTitle}</div>
                            <div className="categryDtls">{item.noOfCourses} Courses</div>
                        </div>
                  </div>
                </Col>
              ))}
        </Row>
        <div className="browseAll-itemLast" onClick={handleSearchAll}>
          <div className="browseAllCat-titleLast">
            <div>Search Through All Categories</div>
          </div>
        </div>
      </Container>
    </div>
  </BrowseAllCatContainer>
);}

export default BrowseAllCat;
