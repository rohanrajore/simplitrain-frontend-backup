import {createSelector} from 'reselect';

const selectMobileVerification = state => state.mobileVerification;

export const selectMobileVerificationError = createSelector(
    [selectMobileVerification],
    mobileVerification => mobileVerification.mobileVerificationError
)

export const selectMobileOtpVerificationError = createSelector(
    [selectMobileVerification],
    mobileVerification => mobileVerification.mobileOtpVerificationError
)

export const selectMobileOtpSent = createSelector(
    [selectMobileVerification],
    mobileVerification => (mobileVerification ? mobileVerification.mobileOtpSent : false)
)

export const selectMobileOtpSentTime = createSelector(
    [selectMobileVerification],
    mobileVerification => (mobileVerification ? mobileVerification.mobileOtpSentTime : null)
);

export const selectMobileVerified = createSelector(
    [selectMobileVerification],
    mobileVerification => (mobileVerification ? mobileVerification.mobileVerified : false)
);
