import React,{useState,useEffect} from 'react';
import "./purchaseHistory.css";
import response from "./responseJSON.js";
import ReactPaginate from 'react-paginate';
import Invoice from "./invoice/invoice.jsx";
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import {PurchaseHistoryContainer, PageTitleRow} from "../purchaseHistory/purchaseHistory.style";
import HomeIcon from '../../assets/home.png';
import fetchPurchaseHistory from "./fetchPurchaseHistory.js";
import fetchInvoice from "./invoice/fetchInvoice.js";
import {useSelector} from "react-redux";
import moment from 'moment';
import { useMatchBreakpoints } from '../../hooks';


const PurchaseHistory = props => {

  const { isLg, isXl } = useMatchBreakpoints();
  const isMobie = !isLg && !isXl;
  const [purchaseHistoryArray, setPurchaseHistoryArray] = useState([])
  const [pageNumber, setPageNumber] = useState(0)

  const handlePageClick = e =>{
    setPageNumber(e.selected)
  }

  const user = useSelector(state => state.user.currentUser)

  const handleInvoice = async (invID) =>{
    const response = await fetchInvoice(invID)
  }

  useEffect(()=>{
      async function fetch(){
        const response = await fetchPurchaseHistory(user.id)

        if(response.actionResult==="SUCCESS"){
          setPurchaseHistoryArray(response.purchaseHistoryCardList)
        }
      }
      fetch()
  },[1])

  return(

    <PurchaseHistoryContainer>

  <PageTitleRow>
    <div className="pageTitle page-section">
      <Container>
          <h4>Purchase History</h4>
          {/* <Breadcrumb>
          <Breadcrumb.Item href="#"><img src={HomeIcon}/> Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Purchase History</Breadcrumb.Item>
        </Breadcrumb> */}
      </Container>
    </div>
  </PageTitleRow>
    <div class="page-section">
  <Container>
    {/* <Row>
      <Col sm={12} lg={6} className="form-group phSelect">
      <label htmlFor="ph-perPage">Purchases Per Page</label>
        <select className="form-control" id="ph-perPage">
                <option value="10"> 10</option>
                <option value="20"> 20</option>
                <option value="50"> 50</option>
        </select>
      </Col>
    </Row> */}

    {
      purchaseHistoryArray.length > 0 ?
      <div className="purchaseHistory-table">
        <div className="purchaseHistory-tableHeader">
            <div className="ph-Cell">Courses</div>
            <div className="ph-Cell">Date</div>
            <div className="ph-Cell">Amount</div>
            <div className="ph-Cell">Invoice</div>
        </div>


        {purchaseHistoryArray.slice(pageNumber*10,pageNumber*10+10).map(invoice=>(
            isMobie?
            
              <div className="purchaseHistory-mobile" key={invoice.id}>
                <div className="date">{moment(new Date(invoice.date)).format('Do MMM YYYY')}</div>
                <div className="discription">
                  <p className='title'>{invoice.quantity} {invoice.quantity===1?"course":"courses"} purchased</p>
                  {invoice.courseTitles.map(course=>(
                    <p className='text' key={course}>{course}</p>
                  ))}
                </div>
                <div className='amount-row'>
                  <div className="amount">INR {invoice.amount}</div>
                  <div className="download" onClick={()=>handleInvoice(invoice.id)}>Download PDF</div>
                </div>
              </div>
            : <div className="purchaseHistory-tableRow" key={invoice.id}>
              <div className="ph-Cell">
                <p>{invoice.quantity} {invoice.quantity===1?"course":"courses"} purchased</p>
                {invoice.courseTitles.map(course=>(
                  <p key={course}>{course}</p>
                ))}
              </div>
              <div className="ph-Cell">{moment(new Date(invoice.date)).format('Do MMM YYYY')}</div>
              <div className="ph-Cell">INR {invoice.amount}</div>
              <div className="ph-Cell">
                    <div className="ph-btn"
                        onClick={()=>handleInvoice(invoice.id)}>Download PDF</div>
              </div>

            </div>
        ))}

        <ReactPaginate
          previousLabel={'prev'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={purchaseHistoryArray.length/10}
          onPageChange={handlePageClick}
          pageClassName={'pagination-li'}
          pageLinkClassName={'pagination-link'}
          previousLinkClassName={'pagination-link'}
          nextLinkClassName={'pagination-link'}
          activeLinkClassName={'pagination-active'}
          containerClassName={'pagination-container'}
          subContainerClassName={'pages pagination'}
          activeClassName={'pagination-active'}
          forcePage={0}
        />

    </div>
      :<div >
        <h4 style={{textAlign:'center', fontSize: 20}}>0 items in the Purchase History</h4>
      </div>
    }


    </Container>
          </div>
  </PurchaseHistoryContainer>
);}

export default PurchaseHistory;
