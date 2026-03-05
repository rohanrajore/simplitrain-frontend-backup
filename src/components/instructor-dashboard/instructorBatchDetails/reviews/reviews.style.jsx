import styled from 'styled-components';

export const ReviewStyleContainer = styled.div`
.instructorBatch-reviewsContainer{
  max-width: 863px;
  margin-bottom: 0 !important;
}
.instructorBatch-reviewItem{
  background: #FFFFFF;
  border: 1px solid #EDEDED;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  margin-bottom: 20px;
}
.instructorBatch-reviewItem > div:first-child{
  background: #81C4E9;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  height: 39px;
  max-width: 863px;
  padding-left: 20px;
  display: flex;
  align-items: center;
}
.instructorBatch-reviewContent{
  padding: 15px 20px 20px 20px;
}
.instructorBatch-reviewContent > div:first-child{
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #041016;
  margin-bottom: 10px;
  max-width: 655px;
}
.instructorBatch-reviewContent > div:nth-child(2){
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #4F4F4F;
  margin-bottom: 20px;
}
.instructorBatch-reviewContent > textarea{
  border: 1px solid #EDEDED;
  box-sizing: border-box;
  border-radius: 4px;
  height: 95px;
  resize: none;
  width: 100%;
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #041016;
  padding: 10px;
}
.instructorBatch-reviewContent > textarea:focus{
  outline: 1px solid #81C4E9;
}
.instructorBatch-reviewContent > div:last-child{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
}
.instructorBatch-reviewContent > div:last-child > div:first-child{
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
}
.instructorBatch-reviewContent hr{
  border-right: 1px solid #BDBDBD;
  transform: rotate(90deg);
  width: 18px;
  margin-left: 20px;
  margin-right: 20px;
}
.instructorBatch-reviewContent > div:last-child > div:last-child{
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #2D9CDB;
}
.instructorBatch-reviewContent > div:last-child > div:last-child:hover{
  cursor: pointer;
}
.instructorBatch-reviewContent > div:last-child > div:last-child[active="true"]{
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  padding: 6px 10px;
  background: #2D9CDB;
  border-radius: 4px;
}
.instructorBatch-reviewContent svg{
  width: 16px !important;
  height: 16px;
  color: #2D9CDB;
}
.instructorBatch-reviewContent svg:hover{
  cursor: pointer;
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

