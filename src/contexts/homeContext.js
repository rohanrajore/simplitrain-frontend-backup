import React from "react";
import pic3 from '../assets/background-image1.jpeg';
import pic1 from '../assets/619a88cbb6223.jpg';
import pic2 from '../assets/619a88f3def6b.jpg';
import pic4 from '../assets/619a884acad79.jpg';
import pic5 from '../assets/619a892c1c4a3.jpg';
import pic6 from '../assets/619a894870742.jpg';


import ExpertInstructors from '../assets/expert-instructors.svg';
import LiveTrainings from '../assets/live-trainings.svg';
import TonsChoices from '../assets/tons-choices.svg';
// 'https://www.glassdoor.com/blog/app/uploads/sites/2/iStock-667849954-1024x450.jpg', 'https://assets.entrepreneur.com/content/3x2/2000/20180606191756-GettyImages-900914464.jpeg', 
export const HomeBanner = pic4;

export const HomeBannerContent = [
    {
        title:'Live Trainings',
        pera:'Nothing better than getting trained in class',
        icon:LiveTrainings,
        mobileIcon:LiveTrainings,
        hideMobile:false,
    },
    {
        title:'Expert Instructors',
        pera:'Learn from the best of the̥ Instructors',
        icon:ExpertInstructors,
        mobileIcon:ExpertInstructors,
        hideMobile:true,
    },
    {
        title:'Tons of choices',
        pera:'Choose what bets fits your needs',
        icon:TonsChoices,
        mobileIcon:TonsChoices,
        hideMobile:true,
    }
];

