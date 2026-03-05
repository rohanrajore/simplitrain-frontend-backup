import styled from 'styled-components';
import { mediaQueries } from '../../theme';

export const WishlistContainer = styled.div`
  .wishlist-content{
    & > div{
      padding:0px;
    }
    ${mediaQueries.md}{
      & > div{
        padding:14px;
      }
    }

    margin-bottom: 150px;
    .wishlist-title{
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #041016;
      padding-bottom: 13px;
      margin-bottom:30px;
      border-bottom: 1px solid #EDEDED;  
    }
    .cartCourse-container{
      margin-bottom: 20px;
      height: auto;
      padding: 20px;
        .cartCourse-image{
          height: 100px;
          width: 200px;
          margin-left: 0;
          border-radius: 4px;
          object-fit: cover;
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