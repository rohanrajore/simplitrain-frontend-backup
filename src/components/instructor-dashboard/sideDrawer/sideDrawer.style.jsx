import styled from 'styled-components';

export const SideDrawerWrapper = styled.div`
.sideDrawer{
  background-color: #eff4f7;
  color: #818487;
  position: fixed;
  top: 0;
  right:0;
  width: 65%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  z-index: 200;
}
.sideDrawer ul{
  list-style-type: none;
  padding: 0;
  width: 95%;
}
.sideDrawer li{
  margin: 15px 0;
  font-size: 17px;
}
.sideDrawer span{
  font-weight: bold;
  font-size: 23px;
  margin-left: 15px;
}
.list-title{
  font-weight: bold;
  font-size: 25px;
}
.link{
  text-decoration: none;
  color: #818487;
}
.link:hover{
  color:#008cb6;
  cursor: pointer;
}
.link-active{
  border-left: 5px solid #008cb6;
  color: #008cb6
}
`

