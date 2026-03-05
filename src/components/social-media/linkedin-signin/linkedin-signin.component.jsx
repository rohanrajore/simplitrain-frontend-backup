import React from 'react';
import './linkedin-signin.style.scss';

const LinkedinLogin = ({onClick, icon}) => {

    return (
        <button className={'linkedInBtn'} value={'LinkedIn'} onClick={onClick}>{icon}</button>
    )
};

export default LinkedinLogin;
