import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import StepIcon from '@material-ui/core/StepIcon';
import StepConnector from '@material-ui/core/StepConnector';
import {  withStyles } from '@material-ui/core/styles';

// Here we import Stepper and its components from Material UI. Then we overwrite
// CSS of those components per our needs, by applying CSS rules that are described in their documents...
// Then we import those components in stepper.jsx and its ready for use.

const StepConectorModified = withStyles({
root:{
  paddingBottom: 0,
  marginLeft: 11.5
},
vertical: {
  top: 0,
  left: 0
},
line: {
  width:2,
  height: 50,
  border: 0,
  backgroundColor: '#ABD7F1',
  borderRadius: 1,
},
})(StepConnector);

const StepperModified = withStyles({
  root:{
    background: `#F5F5F5`,
    padding: 0,
  }
})(Stepper);

const StepIconModified = withStyles({
root: {
  color: 'white',
  display: 'flex',
  height: 25,
  width: 25,
  alignItems: 'center',
  borderRadius: '50%',
  border: '1px solid #2D9CDB'
},
active: {
  color:'#2D9CDB !important',
  border: 'none',
  '& text': {
    fill: 'white',
  },
},
completed:{
  color:'#2D9CDB !important',
  border: 'none'
},
text:{
  fontWeight: '500',
  fontSize: '14px',
  fill:'#2D9CDB'
},
})(StepIcon)

const StepLabelModified = withStyles({
label:{
  fontWeight: 'normal',
  fontSize: '14px',
  color: '#4F4F4F'
},
active:{
  color:'#4F4F4F',
  fontWeight:'500',
},
completed:{
  color:'#2D9CDB !important',
  fontWeight:'500',
}
})(StepLabel)

export  {StepConectorModified, StepperModified, StepIconModified, StepLabelModified};
