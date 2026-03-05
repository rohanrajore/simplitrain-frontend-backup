import styled from 'styled-components';

export const ReactPaginateReview = styled.div`
  padding:0;
  .review-title{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #041016;
  }
  .review-loadMoreBtn{
    background: #2D9CDB;
    border-radius: 5px;
    font-family: Lato;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    padding: 10px;
    text-align: center;
    width: max-width;
    max-width: 200px;
    margin-top: 20px;
    margin-left: calc(50% - 100px);
    &:hover{
      cursor: pointer;
    }
  }
  .pagination-container{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    margin: 10px auto;
    justify-content: center;
    align-items: center;
    li{
      padding: 4px 10px;
      font-size:13px;
      &.next, .previous{
        padding: 0px 10px;
      }
      a{
        color:#4F4F4F;
      }
      &.active{
        background: #2D9CDB;
        border-radius: 4px;
        a{
          color:#ffffff;
        }
      }
      &.disabled{
        a{
          color: #afafaf;
        }

      }
    }
  }
  .mb-100{
    margin-bottom:100px;
  }
`