import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import './cartContainer.css';
import Cart from '../../components/cartPage/cart/cart.jsx';
import Checkout from '../../components/cartPage/checkout/checkout.jsx';
import { CartContainerStyle } from './cart.styles.jsx';
import { Container } from 'react-bootstrap';

const CartContainer = props => {

      const[headerName,setHeaderName] = useState("")

      useEffect(()=>(
        window.location.pathname==="/cart"?setHeaderName("Learning Cart"):
        window.location.pathname==="/cart-checkout"?setHeaderName("Checkout"):""
      ),[window.location.pathname])
return(
  <CartContainerStyle>
    <header className="page-section">
      <Container>
        <div className="cart-container-title">
          <h2>{headerName}</h2>
        </div>
      </Container>
    </header>

    <Switch>
          <Route path='/cart' exact render={props=> <Cart/>} publicRoute />
          <Route path='/cart-checkout' exact render={props=> <Checkout/>} publicRoute />

    </Switch>
  </CartContainerStyle>
);}

export default CartContainer;
