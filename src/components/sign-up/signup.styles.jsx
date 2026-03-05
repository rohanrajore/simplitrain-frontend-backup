import styled from 'styled-components';
import { mediaQueries, themeColors } from '../../theme';

export const SignupComponentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding:20px 0;
  flex-direction: column;
  ${mediaQueries.md}{
    width: 95%;
  }
  ${!mediaQueries.md}{
    .row{
      .col-lg-6{
        padding-left:15px !important;
        padding-right:15px !important;
      }
    }
  }
  
  .termsText{
    margin-bottom:30px;
    a{
      color:#2D9CDB;
      padding: 0 5px;
    }
  }
  input{
    width: 100%;
    &.checkbox{
      width:30px;
    }
  }
`;