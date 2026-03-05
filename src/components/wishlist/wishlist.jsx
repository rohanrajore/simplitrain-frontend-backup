import React from 'react';
//import './wishlist.css';
import {useSelector} from "react-redux";
import CartCourse from "../cartPage/course/course.jsx";
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {WishlistContainer, PageTitleRow} from "../wishlist/purchaseHistory.style";
import HomeIcon from '../../assets/home.png';

const Wishlist = props =>{

  const wishlistArray = useSelector(state => state.cart.wishlistArray)

  return(

  <WishlistContainer>

  <PageTitleRow>
    <div className="pageTitle page-section">
      <Container>
          <h4>My Wishlist</h4>
          {/* <Breadcrumb>
          <Breadcrumb.Item href="#"><img src={HomeIcon}/> Home</Breadcrumb.Item>
          <Breadcrumb.Item active>My Wishlist</Breadcrumb.Item>
        </Breadcrumb> */}
      </Container>
    </div>
  </PageTitleRow>
    <div class="page-section">
  <Container>
    <div className="cart-container wishlist-container">
      <div className="wishlist-content">
          {/* <div className="wishlist-title">My Wishlist</div> */}
          {
            wishlistArray.length > 0?
              wishlistArray.map(course=>(
                <CartCourse id={course.wishListItemCard.courseBatchID}
                  img={course.wishListItemCard.img}
                  title={course.wishListItemCard.title}
                  author={course.wishListItemCard.author}
                  key={course.wishListItemCard.courseBatchID}
                  date={course.wishListItemCard.date}
                  currentPrice={course.wishListItemCard.currentPrice}
                  oldPrice={course.wishListItemCard.oldPrice}
                  discount={course.wishListItemCard.discount}
                  wishlist={true}/>
              )) 
            :<div >
              <h4 style={{textAlign:'center', fontSize: 20}}>0 items in the Wishlist</h4>
            </div>
          }

      </div>
    </div>
  </Container>
  </div>
  </WishlistContainer>
);}

export default Wishlist;
