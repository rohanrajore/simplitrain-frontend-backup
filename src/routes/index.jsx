import React, { Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
import Route from "./Route";
import FullPageLoader from '../common/fullpage-loader/FullPageLoader';
import shortid from "shortid";

const HomePage = React.lazy(() =>
  import("../containers/home-page/homepage.component")
);

const AuthPage = React.lazy(() =>
  import("../containers/auth-page/auth.component")
);

const InstructorHomePage = React.lazy(() =>
  import("../containers/instructor-home/instructor-home.component")
);

const LearnerHomePage = React.lazy(() =>
  import("../containers/learner-home/LearnerHomePage")
);

const InstructorOnBoarding = React.lazy(() =>
  import("../containers/instructor-onboarding/InstructorOnBoarding")
);

const InstructorOnBoardingResult = React.lazy(() =>
  import("../containers/instructor-onboarding/instructorOnBoardingResult")
);

const MobileVerificationComponent = React.lazy(() =>
  import("../components/mobile-verification/mobile-verification.component")
);

const MobileOTPVerificationComponent = React.lazy(() =>
  import(
    "../components/mobile-verification/mobile-otp-verification/mobile-otp-verification.component"
  )
);

const VerifyEmailComponent = React.lazy(() =>
  import(
    "../components/landing/email-verification/email-verification.component"
  )
);

const PasswordResetComponent = React.lazy(() =>
  import(
    "../components/forgot-password/password-reset/password-reset.component"
  )
);

const BecomeInstructorPage = React.lazy(() =>
  import("../containers/become-instructor/become-instructor.component")
);

const InstructorLanding = React.lazy(() =>
  import("../components/instructor-onboarding/instructorLanding")
);

const LinkedInCallback = React.lazy(() =>
  import("../components/landing/linkedin-callback/linkedin-callback.component")
);

const EmailVerifyLinkSentConfirmationComponent = React.lazy(() =>
  import(
    "../components/email-verify-confirmation/email-verify-confirmation.component"
  )
);

const CourseDetails = React.lazy(() =>
  import("../containers/course-details/courseDetails")
);

const InstructorDashboard = React.lazy(() =>
  import("../containers/instructor-dashboard/instructorDashboard")
);

const CreateCourseComponent = React.lazy(() =>
  import("../components/create-course")
);

const CourseScheduler = React.lazy(() =>
  import("../components/course-scheduler")
);

const CreateCourseResult = React.lazy(() =>
  import("../containers/create-course/create-course-result.component")
);

const PublicVenueWizard = React.lazy(() =>
  import("../containers/venue-wizard/publicVenueWizard")
);

const PrivateVenueWizard = React.lazy(() =>
  import("../containers/venue-wizard/privateVenueWizard")
);

const LandingVenueWizard = React.lazy(() =>
  import("../containers/venue-wizard/landingPage/landingVenueWizard.jsx")
);

const BrowseCourses = React.lazy(() =>
  import("../containers/browse-courses/browseCourses.jsx")
);

const CartContainer = React.lazy(() =>
  import("../containers/cartPage/cartContainer.jsx")
);

const EBooking = React.lazy(() =>
  import("../components/eBooking/eBooking.jsx")
);

const EditCourse = React.lazy(() => import("../components/edit-course"));

const EditScheduledCourse = React.lazy(() =>
  import("../components/edit-scheduled-course")
);

const InstructorProfile = React.lazy(() =>
  import("../components/instructor-profile/instructorProfile.jsx")
);

const TermsOfUse = React.lazy(() =>
  import("../components/policies/termsOfUse/termsOfUse.jsx")
);

const PrivacyAndCookie = React.lazy(() =>
  import("../components/policies/privacyAndCookie/privacyAndCookie.jsx")
);

const UserProfile = React.lazy(() =>
  import("../components/profile/userProfile.jsx")
);

const Settings = React.lazy(() =>
  import("../components/settingsPage/settings.jsx")
);

const PurchaseHistory = React.lazy(() =>
  import("../components/purchaseHistory/purchaseHistory.jsx")
);

const Wishlist = React.lazy(() =>
  import("../components/wishlist/wishlist.jsx")
);

const MyCourses = React.lazy(() =>
  import("../components/my-courses/myCourses.jsx")
);

const ViewBookings = React.lazy(() =>
  import("../components/my-courses/anonymousFlow/viewBookings.jsx")
);

const BrowseAllCat = React.lazy(() =>
  import("../components/browse-courses/browseAllCat/browseAllCat.jsx")
);

const LearnersLink = React.lazy(() =>
  import("../components/footerLinks/learnersLink/learnersLink.jsx")
);

const Investors = React.lazy(() =>
  import("../components/footerLinks/investors/investors.jsx")
);

const Leadership = React.lazy(() =>
  import("../components/footerLinks/leadership/leadership.jsx")
);

const About = React.lazy(() =>
  import("../components/footerLinks/about/about.jsx")
);

const ScheduleCourse = React.lazy(() =>
  import("../components/scheduleCourse/onsiteSchedule/scheduleCourse.jsx")
);

const Routes = routeProps => (
  <Suspense fallback={<FullPageLoader loading={true} />}>
    <Switch>
      <Route
        exact
        path="/"
        component={(props) => <HomePage {...props} />}
        publicRoute
      />
      <Route
        exact
        path="/auth/:type?/:instructor?"
        component={(props) => <AuthPage {...props} />}
        publicRoute
      />
      <Route
        exact
        path="/signup/verify-mobile"
        component={MobileVerificationComponent}
        publicRoute
      />
      <Route
        exact
        path="/signup/verify-mobile-otp"
        component={MobileOTPVerificationComponent}
        publicRoute
      />
      <Route
        exact
        path="/signup/verify-email"
        component={EmailVerifyLinkSentConfirmationComponent}
        publicRoute
      />
      <Route
        exact
        path="/verifyEmail"
        component={VerifyEmailComponent}
        publicRoute
      />
      <Route
        exact
        path="/instructor"
        component={InstructorHomePage}
        instructor
      />
      <Route exact path="/learner" component={LearnerHomePage} learner />
      <Route
        exact
        path="/linkedin/auth/callback"
        component={LinkedInCallback}
        publicRoute
      />
      <Route
        exact
        path="/resetPassword"
        component={PasswordResetComponent}
        publicRoute
      />
      <Route
        exact
        path="/instructor-landing"
        component={InstructorLanding}
        instructor
      />
      <Route
        exact
        path="/instructor-profile/:id"
        component={InstructorProfile}
        publicRoute
      />
      <Route
        exact
        path="/instructor/onboarding"
        component={InstructorOnBoarding}
        instructor
      />
      <Route
        exact
        path="/instructor/onboarding/success"
        component={() => <InstructorOnBoardingResult success="success" />}
        instructor
      />
      <Route
        exact
        path="/instructor/onboarding/failed"
        component={() => <InstructorOnBoardingResult success="failed" />}
        instructor
      />
      <Route
        exact
        path="/instructor/onboarding/info"
        component={() => <InstructorOnBoardingResult success="info" />}
        instructor
      />
      <Route
        exact
        path="/instructor/onboarding/pending"
        component={() => <InstructorOnBoardingResult success={"pending"} />}
        instructor
      />
      <Route
        exact
        path="/become-an-instructor"
        component={BecomeInstructorPage}
        publicRoute
      />
      <Route
        exact
        path="/instructor/create-course"
        component={(props) => (
          <CreateCourseComponent {...props} key={shortid.generate()} />
        )}
        instructor
      />
      <Route
        exact
        path="/instructor/edit-course/:id"
        component={(props) => (
          <EditCourse {...props} key={shortid.generate()} />
        )}
        instructor
      />
      <Route
        exact
        path="/instructor/create-course/failed"
        component={() => <CreateCourseResult success="failed" />}
        instructor
      />
      <Route
        exact
        path="/schedule-course/schedule"
        component={CourseScheduler}
        instructor
      />
      <Route
        exact
        path="/schedule-course/venue/"
        component={CourseScheduler}
        instructor
      />
      <Route
        exact
        path="/schedule-course/venue/onsite"
        component={CourseScheduler}
        instructor
      />
      <Route
        exact
        path="/schedule-course/venue/online"
        component={CourseScheduler}
        instructor
      />
      <Route
        exact
        path="/schedule-course/venue/online/custom"
        component={CourseScheduler}
        instructor
      />
      <Route
        exact
        path="/schedule-course/venue/online/zoom-login"
        component={CourseScheduler}
        instructor
      />
      <Route
        path="/schedule-course/venue/online/zoom-landing"
        component={CourseScheduler}
        instructor
      />
      <Route
        exact
        path="/schedule-course/venue/online/zoom-details"
        component={CourseScheduler}
        instructor
      />
      <Route
        exact
        path="/schedule-course/pricing"
        component={CourseScheduler}
        instructor
      />
      <Route exact path="/newScheduler" component={ScheduleCourse} instructor />
      <Route
        exact
        path="/edit-scheduled-course/:id/schedule"
        component={EditScheduledCourse}
        instructor
      />
      <Route
        exact
        path="/edit-scheduled-course/:id/schedule"
        component={EditScheduledCourse}
        instructor
      />
      <Route
        exact
        path="/edit-scheduled-course/:id/venue/onsite"
        component={EditScheduledCourse}
        instructor
      />
      <Route
        exact
        path="/edit-scheduled-course/:id/venue/online"
        component={EditScheduledCourse}
        instructor
      />
      <Route
        exact
        path="/edit-scheduled-course/:id/venue/online/custom"
        component={EditScheduledCourse}
        instructor
      />
      <Route
        exact
        path="/edit-scheduled-course/:id/venue/online/zoom-login"
        component={EditScheduledCourse}
        instructor
      />
      <Route
        path="/edit-scheduled-course/:id/venue/online/zoom-landing"
        component={EditScheduledCourse}
        instructor
      />
      <Route
        exact
        path="/edit-scheduled-course/:id/venue/online/zoom-details"
        component={EditScheduledCourse}
        instructor
      />
      <Route
        exact
        path="/edit-scheduled-course/:id/pricing"
        component={EditScheduledCourse}
        instructor
      />
      <Route
        exact
        path="/course-details/:id"
        component={CourseDetails}
        publicRoute
      />
      <Route
        exact
        path="/instructor-dashboard/courses"
        component={InstructorDashboard}
        instructor
      />
      <Route
        exact
        path="/instructor-dashboard/courses/:id"
        component={InstructorDashboard}
        instructor
      />
      <Route
        exact
        path="/instructor-dashboard/batches"
        component={InstructorDashboard}
        instructor
      />
      <Route
        exact
        path="/instructor-dashboard/scheduled"
        component={InstructorDashboard}
        instructor
      />
      <Route
        path="/instructor-dashboard/scheduled/:id/details"
        component={InstructorDashboard}
        instructor
      />
      <Route
        path="/instructor-dashboard/scheduled/:id/learners"
        component={InstructorDashboard}
        instructor
      />
      <Route
        path="/instructor-dashboard/scheduled/:id/feedback"
        component={InstructorDashboard}
        instructor
      />
      <Route
        path="/instructor-dashboard/scheduled/:id/finance"
        component={InstructorDashboard}
        instructor
      />
      <Route
        exact
        path="/course-search"
        component={BrowseCourses}
        publicRoute
      />

      <Route
        exact
        path="/instructor/landing-venue-wizard"
        component={LandingVenueWizard}
        instructor
      />

      <Route
        exact
        path="/instructor/public-venue-wizard"
        component={PublicVenueWizard}
        instructor
      />

      <Route
        exact
        path="/instructor/private-venue-wizard"
        component={PrivateVenueWizard}
        instructor
      />

      <Route exact path="/cart" component={CartContainer} publicRoute />

      <Route
        exact
        path="/cart-checkout"
        component={CartContainer}
        publicRoute
      />

      <Route exact path="/wishlist" component={Wishlist} learner />

      <Route
        exact
        path="/payments/:receiptID"
        component={EBooking}
        publicRoute
      />

      <Route
        exact
        path="/policies/terms-of-use"
        component={TermsOfUse}
        publicRoute
      />

      <Route
        exact
        path="/policies/privacy-and-cookie-policy"
        component={PrivacyAndCookie}
        publicRoute
      />
    {/*Currently we are hiding profile for learner because backend problems..*/}
    <Route exact path="/profile" component={UserProfile} instructor />

      <Route exact path="/settings" component={Settings} learner />

      <Route
        exact
        path="/purchase-history"
        component={PurchaseHistory}
        learner
      />

      <Route exact path="/my-courses" component={MyCourses} publicRoute />

      <Route exact path="/view-bookings" component={ViewBookings} publicRoute />

      <Route
        exact
        path="/course-search/browse-all"
        component={BrowseAllCat}
        publicRoute
      />

      <Route
        exact
        path="/learners"
        component={() => <LearnersLink {...routeProps} />}
        publicRoute
      />

      <Route
        exact
        path="/instructors"
        component={() => <LearnersLink {...routeProps} />}
        publicRoute
      />

      <Route
        exact
        path="/venue-providers"
        component={() => <LearnersLink {...routeProps} />}
        publicRoute
      />

      <Route
        exact
        path="/companies"
        component={() => <LearnersLink {...routeProps} />}
        publicRoute
      />

      <Route
        exact
        path="/investors"
        component={() => <Investors {...routeProps} />}
        publicRoute
      />

      <Route exact path="/leadership" component={Leadership} publicRoute />

      <Route exact path="/about" component={About} publicRoute />

      <Route render={() => <Redirect to={{ pathname: "/" }} />} publicRoute />
    </Switch>
  </Suspense>
);

export default Routes;
