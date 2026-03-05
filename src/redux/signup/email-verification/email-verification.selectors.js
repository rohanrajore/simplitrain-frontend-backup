import {createSelector} from 'reselect';

const selectEmailVerification = state => state.emailVerification;

export const selectEmailVerificationError = createSelector(
    [selectEmailVerification],
    emailVerification => emailVerification.emailVerificationError
)

export const selectEmailLinkSendError = createSelector(
    [selectEmailVerification],
    emailVerification => emailVerification.emailLinkSendError
)

export const selectEmailLinkSent = createSelector(
    [selectEmailVerification],
    emailVerification => (emailVerification ? emailVerification.emailLinkSent : false)
)

export const selectEmailLinkSentTime = createSelector(
    [selectEmailVerification],
    emailVerification => (emailVerification ? emailVerification.emailLinkSentTime : null)
);
