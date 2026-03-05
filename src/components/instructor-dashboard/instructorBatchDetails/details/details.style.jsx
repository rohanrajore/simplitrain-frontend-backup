import styled from 'styled-components';

export const InstructorBatchDetails = styled.div`
.instructorBatch-details{
  border-top: 1px solid #EDEDED;
  padding: 15px 0px 0px 0px;
  .tabTitle{
    display: flex;
    justify-content: space-between;
    margin-bottom:15px;
  }
}
.instructorBatch-details > div:first-child{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.instructorBatch-details > div:nth-child(2){
  margin-bottom: 30px;
}
.instructorBatch-details > div:nth-child(3){
  margin-bottom: 15px;
}
.instructorBatch-details-venue{
  width: 100%;
  min-height: 175px;
  background: white;
  padding: 12px 40px 12px 12px;
  display: flex;
  @media (max-width: 480px) {
    flex-flow: column;
    padding: 10px;
  }
}
.instructorBatch-details-venue > img{
  width: 293px;
  height: 151px;
  margin-right: 20px;
  @media (max-width: 480px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }

}
.instructorBatch-details-venueInfo{
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 17px;
}
.instructorBatch-details-venueInfo > div:first-child{
  letter-spacing: 0.02em;
  color: #303030;
  margin-bottom: 18px;
}
.instructorBatch-details-venueInfo > div:nth-child(2){
  color: #041016;
  margin-bottom: 31px;
  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
}
.instructorBatch-details-venueInfo span{
  margin-left: 10px;
  font-weight: bold;
}
.instructorBatch-details-venueInfo > div:last-child{
  color: #2D9CDB;
  display: flex;
  font-weight: 500;
}
.instructorBatch-details-venueInfo > div:last-child > div{
  display: flex;
  margin-right: 40px;
}
.instructorBatch-details-venueInfo svg{
  margin-right: 12px;
  color: #2D9CDB;
  width: 18px;
  height: 18px;
}
.instructorBatch-details-venueInfo svg:hover{
  cursor: default;
  color: #2d9cdb;
}
.instructorBatch-details-head{
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #041016;
}
.instructorBatch-details-close{
  color: #EB5757;
  font-size: 17px;
}
.instructorBatch-details-close:hover{
  cursor: pointer;
  color: red;
}
.instructorBatch-details-close > svg{
  font-size: 20px;
}


`

