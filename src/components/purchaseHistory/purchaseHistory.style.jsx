import styled from 'styled-components';
import { mediaQueries } from '../../theme';

export const PurchaseHistoryContainer = styled.div`
.purchaseHistory-table{
  min-height: 800px;
  width: 100%;
  display: flex;
  overflow:auto;
  flex-direction: column;
  margin-top: 25px;
  .purchaseHistory-tableHeader{
    display: none;
    flex-wrap: wrap;
    margin: 0;
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 16px;
    min-width:600px;
    ${mediaQueries.md}{
      display: flex;
    }
  }
  .purchaseHistory-tableRow{
    display: flex;
    justify-content: space-around;
    margin: 0;
    min-width:600px;
    padding: 10px 0;
    border-top: 1px solid #EDEDED;
    align-items:flex-start;
  }
  .ph-Cell{
      display: flex;
      flex: 1 1 auto;
      align-items: center;
      width: 20%;
      padding:0px 10px;
  }
  .ph-Cell:first-child{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & p:first-child{
      font-weight: bold;
    }
  }
  .ph-Cell:last-child{
    width: 30%;
  }
}

.pagination-container{
  margin-top:58px;
  margin-bottom:150px;
  text-align: center;
  width: 100%;
  padding: 0;
  ${mediaQueries.md}{
    padding: revert;
  }
    li{
      padding: 0 10px;
      display: inline-block;
      list-style: none;
      a{
        width: 30px;
        height: 30px;
        line-height:30px;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        letter-spacing: 0.02em;
        color: #303030;
      }
      a:hover{
        cursor:pointer;
      }
    }
  .pagination-active{
    width: 30px;
    height: 30px;
    line-height:30px;
    color:#fff !important;
    background: #2D9CDB;
    border-radius: 4px;
    text-align:center;
  }
}

.ph-btn{
  width: 131px;
  height: 36px;
  line-height:36px;
  text-align:center;
  border: 1px solid #2D9CDB;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #2D9CDB;
}

.form-control {
  width: 100%;
  height: 45px;
  padding: 15px;
  border: 1px solid #EDEDED;
  border-radius: 5px;
}
.purchaseHistory-mobile{
  margin: 20px 0;
  .date{
    font-style: italic;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #9c9c9c;
    margin-bottom: 5px;
  }
  .discription{
    .title{
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      margin: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      color: #000000;
      margin-bottom: 20px;
    }
    .text{
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      margin: 0;
      display: flex;
      align-items: center;
      color: #000000;
    }
    
  }
  .amount-row{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 15px 0;
    border-bottom: 1px solid #CDCDCD;
    .amount{
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: #EB5757;
    }
    .download{
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      display: flex;
      align-items: center;

      /* blue */

      color: #2D9CDB;
    }
  }
}

`

export const PageTitleRow = styled.div`
  .pageTitle{
    padding:26px 0;
    margin-bottom: 30px;
    background:#2D9CDB;
    h4{
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      color: #FFFFFF;
    }
  }
  .breadcrumb {
    background: transparent;
    margin-bottom: 0;
    padding:0;
    .breadcrumb-item{
      a{
        color:#fff;
        img{
          margin-right:5px;
          position:relative;
          top:-3px;
        }
      }
    }
    .active {
      color: #fff;
    }
    .breadcrumb-item+.breadcrumb-item::before{
      color: #ffffff;
    }
  }
`
