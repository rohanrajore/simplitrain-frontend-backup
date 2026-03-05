import styled from 'styled-components';

export const BrowseAllCatContainer = styled.div`

  .browseAllCat-item{
    display: flex;
    margin-bottom:20px;
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 4px;
    padding:10px;
    img{
      width: 152px;
      height: 122px;
      object-fit: cover;
      border-radius: 4px;
    }
    .browseAllCat-title{
      padding-left: 20px;
    }
    .categryTitle{
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #041016;
      margin-bottom:12px;
    }
    .categryDtls{
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.02em;
      color: #4F4F4F;
    }
  }
  .browseAllCat-titleLast{
    text-align: center;
    margin: 30px 0;
    color:#2D9CDB;
    cursor: pointer;
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
`
