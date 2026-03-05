import styled from 'styled-components';

export const ImageUploadStyle = styled.div`

.image-flex{
	display: flex;
	justify-content: center;
	align-items: center;
  }
  .delete-btn{
	background: #2D9CDB;
	color: white;
	border-radius: 5px;
	font-size: 16px;
	font-weight: 500;
	outline: none;
	padding: 8px 20px;
	border: none;
  }
  .relative-container{
	position: relative;
	img{
		width:100%;
	}
  }
  .absolute-centered{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
  }
  

`


