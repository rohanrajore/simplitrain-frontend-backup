import styled from 'styled-components';

export const InstDashboardBatchCard = styled.div`
.instDashboard-batchCard{
  width: 100%;
  min-height: 255px;
  max-width: 100%;
  background: #F5F5F5;
  border: 1px solid #EDEDED;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 20px;
  @media (max-width: 480px) {
    padding: 5px;
  }
}
.instDashboard-batchCard > div:first-child{
  width: 100%;
  min-height: 180px;
  background: #FFFFFF;
  border: 1px solid #EDEDED;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  margin-bottom: 15px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 5px;
  }
}
.instDashboard-batchCard > ul{
  display: flex;
  list-style: none;
  padding-left: 0px;
  margin-bottom: 0;
  @media (max-width: 480px) {
    overflow: auto;
  }
}
.instDashboard-batchCard > ul[active="true"]{
  margin-bottom: 15px;
}
.instDashboard-batchCard > ul > li{
  padding: 0 15px;
  font-size: 14px;
  line-height: 17px;
  color:#4F4F4F;
  letter-spacing: 0.02em;
  border-right: 1px solid #BDBDBD;
}
.instDashboard-batchCard > ul > li:hover{
  cursor: pointer;
  color: #2D9CDB;
  transition: 0.3s
}
.instDashboard-batchCard > ul > li[active="true"]{
  color: #2D9CDB;
}
.instDashboard-batchCard > ul > li:first-child{
  padding-left: 0;
}
.instDashboard-batchCard > ul > li:last-child{
  border-right: 0;
}
.instDashboard-batchLeftTab{
  display: flex;
  width: 615px;
  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
}
.instDashboard-batchLeftTab > img{
  height: 140px;
  width: 138px;
  border-radius: 4px;
  margin-right: 20px;
  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
}
.instDashboard-batchLeftTab-info{
  display: flex;
  flex-direction: column;
}
.instDashboard-batchLeftTab-info > div:first-child{
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #041016;
  margin-bottom: 15px;
}
.instDashboard-batchLeftTab-info > div:nth-child(2){
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
  margin-bottom: 13px;
}
.instDashboard-batchLeftTab-info > div:nth-child(2) > svg{
  color: #2D9CDB;
  width: 16px;
  height: 16px;
  margin-right: 8px;
}
.instDashboard-batchLeftTab-info > div:nth-child(3){
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
  margin-bottom: 18px;
  display: flex;
  padding-left: 2px;
}
.instDashboard-batchLeftTab-info > div:nth-child(3) > svg{
  color: #2D9CDB;
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
.instDashboard-batchLeftTab-info > div:last-child{
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #EB5757;
}
.instDashboard-batchRightTab{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 480px) {
    align-items: stretch;
    margin-top: 15px;
  }
}

.instDashboard-batchRightTab hr{
  border-right: 1px solid #E2E2E2;
  height:100px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 0;
  @media (max-width: 480px) {
    display: none;
  }
}
.instDashboard-batchRightTab > div:first-child{
  display: flex;
  margin-bottom: 3px;
  height: 95px;
}
.instDashboard-batchRightTab > div:last-child{
  border: 1px solid #2D9CDB;
  border-radius: 4px;
  width: 165px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top:10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2D9CDB;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
}
.instDashboard-batchRightTab > div:last-child:hover{
  cursor: pointer;
  background: #2D9CDB;
  color: white;
  transition: 0.3s;
}
.instDashboard-batchRightTab-numbers{
  margin-bottom: 24px;
}
.marginBot0{
  margin-bottom: 0;
}
.instDashboard-batchRightTab-numbers > div:first-child{
  font-size: 14px;
  line-height: 17px;
  color: #303030;
  margin-bottom: 4px;
}
.instDashboard-batchRightTab-numbers > div:last-child{
  color: black;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  @media (max-width: 480px) {
    font-size: 12px;
  }
}
.instDashboard-batchRightTab-status{
  margin-right: 0px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  margin-left: 0px;
}
.instDashboard-batchRightTab-status > span{
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #2DB417;
  margin-left: 13px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
}

`

