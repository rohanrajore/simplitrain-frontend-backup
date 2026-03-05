import React from 'react';
// import "./cartDropdown.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import CartCourse from "./cart-course/cartCourse.jsx";


const CartDropdown = props => {

    const cart = useSelector(state => state.cart)
    const cartArray= useSelector(state => state.cart.cartArray)
    const wishlistArray = useSelector(state => state.cart.wishlistArray)

  return(
    <div className="cart-dropdown" id="cartDropdown">

      <FontAwesomeIcon
        className="icon-handPoint"
        icon={faCaretUp}
        size="2x" />

      {(props.name==="cart"?cartArray.length:wishlistArray.length)===0?
        <div className="no-cart">
          <div className="no-card-msg">
            {props.name==="cart"?"Your Cart is Empty"
                                :"Your Wishlist is Empty"}
          </div>


          {props.name==="cart" && <Link to="/">
            Keep Learning
          </Link>}
        </div>

        :<React.Fragment>
        {(props.name==="cart"?cartArray.slice(0,3):wishlistArray.slice(0,3)).map(course=>(
          <CartCourse
            key={props.name==="cart"?course.cartItemCard.id
                                    :course.wishListItemCard.courseBatchID}
            id={props.name==="cart"?course.cartItemCard.id
                                    :course.wishListItemCard.courseBatchID}
            title={course[props.name==="cart"? "cartItemCard": "wishListItemCard"].title}
            img={course[props.name==="cart"? "cartItemCard": "wishListItemCard"].img}
            author={course[props.name==="cart"? "cartItemCard": "wishListItemCard"].author}
            date={course[props.name==="cart"? "cartItemCard": "wishListItemCard"].date}
            price={course[props.name==="cart"? "cartItemCard": "wishListItemCard"].currentPrice}
            action={props.name}
            />
        ))}

         {props.name==="cart" && <div className="cart-dropdown-priceSummary">
            <div>
              <FontAwesomeIcon icon={faRupeeSign} /> {cart.totalAmount}
            </div>
            &nbsp;
            <div>
              (You save <FontAwesomeIcon icon={faRupeeSign} style={{marginLeft:"2px"}}/> {cart.totalDiscount})
            </div>
         </div>}

         <div className="cart-dropdown-moreBackground">
             {(props.name==="cart"?cartArray.length>3:wishlistArray.length>3)
               && <div className="cart-dropdown-more"> +
                      {props.name==="cart"?cartArray.length-3 :wishlistArray.length-3 }
                       {" "}more items in {props.name==="cart"?" Cart":" Wishlist"}
                  </div>}
                  &nbsp;
             <Link to={props.name==="cart"?"/cart"
                                          :"/wishlist"}
                   className="cart-dropdown-btn">{props.name==="cart"?"Go to Cart"
                                                                     :"Go to Wishlist"}
             </Link>
         </div>

        </React.Fragment>
      }
    </div>
);}

export default CartDropdown;
