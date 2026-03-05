import Axios from 'axios';
import callCheckout from "./razorpay/checkout.js";
import razorPayment from "./razorpay/razorPayment.js";
import fetchAfterPaymentDetails from "./fetchAfterPaymentDetails.js";
import { store } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';

const paymentHandler = async (cartID,user,dial,phone,email) => {

// Checkout razor API called to capture orderID
let checkout = await callCheckout(cartID,user===null?"":user.id,localStorage.getItem("anonymousUserID"))
console.log(checkout)
const options = {
  key: process.env.REACT_APP_RAZORPAY_KEY,
  name: "Simplitrain",
  description: "Simplitrain checkout",
  prefill: {'contact': dial+phone, 'email':email},
  order_id: checkout.orderId,    // Here we get paymentID and call payment razor API
  handler: async (response) => {
    try {
     const razorPaymentId = response.razorpay_payment_id;
     const razorOrderId = response.razorpay_order_id;
     const razorSignature = response.razorpay_signature;

     var captureResponse = await razorPayment(razorPaymentId,razorOrderId,razorSignature)
     console.log(captureResponse)

       // show notification to user
       store.addNotification({
         title: captureResponse.actionResult,
         message: captureResponse.message,
         type: captureResponse.actionResult==="FAILURE"?"danger":"success",
         container: "top-right",
         animationIn: ["animated", "fadeIn"],
         animationOut: ["animated", "fadeOut"],
         dismiss: {
           duration: 4000
         },
       })
       // If payment is done, then user will be redirected to payments details
       if(captureResponse.actionResult==="SUCCESS"){
       window.location.replace(`/payments/${checkout.receiptID}`)
       }

    } catch (err) {
      //show notification to user
      store.addNotification({
        title: "FAILURE",
        message: "Payment couldn't be completed, please try again",
        type: captureResponse.actionResult==="FAILURE"?"danger":"success",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 4000
        },
      })
    }
  },
  theme: {
    color: "#4183c4",
  },
};
const rzp1 = new window.Razorpay(options);
rzp1.open();

};

export default paymentHandler;
