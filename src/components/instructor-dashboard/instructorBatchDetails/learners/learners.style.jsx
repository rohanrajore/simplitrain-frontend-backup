import styled from 'styled-components';

export const InstructorBatchDetails = styled.div`
.instructorBatch-learners-table{
  width: 95.5%;
  max-height: 441px;
  border: 1px solid #EDEDED;
  border-radius: 4px;
  margin-bottom: 0 !important;
}
.instructorBatch-learners-table-head{
  border-bottom: 1px solid #EDEDED;
  background: #F0F5FF;
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 60px;
  font-size: 14px;
  line-height: 17px;
  color: black;
}
.instructorBatch-learners-table-head > input:first-child{
  width: 5%
}
.instructorBatch-learners-table-head > div:nth-child(2){
  width: 30%
}
.instructorBatch-learners-table-head > div:nth-child(3){
  width: 25%
}
.instructorBatch-learners-table-head > div:nth-child(4){
  width: 25%
}
.instructorBatch-learners-table-head > div:last-child{
  width: 15%;
}
.instructorBatch-learners-table-body{
  background: white;
  padding: 20px 60px 20px 15px;
  max-height: 396px;
  overflow-y: scroll;
}
.instructorBatch-learners-table-body > div:last-child{
  margin-bottom: 0;
}
.instructorBatch-learners-table-bodyItem{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 17px;
  height: 32px
}
.instructorBatch-learners-table-bodyItem > input:first-child{
  width: 5%
}
.instructorBatch-learners-table-bodyItem > div:nth-child(2){
  width: 30%
}
.instructorBatch-learners-table-bodyItem > div:nth-child(3){
  width: 25%
}
.instructorBatch-learners-table-bodyItem > div:nth-child(4){
  width: 25%;
  color: #2DB417;
}
.instructorBatch-learners-table-bodyItem > div:last-child{
  width: 15%;
}
.instructorBatch-learners-table-bodyItem > div:last-child >div{
  height: 32px;
  width: 103px;
  color: #2D9CDB;
  background: white;
  border: 1px solid #2D9CDB;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.instructorBatch-learners-table-bodyItem > div:last-child >div:hover{
  cursor: pointer;
  color: white;
  background: #2D9CDB;
  transition: 0.3s;
}
.instructorBatch-details{
  .tabTitle{
    display: flex;
    justify-content: space-between;
    margin-bottom:15px;
    border-top: 1px solid #EDEDED;
    padding: 15px 0px 0px 0px;
  }
}
.instructorBatch-details-close{
  color: #EB5757;
  font-size: 17px;
}
.instructorBatch-details-head{
  font-weight: 600;
  font-size: 16px;
}

`

