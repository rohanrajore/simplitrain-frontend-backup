import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
)

export const selectIsSignedIn = createSelector(
    [selectCurrentUser],
    currentUser => (!!currentUser) && (!!currentUser.id)
);

export const selectError = createSelector(
    [selectUser],
    user => (user.error && user.error.message ? user.error.message : null)
);

export const selectUserID = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser.id
)

export const selectIsLearner = createSelector(
    [selectCurrentUser, selectIsSignedIn],
    (currentUser, isSignedIn) => isSignedIn && currentUser.isLearner
);

export const selectIsInstructor = createSelector(
    [selectCurrentUser, selectIsSignedIn],
    (currentUser, isSignedIn) => isSignedIn && currentUser.isInstructor
);

export const selectIsOnboarded = createSelector(
    [selectCurrentUser, selectIsSignedIn],
    (currentUser, isSignedIn) => isSignedIn && currentUser.isInstructor && (currentUser.instructor.onboardingStatus === 'APPROVED')
);

export const selectHasEmailSignin = createSelector(
    [selectCurrentUser, selectIsSignedIn],
    (currentUser, isSignedIn) => isSignedIn && currentUser.hasEmailSignin
)