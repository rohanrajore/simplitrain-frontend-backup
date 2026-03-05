import {
    combineReducers
} from 'redux';
import {
    connectRouter
} from 'connected-react-router'
import userReducers from "./user/user.reducers";
import {
    persistReducer
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import onboardingReducer from './instructor-onboarding/instructoronboarding.reducer';
import createCourseReducer from './create-course/create-course.reducer'
import signupReducers from "./signup/signup.reducers";
import emailVerificationReducers from "./signup/email-verification/email-verification.reducers";
import mobileVerificationReducers from "./signup/mobile-verification/mobile-verification.reducers";
import courseSchedulerReducer from './course-scheduler/coursescheduler.reducer';
import browseCoursesReducers from './browse-courses/browse-courses-reducer.js';
import cartReducers from './cart/cart-reducer.js';
import venueWizardReducer from './venue-wizard/venue-wizard.reducers'
import myCoursesReducers from "./myCourses/myCourses-reducer.js"

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['user'],
    // blacklist: ['router'],
}
const browseCoursesConfig ={
  key: 'filters',
  storage,
}

export const createRootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        user: persistReducer(persistConfig, userReducers /* Add persisted reducers here */ ),
        signup: signupReducers,
        onboarding: onboardingReducer,
        createCourse: createCourseReducer,
        emailVerification: emailVerificationReducers,
        mobileVerification: mobileVerificationReducers,
        courseScheduler: courseSchedulerReducer,
        browseCourses: persistReducer(browseCoursesConfig, browseCoursesReducers),
        myCourses: myCoursesReducers,
        venueWizard: venueWizardReducer,
        cart: cartReducers
    })

/*
const rootReducer = (state, action) => {
    if (action.type === UserActionTypes.LOGOUT) {
        state = undefined;
    }

    return comboReducer(state, action);
}
*/

export default createRootReducer;
