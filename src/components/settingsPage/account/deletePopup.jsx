import React from 'react';
import "./deletePopup.css";
import deleteProfile from "./deleteProfile.js";
import {connect, useSelector} from "react-redux";
import { logout } from "../../../redux/user/user.actions";
import { auth } from "../../../firebase/firebase.util";

const DeletePopup = ({logout, ...props}) => {

  const user = useSelector(state => state.user.currentUser)

  const handleDelete = async () =>{

     const response = await deleteProfile(user.id)
     if(response.actionResult==="SUCCESS"){
       auth.signOut();
       localStorage.setItem("anonymousUserID", "");
       logout()
       props.setOpenPopup(false)
     }
     else{
       console.log(response.actionResult)
     }
  }

  return(
  <div className="deletePopup-container">
      <div onClick={()=> props.setOpenPopup(false)}>
      </div>
      <div>
          <div className="deletePopup-title">Are you sure you want to delete your profile?
               If you confirm everything will be deleted from our database.</div>


          <div className="deletePopup-btns">
            <div onClick={handleDelete}>Confirm</div>
            <div onClick={()=> props.setOpenPopup(false)}>Cancel</div>
          </div>
      </div>
  </div>
);}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(DeletePopup);
