import styled from 'styled-components';

export const CoursesStyleContainer = styled.div`
width:100%;
.courses-container{
  width: 100%;
  flex-direction: column;
  height: auto;
}
.search-container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.insDash-myCourses-title{
  border-bottom: 1px solid #EDEDED;
  color: #041016;
  font-weight: 800;
  font-size: 16px;
  margin-top: 25px;
  margin-bottom: 25px;
  padding-bottom: 10px;
  width: 98%;
}

.search-container > div:first-child{
  display: flex;
  align-items: center;
  width: auto;
  background: #F5F5F5;
  border: 1px solid #EDEDED;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 20px;
}
.search-container input{
  background: #F5F5F5;
  width: 330px;
  border: none;
  @media (min-width:320px) and (max-width:767px) {
    width: 100%;
  }
}
.search-container input:focus{
  outline: none;
}
.search-container .select-location{
  min-width: 150px;
  @media (min-width:320px) and (max-width:767px) {
    margin-top: 15px;
  }
}
.myCourses-searchIcon{
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2D9CDB;
  border-radius: 4px;
  color: white;
  height: 32px !important;
  font-size: 19px;
}
.myCourses-searchIcon:hover{
  cursor: pointer;
}
.search{
  border: 1px solid #818487;
  height: 45px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  @media (max-width: 1150px) {
    width:200px;
  }
}
.search input{
  height: 80%;
  width: 83%;
  border: none;
  font-size: 16px;
  color: #818487
  @media (max-width: 1150px) {
    font-size: 14px;
  }
}
.search input:focus{
  outline: none;
}
.per-page{
  height: 55%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#818487;
}
.per-page input{
  color: #818487;
}
.per-page input:focus{
  outline:none
}
.button{
  background: #2D9CDB;
  color: white;
  border-radius: 4px;
  width: 115px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
}
.button:hover{
  cursor: pointer;
  color: white;
}
.content{
  height: 100%;
  width: 100%;
}
`
