import React,{useRef,useEffect} from 'react';
import "./invoice.css";
import logo from "../../../assets/logo.png";
import response from "./responseJSON.js";
import Pdf from "react-to-pdf";


const Invoice = props => {

  const ref= useRef()

  return(
  <div className="invoice-container" ref={ref}>

      <div className="invoice-header">
          <img src={logo} className="logoInvoice" alt={"Logo"} />
          <div className="invoice-ID">
                <div className="invoice-ID-title">Invoice No:</div>
                <div className="invoice-ID-text">00031-2020</div>
          </div>
      </div>

      <div className="invoice-buyer">
          <div className="invoice-ID-title">Mr. Rohan Rajore</div>
          <div className="invoice-ID-text">173 Johnson Street</div>
          <div className="invoice-ID-text">North Carolina, USA</div>
      </div>

      <div className="invoiceTableHead">
            <div className="invoiceCell1">DESCRIPTION</div>
            <div className="invoiceCell2">PRICE</div>
            <div className="invoiceCell2">DISCOUNT</div>
            <div className="invoiceCell2">TOTAL</div>
      </div>

      {response.map(batch=>(
            <div className="invoiceTableBody" key={batch.id}>
                  <div className="invoiceCell1">{batch.description}</div>
                  <div className="invoiceCell2">{batch.price}</div>
                  <div className="invoiceCell2">{batch.discount}</div>
                  <div className="invoiceCell2">{batch.total}</div>
            </div>
      ))}

      <div className="invoice-totalContainer">
          <div className="invoice-total">
                <div className="invoice-totalField">TOTAL: </div>
                <div className="invoice-totalField">TAX: </div>
                <div className="invoice-totalField">AMOUNT:  </div>
          </div>
          <div className="invoice-total invoiceTotalValues">
                <div className="invoice-totalField">INR 5790.00</div>
                <div className="invoice-totalField">0%</div>
                <div className="invoice-totalField">INR 5790.00 </div>
          </div>
      </div>

      <div className="invoice-buyer">
          <div className="invoice-ID-title">Payment Information</div>
          <div className="invoice-ID-text">Account No: 4451-33596-22591-188893</div>
      </div>

      <div className="invoice-policy">
          This is proof of payment, and don't require any signature, due to Simplitrain policy.
      </div>

      <Pdf targetRef={ref} filename="invoiceExample" x={0} y={0} scale={0.75}>
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
  </div>
);}

export default Invoice;
