import styled from 'styled-components';

export const HeaderContainer = styled.div`
.header-container{
  width: 100%;
  height: 100px;
  padding: 0px 40px;
  background: #2D9CDB;;
  display: flex;
}
.header-content{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #d7f5f8;
}
.header-title{
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  color:#fff;
}
.toggle{
  display:none;
  margin-right: 0;
  margin-left: auto;
  width: 0;
  height: 100%;
  @media (min-width:320px) and (max-width: 767px) {
    display: flex;
    padding-bottom: 25px;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
  }  
}
.header-link-color{
  color: #fff;
}
.header-link-color:hover{
  color: white;
}
`

