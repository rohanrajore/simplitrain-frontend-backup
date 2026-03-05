import styled from 'styled-components';

export const CoursesContainer = styled.div`
  width:100%;
  .courses-container{
    width:100%;
    @media (min-width:320px) and (max-width: 768px) {
      padding:5px;
    }
  }
  .batches-timeline{
    width: auto;
    display: flex;
  }
  .batches-timeline > div {
      padding: 10px 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #303030;
  }
  .batches-timeline > div:hover{
    cursor: pointer;
  }
  .batches-timeline > div[active="true"]{
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #2D9CDB;
  }
  .insDash-batches-title{
      border-bottom: 1px solid #EDEDED;
      color: #041016;
      font-weight: 800;
      font-size: 16px;
      margin-top: 25px;
      margin-bottom: 25px;
      padding-bottom: 10px;
      width: 98%
    }
  .batches-search-container{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      @media (max-width: 1150px) {
        font-size: 15px;
      }
    }
    .batches-search-container > div:first-child{
      background: #F5F5F5;
      border: 1px solid #EDEDED;
      box-sizing: border-box;
      border-radius: 4px;
      display: flex;
      align-items: center;
      width: auto;
      padding-left: 20px;
      height: 35px;
    }
    .batches-search-container input{
      background: #F5F5F5;
      width: 330px;
      border: none;
      @media (max-width: 480px) {
        width: 100%;
      }
    }
    .batches-search-container input:focus{
      outline: none;
    }
    .batches-search-container .select-location{
      min-width: 150px;
    }
  .batches-searchIcon{
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #2D9CDB;
    color: white;
    height: 100%;
    font-size: 19px;
  }
  .batches-searchIcon:hover{
    cursor: pointer;
  }
`

