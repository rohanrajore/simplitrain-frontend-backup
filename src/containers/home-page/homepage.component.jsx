import React, { useState, useEffect, Suspense } from "react";

import { HomePageContainer } from "./homepage.styles";
// import "./homepage.styles.scss";
import { Helmet } from "react-helmet";
import FullPageLoader from '../../common/fullpage-loader/FullPageLoader';
// import Trending from '../../components/homePage/trendingCourses/trending.jsx';
// import JoinTrainer from '../../components/homePage/joinTrainer/joinTrainer.jsx';
// import BecomeInstructor from '../../components/homePage/becomeInstructor/becomeInstructor.jsx';
// import StudentsReview from '../../components/homePage/studentsReview/studentsReview.jsx';
// import LoginAndSignupPage from "../login-signup/login-signup.component";
// import ImageSlideshow from "./imageSlider.jsx";

const Trending = React.lazy(() =>
  import("../../components/homePage/trendingCourses/trending.jsx")
);
const JoinTrainer = React.lazy(() =>
  import("../../components/homePage/joinTrainer/joinTrainer.jsx")
);
const BecomeInstructor = React.lazy(() =>
  import("../../components/homePage/becomeInstructor/becomeInstructor.jsx")
);
const StudentsReview = React.lazy(() =>
  import("../../components/homePage/studentsReview/studentsReview.jsx")
);
// const LoginAndSignupPage = React.lazy(() =>
//   import("../login-signup/login-signup.component")
// );
const ImageSlideshow = React.lazy(() => import("./imageSlider.jsx"));

const HomePage = (props) => {
  const [showLoginAfterRedirected, setShowLoginAfterRedirected] =
    useState(true);
  const handleLoginAfterRedirected = () => setShowLoginAfterRedirected(false);

  return (
    <HomePageContainer>
     
      <Helmet>
        <title>Welcome to SimpliTrain</title>
        <meta name="description" content="Verify your mobile" />
      </Helmet>
      {/*<div className="homePage-coverImage" style={{backgroundImage:`url(${picturesArray[currentPicture]})`}}/>*/}
      <Suspense fallback={<FullPageLoader loading={true} />}>
        <ImageSlideshow />
        {/* <FullPageLoader loading={true} /> */}
        <Trending />
        <JoinTrainer />
        <BecomeInstructor />
        <StudentsReview />
        {/*When redirecting from protected route to home page this props will be set to true, and login will be shown auto*/}
        {/* {props.location.loginComponent && showLoginAfterRedirected ? (
          <LoginAndSignupPage handleLogin={handleLoginAfterRedirected} />
        ) : (
          ""
        )} */}

        {/* <div className={"explore-courses-wrapper-bottom"}>
          <h2>Start learning right here and NOW!</h2>
        </div> */}
      </Suspense>
    </HomePageContainer>
  );
};

export default HomePage;
