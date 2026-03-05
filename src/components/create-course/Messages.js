import React, {useState,useEffect} from 'react';
import ReactQuill from 'react-quill';
import "./react-quill.css";
import 'react-quill/dist/quill.snow.css';
import {useSelector} from 'react-redux';

function Messages({ onSubmit, editCourseDetails }) {
	const [welcome, setWelcome] = useState("");
	const [congrats, setCongrats] = useState("");
	const [focusFirstReactQuill, setFocusFirstReactQuill] = useState(false);
	const [focusSecondReactQuill, setFocusSecondReactQuill] = useState(false)
	const userMail = useSelector(state => state.user.currentUser.email)
	const defaultWelcome= `<p>Hey All, </p><p><br></p><p>Congrats on registering for this course.</p><p>If you have any question you can message me at ${userMail}.</p><p><br></p><p>Thanks!</p>`
  const defaultCongrats =`<p>Congratulations on completing this class.</p><p><br></p><p>Best Regards!!</p>`


	useEffect(()=>{
			setWelcome(editCourseDetails !== undefined?editCourseDetails.welcomeMessage:defaultWelcome)
			setCongrats(editCourseDetails !== undefined?editCourseDetails.congratulatoryMessage:defaultCongrats)
		},[editCourseDetails])

  return (
    <div className="course-messages">
			<h5>Welcome Message</h5>
			<ReactQuill value={welcome}
			 						onChange={setWelcome}
									className={focusFirstReactQuill? "react-quill": ""}
									onFocus={()=>setFocusFirstReactQuill(true)}
									onBlur={()=>setFocusFirstReactQuill(false)}/>
			<input type="hidden" name="welcome" value={welcome} />

			<h5>Congratulatory Message</h5>
			<ReactQuill value={congrats}
			 						onChange={setCongrats}
									className={focusSecondReactQuill? "react-quill": ""}
									onFocus={()=>setFocusSecondReactQuill(true)}
									onBlur={()=>setFocusSecondReactQuill(false)} />
			<input type="hidden" name="congrats" value={congrats} />

    </div>
  )
}

export default Messages;
