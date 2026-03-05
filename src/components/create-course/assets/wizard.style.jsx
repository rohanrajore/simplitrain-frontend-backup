import styled from 'styled-components';

export const WizardContainer = styled.div`
html, body, #root {
	height: 100%;
	margin: 0;
	/*overflow: hidden;*/
}

#root > div,
.wizard-container {
	height: auto;
	min-height: 80vh;
}
.wizard-container header,
.wizard-container footer {
	color: #fff;
	background:#2D9CDB;;
}
.wizard-container h5 {
	margin: 15px 0;
}
.wizard-container header {
	/* position: fixed;
	top: 0;
	left: 0; */
	background-color: #2D9CDB;;
	/* width: calc(100% - 60px); */
	height: 90px;
	padding: 10px 30px;
}
.wizard-container header > div {
	max-width: 1180px;
	margin: 0 auto;
}
.wizard-container header h2,
.wizard-container header h5 {
	margin-top: 5px;
	margin-bottom: 10px;
}
.wizard-container footer {
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: cadetblue;
	width: 100%;
	height: 50px;
}

.wizard {
	display: flex;
	align-items: flex-start;
	height: 100%;
	width: 100%;
	margin: 0 auto;
}

.wizard .btn {
	border-radius: 5px;
	border: none;
	outline: none;
	padding: 8px 20px;
	background-color: #fff;
	color: #2D9CDB;
	font-size: 16px;
	font-weight: 500;
	margin-left: 10px;
	cursor: pointer;
}
.wizard .btn.blue {
	color: #fff;
	background-color: #2D9CDB;
	padding: 8px 50px;
	@media (max-width: 480px) {
		font-size:14px;
		padding: 8px 15px;
	}
	
}
.wizard .btn-addTag{
	color: #fff;
	margin-right: 15px;
	padding: 8px 40px;
	margin-top: 28px;
	background: #2D9CDB;
	border-radius: 4px;
}
.wizard .btn.btn-cancel {
	color: #F44336;
}
.wizard .btn.btn-save {
	color: #fff;
	background-color: #4CAF50;
}

.wizard-steps {
    background-color: #f8f8f8;
    padding: 20px;
    margin-right: 40px;
    margin-top: 15px;
    border-radius: 5px;
    counter-reset: liCounter;
    width: 100%;
}
.wizard-steps h5 {
  padding-left: 0px;
  margin-bottom: 34px;
}
.wizard-steps ul {
	padding: 0;
	margin: 0;
	list-style: none;
	position: relative;
}
.wizard-steps ul::before {
	content: "";
	display: block;
	width: 2px;
	height: 100%;
	background-color: #ABD7F1;
	position: absolute;
	left: 12px;
}
.wizard-steps li {
	padding-left: 35px;
	margin-bottom: 52px;
	counter-increment: liCounter;
	cursor: pointer;
}
.wizard-steps ul li.current {
	font-weight: 500;
	color: #2D9CDB;
}
.wizard-steps ul li::before {
	content: counter(liCounter);
	display: block;
	border: solid 1px #2D9CDB;
	color: #2D9CDB;
	position: absolute;
	left: 0;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	text-align: center;
	background: #fff;
	line-height: 24px;
}
.wizard-steps ul li.done::before {
	content: "✔";
	color: #fff;
	background-color: #4CAF50;
}
.wizard-steps ul li.current::before{
	background: #2D9CDB;
	color: #fff;
}
.wizard-steps li span {
	position: relative;
	/* top: 5px; */
}

.wizard-controls {
	position: absolute;
	bottom: -55px;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	width: 100%;
	min-height: 50px;
	height: auto;
	@media (max-width: 480px) {
		width: 97%;
	}
}

.wizard-sections {
	flex: 1;
	position: relative;
	// min-height: 700px;
	height: 100%;
	margin-bottom: 75px;
	@media (max-width: 480px) {
		width: 100%;
	}
}

.wizard-section {
	display: none;
	width: 100%;
	padding-left: 15px;
	height: calc(100% - 210px);
	@media (max-width: 480px) {
		width:100%;
		padding-right: 15px;
		padding-left:15px;
	}
}
.wizard-section.active {
	display: block;
}
.wizard-section-title {
	margin-bottom: 5px;
}

.error {
	color: #F44336
}
.back-dashboard-btn{
	color: #fff;
	background-color: #2D9CDB;
	border-radius: 5px;
	max-width: 100%;
	margin-top: 20px;
	min-height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;

}
.back-dashboard-btn:hover{
	cursor: pointer;
}
.pageTitle{
  padding: 26px 0;
  margin-bottom: 30px;
  background: #2D9CDB;
}
.course-overview{
  h5{
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #041016;
    border-bottom: 1px solid #E2E2E2;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }
}
.form-control{
  border: 1px solid #E2E2E2;
  box-sizing: border-box;
  border-radius: 4px;
  height:40px;
}
.input-limit {
  span{
    right: 5px;
    top: 3px;
    background: transparent;
    padding: 8px;
    margin: 5px;
    border-radius: 4px;
  }
}
.ql-editor{
  height:154px;
}
.addTagDiv .input-container {
	display: flex;
	flex-direction: column-reverse;
}
.course-overview select.form-control {
	display: inline-block;
	margin-bottom:15px;
}
.course-overview .image-message {
	vertical-align: text-top;
    font-size: 14px;
    letter-spacing: 0.02em;
    color: #4F4F4F;
    margin-top: 20px;
}
.course-overview .tag {
	display: inline-block;
	background: #F5F5F5;
	border-radius: 5px;
	padding: 8px 20px;
	margin-right: 5px;
}
.course-overview .tag small {
    color: #EB5757;
    margin-left: 10px;
    font-size: 13px;
    cursor: pointer;
}
.wizard-controls{
	.backBtn{
		color: #fff;
		background-color: #2D9CDB;
		padding: 8px 50px;
		@media (max-width: 480px) {
			padding: 6px 20px;
		}
	}
}

.input-limit {
	position: relative;
}

.input-limit .controls {
	position: absolute;
	right: 0;
	top: 0;
	height: 100%;
	display: flex;
	line-height: .8;
}
.input-limit span {
	right: 5px;
	top: 3px;
	background: transparent;
	padding: 8px;
	margin: 5px;
	border-radius: 4px;
}
.input-limit .handle,
.input-limit button {
	background-color: transparent;
	color: #2D9CDB;
	width: 40px;
	margin: 0px 5px 0 0;
	padding-left: 10px;
	outline: none;
	border: none;
  border-left: solid 1px #ccc;
}
.input-limit .handle {
	display: flex;
	align-items: center;
	justify-content: center;
}
.input-limit button {
	cursor: pointer;
}

.btn-add {
  border: none;
  border-radius: 50%;
  background-color: #2D9CDB;;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
  cursor: pointer;
  outline: none;
}
.input-list {
	margin-bottom: 20px;
}
.input-list h5 {
	position: relative;
	margin-bottom: 10px;
}
.input-list h5 button {
	color: #fff;
	position: absolute;
	right: 0;
}
.course-target .input-limit {
	margin-bottom: 10px;
}

.course-section {
	border: solid 1px #E2E2E2;
	border-radius: 4px;
	overflow: hidden;
	margin-bottom: 20px;
}
.course-section textarea {
	width: 100%;
	padding: 10px;
	color: #222;
  	font-size: 16px;
	line-height: 1.5;
	outline: none;
}
.course-section .aliceblue {
	border: 1px solid #E2E2E2;
	background-color: aliceblue;
	border-radius: 0;
}
.course-section .topics {
	padding: 10px;
}
.course-section .topics .input-limit {
	margin-bottom: 10px;
}
.course-section .topics .btn-add {
	background-color: #fa5638;
}
.course-section .topics .input-limit .handle, 
.course-section .topics .input-limit button {
	color: #fa5638;
}

.course-messages .submit-row {
	text-align: right;
	margin-top: 15px;
}

.wizard .quill {
	margin-bottom: 15px;
	margin-right: 0;
}

.wizard > div:first-of-type {
	@media (min-width:320px) and (max-width: 767px) {
		display:none;
	}
}

`

export const CurriculumStyle = styled.div`

.course-curriculum{
	h5{
	  font-weight: bold;
	  font-size: 20px;
	  line-height: 24px;
	  color: #041016;
	  border-bottom: 1px solid #E2E2E2;
	  padding-bottom: 10px;
	  margin-bottom: 30px;
	}
  }

  .course-target .input-limit {
	margin-bottom: 10px;
}

.course-section {
	border: solid 1px #E2E2E2;
	border-radius: 4px;
	overflow: hidden;
	margin-bottom: 20px;
}
.course-section textarea {
	width: 100%;
	padding: 10px;
	color: #222;
  	font-size: 16px;
	line-height: 1.5;
	outline: none;
}
.course-section .aliceblue {
	border: 1px solid #E2E2E2;
	background-color: aliceblue;
	border-radius: 0;
}
.course-section .topics {
	padding: 10px;
}
.course-section .topics .input-limit {
	margin-bottom: 10px;
}
.course-section .topics .btn-add {
	background-color: #2D9CDB;
}
.course-section .topics .input-limit .handle, 
.course-section .topics .input-limit button {
	color:#2D9CDB;
}
.course-messages .submit-row {
	text-align: right;
	margin-top: 15px;
}

`

export const TargetStyle = styled.div`


`

